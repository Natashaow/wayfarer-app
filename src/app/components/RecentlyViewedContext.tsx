import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

const STORAGE_KEY = "wayfarer_recently_viewed";
const MAX_ITEMS = 20;

interface RecentlyViewedContextValue {
  /** Ordered list of destination IDs, most recent first */
  recentIds: number[];
  /** Call when a user opens an experience detail page */
  trackView: (id: number) => void;
  /** Number of recently viewed items */
  count: number;
}

const RecentlyViewedContext = createContext<RecentlyViewedContextValue | null>(
  null
);

function loadFromStorage(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed.filter((n) => typeof n === "number");
  } catch {
    // noop
  }
  return [];
}

function saveToStorage(ids: number[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // noop
  }
}

export function RecentlyViewedProvider({ children }: { children: ReactNode }) {
  const [recentIds, setRecentIds] = useState<number[]>(loadFromStorage);

  // Persist to localStorage whenever recentIds changes (outside the updater,
  // so React Strict Mode double-invocation doesn't cause duplicate writes).
  useEffect(() => {
    saveToStorage(recentIds);
  }, [recentIds]);

  const trackView = useCallback((id: number) => {
    setRecentIds((prev) => {
      // Merge against the latest persisted state to survive remounts
      // and cross-tab updates within the preview iframe.
      const base = loadFromStorage();
      const merged = base.length >= prev.length ? base : prev;
      const filtered = merged.filter((existingId) => existingId !== id);
      return [id, ...filtered].slice(0, MAX_ITEMS);
    });
  }, []);

  // Re-sync state from localStorage when the tab regains focus or storage changes.
  useEffect(() => {
    const sync = () => setRecentIds(loadFromStorage());
    window.addEventListener("storage", sync);
    window.addEventListener("focus", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("focus", sync);
    };
  }, []);

  return (
    <RecentlyViewedContext.Provider
      value={{ recentIds, trackView, count: recentIds.length }}
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
