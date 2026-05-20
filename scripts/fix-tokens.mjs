#!/usr/bin/env node
/**
 * Wayfarer Token Adoption — automated refactor.
 *
 * Finds and replaces mechanical token violations in src/app/components and src/app/pages:
 *
 *   text-xs → text-caption
 *   text-sm → text-body-sm
 *   text-base → text-body
 *   text-lg → text-body-lg
 *
 *   Off-grid spacing: p-3 → p-4, gap-3 → gap-2/gap-4, etc.
 *   Follows 8px grid: 3→4, 5→6, 7→8, etc.
 *
 * Intentionally skipped (requires human judgment):
 *   - font-heading misapplications (context-sensitive)
 *   - Bracket [...] values (may be legitimate token refs)
 *   - Inline style={{}} (CSS-variable patterns are valid)
 *   - Lines marked with // token-audit-exception:
 *
 * Usage:
 *   node scripts/fix-tokens.mjs              # apply changes + print summary
 *   node scripts/fix-tokens.mjs --dry-run    # show what would change, don't write
 *   node scripts/fix-tokens.mjs --verbose    # show each replacement
 *   node scripts/fix-tokens.mjs --file <path> # fix single file only
 *
 * After running, refresh the audit baseline:
 *   npm run lint:tokens -- --baseline
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
const fileArg = process.argv.find((arg, i) => i > 0 && process.argv[i - 1] === "--file");

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
  const window = 6; // Check 6-line window for multi-line blocks
  for (let i = Math.max(1, line - window); i <= Math.min(line + window, source.split("\n").length); i++) {
    if (/token-audit-exception:/.test(lineText(source, i))) return true;
  }
  return false;
}

/* ── Token mappings ──────────────────────────────────────────────────────── */

const typeScaleMap = {
  "text-xs": "text-caption",
  "text-sm": "text-body-sm",
  "text-base": "text-body",
  "text-lg": "text-body-lg",
};

// Off-grid spacing snap logic: round to nearest 8px token
// 3 (12px) → 4 (16px), 5 (20px) → 6 (24px), 7 (28px) → 8 (32px)
const spacingMap = {
  // p/py/px/m/my/mx
  "p-1": null, // 4px — keep (button padding)
  "p-3": "p-4", // 12px → 16px
  "p-5": "p-6", // 20px → 24px
  "p-7": "p-8", // 28px → 32px
  "py-1": null, // 4px — keep (button padding)
  "py-3": "py-4",
  "py-5": "py-6",
  "py-7": "py-8",
  "px-1": null,
  "px-3": "px-4",
  "px-5": "px-6",
  "px-7": "px-8",
  "m-3": "m-4",
  "m-5": "m-6",
  "m-7": "m-8",
  "my-3": "my-4",
  "my-5": "my-6",
  "my-7": "my-8",
  "mx-3": "mx-4",
  "mx-5": "mx-6",
  "mx-7": "mx-8",
  "mb-3": "mb-4",
  "mb-5": "mb-6",
  "mb-7": "mb-8",
  "mt-3": "mt-4",
  "mt-5": "mt-6",
  "mt-7": "mt-8",
  "ml-3": "ml-4",
  "ml-5": "ml-6",
  "ml-7": "ml-8",
  "mr-3": "mr-4",
  "mr-5": "mr-6",
  "mr-7": "mr-8",
  // gap
  "gap-1": null,
  "gap-3": "gap-2", // 12px → 8px (round down)
  "gap-5": "gap-6",
  "gap-7": "gap-8",
  // space-y/space-x
  "space-y-3": "space-y-4",
  "space-y-5": "space-y-6",
  "space-y-7": "space-y-8",
  "space-x-3": "space-x-4",
  "space-x-5": "space-x-6",
  "space-x-7": "space-x-8",
};

/* ── Refactoring logic ───────────────────────────────────────────────────── */

function refactorTokens(source) {
  const replacements = [];
  let result = source;

  // Type scale replacements (word-boundary aware)
  for (const [oldClass, newClass] of Object.entries(typeScaleMap)) {
    const regex = new RegExp(`\\b${oldClass.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
    let match;
    while ((match = regex.exec(source)) !== null) {
      if (!isExempt(source, match.index)) {
        replacements.push({
          old: oldClass,
          new: newClass,
          line: lineOf(source, match.index),
          category: "type-scale",
        });
        result = result.replace(match[0], newClass);
        regex.lastIndex = 0; // Reset after replacement
      }
    }
  }

  // Spacing replacements (word-boundary aware)
  for (const [oldClass, newClass] of Object.entries(spacingMap)) {
    if (newClass === null) continue; // Skip kept values
    const regex = new RegExp(`\\b${oldClass.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g");
    let match;
    while ((match = regex.exec(source)) !== null) {
      if (!isExempt(source, match.index)) {
        replacements.push({
          old: oldClass,
          new: newClass,
          line: lineOf(source, match.index),
          category: "spacing",
        });
        result = result.replace(match[0], newClass);
        regex.lastIndex = 0;
      }
    }
  }

  return { result, replacements };
}

/* ── Main ────────────────────────────────────────────────────────────────── */

async function main() {
  const files = fileArg ? [fileArg] : await walk(ROOT);
  let totalReplacements = 0;
  const categoryCounts = {};

  console.log(`${C.cyan}Scanning ${files.length} files...${C.reset}\n`);

  for (const filepath of files) {
    try {
      const source = await readFile(filepath, "utf8");
      const { result, replacements } = refactorTokens(source);

      if (replacements.length === 0) continue;

      totalReplacements += replacements.length;
      for (const r of replacements) {
        categoryCounts[r.category] = (categoryCounts[r.category] || 0) + 1;
      }

      if (verbose) {
        console.log(`${C.bold}${filepath}${C.reset}`);
        for (const r of replacements) {
          console.log(`  ${C.dim}line ${r.line}${C.reset}: ${C.yellow}${r.old}${C.reset} → ${C.green}${r.new}${C.reset}`);
        }
        console.log();
      }

      if (!dryRun) {
        await writeFile(filepath, result, "utf8");
        console.log(`${C.green}✓${C.reset} ${filepath} (${replacements.length} fixes)`);
      } else {
        console.log(`${C.dim}→${C.reset} ${filepath} (${replacements.length} changes, not written)`);
      }
    } catch (err) {
      console.error(`${C.red}✗${C.reset} ${filepath}: ${err.message}`);
    }
  }

  console.log(`\n${C.bold}Summary${C.reset}`);
  console.log(`Total replacements: ${C.bold}${totalReplacements}${C.reset}`);
  for (const [cat, count] of Object.entries(categoryCounts)) {
    console.log(`  ${cat}: ${count}`);
  }

  if (dryRun) {
    console.log(`\n${C.dim}(dry-run mode: no files were modified)${C.reset}`);
    console.log(`${C.dim}Run without --dry-run to apply changes.${C.reset}`);
  } else if (totalReplacements > 0) {
    console.log(`\n${C.cyan}Next step:${C.reset} npm run lint:tokens -- --baseline`);
  }
}

main().catch((err) => {
  console.error(`${C.red}Fatal:${C.reset} ${err.message}`);
  process.exit(1);
});
