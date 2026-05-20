# CLAUDE.md — Wayfarer Travel

Guidance for Claude Code (claude.ai/code) working on the Wayfarer Travel prototype.

## Project

**Wayfarer Travel** — a Figma Make export built as a React 18 + Vite 6 + Tailwind v4 SPA. It's a design-driven prototype (no backend, no API calls); features like auth, favorites, and personalization are all client-side context state.

Deployed to Vercel at https://wayfarer-travel-theta.vercel.app (project `natashas-projects-067ee571/wayfarer-travel`, linked via `.vercel/project.json`).

## Where instructions live

Three locations exist — don't conflate them:

| File | Purpose |
| --- | --- |
| `CLAUDE.md` (this file) | Project-level guidance for Claude Code. The root instructions. |
| `guidelines/Guidelines.md` | The "Wayfarer System Prompt" — the Figma Make brand brief + design-system rules. Treat as design spec, not as Claude config. |
| `.agents/skills/*/SKILL.md`, `.claude/skills/*/SKILL.md` | Manifests for installed agent skills. Don't edit; managed by `npx skills` / `npx claude-code-templates`. See **Installed skills** below for the active set and when to reach for each. |

## Installed skills

Each skill occupies a distinct slot in the workflow. Reach for the most specific match; don't invoke generic skills when a project-aligned one exists.

| Skill | Location | When to use |
| --- | --- | --- |
| `frontend-design` | `.agents/skills/frontend-design/` | New components, layouts, or aesthetic decisions. Pairs with `guidelines/Guidelines.md`. |
| `copywriting` | `.claude/skills/copywriting/` | UX copy, microcopy, brand-voice work, empty/error states, onboarding language. Wayfarer is content-led — use liberally. |
| `accessibility` | `.claude/skills/accessibility/` | Semantic HTML, ARIA, focus order, contrast against design tokens. Run before shipping any new flow. Includes WCAG reference. |
| `web-performance-optimization` | `.claude/skills/web-performance-optimization/` | Asset/bundle/loading perf. **Highest-priority debt: the 8–15 MB PNGs in `src/assets/`.** |
| `code-reviewer` | `.claude/skills/code-reviewer/` | Pre-commit/PR review with security scan + checklist. |
| `browser-use` | `.agents/skills/browser-use/` | Browser automation — interactive testing, screenshots, form flows. ⚠️ Rated High Risk (Gen) / Med Risk (Snyk); review before broad use. |

## Skill governance

A `PostToolUse` hook at `.claude/hooks/on-skill-install.sh` (wired through `.claude/settings.json`) fires whenever a skill/plugin install command runs (`npx skills add`, `npx claude-code-templates --skill`, `claude plugin install`). The hook injects a system message that **requires** an inventory audit before the next user-facing action. The policy below defines what that audit is.

### Audit checklist (run on every install)

1. **Inventory** — list every skill currently in `.agents/skills/` and `.claude/skills/` with its one-line purpose.
2. **Redundancy check** — does the new skill duplicate capability of an existing one (e.g., another generic "web dev" or "code review" skill)? If yes, recommend keeping one and removing the other.
3. **Replacement check** — does the new skill obsolete an older one (e.g., a project-specific successor replacing a generic predecessor)?
4. **Slot conflict** — does any other skill now occupy the same workflow slot? Two skills in the same slot create reach ambiguity; pick one.
5. **CLAUDE.md drift** — is the **Installed skills** table above still accurate? If not, propose the exact diff before continuing.
6. **Risk flag** — note any skill with a non-Low security rating (Gen / Socket / Snyk). Carry the flag into the table description.

### Removal rule

If the audit recommends removal, **do not delete silently**. Show the user the redundancy or replacement evidence, get confirmation, then remove with `rm -rf` of the skill directory and edit `skills-lock.json` to drop the entry.

### When to skip the audit

Only when the user explicitly says so in the same turn (e.g., "skip the audit, just install"). Otherwise the audit is mandatory — the hook exists specifically to enforce it.

## Commands

```bash
npm i              # install dependencies (also wires the pre-push hook via `prepare`)
npm run dev        # start Vite dev server
npm run build      # production build → dist/
npm run lint:motion         # Wayfarer Motion Doctrine audit (baseline-aware)
npm run lint:motion -- --strict   # show all doctrine debt, ignoring baseline
node scripts/fix-motion.js  # auto-refactor inline transitions to token spreads
vercel --prod      # deploy to production (already linked)
```

> **CRITICAL:** No test runner, no general-purpose lint script, no CI exists. The only lint is `lint:motion` (custom audit of `src/app/components/animations.ts` doctrine compliance — see `scripts/audit-motion.mjs`). Do NOT invent commands that don't exist in `package.json`.
>
> `lint:motion` is **baseline-aware**: violations in `.motion-audit-baseline.json` are grandfathered. The script only fails on *new* violations beyond that snapshot. Current baseline is 0. Run with `--strict` to see all debt; run with `--baseline` to refresh the snapshot after intentionally introducing exempted debt.

### Pre-push hook

A pre-push hook at `.githooks/pre-push` runs `npm run lint:motion` and **blocks** the push if any new doctrine violations are detected. The hook is wired via `core.hooksPath` (set by the `prepare` npm script on `npm install`).

- **Bypass for emergencies:** `git push --no-verify`
- **Disable entirely:** `git config --unset core.hooksPath`
- **Re-activate after fresh clone:** `npm install` runs `prepare` which calls `git config core.hooksPath .githooks`. Or run that command directly.

If the hook starts failing on a legitimate change (e.g. intentionally adding a `motion-doctrine-exception` line), the audit either accepts the comment-marked exception or you refresh the baseline: `npm run lint:motion -- --baseline`.

## Architecture

### 1. Routing — `createMemoryRouter` (important)

`src/app/routes.tsx` uses `createMemoryRouter`, not `createBrowserRouter`. The browser address bar never changes during navigation, and deep links to subroutes will not work in production. The `*` fallback routes to `HomePage`. All pages are `lazy()`-loaded and wrapped in `<Suspense>` inside `RootLayout`.

If real URL routing is ever required, this file is the single point of change.

### 2. Provider chain (`src/app/components/RootLayout.tsx`)

Order matters because `PersonalizationProvider` reads from `useAuth()`:

```
ErrorBoundary → AuthProvider → FavoritesProvider → RecentlyViewedProvider
  → PersonalizationWrapper (consumes auth, mounts PersonalizationProvider + onboarding)
  → ScrollToTop → Outlet → Toaster
```

New global contexts must be placed relative to their dependencies in this chain.

### 3. Custom Vite plugin — `figma:asset/` imports

`vite.config.ts` registers a `figmaAssetResolver` plugin that rewrites `import x from 'figma:asset/<filename>'` → `src/assets/<filename>`. This scheme is used throughout components pasted from Figma Make. Keep it; use either this scheme or normal relative imports for new assets.

The `@` alias points to `./src`. SVG and CSV files can be imported raw.

### 4. Styling — Tailwind v4 + semantic design tokens (strict)

`guidelines/Guidelines.md` is authoritative for the design system. Key constraints enforced throughout:

- **No hardcoded colors, spacing, or font sizes.** Use semantic tokens (`text-primary`, `bg-surface`, `border-muted`, `text-destructive`) and fluid scale variables (`text-display`, `text-h1`, `text-body`, `text-caption`, `text-badge`).
- **8px grid** for all spacing — snap to tokens in `src/styles/theme.css` (`--space-stack-xs/sm/md/lg`, `--space-section-title`, `--section-py-*`, `--container-px`, `--grid-gap`). Off-grid values like 14/18/20px are forbidden.
- **Fluid first**, three-tier breakpoints: default (<768px), `md:` (≥768px), `lg:` (≥1024px). Avoid `max-w-7xl`-style rigid containers.
- **Animations** follow the **Wayfarer Motion Doctrine** (see `guidelines/Guidelines.md#wayfarer-motion-doctrine`). Six rules: ease-out only, GPU-composited transforms (`transform`/`opacity`), one transform per element tree, reveals are Y+opacity (scale for chrome only), spring damping ≥ 28 or tween, and `prefers-reduced-motion` honoured via `useBrandMotion`. Shared variants live in `src/app/components/animations.ts`; reveal patterns use `initial="hidden" whileInView="visible"`. **Never inline `transition={{...}}` props** — import a token-driven transition instead.

CSS entrypoint chain: `src/main.tsx` → `src/styles/index.css` → imports `fonts.css`, `tailwind.css`, `theme.css`. The `default_shadcn_theme.css` at the repo root is reference material, not loaded.

### 5. Component conventions

- shadcn/ui primitives live in `src/app/components/ui/`; app-level components alongside in `src/app/components/`.
- Icons are Lucide React, formatted `<IconName className="size-5" />`.
- Pages in `src/app/pages/` are route targets only; reusable UI belongs in `components/`.
- shadcn defaults sometimes bake in gaps/typography — explicitly set styling rather than relying on primitive defaults.

## Save Game — commit automation

Whenever you say **"Save Game"**, or ask to commit, Claude must execute this sequence in order:

1. **`git status`** — review what's modified, untracked, and staged. Do not proceed if `dist/`, compiled output, or unexpectedly large files appear; flag them and ask before staging.
2. **`git add -A`** — stage all changes, excluding anything flagged in step 1.
3. **`git diff --staged`** — read the staged diff to understand exactly what changed.
4. **Generate a commit message** using this format:
   ```
   [User title or context]: [concise agent summary of file modifications]
   ```
   The user title/context comes from whatever you said when triggering the save (e.g. "Save Game — fixed hero layout"). If no context was given, Claude infers a short title from the diff.
5. **`git commit -m "..."`** — commit with the generated message. Show the message to the user before committing so they can approve or edit it.

> **Before large refactors:** confirm a clean `git commit` exists first. This is your only real restore point — there is no CI, no checkpoint system, and Claude has no memory between sessions.

## Security note

This is a client-side prototype with no backend. The only meaningful security rule is: **do not commit placeholder tokens, mock keys, or any credential-shaped strings**, even in comments.

## Gotchas

- `pnpm-workspace.yaml` declares `packages: ['.']` (self-reference). This is **not** a real monorepo; treat the root as the only package.
- `package.json` has `pnpm.overrides.vite: 6.3.5` but `devDependencies` pins `vite: ^6.4.2`. The override applies only under pnpm; with npm you get 6.4.x.
- `.gitignore` is minimal (`.vercel`, `node_modules`). Be mindful when committing — `dist/` and other build output are not ignored.
- Several PNG assets in `src/assets/` are very large (8–15 MB). Don't add more without checking; consider optimizing before any performance work.
