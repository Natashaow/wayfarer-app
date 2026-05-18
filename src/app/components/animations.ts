/**
 * Shared Motion animation variants for the Wayfarer design system.
 * All durations and easings are matched to the brand's "smooth & purposeful" feel.
 */

export const defaultTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const fastTransition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const slowTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as const,
};

/** Fade up from 28 px below — general section element reveal */
export const fadeUp = {
  hidden: { y: 28 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

/** Simple opacity fade */
export const fadeIn = {
  hidden: {},
  visible: { opacity: 1, transition: defaultTransition },
};

/** Slide in from the left (positive-x origin) */
export const slideFromLeft = {
  hidden: { x: -40 },
  visible: { opacity: 1, x: 0, transition: defaultTransition },
};

/** Slide in from the right (negative-x origin) */
export const slideFromRight = {
  hidden: { x: 40 },
  visible: { opacity: 1, x: 0, transition: defaultTransition },
};

/** Scale + fade up — used for CTA cards */
export const scaleUp = {
  hidden: { scale: 0.96, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: defaultTransition },
};

/** Slide down from above — used for Navbar */
export const slideDown = {
  hidden: { y: -16 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

/** Stagger wrapper — standard (100 ms between children) */
export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/** Stagger wrapper — fast (70 ms between children, e.g. filter badges) */
export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

/** Stagger wrapper — slow (140 ms between children, e.g. feature rows) */
export const staggerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

/** Standard viewport config — trigger once when 80 px of the element is visible */
export const viewport = { once: true, margin: "-80px" } as const;

/** Tighter viewport for above-the-fold sections */
export const viewportShallow = { once: true, margin: "-40px" } as const;

// ── Shared child variants ─────────────────────────────────────────────────────
// Import these instead of redefining locally in each file.

/** Section child: slides 24 px up + fades in — general section element */
export const sectionItem = {
  hidden: { y: 24 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

/** Badge / pill child: scale pops in from 88% */
export const badgeItem = {
  hidden: { scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: fastTransition },
};

/** Card child: slides 32 px up + slight scale — destination cards */
export const cardItem = {
  hidden: { y: 32, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: defaultTransition },
};
