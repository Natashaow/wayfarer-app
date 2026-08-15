# Wayfarer

**A 3-day Singapore travel itinerary planner — and a working demonstration that an AI-assisted design-to-code workflow can ship into a real production codebase.**

🔗 **Live:** [wayfarer-destinatons.vercel.app](https://wayfarer-destinatons.vercel.app/)

---

## What it does

Wayfarer plans a bounded 3-day Singapore trip. You set a travel style and budget tier during setup, then get a day-by-day itinerary of drag-reorderable activity cards, with a live per-activity budget tracker that keeps running costs visible as you rearrange the plan.

The scope is deliberately bounded. One city, three days, a fixed activity set — enough surface to exercise a real design system end to end, small enough to actually finish.

## Why it exists

I design product systems, and I build them. Wayfarer is where I prove the second half.

The interesting claim in AI-assisted design isn't that you can generate a mockup quickly — it's whether the output survives contact with a real repository: its lint rules, its type checker, its build. Most "AI design" demos stop at the picture. This one didn't.

## The proof point

The per-activity budget tracker started as a Claude Artifact built in an afternoon. It shipped into this repository for real — [PR #1](https://github.com/Natashaow/wayfarer-app/pull/1), merged 2026-08-09, +211 / −30 — passing this repo's own checks:

```bash
npm run lint:motion    # animation performance rules
npm run lint:tokens    # design-token compliance
npm run typecheck      # TypeScript, no emit
npm run build          # production build
```

Not a claim about a workflow. A pull request.

## Design system

The UI is token-driven rather than hand-tuned. Spacing runs on an 8pt grid exposed as semantic CSS custom properties (`--space-stack-sm` and friends) instead of raw pixel values, so layout rhythm is enforced by the system rather than by discipline. Interactive elements carry explicit `focus-visible` rings — keyboard navigation was a build requirement, not a retrofit. Motion uses Framer Motion, constrained by the `lint:motion` rule set so animation stays within performance budget.

Two custom lint rules (`lint:tokens`, `lint:motion`) exist specifically to keep the design system honest as the codebase grows. They're what let an AI-generated component be merged with confidence rather than reviewed by eye.

## Stack

React · TypeScript · Vite · Tailwind CSS · Radix UI · MUI · Framer Motion

## Running locally

```bash
npm install
npm run dev
```

Then `npm run lint:design` to check both token and motion rules together.

## Status

Actively developed. The case-study write-up is in progress. The design-token pipeline is currently maintained by hand — a Figma-to-token sync is a target for this project, not something it ships today.

---

Built by [Natasha](https://github.com/Natashaow) — product designer working on AI-native design systems.
