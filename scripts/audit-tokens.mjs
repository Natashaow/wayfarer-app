#!/usr/bin/env node
/**
 * Wayfarer Token & Design-System Adoption — compliance audit.
 *
 * Walks src/app/components/ and src/app/pages/ (excluding ui/ shadcn primitives
 * and figma/ subdirectory) and flags Figma-Make-export leftovers that should
 * use the semantic tokens defined in src/styles/theme.css:
 *
 *  - Raw Tailwind type classes (text-sm, text-xs, …) — use text-body-sm, text-caption, etc.
 *  - Hardcoded colours (#hex / rgb() / rgba() / hsl() / oklch()) — use semantic tokens.
 *  - Tailwind palette names (bg-gray-*, text-white, …) — use bg-background, text-primary.
 *  - Off-grid spacing utilities (p-3 / p-5 / gap-3 …) — snap to 8px grid via space tokens.
 *  - Rigid containers (`container`, max-w-7xl) — use px-container-px.
 *  - Raw-px arbitrary bracket values ([12px], [40px]) — promote to tokens or snap to grid.
 *  - font-heading on body-sized text — Raleway is for headings only, Inter is the body font.
 *  - Inline style={{}} (file-level signal, not per-line).
 *
 * Exceptions: prefix a violating line (or the line above) with
 *   // token-audit-exception: <category> <reason>
 *
 * Baseline: violations recorded in `.token-audit-baseline.json` are
 * grandfathered (existing debt). The script only fails on NEW violations
 * beyond the baseline — the eslint-baseline / golangci-lint pattern.
 *
 * Usage:
 *   node scripts/audit-tokens.mjs                # report new violations, exit 1 if any
 *   node scripts/audit-tokens.mjs --baseline     # snapshot current violations as new baseline
 *   node scripts/audit-tokens.mjs --strict       # ignore baseline, fail on ANY violation
 *   node scripts/audit-tokens.mjs --quiet        # silent on clean, exit 0
 *
 * Pairs with `lint:motion`. See guidelines/Guidelines.md for the token system.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["src/app/components", "src/app/pages"];
const EXCLUDE_DIRS = new Set(["ui", "figma"]);

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
const BASELINE_PATH = ".token-audit-baseline.json";

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (EXCLUDE_DIRS.has(entry.name)) continue;
      out.push(...(await walk(join(dir, entry.name))));
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      out.push(join(dir, entry.name));
    }
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
  // Look at the current line and up to 5 lines above — multi-line style={{ }} blocks
  // often place the offending value several lines below the natural comment site.
  const line = lineOf(source, idx);
  for (let i = 0; i <= 5; i++) {
    if (/token-audit-exception:/.test(lineText(source, line - i))) return true;
  }
  return false;
}

const violations = [];
function flag(file, line, category, snippet, hint) {
  violations.push({ file, line, category, snippet: snippet.trim().slice(0, 200), hint });
}

// ── Detector regexes ────────────────────────────────────────────────────
const RE_RAW_TYPE =
  /\b(text-(?:xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl))\b/g;

const RE_HEX = /#[0-9a-fA-F]{3,8}\b/g;
const RE_COLOR_FN = /\b(?:rgba?|hsla?|oklch|oklab)\s*\(/g;

const RE_PALETTE =
  /\b(?:text|bg|border|ring|fill|stroke|placeholder|caret|accent|divide|outline|decoration)-(?:gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d+\b/g;
const RE_WHITE_BLACK = /\b(?:bg|text|border|ring|fill|stroke|divide|placeholder)-(?:white|black)\b/g;

// Off-grid spacing: 1 / 1.5 / 3 / 3.5 / 5 / 7 / 9 / 11 / 13 / 14 / 15 on p/m/gap/space utilities.
// 8px grid uses *-0, *-2, *-4, *-6, *-8, *-10, *-12, *-14… (so 14 IS on the 56px grid step, exclude).
// Re-checking: Tailwind 14 = 56px, that's 8*7 — on grid. So 14 is actually fine.
// Off-grid Tailwind spacing: *-1 (4), *-1.5 (6), *-3 (12), *-3.5 (14px? no, 3.5*4=14, off-grid),
// *-5 (20), *-7 (28), *-9 (36), *-11 (44), *-13 (52), *-15 (60).
// Note: *-1 = 4px is allowed for the button sub-grid per guidelines; baseline will grandfather legitimate uses.
const RE_OFF_GRID =
  /\b(?:p|pt|pb|pl|pr|px|py|m|mt|mb|ml|mr|mx|my|gap|gap-x|gap-y|space-x|space-y)-(?:1\.5|3\.5|3|5|7|9|11|13|15)\b/g;

// `container` Tailwind class — only when it appears inside a string literal (className context).
// Must NOT be followed by `-` or `_` (excludes `--container-px`, `container-fluid`, etc.).
const RE_CONTAINER_STR = /["'`][^"'`]*\bcontainer\b(?![-_])[^"'`]*["'`]/g;
const RE_MAX_W_RIGID = /\bmax-w-(?:3|4|5|6|7)xl\b/g;

// Arbitrary px-value brackets — [12px], [40px], [0.5px]. Exclude [var(...)] (no `px` literal inside).
const RE_PX_BRACKET = /\[(\d+(?:\.\d+)?px)\]/g;

// font-heading paired with body-sized type tokens on the same line.
const RE_FONT_HEADING_LINE = /\bfont-heading\b/g;
const RE_BODY_TYPE_TOKEN = /\btext-(?:body(?:-sm)?|caption|badge|nav|button)\b/;

// Inline style={{}} — file-level signal.
const RE_INLINE_STYLE = /style=\{\{/g;

// Inline fontSize with a literal px or rem value. Hardcoded type sizes that bypass the fluid scale.
// Allowed: `fontSize: "var(--text-*)"`, `fontSize: someVariable`, computed expressions.
const RE_INLINE_FONT_SIZE = /fontSize:\s*["'](\d+(?:\.\d+)?(?:px|rem|em))["']/g;

function auditFile(file, source) {
  // 1. Raw Tailwind type classes
  for (const m of source.matchAll(RE_RAW_TYPE)) {
    if (isExempt(source, m.index)) continue;
    const line = lineOf(source, m.index);
    flag(file, line, "raw-type-class", lineText(source, line),
      `Use a semantic token: text-xs→text-caption, text-sm→text-body-sm, text-base→text-body, text-lg→text-subtitle, text-xl/2xl→text-title-*.`);
  }

  // 2. Hardcoded hex colours
  for (const m of source.matchAll(RE_HEX)) {
    if (isExempt(source, m.index)) continue;
    const line = lineOf(source, m.index);
    flag(file, line, "hardcoded-color", lineText(source, line),
      `Hardcoded hex (${m[0]}). Use a semantic token: bg-background / bg-card / text-primary / border-border.`);
  }

  // 3. Hardcoded color functions
  for (const m of source.matchAll(RE_COLOR_FN)) {
    if (isExempt(source, m.index)) continue;
    const line = lineOf(source, m.index);
    flag(file, line, "hardcoded-color", lineText(source, line),
      `Hardcoded ${m[0].replace(/\s*\($/, "")}() colour. Use a semantic token or reference a CSS variable via var(--token-name).`);
  }

  // 4. Tailwind palette names
  for (const m of source.matchAll(RE_PALETTE)) {
    if (isExempt(source, m.index)) continue;
    const line = lineOf(source, m.index);
    flag(file, line, "tailwind-palette", lineText(source, line),
      `Tailwind palette class (${m[0]}) bypasses the semantic palette. Map to bg-background / text-primary / text-secondary / border-border / etc.`);
  }
  for (const m of source.matchAll(RE_WHITE_BLACK)) {
    if (isExempt(source, m.index)) continue;
    const line = lineOf(source, m.index);
    flag(file, line, "tailwind-palette", lineText(source, line),
      `Raw ${m[0]} bypasses the semantic palette. Use bg-bg-elevated / text-inverse / text-primary.`);
  }

  // 5. Off-grid spacing
  for (const m of source.matchAll(RE_OFF_GRID)) {
    if (isExempt(source, m.index)) continue;
    const line = lineOf(source, m.index);
    flag(file, line, "off-grid-spacing", lineText(source, line),
      `Off-grid utility (${m[0]}). Snap to 8px grid: *-2 (8px), *-4 (16px), *-6 (24px), *-8 (32px). 4px sub-grid allowed only for button padding.`);
  }

  // 6. Rigid containers (`container` inside a class string)
  for (const m of source.matchAll(RE_CONTAINER_STR)) {
    if (isExempt(source, m.index)) continue;
    const line = lineOf(source, m.index);
    flag(file, line, "rigid-container", lineText(source, line),
      `\`container\` class is rigid breakpoint-based. Use the fluid \`px-container-px\` token (defined in theme.css).`);
  }
  for (const m of source.matchAll(RE_MAX_W_RIGID)) {
    if (isExempt(source, m.index)) continue;
    const line = lineOf(source, m.index);
    flag(file, line, "rigid-container", lineText(source, line),
      `${m[0]} caps width rigidly. Prefer fluid \`px-container-px\` + auto-layout grids.`);
  }

  // 7. Raw px arbitrary bracket values
  for (const m of source.matchAll(RE_PX_BRACKET)) {
    if (isExempt(source, m.index)) continue;
    const line = lineOf(source, m.index);
    flag(file, line, "raw-px-bracket", lineText(source, line),
      `Arbitrary px value (${m[0]}). Promote to a token in theme.css (e.g. --radius-card) or snap to the 8px grid.`);
  }

  // 8. font-heading on body-sized text (per-line check)
  for (const m of source.matchAll(RE_FONT_HEADING_LINE)) {
    if (isExempt(source, m.index)) continue;
    const line = lineOf(source, m.index);
    const text = lineText(source, line);
    if (RE_BODY_TYPE_TOKEN.test(text)) {
      flag(file, line, "font-heading-misuse", text,
        `font-heading (Raleway) is for h1–h4 / text-title-* / text-display / text-subtitle only. Strip font-heading from body/caption/button-sized text.`);
    }
  }

  // 9. Inline fontSize with literal px/rem/em (bypasses the fluid type scale)
  for (const m of source.matchAll(RE_INLINE_FONT_SIZE)) {
    if (isExempt(source, m.index)) continue;
    const line = lineOf(source, m.index);
    flag(file, line, "inline-fontsize-px", lineText(source, line),
      `Hardcoded inline fontSize (${m[1]}). Use a token: fontSize: "var(--text-caption)" or a className like text-caption/text-body-sm/text-body.`);
  }

  // 10. Inline style={{}} — flag once per file
  const inlineMatch = source.match(RE_INLINE_STYLE);
  if (inlineMatch) {
    // anchor at the first occurrence for stable baseline key
    const idx = source.indexOf("style={{");
    if (!isExempt(source, idx)) {
      flag(file, lineOf(source, idx), "inline-style",
        `${inlineMatch.length} inline style={{}} occurrence(s) in file`,
        `Inline styles bypass the design system. Move to semantic Tailwind classes or, if a CSS variable is required (e.g. var(--shadow-*) in arbitrary syntax like [box-shadow:var(--shadow-card)]), audit per-use.`);
    }
  }
}

const files = (await Promise.all(ROOTS.map((r) => walk(r)))).flat();
for (const file of files) {
  const source = await readFile(file, "utf8");
  auditFile(file, source);
}

const labels = {
  "raw-type-class": "Raw Tailwind type class — map to semantic token",
  "hardcoded-color": "Hardcoded colour — use semantic token",
  "tailwind-palette": "Tailwind palette class — use semantic token",
  "off-grid-spacing": "Off-grid spacing utility — snap to 8px grid",
  "rigid-container": "Rigid container — use px-container-px (fluid)",
  "raw-px-bracket": "Raw px arbitrary bracket — promote to token or snap",
  "font-heading-misuse": "font-heading on body/caption-sized text",
  "inline-fontsize-px": "Inline fontSize with literal px/rem (bypasses fluid scale)",
  "inline-style": "Inline style={{}} — audit per-use",
};

function key(v) {
  return `${v.file}:${v.line}:${v.category}`;
}

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
    `${C.green}✓ Token baseline written${C.reset} ${C.dim}(${violations.length} grandfathered violation(s) → ${BASELINE_PATH})${C.reset}`,
  );
  process.exit(0);
}

let baseline = new Set();
if (!strict && existsSync(BASELINE_PATH)) {
  try {
    const raw = JSON.parse(await readFile(BASELINE_PATH, "utf8"));
    baseline = new Set(raw.violations.map((v) => key(v)));
  } catch {
    console.log(`${C.yellow}⚠ Token baseline unreadable, treating as empty${C.reset}`);
  }
}

const grandfathered = violations.filter((v) => baseline.has(key(v)));
const newViolations = violations.filter((v) => !baseline.has(key(v)));

if (newViolations.length === 0) {
  if (!quiet) {
    if (grandfathered.length > 0) {
      console.log(
        `${C.green}✓ Token audit: no new violations${C.reset} ${C.dim}(${grandfathered.length} grandfathered in baseline)${C.reset}`,
      );
      console.log(
        `${C.dim}  Run \`node scripts/audit-tokens.mjs --strict\` to see existing debt.${C.reset}`,
      );
    } else {
      console.log(
        `${C.green}✓ Token audit: clean${C.reset} ${C.dim}(${files.length} files scanned)${C.reset}`,
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
  `${C.red}New token violations beyond baseline:${C.reset} ${C.dim}(baseline grandfathered: ${grandfathered.length})${C.reset}`,
);
for (const [cat, list] of Object.entries(grouped)) {
  console.log(`\n${C.red}● ${labels[cat] ?? cat}${C.reset} ${C.dim}(${list.length})${C.reset}`);
  for (const v of list.slice(0, 20)) {
    console.log(`  ${C.cyan}${v.file}:${v.line}${C.reset}  ${C.dim}${v.snippet}${C.reset}`);
    console.log(`    ${C.yellow}→${C.reset} ${v.hint}`);
  }
  if (list.length > 20) {
    console.log(`  ${C.dim}… ${list.length - 20} more${C.reset}`);
  }
}

console.log(
  `\n${C.red}✗ ${newViolations.length} new token violation(s)${C.reset}`,
);
console.log(`${C.dim}  Token reference: src/styles/theme.css + guidelines/Guidelines.md${C.reset}`);
console.log(`${C.dim}  Exempt a single occurrence with: // token-audit-exception: <category> <reason>${C.reset}`);
console.log(
  `${C.dim}  If this is intentional, refresh baseline: \`node scripts/audit-tokens.mjs --baseline\`${C.reset}`,
);
process.exit(1);
