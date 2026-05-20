/**
 * Brand-voice relative time formatter for memory surfaces
 * ("Continue exploring", saved-items meta, etc).
 *
 * Mixes weekday names with relative phrasing because weekdays read warmer
 * than "3 days ago" in editorial contexts, but only within the past week
 * (beyond that "Tuesday" becomes ambiguous).
 *
 * Ranges:
 *   < 1 min        →  "Just now"
 *   1-59 min       →  "12 min ago"
 *   1-23 hr (today)→  "Earlier today"
 *   yesterday      →  "Yesterday"
 *   2-6 days       →  weekday name ("Tuesday")
 *   7-13 days      →  "Last week"
 *   14-29 days     →  "2 weeks ago" … "4 weeks ago"
 *   30+ days       →  "A while back"
 */
const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export function formatRelativeTime(iso: string, now: Date = new Date()): string {
  const then = new Date(iso);
  if (Number.isNaN(then.getTime())) return "";

  const diffMs = now.getTime() - then.getTime();
  const diffMin = Math.floor(diffMs / 60_000);
  const diffHour = Math.floor(diffMs / 3_600_000);

  if (diffMs < 0) return "Just now";
  if (diffMin < 1) return "Just now";
  if (diffMin < 60) return `${diffMin} min ago`;

  // Calendar-day delta, not just 24-hour buckets — so "yesterday" lines up
  // with how a human would describe it regardless of clock time.
  const startOfDay = (d: Date) =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const diffDay = Math.floor((startOfDay(now) - startOfDay(then)) / 86_400_000);

  if (diffDay === 0) return diffHour < 1 ? `${diffMin} min ago` : "Earlier today";
  if (diffDay === 1) return "Yesterday";
  if (diffDay < 7) return WEEKDAYS[then.getDay()];
  if (diffDay < 14) return "Last week";
  if (diffDay < 30) return `${Math.floor(diffDay / 7)} weeks ago`;
  return "A while back";
}
