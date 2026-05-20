import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";

const STORAGE_KEY = "wayfarer_recently_viewed";
const MAX_ITEMS = 20;

/**
 * Stored entry shape — mirrors the future Supabase table
 * `recently_viewed (user_id, destination_id, viewed_at)`.
 * Keeping the shape aligned now means swapping localStorage for
 * Supabase later is purely a transport change.
 */
export interface RecentlyViewedEntry {
  destinationId: number;
  viewedAt: string; // ISO-8601
}

interface RecentlyViewedContextValue {
  /** Entries ordered most-recent first. */
  recentItems: RecentlyViewedEntry[];
  /** Derived: ID list for back-compat with existing callers. */
  recentIds: number[];
  /** Call when a user opens an experience detail page. */
  trackView: (id: number) => void;
  count: number;
}

const RecentlyViewedContext = createContext<RecentlyViewedContextValue | null>(
  null
);

/**
 * Read + migrate localStorage. Accepts three legacy shapes:
 *   1. `number[]`                                  — original (IDs only)
 *   2. `{ destinationId, viewedAt }[]`             — current
 *   3. anything else                               — treated as empty
 *
 * For shape #1 we backfill timestamps: most-recent ID gets `now`, oldest
 * gets ~14 days back, evenly spread. This keeps the memory rail meaningful
 * for users with existing data instead of resetting them.
 */
function loadFromStorage(): RecentlyViewedEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    // Shape 2 — current
    if (parsed.length === 0) return [];
    if (
      typeof parsed[0] === "object" &&
      parsed[0] !== null &&
      "destinationId" in parsed[0]
    ) {
      return parsed.filter(
        (e): e is RecentlyViewedEntry =>
          e &&
          typeof e.destinationId === "number" &&
          typeof e.viewedAt === "string"
      );
    }

    // Shape 1 — legacy number[]; backfill timestamps
    if (typeof parsed[0] === "number") {
      const ids = parsed.filter((n): n is number => typeof n === "number");
      const now = Date.now();
      const dayMs = 86_400_000;
      // Spread oldest→newest across the last 14 days so the rail looks like
      // genuine history rather than a single moment.
      const spreadMs = Math.min(14 * dayMs, ids.length * 2 * dayMs);
      return ids.map((id, idx) => ({
        destinationId: id,
        viewedAt: new Date(
          now - (idx / Math.max(1, ids.length - 1)) * spreadMs
        ).toISOString(),
      }));
    }

    return [];
  } catch {
    return [];
  }
}

function saveToStorage(items: RecentlyViewedEntry[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // noop
  }
}

export function RecentlyViewedProvider({ children }: { children: ReactNode }) {
  const [recentItems, setRecentItems] =
    useState<RecentlyViewedEntry[]>(loadFromStorage);

  useEffect(() => {
    saveToStorage(recentItems);
  }, [recentItems]);

  const trackView = useCallback((id: number) => {
    setRecentItems((prev) => {
      // Merge against latest persisted state to survive remounts
      // and cross-tab updates within the preview iframe.
      const base = loadFromStorage();
      const merged = base.length >= prev.length ? base : prev;
      const filtered = merged.filter((entry) => entry.destinationId !== id);
      const next: RecentlyViewedEntry = {
        destinationId: id,
        viewedAt: new Date().toISOString(),
      };
      return [next, ...filtered].slice(0, MAX_ITEMS);
    });
  }, []);

  // Re-sync from localStorage on focus / cross-tab storage events.
  useEffect(() => {
    const sync = () => setRecentItems(loadFromStorage());
    window.addEventListener("storage", sync);
    window.addEventListener("focus", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("focus", sync);
    };
  }, []);

  const recentIds = useMemo(
    () => recentItems.map((e) => e.destinationId),
    [recentItems]
  );

  return (
    <RecentlyViewedContext.Provider
      value={{
        recentItems,
        recentIds,
        trackView,
        count: recentItems.length,
      }}
    >
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export function useRecentlyViewed() {
  const ctx = useContext(RecentlyViewedContext);
  if (!ctx)
    throw new Error(
      "useRecentlyViewed must be used within RecentlyViewedProvider"
    );
  return ctx;
}
