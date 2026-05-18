import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
  type ReactNode,
} from "react";
import type { Destination } from "./destinations-data";
import type { UserProfile } from "./AuthContext";

// ── Storage keys ────────────────────────────────────────────────────────────
const STORAGE_HISTORY = "wayfarer_implicit_history";
const STORAGE_PREFS = "wayfarer_personalization_prefs";
const STORAGE_ONBOARDING = "wayfarer_onboarding_pending";

// ── Types ────────────────────────────────────────────────────────────────────
export interface ImplicitInteraction {
  destinationId: number;
  categories: string[];
  viewCount: number;
  totalViewTime: number; // seconds
  lastViewed: string; // ISO timestamp
}

interface PersonalizationPrefs {
  passionCategories: string[]; // from onboarding
  immersionLevel: number; // 0-10, from onboarding
}

export type PersonalizationTier = "none" | "implicit" | "explicit";

interface PersonalizationContextValue {
  tier: PersonalizationTier;
  implicitHistory: ImplicitInteraction[];
  inferredInterests: string[];
  passionCategories: string[];
  immersionLevel: number;
  pendingOnboarding: boolean;

  trackInteraction: (destinationId: number, categories: string[]) => void;
  startView: (destinationId: number, categories: string[]) => void;
  endView: (destinationId: number) => void;

  getMatchScore: (destination: Destination) => number | null;
  getPersonalizedFeed: (dests: Destination[]) => Destination[];

  completeOnboarding: (passionCategories: string[], immersion: number) => void;
  setPendingOnboarding: (v: boolean) => void;
  clearImplicitHistory: () => void;
}

const PersonalizationContext = createContext<PersonalizationContextValue | null>(null);

// ── Storage helpers ──────────────────────────────────────────────────────────
function loadHistory(): ImplicitInteraction[] {
  try {
    const raw = localStorage.getItem(STORAGE_HISTORY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistory(h: ImplicitInteraction[]) {
  try {
    localStorage.setItem(STORAGE_HISTORY, JSON.stringify(h));
  } catch {}
}

function loadPrefs(): PersonalizationPrefs {
  try {
    const raw = localStorage.getItem(STORAGE_PREFS);
    return raw ? JSON.parse(raw) : { passionCategories: [], immersionLevel: 5 };
  } catch {
    return { passionCategories: [], immersionLevel: 5 };
  }
}

function savePrefs(p: PersonalizationPrefs) {
  try {
    localStorage.setItem(STORAGE_PREFS, JSON.stringify(p));
  } catch {}
}

// ── Scoring helpers ──────────────────────────────────────────────────────────

// Maps signup experience labels → destination category labels
const EXPERIENCE_TO_DEST_CAT: Record<string, string[]> = {
  "Top Activities": ["Top Experiences", "Top Attractions"],
  "Hidden Gems": ["Hidden Gems"],
  "Bucket List Experiences": ["Bucket List Experiences"],
  "Nature & Outdoors": ["Nature & Outdoors"],
  "Cultural & Historic": ["Cultural & Historic"],
  "Entertainment & Music": ["Entertainment & Music"],
};

function buildImplicitCategoryScores(history: ImplicitInteraction[]): Record<string, number> {
  if (!history.length) return {};

  const rawWeights: Record<string, number> = {};
  const now = Date.now();

  for (const item of history) {
    const daysAgo = (now - new Date(item.lastViewed).getTime()) / 86_400_000;
    const recency = Math.exp(-0.07 * daysAgo);
    const timeBonus = Math.min(1 + item.totalViewTime / 45, 1.6);
    const w = item.viewCount * recency * timeBonus;

    for (const cat of item.categories) {
      rawWeights[cat] = (rawWeights[cat] ?? 0) + w;
    }
  }

  const peak = Math.max(...Object.values(rawWeights), 1);
  const scores: Record<string, number> = {};
  for (const [cat, w] of Object.entries(rawWeights)) {
    scores[cat] = w / peak; // 0-1
  }
  return scores;
}

function buildExplicitCategoryScores(
  user: UserProfile,
  passionCategories: string[],
  immersionLevel: number
): Record<string, number> {
  const scores: Record<string, number> = {};

  // From signup experience preferences
  for (const exp of user.experiences) {
    const cats = EXPERIENCE_TO_DEST_CAT[exp] ?? [];
    for (const cat of cats) {
      scores[cat] = Math.min((scores[cat] ?? 0) + 0.45, 1);
    }
  }

  // From post-signup passion categories (direct category picks)
  for (const cat of passionCategories) {
    scores[cat] = Math.min((scores[cat] ?? 0) + 0.5, 1);
  }

  // Adventure level → Adventure Travel score
  const advScore = (user.adventureLevel / 10) * 0.9;
  scores["Adventure Travel"] = Math.min((scores["Adventure Travel"] ?? 0) + advScore, 1);

  // Immersion level (from onboarding) refines adventure
  const immersionBoost = ((immersionLevel - 5) / 10) * 0.2;
  if (immersionBoost > 0) {
    scores["Adventure Travel"] = Math.min((scores["Adventure Travel"] ?? 0) + immersionBoost, 1);
    scores["Nature & Outdoors"] = Math.min((scores["Nature & Outdoors"] ?? 0) + immersionBoost * 0.5, 1);
  }

  // Culture level → Cultural & Historic boost
  if (user.cultureLevel >= 5) {
    const cultScore = ((user.cultureLevel - 4) / 6) * 0.55;
    scores["Cultural & Historic"] = Math.min((scores["Cultural & Historic"] ?? 0) + cultScore, 1);
  }

  // Trending gets a small universal baseline (broadly popular content)
  scores["Trending"] = Math.max(scores["Trending"] ?? 0, 0.35);

  return scores;
}

function scoreDestinationCategories(
  dest: Destination,
  catScores: Record<string, number>
): number {
  if (!Object.keys(catScores).length) return 0;
  const cats = dest.categories;
  // Use the maximum match across categories — any strong hit lifts the score
  return Math.max(...cats.map((c) => catScores[c] ?? 0));
}

function computeMatchScore(
  dest: Destination,
  implicitScores: Record<string, number>,
  explicitScores: Record<string, number> | null,
  tier: PersonalizationTier
): number | null {
  if (tier === "none") return null;

  let raw = 0;

  if (tier === "explicit" && explicitScores) {
    const explicitRaw = scoreDestinationCategories(dest, explicitScores);
    const hasImplicit = Object.keys(implicitScores).length > 0;

    if (hasImplicit) {
      const implicitRaw = scoreDestinationCategories(dest, implicitScores);
      raw = 0.6 * explicitRaw + 0.4 * implicitRaw;
    } else {
      raw = explicitRaw;
    }
  } else {
    raw = scoreDestinationCategories(dest, implicitScores);
  }

  // Convert to 50-99 display range so scores feel meaningful
  // (below 50 means very little interest alignment)
  const score = Math.round(50 + raw * 49);
  return Math.min(99, Math.max(0, score));
}

// ── Provider ─────────────────────────────────────────────────────────────────
export function PersonalizationProvider({
  children,
  user,
}: {
  children: ReactNode;
  user: UserProfile | null;
}) {
  const [implicitHistory, setImplicitHistory] = useState<ImplicitInteraction[]>(loadHistory);
  const [prefs, setPrefs] = useState<PersonalizationPrefs>(loadPrefs);
  const [pendingOnboarding, setPendingOnboarding] = useState(
    () => localStorage.getItem(STORAGE_ONBOARDING) === "true"
  );

  // In-memory view start tracker (not persisted)
  const viewStartRef = useRef<Record<number, { startTime: number; categories: string[] }>>({});

  // Sync history to localStorage
  useEffect(() => {
    saveHistory(implicitHistory);
  }, [implicitHistory]);

  // Sync prefs to localStorage
  useEffect(() => {
    savePrefs(prefs);
  }, [prefs]);

  // Sync pendingOnboarding flag
  useEffect(() => {
    if (pendingOnboarding) {
      localStorage.setItem(STORAGE_ONBOARDING, "true");
    } else {
      localStorage.removeItem(STORAGE_ONBOARDING);
    }
  }, [pendingOnboarding]);

  // ── Tier derivation ──────────────────────────────────────────────────────
  const tier: PersonalizationTier = useMemo(() => {
    if (user) return "explicit";
    if (implicitHistory.length > 0) return "implicit";
    return "none";
  }, [user, implicitHistory]);

  // ── Cached score maps ────────────────────────────────────────────────────
  const implicitScores = useMemo(
    () => buildImplicitCategoryScores(implicitHistory),
    [implicitHistory]
  );

  // Derived from implicitScores — avoids calling buildImplicitCategoryScores twice
  const inferredInterests = useMemo((): string[] => {
    return Object.entries(implicitScores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([cat]) => cat);
  }, [implicitScores]);

  const explicitScores = useMemo(
    () => (user ? buildExplicitCategoryScores(user, prefs.passionCategories, prefs.immersionLevel) : null),
    [user, prefs]
  );

  // ── Methods ──────────────────────────────────────────────────────────────
  const trackInteraction = useCallback((destinationId: number, categories: string[]) => {
    setImplicitHistory((prev) => {
      const idx = prev.findIndex((i) => i.destinationId === destinationId);
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          viewCount: updated[idx].viewCount + 1,
          lastViewed: new Date().toISOString(),
        };
        return updated;
      }
      return [
        ...prev,
        {
          destinationId,
          categories,
          viewCount: 1,
          totalViewTime: 0,
          lastViewed: new Date().toISOString(),
        },
      ];
    });
  }, []);

  const startView = useCallback((destinationId: number, categories: string[]) => {
    viewStartRef.current[destinationId] = { startTime: Date.now(), categories };
  }, []);

  const endView = useCallback((destinationId: number) => {
    const entry = viewStartRef.current[destinationId];
    if (!entry) return;

    const elapsed = (Date.now() - entry.startTime) / 1000;
    delete viewStartRef.current[destinationId];

    setImplicitHistory((prev) => {
      const idx = prev.findIndex((i) => i.destinationId === destinationId);
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          totalViewTime: updated[idx].totalViewTime + elapsed,
        };
        return updated;
      }
      // If not tracked yet (direct navigation), create entry
      return [
        ...prev,
        {
          destinationId,
          categories: entry.categories,
          viewCount: 0,
          totalViewTime: elapsed,
          lastViewed: new Date().toISOString(),
        },
      ];
    });
  }, []);

  const getMatchScore = useCallback(
    (dest: Destination): number | null =>
      computeMatchScore(dest, implicitScores, explicitScores, tier),
    [implicitScores, explicitScores, tier]
  );

  const getPersonalizedFeed = useCallback(
    (dests: Destination[]): Destination[] => {
      if (tier === "none") return dests;
      return [...dests].sort((a, b) => {
        const sa = getMatchScore(a) ?? 0;
        const sb = getMatchScore(b) ?? 0;
        return sb - sa;
      });
    },
    [tier, getMatchScore]
  );

  const completeOnboarding = useCallback((passionCats: string[], immersion: number) => {
    setPrefs({ passionCategories: passionCats, immersionLevel: immersion });
    setPendingOnboarding(false);
  }, []);

  const clearImplicitHistory = useCallback(() => {
    setImplicitHistory([]);
  }, []);

  return (
    <PersonalizationContext.Provider
      value={{
        tier,
        implicitHistory,
        inferredInterests,
        passionCategories: prefs.passionCategories,
        immersionLevel: prefs.immersionLevel,
        pendingOnboarding,
        trackInteraction,
        startView,
        endView,
        getMatchScore,
        getPersonalizedFeed,
        completeOnboarding,
        setPendingOnboarding,
        clearImplicitHistory,
      }}
    >
      {children}
    </PersonalizationContext.Provider>
  );
}

export function usePersonalization() {
  const ctx = useContext(PersonalizationContext);
  if (!ctx) throw new Error("usePersonalization must be used within PersonalizationProvider");
  return ctx;
}
