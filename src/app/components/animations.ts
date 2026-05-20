/**
 * Wayfarer Motion Doctrine — shared variants.
 *
 * Editorial travel-magazine pacing: ease-out only, no bounce, opacity + small Y.
 * Six rules in `guidelines/Guidelines.md#motion`. The TS constants below
 * mirror the CSS tokens in `src/styles/theme.css`.
 *
 * Components should NOT inline `transition={{...}}` props. Import variants
 * from this file and wrap with `useBrandMotion` so reduced-motion is honoured.
 */

/* ── Motion tokens (mirror of CSS custom properties) ──────────────────────── */

export const motionEaseOut = [0.22, 1, 0.36, 1] as const;

export const motionDuration = {
  quick: 0.2,        // 200ms — taps, toasts, chrome state
  base: 0.4,         // 400ms — default UI transitions
  deliberate: 0.6,   // 600ms — section reveals
  editorial: 0.8,    // 800ms — hero photography reveals
} as const;

export const motionY = {
  sm: 8,
  md: 16,
  lg: 24,
} as const;

export const motionStagger = {
  tight: 0.06,
  base: 0.08,
  loose: 0.12,
} as const;

/* ── Transitions ──────────────────────────────────────────────────────────── */

export const defaultTransition = {
  duration: motionDuration.deliberate,
  ease: motionEaseOut,
};

export const fastTransition = {
  duration: motionDuration.base,
  ease: motionEaseOut,
};

export const slowTransition = {
  duration: motionDuration.editorial,
  ease: motionEaseOut,
};

export const quickTransition = {
  duration: motionDuration.quick,
  ease: motionEaseOut,
};

/* ── Reveal variants (Y + opacity only — R4) ──────────────────────────────── */

/** Fade + lift — general section element. 16px Y, brand ease. */
export const fadeUp = {
  hidden: { opacity: 0, y: motionY.md },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

/** Pure opacity fade — for hero images and elements that shouldn't translate. */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: slowTransition },
};

/** Editorial slide from the left — features, illustrations. 24px X. */
export const slideFromLeft = {
  hidden: { opacity: 0, x: -motionY.lg },
  visible: { opacity: 1, x: 0, transition: defaultTransition },
};

/** Editorial slide from the right. */
export const slideFromRight = {
  hidden: { opacity: 0, x: motionY.lg },
  visible: { opacity: 1, x: 0, transition: defaultTransition },
};

/**
 * Subtle entrance for above-the-fold CTAs. Y only — scale on reveals violates R4.
 * Kept as a named export for backward compat; behaviour now matches fadeUp.
 */
export const scaleUp = {
  hidden: { opacity: 0, y: motionY.md },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

/** Navbar reveal — drops from above. */
export const slideDown = {
  hidden: { opacity: 0, y: -motionY.sm },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

/* ── Stagger wrappers ─────────────────────────────────────────────────────── */

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionStagger.base,
      delayChildren: 0.04,
    },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionStagger.tight,
    },
  },
};

export const staggerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionStagger.loose,
      delayChildren: 0.04,
    },
  },
};

/* ── Viewport triggers ────────────────────────────────────────────────────── */

export const viewport = { once: true, margin: "-80px" } as const;
export const viewportShallow = { once: true, margin: "-40px" } as const;

/* ── Shared child variants ────────────────────────────────────────────────── */

/** Section child: 16 px Y + fade. */
export const sectionItem = {
  hidden: { opacity: 0, y: motionY.md },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

/** Badge / pill: subtle scale (R4 — chrome only, ≥ 0.96). */
export const badgeItem = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: fastTransition },
};

/**
 * Card child: 16 px Y + fade. Scale removed (R4) — cards translate, they don't pop.
 */
export const cardItem = {
  hidden: { opacity: 0, y: motionY.md },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

/* ── Hover variants (R3 + caps) ───────────────────────────────────────────── */

/**
 * Content lift — for cards, feature tiles, anything photography-bearing.
 * NOTE: when used, child elements must NOT also have hover transforms
 * (no `group-hover:scale-*` on inner img). R3.
 */
export const whileHoverLift = {
  y: -4,
  transition: quickTransition,
} as const;

/**
 * UI-chrome hover — for icons, nav buttons, anything that isn't content.
 * Opacity only; no scale on chrome.
 */
export const whileHoverChrome = {
  opacity: 0.7,
  transition: quickTransition,
} as const;

/** Tap response — opacity shift, never aggressive scale. */
export const whileTapSoft = {
  opacity: 0.85,
  transition: quickTransition,
} as const;

/* ── Reduced-motion fallback ──────────────────────────────────────────────── */

/**
 * No-transform fallback used by `useBrandMotion` when the user has
 * `prefers-reduced-motion: reduce`. Keeps content visible immediately;
 * skips all entrances and translations.
 */
export const noMotion = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { duration: 0 } },
} as const;
