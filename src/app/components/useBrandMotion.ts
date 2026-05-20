import { useReducedMotion } from "motion/react";
import { noMotion } from "./animations";

/**
 * Wayfarer Motion Doctrine — R6 enforcement.
 *
 * Returns the supplied variant on normal devices; returns the no-motion
 * fallback when the user has `prefers-reduced-motion: reduce` set
 * (System Settings → Accessibility → Display → Reduce Motion on macOS / iOS).
 *
 * Usage:
 *   const fade = useBrandMotion(fadeUp);
 *   <motion.div variants={fade} initial="hidden" whileInView="visible" />
 *
 * Pass a custom fallback for non-standard variant shapes:
 *   const parallax = useBrandMotion(parallaxVariant, staticFallback);
 */
export function useBrandMotion<T>(variant: T, fallback?: T): T {
  const prefersReduced = useReducedMotion();
  if (!prefersReduced) return variant;
  return (fallback ?? (noMotion as unknown as T));
}

/**
 * Boolean form — useful for gating scroll-driven transforms
 * (`useScroll` / `useTransform`) where the value, not the variant, is the thing
 * we want to suppress.
 */
export function useBrandMotionEnabled(): boolean {
  const prefersReduced = useReducedMotion();
  return !prefersReduced;
}
