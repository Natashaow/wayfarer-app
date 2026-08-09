import { useState, useMemo, useCallback, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { useAuth } from "../components/AuthContext";
import { destinations, type Destination } from "../components/destinations-data";
import { toast } from "sonner";
import { showComingSoon } from "../components/utils/comingSoon";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Star,
  Sparkles,
  Sun,
  Sunset,
  Moon,
  ChevronDown,
  ChevronUp,
  Share2,
  Heart,
  CalendarDays,
  Utensils,
  Camera,
  Footprints,
  Coffee,
  Check,
  Link2,
  Mountain,
  Landmark,
  Music,
  ShoppingBag,
  Waves,
  Printer,
  GripVertical,
  DollarSign,
  AlertTriangle,
  Pencil,
} from "lucide-react";
import {
  defaultTransition,
  fastTransition,
  quickTransition,
  fadeUp,
  stagger,
  viewport,
} from "../components/animations";
import { Input } from "../components/ui/input";

/* ── Types ── */

interface Activity {
  title: string;
  description: string;
  icon: typeof Sun;
  tag: string;
  time: string;
  cost: number;
}

interface DayTemplate {
  theme: string;
  morning: Activity;
  afternoon: Activity;
  evening: Activity;
}

interface ItineraryDay {
  day: number;
  theme: string;
  image: string;
  morning: Activity;
  afternoon: Activity;
  evening: Activity;
}

interface TripState {
  destination: string;
  selectedStyles: string[];
  duration: string;
  budget: string;
  resultDestinations: Destination[];
}

/* ── Budget ── */

/** Daily spend ceiling per budget tier, matching the ranges shown in PlanTripPage's BudgetCard. */
const TIER_DAILY_CAP: Record<string, number> = {
  budget: 80,
  moderate: 200,
  comfort: 500,
  luxury: 800, // "$500+ / day" in PlanTripPage has no hard ceiling — 800 is a reasonable working cap (TBC with Natasha)
};

/** Evening (dining) activities run pricier than morning/afternoon ones. */
const PERIOD_SHARE: Record<"morning" | "afternoon" | "evening", number> = {
  morning: 0.22,
  afternoon: 0.33,
  evening: 0.45,
};

/** Deterministic 0–1 pseudo-random from a string, so costs are stable across re-renders without relying on Math.random(). */
function seededUnit(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  return (Math.abs(hash) % 1000) / 1000;
}

/** Assigns a realistic per-activity cost: period share of the daily cap, ±20% variance. */
function estimateCost(tierId: string, dayIndex: number, period: keyof typeof PERIOD_SHARE): number {
  const dailyCap = TIER_DAILY_CAP[tierId] ?? TIER_DAILY_CAP.moderate;
  const base = dailyCap * PERIOD_SHARE[period];
  const variance = 0.8 + seededUnit(`${dayIndex}-${period}`) * 0.4; // 0.8x–1.2x
  return Math.round((base * variance) / 5) * 5; // round to nearest $5
}

/* ── Realistic itinerary builder ── */

/** Pre-cost-assignment shape — genericPool activities don't have a cost yet. */
type ActivityDraft = Omit<Activity, "cost">;
interface DayTemplateDraft {
  theme: string;
  morning: ActivityDraft;
  afternoon: ActivityDraft;
  evening: ActivityDraft;
}

function buildRealisticDays(dest: Destination, numDays: number, tierId: string): DayTemplate[] {
  const loc = dest.location;
  const country = dest.country;
  const h = dest.highlights || [];

  const genericPool: DayTemplateDraft[] = [
    {
      theme: `Arrival & ${loc} First Impressions`,
      morning: {
        title: `Arrive & settle into ${loc}`,
        description: `Check into your accommodation and take a relaxed stroll around the neighborhood. Get oriented, pick up a map, and grab a coffee.`,
        icon: Coffee, tag: "Arrival", time: "9:00 AM – 12:00 PM",
      },
      afternoon: {
        title: h[0] || `Explore central ${loc}`,
        description: h[0] ? `Start with a top highlight: ${h[0].toLowerCase()}. Perfect for your first afternoon.` : `Wander through the heart of ${loc}. Discover local shops, cafés, and landmarks.`,
        icon: Footprints, tag: "Discovery", time: "1:00 PM – 5:00 PM",
      },
      evening: {
        title: `Welcome dinner in ${loc}`,
        description: `End your first day with a traditional dinner at a highly-rated local restaurant. Try the regional specialties.`,
        icon: Utensils, tag: "Dining", time: "7:00 PM – 9:30 PM",
      },
    },
    {
      theme: `${country} Cultural Deep Dive`,
      morning: {
        title: h[1] || `Historic quarter walking tour`,
        description: h[1] ? `Dedicate the morning to ${h[1].toLowerCase()}, a must-see selected by our AI.` : `Join a guided walking tour through the historic center. Learn about local history and architecture.`,
        icon: Landmark, tag: "Cultural", time: "8:30 AM – 12:00 PM",
      },
      afternoon: {
        title: `Local market & street food`,
        description: `Dive into the local food scene at a popular market. Sample regional snacks, fresh produce, and artisan goods.`,
        icon: ShoppingBag, tag: "Culinary", time: "12:30 PM – 4:00 PM",
      },
      evening: {
        title: `Sunset viewpoint & evening stroll`,
        description: `Head to one of ${loc}'s best sunset spots for panoramic views. Then take an evening walk through illuminated streets.`,
        icon: Sunset, tag: "Scenic", time: "5:30 PM – 9:00 PM",
      },
    },
    {
      theme: `Off the Beaten Path`,
      morning: {
        title: h[2] || `Hidden neighborhood exploration`,
        description: h[2] ? `This morning: ${h[2].toLowerCase()} — a Wayfarer hidden-gem recommendation.` : `Venture into lesser-known neighborhoods that most tourists miss. Discover local art, quiet parks, and authentic daily life.`,
        icon: Footprints, tag: "Hidden Gem", time: "9:00 AM – 12:30 PM",
      },
      afternoon: {
        title: `Artisan workshop or local class`,
        description: `Participate in a hands-on local experience — pottery, cooking, weaving, or another traditional craft unique to ${country}.`,
        icon: Camera, tag: "Experience", time: "1:30 PM – 4:30 PM",
      },
      evening: {
        title: `Local cuisine dinner experience`,
        description: `Dine at a locally-loved restaurant away from tourist areas. Our AI picked this spot based on authentic reviews.`,
        icon: Utensils, tag: "Dining", time: "6:30 PM – 9:00 PM",
      },
    },
    {
      theme: `Nature & Scenic Exploration`,
      morning: {
        title: h[3] || `Nature trail or park visit`,
        description: h[3] ? `Enjoy the natural beauty with ${h[3].toLowerCase()}.` : `Take a morning hike through scenic natural areas near ${loc}.`,
        icon: Mountain, tag: "Nature", time: "7:30 AM – 12:00 PM",
      },
      afternoon: {
        title: `Scenic photo stops & relaxation`,
        description: `Visit the most photogenic locations. Take your time capturing memories, then relax at a local café or beach.`,
        icon: Camera, tag: "Photography", time: "1:00 PM – 5:00 PM",
      },
      evening: {
        title: `Rooftop or waterside dinner`,
        description: `Enjoy dinner with a view — rooftop terrace, lakeside, or oceanfront with the day's best ambiance.`,
        icon: Moon, tag: "Dining", time: "6:30 PM – 9:30 PM",
      },
    },
    {
      theme: `Food & Culinary Trail`,
      morning: {
        title: `Breakfast at a beloved local spot`,
        description: `Start with a classic ${country} breakfast at one of ${loc}'s most beloved neighborhood eateries.`,
        icon: Coffee, tag: "Culinary", time: "8:00 AM – 10:00 AM",
      },
      afternoon: {
        title: h[4] || `Food walking tour`,
        description: h[4] ? `This afternoon features ${h[4].toLowerCase()} — a perfect culinary experience.` : `Join a guided food tour through ${loc}'s best food streets. Taste 6-8 local dishes.`,
        icon: Utensils, tag: "Food Tour", time: "11:00 AM – 3:00 PM",
      },
      evening: {
        title: `Live music or cultural show`,
        description: `Experience ${country}'s performing arts with a live music performance, traditional dance, or local theater.`,
        icon: Music, tag: "Entertainment", time: "7:00 PM – 10:00 PM",
      },
    },
    {
      theme: `Leisure & Local Life`,
      morning: {
        title: `Sleep in & brunch`,
        description: `Take a slower morning — sleep in, then enjoy brunch at a trendy neighborhood spot in ${loc}.`,
        icon: Coffee, tag: "Relaxation", time: "10:00 AM – 12:00 PM",
      },
      afternoon: {
        title: `Museum or gallery visit`,
        description: `Explore one of ${loc}'s best museums or art galleries. Recommended based on your cultural interests.`,
        icon: Landmark, tag: "Cultural", time: "1:00 PM – 4:00 PM",
      },
      evening: {
        title: `Neighborhood bar hopping`,
        description: `Discover the local nightlife with a casual walk through the best cocktail bars and pubs in the area.`,
        icon: Moon, tag: "Nightlife", time: "7:00 PM – 10:30 PM",
      },
    },
    {
      theme: `Day Trip & Surroundings`,
      morning: {
        title: `Day trip to nearby attraction`,
        description: `Take a half-day excursion to a stunning nearby destination within 1–2 hours of ${loc}.`,
        icon: Mountain, tag: "Day Trip", time: "8:00 AM – 12:00 PM",
      },
      afternoon: {
        title: `Explore the day-trip destination`,
        description: `Continue exploring with a guided experience or free time. Enjoy lunch at a local restaurant.`,
        icon: Footprints, tag: "Exploration", time: "12:00 PM – 4:00 PM",
      },
      evening: {
        title: `Return & evening meal`,
        description: `Head back to ${loc} and enjoy dinner. Choose from our AI's top-rated picks.`,
        icon: Utensils, tag: "Dining", time: "6:30 PM – 9:30 PM",
      },
    },
    {
      theme: `Relaxation & Water Activities`,
      morning: {
        title: `Beach, spa, or wellness session`,
        description: `Dedicate the morning to relaxation — beach day, local spa, or yoga session.`,
        icon: Waves, tag: "Wellness", time: "9:00 AM – 12:00 PM",
      },
      afternoon: {
        title: `Souvenir shopping & local crafts`,
        description: `Browse local boutiques and craft markets for unique souvenirs.`,
        icon: ShoppingBag, tag: "Shopping", time: "1:00 PM – 4:30 PM",
      },
      evening: {
        title: `Stargazing or moonlit walk`,
        description: `End the day with a peaceful moonlit walk or stargazing experience.`,
        icon: Moon, tag: "Scenic", time: "7:30 PM – 9:30 PM",
      },
    },
  ];

  const days: DayTemplateDraft[] = [];
  for (let i = 0; i < numDays; i++) {
    if (i === 0) {
      days.push(genericPool[0]);
    } else if (i === numDays - 1 && numDays > 2) {
      const last = { ...genericPool[6] };
      last.theme = `Farewell & Departure from ${loc}`;
      last.evening = {
        title: `Last dinner & pack up`,
        description: `Savor your final evening in ${loc} with a memorable dinner at a favorite spot from the trip.`,
        icon: Utensils, tag: "Farewell", time: "6:00 PM – 9:00 PM",
      };
      days.push(last);
    } else {
      days.push(genericPool[i % genericPool.length] || genericPool[1]);
    }
  }

  // Assign per-activity costs from the selected budget tier — done as a pass here
  // rather than inline above, so every activity (including the reused Farewell day) gets one.
  return days.map((tmpl, i) => ({
    ...tmpl,
    morning: { ...tmpl.morning, cost: estimateCost(tierId, i, "morning") },
    afternoon: { ...tmpl.afternoon, cost: estimateCost(tierId, i, "afternoon") },
    evening: { ...tmpl.evening, cost: estimateCost(tierId, i, "evening") },
  }));
}

/* ── Drag-and-drop Day Card ── */

const DAY_CARD_TYPE = "DAY_CARD";

function DraggableDayCard({
  day,
  index,
  isExpanded,
  onToggle,
  moveDay,
  onCostChange,
}: {
  day: ItineraryDay;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  moveDay: (from: number, to: number) => void;
  onCostChange: (day: number, period: "morning" | "afternoon" | "evening", cost: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag, preview] = useDrag({
    type: DAY_CARD_TYPE,
    item: () => ({ index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: DAY_CARD_TYPE,
    hover: (item: { index: number }) => {
      if (item.index === index) return;
      moveDay(item.index, index);
      item.index = index;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  drop(preview(ref));

  return (
    <div
      ref={ref}
      style={{ opacity: isDragging ? 0.4 : 1, transition: "opacity 0.2s" }}
      className={isOver ? "ring-2 ring-accent/40 rounded-[16px]" : ""}
    >
      <Card className="border border-muted rounded-[16px] bg-transparent shadow-sm overflow-hidden p-0 transition-all hover:shadow-md">
        <div className="flex">
          {/* Drag handle */}
          <div
            ref={(node) => { drag(node); }}
            className="flex items-center justify-center shrink-0 cursor-grab active:cursor-grabbing bg-muted/30 hover:bg-muted/60 transition-colors print:hidden"
            style={{ width: "32px" }}
            title="Drag to reorder"
          >
            <GripVertical className="size-4 text-muted-foreground" strokeWidth={1.8} />
          </div>

          {/* Main card content */}
          <div className="flex-1 min-w-0">
            <button
              onClick={onToggle}
              className="w-full text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
            >
              <div className="relative w-full h-[clamp(120px,18vw,180px)]">
                <img
                  src={day.image}
                  alt={`Day ${day.day} - ${day.theme}`}
                  className="absolute inset-0 object-cover size-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div
                  className="absolute bottom-0 left-0 right-0 flex items-end justify-between pb-(--space-stack-sm) pl-(--space-stack-sm) pr-(--space-stack-sm)"
                >
                  <div>
                    <Badge
                      className="bg-primary text-primary-foreground rounded-full px-2 py-0.5 font-body text-caption"
                    >
                      Day {day.day}
                    </Badge>
                    <h3
                      className="font-heading text-white font-semibold text-title-3 leading-title-3"
                      style={{ marginTop: "4px" }}
                    >
                      {day.theme}
                    </h3>
                  </div>
                  <div className="size-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 print:hidden">
                    {isExpanded ? (
                      <ChevronUp className="size-4 text-white" />
                    ) : (
                      <ChevronDown className="size-4 text-white" />
                    )}
                  </div>
                </div>
              </div>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={fastTransition}
                  className="overflow-hidden"
                >
                  <CardContent
                    className="flex flex-col gap-(--space-stack-sm) p-(--space-stack-md)"
                  >
                    <ActivityBlock period="Morning" periodIcon={Sun} periodColor="text-warning" activity={day.morning} onCostChange={(cost) => onCostChange(day.day, "morning", cost)} />
                    <Separator className="bg-border" />
                    <ActivityBlock period="Afternoon" periodIcon={Sunset} periodColor="text-primary" activity={day.afternoon} onCostChange={(cost) => onCostChange(day.day, "afternoon", cost)} />
                    <Separator className="bg-border" />
                    <ActivityBlock period="Evening" periodIcon={Moon} periodColor="text-accent" activity={day.evening} onCostChange={(cost) => onCostChange(day.day, "evening", cost)} />
                  </CardContent>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ActivityBlock({
  period,
  periodIcon: PeriodIcon,
  periodColor,
  activity,
  onCostChange,
}: {
  period: string;
  periodIcon: typeof Sun;
  periodColor: string;
  activity: Activity;
  onCostChange: (cost: number) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(String(activity.cost));

  const commit = () => {
    const next = Number(draft);
    onCostChange(Number.isFinite(next) && next >= 0 ? next : activity.cost);
    setEditing(false);
  };

  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center shrink-0" style={{ width: "40px" }}>
        <div className={`size-8 rounded-full bg-muted/50 flex items-center justify-center ${periodColor}`}>
          <PeriodIcon className="size-4" strokeWidth={1.8} />
        </div>
        <div className="w-px flex-1 bg-border mt-1" />
      </div>
      <div className="flex-1 min-w-0 pb-(--space-stack-xs)">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`${periodColor} text-caption font-bold`}
          >
            {period}
          </span>
          <span className="font-body text-muted-foreground text-caption">{activity.time}</span>
          <Badge
            variant="outline"
            className="rounded-full px-2 py-0 border-border text-muted-foreground font-body text-caption"
          >
            {activity.tag}
          </Badge>
        </div>
        <h4
          className="font-heading text-foreground font-semibold text-title-4 leading-title-4"
          style={{ marginTop: "4px" }}
        >
          {activity.title}
        </h4>
        <p
          className="font-body text-muted-foreground text-body-sm leading-body"
          style={{ marginTop: "4px" }}
        >
          {activity.description}
        </p>
        <div className="flex items-center gap-2 print:hidden" style={{ marginTop: "6px" }}>
          {editing ? (
            <Input
              autoFocus
              type="number"
              min={0}
              step={5}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onBlur={commit}
              onKeyDown={(e) => {
                if (e.key === "Enter") commit();
                if (e.key === "Escape") { setDraft(String(activity.cost)); setEditing(false); }
              }}
              className="h-7 w-20 rounded-md text-caption tabular-nums px-2 py-1"
            />
          ) : (
            <button
              type="button"
              onClick={() => { setDraft(String(activity.cost)); setEditing(true); }}
              className="flex items-center gap-1 rounded-md px-2 py-1 outline-none font-body text-caption tabular-nums text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-accent transition-colors"
              aria-label={`Edit cost for ${activity.title}`}
            >
              <DollarSign className="size-3" />
              {activity.cost} SGD
              <Pencil className="size-3 opacity-50" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Budget summary ── */

function BudgetSummaryBar({
  spent,
  cap,
  overBudget,
}: {
  spent: number;
  cap: number;
  overBudget: boolean;
}) {
  const pct = cap > 0 ? Math.min(100, Math.round((spent / cap) * 100)) : 0;

  return (
    <motion.div
      className="print:hidden mb-(--space-stack-md)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={fastTransition}
    >
      <Card
        className="rounded-2xl p-(--space-stack-md) flex flex-col gap-(--space-stack-xs) border"
        style={{ borderColor: overBudget ? "var(--destructive)" : "var(--border)" }}
      >
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <DollarSign
              className="size-5"
              style={{ color: overBudget ? "var(--destructive)" : "var(--success)" }}
              strokeWidth={1.8}
            />
            <span className="font-body text-muted-foreground text-caption">Trip budget</span>
          </div>
          <p className="font-body font-semibold text-body tabular-nums" style={{ color: overBudget ? "var(--destructive)" : "var(--foreground)" }}>
            ${spent} <span className="font-body font-normal text-muted-foreground">/ ${cap} SGD</span>
          </p>
        </div>
        <div className="w-full h-1.5 rounded-full overflow-hidden bg-muted">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: overBudget ? "var(--destructive)" : "var(--success)" }}
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={fastTransition}
          />
        </div>
        {overBudget && (
          <div className="flex items-center gap-2 font-body text-caption" style={{ color: "var(--destructive)" }}>
            <AlertTriangle className="size-3.5" />
            ${spent - cap} SGD over cap — edit activity costs below to bring it back in line.
          </div>
        )}
      </Card>
    </motion.div>
  );
}

/* ── Main Page ── */

export default function ItineraryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const tripState = location.state as TripState | null;

  const state: TripState = tripState || {
    destination: "Tokyo, Japan",
    selectedStyles: ["cultural", "food"],
    duration: "week",
    budget: "moderate",
    resultDestinations: destinations.slice(0, 3),
  };

  const bestMatch =
    state.resultDestinations[0] ||
    destinations.find(
      (d) =>
        d.location.toLowerCase().includes(state.destination.toLowerCase()) ||
        state.destination.toLowerCase().includes(d.country.toLowerCase())
    ) ||
    destinations[0];

  const durationMap: Record<string, number> = {
    weekend: 3, short: 5, week: 7, extended: 10, long: 14,
  };
  const numDays = durationMap[state.duration] || 5;

  const dayTemplates = useMemo(
    () => buildRealisticDays(bestMatch, numDays, state.budget),
    [bestMatch.id, numDays, state.budget]
  );

  const regionDests = destinations.filter((d) => d.countrySlug === bestMatch.countrySlug);
  const imagePool = regionDests.length > 0 ? regionDests : [bestMatch];

  const initialItinerary: ItineraryDay[] = dayTemplates.map((tmpl, i) => ({
    day: i + 1,
    theme: tmpl.theme,
    image: imagePool[i % imagePool.length].image,
    morning: tmpl.morning,
    afternoon: tmpl.afternoon,
    evening: tmpl.evening,
  }));

  const [itinerary, setItinerary] = useState<ItineraryDay[]>(initialItinerary);
  const [expandedDays, setExpandedDays] = useState<Set<number>>(() => new Set([1]));
  const [copied, setCopied] = useState(false);

  const toggleDay = (day: number) => {
    setExpandedDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });
  };

  const expandAll = () => setExpandedDays(new Set(itinerary.map((d) => d.day)));
  const collapseAll = () => setExpandedDays(new Set());

  /* Drag reorder handler */
  const moveDay = useCallback((from: number, to: number) => {
    setItinerary((prev) => {
      const updated = [...prev];
      const [moved] = updated.splice(from, 1);
      updated.splice(to, 0, moved);
      // Renumber days
      return updated.map((d, i) => ({ ...d, day: i + 1 }));
    });
  }, []);

  /* Live budget: per-activity cost editing */
  const updateActivityCost = useCallback(
    (day: number, period: "morning" | "afternoon" | "evening", cost: number) => {
      setItinerary((prev) =>
        prev.map((d) => (d.day === day ? { ...d, [period]: { ...d[period], cost } } : d))
      );
    },
    []
  );

  const dailyCap = TIER_DAILY_CAP[state.budget] ?? TIER_DAILY_CAP.moderate;
  const totalCap = dailyCap * itinerary.length;
  const totalSpent = useMemo(
    () =>
      itinerary.reduce(
        (sum, d) => sum + d.morning.cost + d.afternoon.cost + d.evening.cost,
        0
      ),
    [itinerary]
  );
  const overBudget = totalSpent > totalCap;

  /* Print handler */
  const handlePrint = useCallback(() => {
    // Expand all days before printing
    setExpandedDays(new Set(itinerary.map((d) => d.day)));
    setTimeout(() => {
      window.print();
    }, 300);
  }, [itinerary]);

  const handleShare = async () => {
    const shareData = {
      title: `Wayfarer Trip: ${state.destination}`,
      text: `Check out my ${itinerary.length}-day AI-curated trip to ${state.destination} on Wayfarer!`,
      url: window.location.href,
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch { /* cancelled */ }
    } else {
      await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
      setCopied(true);
      toast.success("Trip link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast.success("Link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const durationLabels: Record<string, string> = {
    weekend: "Weekend (2–3 days)",
    short: "Short trip (4–6 days)",
    week: "One week (7 days)",
    extended: "Extended (8–14 days)",
    long: "Long stay (15+ days)",
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: `${state.destination} Itinerary` },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="min-h-screen bg-surface w-full pt-(--section-py-sm) pb-(--section-py-lg)"
      >
        <div className="px-(--container-px)">
          <div className="print:hidden">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          {/* Header */}
          <motion.div
            className="mt-(--space-stack-lg) mb-(--space-stack-lg)"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div
              className="flex flex-col md:flex-row md:items-start md:justify-between gap-(--space-stack-md)"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-(--space-stack-xs)">
                  <Sparkles className="size-5 text-primary" strokeWidth={1.8} />
                  <span
                    className="font-body text-primary text-body-sm font-medium"
                  >
                    AI-curated itinerary
                  </span>
                </div>
                <h1
                  className="font-heading text-foreground font-bold text-display leading-display"
                >
                  {itinerary.length} days in {state.destination}
                </h1>
                <div className="flex flex-wrap items-center gap-2 mt-(--space-stack-sm)">
                  <Badge variant="outline" className="rounded-full px-3 py-1.5 border-border text-card-foreground font-body text-caption">
                    <MapPin className="size-3 mr-1" />{bestMatch.country}
                  </Badge>
                  <Badge variant="outline" className="rounded-full px-3 py-1.5 border-border text-card-foreground font-body text-caption">
                    <CalendarDays className="size-3 mr-1" />{durationLabels[state.duration] || state.duration}
                  </Badge>
                  {state.selectedStyles.slice(0, 2).map((s) => (
                    <Badge key={s} variant="outline" className="rounded-full px-3 py-1.5 border-border text-card-foreground font-body capitalize text-caption">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0 flex-wrap print:hidden">
                <Button variant="outline" size="sm" className="rounded-full gap-2 border-border text-card-foreground hover:bg-muted font-body text-body-sm" onClick={handlePrint}>
                  <Printer className="size-4" />
                  Print
                </Button>
                <Button variant="outline" size="sm" className="rounded-full gap-2 border-border text-card-foreground hover:bg-muted font-body text-body-sm" onClick={handleCopyLink}>
                  {copied ? <Check className="size-4 text-success" /> : <Link2 className="size-4" />}
                  {copied ? "Copied" : "Copy link"}
                </Button>
                <Button variant="outline" size="sm" className="rounded-full gap-2 border-border text-card-foreground hover:bg-muted font-body text-body-sm" onClick={handleShare}>
                  <Share2 className="size-4" />
                  Share
                </Button>
                {isAuthenticated && (
                  <Button variant="outline" size="sm" className="rounded-full gap-2 border-border text-card-foreground hover:bg-destructive/8 hover:text-destructive hover:border-destructive/30 font-body text-body-sm" onClick={() => toast.success("Trip saved to favorites!")}>
                    <Heart className="size-4" />
                    Save
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          <BudgetSummaryBar spent={totalSpent} cap={totalCap} overBudget={overBudget} />

          {/* Controls */}
          <motion.div
            className="flex items-center justify-between flex-wrap print:hidden mb-(--space-stack-md) gap-(--space-stack-xs)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={fastTransition}
          >
            <p className="font-body text-muted-foreground text-body-sm">
              {itinerary.length} days · {itinerary.length * 3} activities · All in {bestMatch.country}
            </p>
            <div className="flex items-center gap-2">
              <span className="font-body text-muted-foreground text-caption">
                <GripVertical className="size-3 inline mr-0.5" />Drag to reorder
              </span>
              <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground hover:text-foreground font-body text-caption" onClick={expandAll}>
                Expand all
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground hover:text-foreground font-body text-caption" onClick={collapseAll}>
                Collapse all
              </Button>
            </div>
          </motion.div>

          {/* Day cards — draggable */}
          <motion.div
            className="flex flex-col max-w-[800px] gap-(--space-stack-sm)"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {itinerary.map((day, i) => (
              <DraggableDayCard
                key={`${day.theme}-${i}`}
                day={day}
                index={i}
                isExpanded={expandedDays.has(day.day)}
                onToggle={() => toggleDay(day.day)}
                moveDay={moveDay}
                onCostChange={updateActivityCost}
              />
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 print:hidden mt-(--space-stack-lg)"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.3 }}
          >
            <Button variant="outline" size="lg" className="font-heading h-[48px] px-8 rounded-full gap-2 border-border text-card-foreground hover:bg-muted font-bold" onClick={() => showComingSoon()}>
              <ArrowLeft className="size-4" />
              Plan another trip
            </Button>
            <Button size="lg" className="font-heading h-[48px] px-8 rounded-full gap-2 bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta)] hover:opacity-90 transition-opacity font-bold" onClick={handlePrint}>
              <Printer className="size-4" />
              Print itinerary
            </Button>
          </motion.div>
        </div>
      </div>
    </DndProvider>
  );
}
