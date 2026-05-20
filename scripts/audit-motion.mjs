#!/usr/bin/env node
/**
 * Wayfarer Motion Doctrine — compliance audit.
 *
 * Walks src/app and flags doctrine violations:
 *  - Inline transition props without `...tokenTransition` spread (R1/R2)
 *  - Hover scales > 1.02 (R3/R4 + hover cap)
 *  - Reveal scales below 0.96 floor (R4)
 *  - Spring damping below 28 (R5)
 *  - Tailwind hover:scale-* or active:scale-95 on UI chrome (R2)
 *
 * Exceptions: prefix a violating line (or the line above) with
 *   // motion-doctrine-exception: <reason>
 * Infinite loops (`repeat: Infinity`) auto-exempt their transition block.
 *
 * Baseline: violations recorded in `.motion-audit-baseline.json` are
 * grandfathered (existing debt). The script only fails on NEW violations
 * beyond the baseline — the eslint-baseline / golangci-lint pattern.
 *
 * Usage:
 *   node scripts/audit-motion.mjs                # report new violations, exit 1 if any
 *   node scripts/audit-motion.mjs --baseline     # snapshot current violations as the new baseline
 *   node scripts/audit-motion.mjs --strict       # ignore baseline, fail on ANY violation
 *   node scripts/audit-motion.mjs --quiet        # silent on clean, exit 0
 *
 * See guidelines/Guidelines.md#wayfarer-motion-doctrine.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = "src/app";
const C = {
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  dim: "\x1b[2m",
  reset: "\x1b[0m",
};

const quiet = process.argv.includes("--quiet");
const writeBaseline = process.argv.includes("--baseline");
const strict = process.argv.includes("--strict");
const BASELINE_PATH = ".motion-audit-baseline.json";

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(ts|tsx)$/.test(entry.name)) out.push(p);
  }
  return out;
}

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
  const here = lineText(source, line);
  const above = lineText(source, line - 1);
  return /motion-doctrine-exception:/.test(here) || /motion-doctrine-exception:/.test(above);
}

/** Walk the source from `idx` (which sits on an opening `{`) and return the matching close `}` index. */
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

const violations = [];
function flag(file, line, category, snippet, hint) {
  violations.push({ file, line, category, snippet: snippet.trim(), hint });
}

function auditFile(file, source) {
  // 1. Inline transition props — `transition={{` must spread a token or be a loop
  for (const m of source.matchAll(/transition=\{\{/g)) {
    const openIdx = m.index + "transition=".length; // points at first `{`
    const innerOpen = openIdx + 1; // points at second `{`
    const innerEnd = balancedEnd(source, innerOpen);
    if (innerEnd === -1) continue;
    const content = source.slice(innerOpen + 1, innerEnd);
    if (isExempt(source, m.index)) continue;
    if (/repeat:\s*Infinity/.test(content)) continue; // R1 loop exception
    const trimmed = content.trim();
    if (trimmed.startsWith("...")) continue; // spread of a token transition is allowed
    flag(
      file,
      lineOf(source, m.index),
      "inline-transition",
      lineText(source, lineOf(source, m.index)),
      "Use a token transition (e.g. `transition={defaultTransition}` or `transition={{ ...defaultTransition, delay: 0.x }}`).",
    );
  }

  // 2. Hover scale > 1.02
  for (const m of source.matchAll(/whileHover=\{\{/g)) {
    const openIdx = m.index + "whileHover=".length;
    const innerEnd = balancedEnd(source, openIdx + 1);
    if (innerEnd === -1) continue;
    const content = source.slice(openIdx + 2, innerEnd);
    if (isExempt(source, m.index)) continue;
    const sc = content.match(/scale:\s*(\d+(?:\.\d+)?)/);
    if (sc && parseFloat(sc[1]) > 1.02) {
      flag(
        file,
        lineOf(source, m.index),
        "hover-scale-cap",
        lineText(source, lineOf(source, m.index)),
        `Hover scale ${sc[1]} exceeds 1.02 cap (1.01 for chrome). Prefer opacity hover for chrome.`,
      );
    }
  }

  // 3. Reveal scale below 0.96 — applies to `initial={{` and variant `hidden: {` blocks
  const revealRe = /(initial=\{\{|hidden:\s*\{)/g;
  for (const m of source.matchAll(revealRe)) {
    // For `initial={{` the opening of the object literal is at m.index + m[0].length - 1
    // For `hidden: {` it is also the trailing `{`
    const openIdx = m.index + m[0].length - 1;
    const closeIdx = balancedEnd(source, openIdx);
    if (closeIdx === -1) continue;
    const content = source.slice(openIdx + 1, closeIdx);
    if (isExempt(source, m.index)) continue;
    const sc = content.match(/scale:\s*(\d+(?:\.\d+)?)/);
    if (sc) {
      const v = parseFloat(sc[1]);
      if (v > 0 && v < 0.96) {
        flag(
          file,
          lineOf(source, m.index),
          "reveal-scale-floor",
          lineText(source, lineOf(source, m.index)),
          `Reveal scale ${sc[1]} below 0.96 floor (R4). Use opacity-only fade or scale 0.96 → 1.`,
        );
      }
    }
  }

  // 4. Spring damping < 28
  for (const m of source.matchAll(/damping:\s*(\d+)/g)) {
    if (isExempt(source, m.index)) continue;
    const v = parseInt(m[1], 10);
    if (v < 28) {
      flag(
        file,
        lineOf(source, m.index),
        "spring-damping-low",
        lineText(source, lineOf(source, m.index)),
        `Damping ${v} below 28 — spring will overshoot (R5). Raise to ≥28 or switch to a tween.`,
      );
    }
  }

  // 5. Tailwind hover/active/group-hover scale classes (anything other than scale-100)
  for (const m of source.matchAll(/(hover|active|group-hover[/\w-]*):scale-(\d+)/g)) {
    if (isExempt(source, m.index)) continue;
    if (m[2] === "100") continue;
    flag(
      file,
      lineOf(source, m.index),
      "tailwind-scale",
      lineText(source, lineOf(source, m.index)),
      `Avoid Tailwind ${m[1]}:scale-${m[2]} on UI chrome. Prefer ${m[1]}:opacity-80 (R2).`,
    );
  }
}

const files = await walk(ROOT);
for (const file of files) {
  const source = await readFile(file, "utf8");
  auditFile(file, source);
}

const labels = {
  "inline-transition": "Inline transition (R1) — refactor to a token spread",
  "hover-scale-cap": "Hover scale exceeds cap (R3/R4 hover cap)",
  "reveal-scale-floor": "Reveal scale below 0.96 floor (R4)",
  "spring-damping-low": "Spring damping < 28 (R5)",
  "tailwind-scale": "Tailwind hover/active scale class (R2)",
};

/** Stable identity for a violation — file:line:category. */
function key(v) {
  return `${v.file}:${v.line}:${v.category}`;
}

// Write baseline mode: snapshot current violations and exit 0
if (writeBaseline) {
  const snapshot = {
    generated: new Date().toISOString(),
    count: violations.length,
    violations: violations.map((v) => ({
      file: v.file,
      line: v.line,
      category: v.category,
      snippet: v.snippet,
    })),
  };
  await writeFile(BASELINE_PATH, JSON.stringify(snapshot, null, 2) + "\n");
  console.log(
    `${C.green}✓ Baseline written${C.reset} ${C.dim}(${violations.length} grandfathered violation(s) → ${BASELINE_PATH})${C.reset}`,
  );
  process.exit(0);
}

// Load baseline (if it exists and we're not in --strict mode)
let baseline = new Set();
if (!strict && existsSync(BASELINE_PATH)) {
  try {
    const raw = JSON.parse(await readFile(BASELINE_PATH, "utf8"));
    baseline = new Set(raw.violations.map((v) => key(v)));
  } catch {
    console.log(`${C.yellow}⚠ Baseline file unreadable, treating as empty${C.reset}`);
  }
}

const grandfathered = violations.filter((v) => baseline.has(key(v)));
const newViolations = violations.filter((v) => !baseline.has(key(v)));

if (newViolations.length === 0) {
  if (!quiet) {
    if (grandfathered.length > 0) {
      console.log(
        `${C.green}✓ Motion doctrine: no new violations${C.reset} ${C.dim}(${grandfathered.length} grandfathered in baseline)${C.reset}`,
      );
      console.log(
        `${C.dim}  Run \`node scripts/audit-motion.mjs --strict\` to see existing debt.${C.reset}`,
      );
    } else {
      console.log(
        `${C.green}✓ Motion doctrine: clean${C.reset} ${C.dim}(${files.length} files scanned)${C.reset}`,
      );
    }
  }
  process.exit(0);
}

const grouped = newViolations.reduce((acc, v) => {
  (acc[v.category] ||= []).push(v);
  return acc;
}, {});

console.log(
  `${C.red}New doctrine violations beyond baseline:${C.reset} ${C.dim}(baseline grandfathered: ${grandfathered.length})${C.reset}`,
);
for (const [cat, list] of Object.entries(grouped)) {
  console.log(`\n${C.red}● ${labels[cat] ?? cat}${C.reset} ${C.dim}(${list.length})${C.reset}`);
  for (const v of list) {
    console.log(`  ${C.cyan}${v.file}:${v.line}${C.reset}  ${C.dim}${v.snippet}${C.reset}`);
    console.log(`    ${C.yellow}→${C.reset} ${v.hint}`);
  }
}

console.log(
  `\n${C.red}✗ ${newViolations.length} new motion doctrine violation(s)${C.reset}`,
);
console.log(`${C.dim}  Doctrine: guidelines/Guidelines.md#wayfarer-motion-doctrine${C.reset}`);
console.log(`${C.dim}  Exempt a single occurrence with: // motion-doctrine-exception: <rule> <reason>${C.reset}`);
console.log(
  `${C.dim}  If this is intentional, refresh baseline: \`node scripts/audit-motion.mjs --baseline\`${C.reset}`,
);
process.exit(1);
