#!/usr/bin/env node
/**
 * Wayfarer Motion Doctrine — automated refactor.
 *
 * Finds inline `transition={{ duration: ..., ... }}` props in src/app
 * and replaces them with token-driven transitions (R1 enforcement):
 *
 *   transition={{ duration: 0.3 }}                     → transition={fastTransition}
 *   transition={{ duration: 0.2, ease: [...] }}        → transition={quickTransition}
 *   transition={{ duration: 0.3, delay: 0.1 }}         → transition={{ ...fastTransition, delay: 0.1 }}
 *   transition={{ delay: i * 0.1, duration: 0.35 }}    → transition={{ ...fastTransition, delay: i * 0.1 }}
 *
 * Token selection by duration:
 *   ≤ 0.25s → quickTransition  (200ms)
 *   ≤ 0.45s → fastTransition   (400ms)
 *   ≤ 0.70s → defaultTransition (600ms)
 *   > 0.70s → slowTransition   (800ms)
 *
 * Skipped (will not be touched):
 *  - Transitions inside infinite loops (`repeat: Infinity`) — R1 loop exception
 *  - Transitions using `type:` (spring or other physics) — manual decision required
 *  - Transitions already using `...token` spread
 *  - Lines marked with `// motion-doctrine-exception:`
 *  - Transitions with no numeric duration (e.g. `transition={{ delay: 0.1 }}` alone)
 *
 * Auto-imports the chosen tokens from the relative `animations` module if
 * not already imported, picking the right path for components vs pages.
 *
 * Usage:
 *   node scripts/fix-motion.js              # apply changes + print summary
 *   node scripts/fix-motion.js --dry-run    # show what would change, don't write
 *   node scripts/fix-motion.js --verbose    # show each replacement
 *
 * After running, refresh the audit baseline so future runs are clean:
 *   npm run lint:motion -- --baseline
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = "src/app";
const C = {
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  blue: "\x1b[34m",
  dim: "\x1b[2m",
  bold: "\x1b[1m",
  reset: "\x1b[0m",
};

const dryRun = process.argv.includes("--dry-run");
const verbose = process.argv.includes("--verbose");

/* ── File walking ────────────────────────────────────────────────────────── */

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(ts|tsx)$/.test(entry.name)) out.push(p);
  }
  return out;
}

/* ── Source position helpers ─────────────────────────────────────────────── */

function lineOf(source, idx) {
  let line = 1;
  for (let i = 0; i < idx; i++) if (source.charCodeAt(i) === 10) line++;
  return line;
}

function lineText(source, line) {
  return source.split("\n")[line - 1] ?? "";
}

function isExempt(source, idx) {
  const line = lineOf(source, idx);
  return (
    /motion-doctrine-exception:/.test(lineText(source, line)) ||
    /motion-doctrine-exception:/.test(lineText(source, line - 1))
  );
}

/** Walk from an opening `{` and return the index of the matching `}`. */
function balancedEnd(source, idx) {
  let depth = 0;
  for (let i = idx; i < source.length; i++) {
    const ch = source[i];
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

/* ── Object-literal parsing ──────────────────────────────────────────────── */

/** Split a comma-separated key:value sequence at top-level (depth-aware). */
function splitTopLevel(content) {
  const segments = [];
  let depth = 0;
  let current = "";
  for (const ch of content) {
    if (ch === "(" || ch === "[" || ch === "{") depth++;
    else if (ch === ")" || ch === "]" || ch === "}") depth--;
    if (ch === "," && depth === 0) {
      if (current.trim()) segments.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  if (current.trim()) segments.push(current.trim());
  return segments;
}

function parseProps(content) {
  const props = { other: [] };
  for (const seg of splitTopLevel(content)) {
    const colonIdx = seg.indexOf(":");
    if (colonIdx === -1) {
      props.other.push(seg);
      continue;
    }
    const key = seg.slice(0, colonIdx).trim();
    const value = seg.slice(colonIdx + 1).trim();
    if (key === "duration") props.duration = value;
    else if (key === "delay") props.delay = value;
    else if (key === "ease") props.ease = value;
    else if (key === "type") props.type = value;
    else if (key === "repeat") props.repeat = value;
    else props.other.push(seg);
  }
  return props;
}

/* ── Doctrine logic ──────────────────────────────────────────────────────── */

function pickToken(durationStr) {
  if (!/^[\d.]+$/.test(durationStr)) return null;
  const d = parseFloat(durationStr);
  if (isNaN(d)) return null;
  if (d <= 0.25) return "quickTransition";
  if (d <= 0.45) return "fastTransition";
  if (d <= 0.7) return "defaultTransition";
  return "slowTransition";
}

function refactorTransition(content) {
  const trimmed = content.trim();
  if (trimmed.startsWith("...")) return { skip: "already-spread" };

  const props = parseProps(trimmed);
  if (props.repeat === "Infinity") return { skip: "infinite-loop" };
  if (props.type) return { skip: "spring-or-typed" };
  if (!props.duration) return { skip: "no-duration" };

  const token = pickToken(props.duration);
  if (!token) return { skip: "non-numeric-duration" };

  // Preserve non-ease, non-duration props via spread.
  // `ease` is intentionally dropped — the token already carries brand ease-out.
  const preserved = [];
  if (props.delay) preserved.push(`delay: ${props.delay}`);
  preserved.push(...props.other);

  const code =
    preserved.length === 0
      ? `transition={${token}}`
      : `transition={{ ...${token}, ${preserved.join(", ")} }}`;
  return { code, token };
}

/* ── Import management ───────────────────────────────────────────────────── */

function relAnimationsPath(filepath) {
  return filepath.includes("/pages/") ? "../components/animations" : "./animations";
}

function addAnimationsImport(source, filepath, tokensNeeded) {
  if (tokensNeeded.size === 0) return source;

  // Find existing animations import (handles single- and multi-line forms)
  const importRe = /import\s+\{([^}]*)\}\s+from\s+(["'])([^"']*animations)\2/;
  const match = source.match(importRe);

  if (match) {
    const existing = match[1]
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const existingSet = new Set(existing);
    const missing = [...tokensNeeded].filter((t) => !existingSet.has(t));
    if (missing.length === 0) return source;
    const combined = [...existing, ...missing];
    // Multi-line format for readability, matches project convention
    const newImport = `import {\n  ${combined.join(",\n  ")},\n} from ${match[2]}${match[3]}${match[2]}`;
    return source.replace(importRe, newImport);
  }

  // No existing animations import — insert one after the motion/react import
  const motionRe = /^(import\s+\{[^}]*\}\s+from\s+["']motion\/react["'];?)\s*$/m;
  const motionMatch = source.match(motionRe);
  const path = relAnimationsPath(filepath);
  const tokens = [...tokensNeeded].sort();
  const newImport = `import { ${tokens.join(", ")} } from "${path}";`;

  if (motionMatch) {
    return source.replace(motionRe, `$1\n${newImport}`);
  }

  // No motion/react import either — extremely unlikely if we got here, but
  // be safe and skip rather than corrupt the file.
  return source;
}

/* ── Main ────────────────────────────────────────────────────────────────── */

const files = await walk(ROOT);
let totalConverted = 0;
let totalSkipped = 0;
const skipBuckets = {};
const fileSummary = [];

for (const file of files) {
  const original = await readFile(file, "utf8");
  let source = original;

  const replacements = [];
  const tokensNeeded = new Set();

  for (const m of source.matchAll(/transition=\{\{/g)) {
    const propStart = m.index;
    const innerOpen = m.index + "transition=".length + 1; // points at the second `{`
    const innerClose = balancedEnd(source, innerOpen);
    if (innerClose === -1) continue;
    const objClose = innerClose + 1; // points at the outer `}`
    if (source[objClose] !== "}") continue;

    if (isExempt(source, propStart)) {
      totalSkipped++;
      skipBuckets["doctrine-exception"] = (skipBuckets["doctrine-exception"] ?? 0) + 1;
      continue;
    }

    const content = source.slice(innerOpen + 1, innerClose);
    const result = refactorTransition(content);

    if (result.skip) {
      totalSkipped++;
      skipBuckets[result.skip] = (skipBuckets[result.skip] ?? 0) + 1;
      if (verbose) {
        console.log(
          `  ${C.dim}skip (${result.skip}): ${file}:${lineOf(source, propStart)}${C.reset}`,
        );
      }
      continue;
    }

    replacements.push({
      startIdx: propStart,
      endIdx: objClose + 1,
      oldText: source.slice(propStart, objClose + 1),
      newText: result.code,
      token: result.token,
      line: lineOf(source, propStart),
    });
    tokensNeeded.add(result.token);
  }

  if (replacements.length === 0) continue;

  // Apply replacements end-to-start so indices stay valid
  for (const r of [...replacements].reverse()) {
    source = source.slice(0, r.startIdx) + r.newText + source.slice(r.endIdx);
  }

  source = addAnimationsImport(source, file, tokensNeeded);

  if (source === original) continue;

  if (!dryRun) {
    await writeFile(file, source);
  }

  totalConverted += replacements.length;
  fileSummary.push({ file, count: replacements.length, tokens: [...tokensNeeded] });

  if (verbose) {
    for (const r of replacements) {
      console.log(`  ${C.cyan}${file}:${r.line}${C.reset}`);
      console.log(`    ${C.red}- ${r.oldText.trim()}${C.reset}`);
      console.log(`    ${C.green}+ ${r.newText.trim()}${C.reset}`);
    }
  }
}

/* ── Report ──────────────────────────────────────────────────────────────── */

console.log(`${C.bold}Wayfarer Motion Doctrine — automated refactor${C.reset}`);
console.log("");

if (fileSummary.length === 0) {
  console.log(
    `${C.green}✓ No inline transitions to refactor${C.reset} ${C.dim}(${files.length} files scanned, ${totalSkipped} skipped intentionally)${C.reset}`,
  );
  if (verbose && Object.keys(skipBuckets).length) {
    for (const [k, v] of Object.entries(skipBuckets)) {
      console.log(`  ${C.dim}skip ${k}: ${v}${C.reset}`);
    }
  }
  process.exit(0);
}

for (const s of fileSummary) {
  console.log(
    `  ${C.cyan}${s.file}${C.reset}  ${C.dim}${s.count} transition(s) → ${s.tokens.join(", ")}${C.reset}`,
  );
}
console.log("");

if (Object.keys(skipBuckets).length) {
  console.log(`${C.dim}Skipped (intentional):${C.reset}`);
  for (const [k, v] of Object.entries(skipBuckets)) {
    console.log(`  ${C.dim}${k}: ${v}${C.reset}`);
  }
  console.log("");
}

const verb = dryRun ? `${C.yellow}⊘ Dry-run` : `${C.green}✓ Applied`;
console.log(
  `${verb}: ${totalConverted} inline transition(s) refactored across ${fileSummary.length} file(s)${C.reset}`,
);
if (!dryRun) {
  console.log(`${C.dim}  Refresh audit baseline:  npm run lint:motion -- --baseline${C.reset}`);
  console.log(`${C.dim}  Confirm doctrine clean:  npm run lint:motion -- --strict${C.reset}`);
} else {
  console.log(`${C.dim}  Re-run without --dry-run to apply.${C.reset}`);
}
