import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { WayfarerNavbar } from "../components/WayfarerNavbar";
import { useAuth } from "../components/AuthContext";
import { usePersonalization } from "../components/PersonalizationContext";
import { destinations } from "../components/destinations-data";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { toast } from "sonner";
import { cn } from "../components/ui/utils";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  MapPin,
  CalendarDays,
  Compass,
  Mountain,
  Palette,
  UtensilsCrossed,
  Waves,
  TreePine,
  Camera,
  Heart,
  Users,
  Clock,
  Star,
  Check,
  X,
  Share2,
  DollarSign,
  Gem,
  Lock,
  UserPlus,
  ChevronDown,
  Globe,
  BadgeCheck,
  User,
  Users2,
} from "lucide-react";
import bgImage from "figma:asset/f5674fb8c81228aad16688b6e79873cbfc000594.png";

/* ── Step labels ── */
const stepLabels = ["Where & When", "How You Travel", "Personal Touch"];

/* ── Duration presets ── */
const durationPresets = [
  { id: "weekend", label: "Weekend escape", nights: 2, icon: Sparkles },
  { id: "short", label: "Short trip", nights: 5, icon: Clock },
  { id: "week", label: "One week", nights: 7, icon: CalendarDays },
  { id: "extended", label: "Extended", nights: 12, icon: Globe },
];

/* ── Companion options ── */
const companionOptions = [
  { id: "solo", label: "Solo", icon: User },
  { id: "couple", label: "Couple", icon: Heart },
  { id: "friends", label: "With friends", icon: Users },
  { id: "family", label: "Family", icon: Users2 },
];

/* ── Pace options ── */
const paceOptions = [
  { id: "relaxed", label: "Relaxed", desc: "2–3 activities/day" },
  { id: "balanced", label: "Balanced", desc: "4–5 activities/day" },
  { id: "packed", label: "Action-packed", desc: "6+ activities/day" },
];

/* ── Travel style options ── */
const travelStyles = [
  { id: "adventure", label: "Adventure", icon: Mountain },
  { id: "cultural", label: "Cultural & Historic", icon: Palette },
  { id: "food", label: "Food & Culinary", icon: UtensilsCrossed },
  { id: "relaxation", label: "Relaxation", icon: Waves },
  { id: "nature", label: "Nature & Wildlife", icon: TreePine },
  { id: "photography", label: "Photography", icon: Camera },
  { id: "romantic", label: "Romantic", icon: Heart },
  { id: "group", label: "Group Travel", icon: Users },
  { id: "hidden-gems", label: "Hidden Gems", icon: Gem },
];

const budgetOptions = [
  {
    id: "budget",
    label: "Budget-friendly",
    sub: "Hostels, street food, local transport",
    icon: DollarSign,
    range: "$0 – $80 / day",
  },
  {
    id: "moderate",
    label: "Moderate",
    sub: "Mid-range hotels, local restaurants",
    icon: DollarSign,
    range: "$80 – $200 / day",
  },
  {
    id: "comfort",
    label: "Comfortable",
    sub: "4-star hotels, curated dining",
    icon: Star,
    range: "$200 – $500 / day",
  },
  {
    id: "luxury",
    label: "Luxury",
    sub: "5-star resorts, private experiences",
    icon: Gem,
    range: "$500+ / day",
  },
];

const destinationOptions = destinations.map((d) => ({
  id: d.id,
  label: d.title,
  location: d.location,
  country: d.country,
  slug: d.slug,
}));

/* ── Warm AI processing messages ── */
function buildProcessingMessages(destination: string, companion: string, stylePrimary: string) {
  const companionLabel: Record<string, string> = {
    solo: "your solo adventure",
    couple: "your romantic escape",
    friends: "your group trip",
    family: "your family journey",
  };
  const tripLabel = companionLabel[companion] || "your trip";
  return [
    `Exploring the best of ${destination || "your destination"}...`,
    `Finding ${stylePrimary.toLowerCase()} experiences you'll love...`,
    `Crafting ${tripLabel} day by day...`,
    `Uncovering local insider spots...`,
    `Perfecting your personalised itinerary...`,
    `Adding the finishing touches...`,
  ];
}

const STYLE_TO_CAT: Record<string, string[]> = {
  adventure: ["Adventure Travel"],
  cultural: ["Cultural & Historic"],
  nature: ["Nature & Outdoors"],
  "hidden-gems": ["Hidden Gems"],
  relaxation: ["Top Experiences"],
  food: ["Top Experiences"],
  photography: ["Top Attractions"],
  romantic: ["Top Experiences"],
  group: ["Top Attractions"],
};

const IMPLICIT_CAT_TO_STYLE: Record<string, string> = {
  "Cultural & Historic": "cultural",
  "Adventure Travel": "adventure",
  "Nature & Outdoors": "nature",
  "Hidden Gems": "hidden-gems",
  "Top Experiences": "relaxation",
  "Top Attractions": "photography",
  "Bucket List Experiences": "adventure",
  "Entertainment & Music": "relaxation",
};

function computeStyleMatch(destCategories: string[], selectedStyleIds: string[]): number {
  if (!selectedStyleIds.length) return 72;
  let hits = 0;
  for (const sid of selectedStyleIds) {
    const cats = STYLE_TO_CAT[sid] ?? [];
    if (cats.some((c) => destCategories.includes(c))) hits++;
  }
  return Math.min(99, Math.round(55 + (hits / selectedStyleIds.length) * 44));
}

/* ── FocusableTextarea ── */
function FocusableTextarea({
  value,
  onChange,
  rows,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      rows={rows ?? 2}
      placeholder={placeholder}
      className="w-full rounded-xl border bg-surface text-foreground placeholder:text-muted-foreground font-body text-body-sm outline-none resize-none px-3 py-3"
      style={{
        borderColor: focused ? "var(--accent)" : "var(--border)",
        borderWidth: "1.5px",
        boxShadow: focused ? "var(--shadow-input)" : "none",
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
    />
  );
}

/* ── DestinationCombobox ── */
function DestinationCombobox({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(value);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return destinationOptions.slice(0, 8);
    return destinationOptions
      .filter((d) =>
        d.label.toLowerCase().includes(q) ||
        d.location.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query]);

  const select = useCallback(
    (loc: string) => { onChange(loc); setQuery(loc); setOpen(false); setActiveIdx(-1); },
    [onChange]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIdx((i) => Math.min(i + 1, filtered.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActiveIdx((i) => Math.max(i - 1, 0)); }
    else if (e.key === "Enter" && activeIdx >= 0) { e.preventDefault(); select(filtered[activeIdx].location); }
    else if (e.key === "Escape") { setOpen(false); }
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "var(--muted-foreground)" }}>
          <MapPin className="size-4" strokeWidth={1.8} />
        </div>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => { setQuery(e.target.value); onChange(e.target.value); setOpen(true); setActiveIdx(-1); }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. Tokyo, Bali, Patagonia..."
          className="w-full h-[44px] pl-10 pr-10 rounded-xl border bg-surface text-foreground placeholder:text-muted-foreground font-body text-body-sm outline-none focus:ring-2 focus:ring-accent transition-all"
          style={{
            borderColor: open ? "var(--accent)" : "var(--border)",
            borderWidth: "1.5px",
            boxShadow: open ? "var(--shadow-input)" : "none",
          }}
          aria-expanded={open}
          aria-autocomplete="list"
          role="combobox"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-10 flex items-center justify-center pointer-events-none"
          style={{ color: "var(--muted-foreground)", transform: `rotate(${open ? 180 : 0}deg)`, transition: "transform 0.2s ease" }}
        >
          <ChevronDown className="size-5" strokeWidth={2} />
        </div>
      </div>
      <AnimatePresence>
        {open && filtered.length > 0 && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-1.5 rounded-xl border border-border bg-surface z-50 overflow-hidden"
            style={{ boxShadow: "var(--shadow-card-elevated)" }}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {filtered.map((dest, i) => (
              <button
                key={dest.id}
                type="button"
                className={cn(
                  "flex items-center gap-3 w-full px-3 py-2.5 text-left transition-colors cursor-pointer outline-none font-body",
                  i === activeIdx ? "bg-accent-light" : "hover:bg-muted"
                )}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseDown={(e) => { e.preventDefault(); select(dest.location); }}
              >
                <MapPin
                  className="size-3.5 shrink-0"
                  style={{ color: i === activeIdx ? "var(--accent)" : "var(--muted-foreground)" }}
                  strokeWidth={1.8}
                />
                <div className="flex flex-col min-w-0">
                  <span className="text-body-sm truncate" style={{ color: "var(--card-foreground)", fontWeight: "var(--font-weight-medium)" }}>
                    {dest.label}
                  </span>
                  <span className="text-caption truncate" style={{ color: "var(--muted-foreground)" }}>
                    {dest.location}
                  </span>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Duration Chips ── */
function DurationChips({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {durationPresets.map(({ id, label, nights, icon: Icon }) => {
        const selected = value === id;
        return (
          <motion.button
            key={id}
            type="button"
            onClick={() => onChange(selected ? "" : id)}
            className="flex flex-col items-start gap-1.5 px-3 py-3 rounded-2xl border cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent text-left"
            style={{
              backgroundColor: selected ? "var(--accent-light)" : "var(--background)",
              borderColor: selected ? "var(--accent)" : "var(--border)",
              borderWidth: selected ? "2px" : "1.5px",
              boxShadow: selected ? "var(--shadow-badge-active)" : "var(--shadow-badge)",
              transition: "all 0.2s",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <Icon
              className="size-4"
              strokeWidth={1.8}
              style={{ color: selected ? "var(--accent)" : "var(--muted-foreground)" }}
            />
            <span
              className="font-body text-body-sm"
              style={{
                color: selected ? "var(--accent)" : "var(--card-foreground)",
                fontWeight: selected ? "var(--font-weight-bold)" : "var(--font-weight-medium)",
              }}
            >
              {label}
            </span>
            <span className="font-body text-caption" style={{ color: "var(--muted-foreground)" }}>
              ~{nights} nights
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}

/* ── Companion Picker ── */
function CompanionPicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {companionOptions.map(({ id, label, icon: Icon }) => {
        const selected = value === id;
        return (
          <motion.button
            key={id}
            type="button"
            onClick={() => onChange(selected ? "" : id)}
            className="flex flex-col items-center gap-2 py-3 px-2 rounded-2xl border cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent"
            style={{
              backgroundColor: selected ? "var(--accent-light)" : "var(--background)",
              borderColor: selected ? "var(--accent)" : "var(--border)",
              borderWidth: selected ? "2px" : "1.5px",
              boxShadow: selected ? "var(--shadow-badge-active)" : "var(--shadow-badge)",
              transition: "all 0.2s",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon
              className="size-5"
              strokeWidth={selected ? 2.2 : 1.8}
              style={{ color: selected ? "var(--accent)" : "var(--card-foreground)" }}
            />
            <span
              className="font-body text-caption text-center"
              style={{
                color: selected ? "var(--accent)" : "var(--card-foreground)",
                fontWeight: selected ? "var(--font-weight-bold)" : "var(--font-weight-medium)",
              }}
            >
              {label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}

/* ── Pace Picker ── */
function PacePicker({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div
      className="flex rounded-xl border overflow-hidden"
      style={{ borderColor: "var(--border)", borderWidth: "1.5px" }}
    >
      {paceOptions.map(({ id, label, desc }, i) => {
        const selected = value === id;
        return (
          <motion.button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={cn(
              "flex-1 flex flex-col items-center gap-0.5 py-3 px-2 cursor-pointer outline-none text-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset",
              i < paceOptions.length - 1 ? "border-r border-border" : ""
            )}
            style={{
              backgroundColor: selected ? "var(--accent-light)" : "transparent",
              transition: "background-color 0.2s",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <span
              className="font-body text-body-sm"
              style={{
                color: selected ? "var(--accent)" : "var(--card-foreground)",
                fontWeight: selected ? "var(--font-weight-bold)" : "var(--font-weight-medium)",
                transition: "color 0.2s",
              }}
            >
              {label}
            </span>
            <span className="font-body text-caption" style={{ color: "var(--muted-foreground)" }}>
              {desc}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}

/* ── Toggle Chip ── */
function ToggleChip({
  label,
  icon: Icon,
  selected,
  onToggle,
  preSelected,
}: {
  label: string;
  icon: React.ElementType;
  selected: boolean;
  onToggle: () => void;
  preSelected?: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      className="relative flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
      style={{
        backgroundColor: selected ? "var(--accent-light)" : "var(--background)",
        borderColor: selected ? "var(--accent)" : preSelected ? "var(--accent-muted)" : "var(--border)",
        borderWidth: preSelected && !selected ? "1.5px" : "1px",
        color: selected ? "var(--accent)" : "var(--card-foreground)",
        fontWeight: selected ? "var(--font-weight-bold)" : "var(--font-weight-medium)",
        fontSize: "var(--text-body-sm)",
        boxShadow: selected ? "var(--shadow-badge-active)" : "var(--shadow-badge)",
        transition: "background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="size-4" strokeWidth={selected ? 2.2 : 1.8} />
      {label}
    </motion.button>
  );
}

/* ── Budget Card ── */
function BudgetCard({
  label,
  sub,
  range,
  selected,
  onSelect,
}: {
  label: string;
  sub: string;
  range: string;
  icon: React.ElementType;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      className="flex items-start gap-4 w-full rounded-2xl border px-5 py-4 cursor-pointer outline-none text-left"
      style={{
        backgroundColor: selected ? "var(--accent-light)" : "var(--background)",
        borderColor: selected ? "var(--accent)" : "var(--border)",
        borderWidth: selected ? "2px" : "1.5px",
        boxShadow: selected ? "var(--shadow-badge-active)" : "var(--shadow-badge)",
        transition: "background-color 0.2s, border-color 0.2s, box-shadow 0.2s",
      }}
      whileTap={{ scale: 0.98 }}
      whileHover={!selected ? { borderColor: "var(--accent-muted)" } : {}}
    >
      <div
        className="size-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200"
        style={{ borderColor: selected ? "var(--accent)" : "var(--border)" }}
      >
        {selected && (
          <motion.div
            className="size-2.5 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-0.5">
          <span
            className="font-body text-body-sm"
            style={{
              fontWeight: selected ? "var(--font-weight-bold)" : "var(--font-weight-medium)",
              color: selected ? "var(--accent)" : "var(--card-foreground)",
            }}
          >
            {label}
          </span>
          <span
            className="font-body text-caption shrink-0 rounded-full px-2 py-0.5"
            style={{
              background: selected ? "color-mix(in srgb, var(--accent) 12%, transparent)" : "var(--muted)",
              color: selected ? "var(--accent)" : "var(--muted-foreground)",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            {range}
          </span>
        </div>
        <span className="font-body text-caption" style={{ color: "var(--muted-foreground)" }}>{sub}</span>
      </div>
    </motion.button>
  );
}

/* ── Progress Indicator ── */
function ProgressIndicator({ currentStep, isComplete }: { currentStep: number; isComplete?: boolean }) {
  return (
    <div className="flex items-center justify-between w-full max-w-[480px] mx-auto relative">
      <div className="absolute top-[10px] left-[48px] right-[48px] h-[2px] flex">
        {Array.from({ length: stepLabels.length - 1 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-full transition-all duration-500"
            style={{ backgroundColor: isComplete || currentStep > i ? "var(--accent)" : "var(--accent-muted)" }}
          />
        ))}
      </div>
      {stepLabels.map((step, i) => {
        const isCompleted = isComplete || i < currentStep;
        const isCurrent = !isComplete && i === currentStep;
        return (
          <div key={step} className="flex flex-col items-center gap-1.5 z-10 w-[100px]">
            <div
              className="size-5 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: isCompleted ? "var(--accent)" : isCurrent ? "var(--accent-light)" : "var(--accent-muted)",
                boxShadow: isCurrent
                  ? "var(--shadow-dot-ring), var(--shadow-dot-glow)"
                  : isCompleted
                    ? "var(--shadow-dot-glow)"
                    : "var(--shadow-inset-subtle-sm)",
              }}
            >
              {isCompleted ? (
                <Check className="size-3" style={{ color: "var(--accent-foreground)" }} strokeWidth={3} />
              ) : isCurrent ? (
                <div className="size-2.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
              ) : null}
            </div>
            <span
              className="font-body text-center whitespace-nowrap text-caption leading-caption"
              style={{
                fontWeight: isCurrent || isCompleted ? "var(--font-weight-bold)" : "var(--font-weight-medium)",
                color: isCurrent || isCompleted ? "var(--accent)" : "var(--card-foreground)",
              }}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ── Trip Summary Strip ── */
function TripSummaryStrip({
  destination,
  durationPreset,
  companion,
  selectedStyles,
  budget,
  showStylesAndBudget,
}: {
  destination: string;
  durationPreset: string;
  companion: string;
  selectedStyles: string[];
  budget: string;
  showStylesAndBudget: boolean;
}) {
  type Pill = { key: string; icon: React.ElementType | null; label: string };
  const pills: Pill[] = [];
  if (destination) pills.push({ key: "dest", icon: MapPin, label: destination.split(",")[0] });
  if (durationPreset) pills.push({ key: "dur", icon: Clock, label: durationPresets.find((d) => d.id === durationPreset)?.label ?? "" });
  if (companion) pills.push({ key: "comp", icon: null, label: companionOptions.find((c) => c.id === companion)?.label ?? "" });
  if (showStylesAndBudget) {
    selectedStyles.slice(0, 2).forEach((s) => {
      const label = travelStyles.find((t) => t.id === s)?.label ?? "";
      if (label) pills.push({ key: s, icon: null, label });
    });
    if (budget) {
      const label = budgetOptions.find((b) => b.id === budget)?.label ?? "";
      if (label) pills.push({ key: "budget", icon: null, label });
    }
  }

  if (!pills.length) return null;

  return (
    <motion.div
      className="flex flex-wrap items-center gap-1.5 w-full px-3 py-2.5 rounded-xl"
      style={{ backgroundColor: "var(--muted)" }}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Sparkles className="size-3.5 shrink-0" style={{ color: "var(--accent)" }} strokeWidth={1.8} />
      {pills.map(({ key, icon: Icon, label }) => (
        <span
          key={key}
          className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface border border-border font-body text-caption"
          style={{ color: "var(--card-foreground)", fontWeight: "var(--font-weight-medium)" }}
        >
          {Icon && <Icon className="size-3" style={{ color: "var(--accent)" }} strokeWidth={1.8} />}
          {label}
        </span>
      ))}
    </motion.div>
  );
}

/* ── Registration Bridge Modal ── */
function RegistrationBridgeModal({
  destination,
  onCreateAccount,
  onSkip,
}: {
  destination: string;
  onCreateAccount: () => void;
  onSkip: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onSkip} aria-hidden="true" />
      <motion.div
        className="relative z-10 w-full md:max-w-[480px] bg-surface rounded-t-2xl md:rounded-2xl overflow-hidden mx-0 md:mx-4"
        style={{ boxShadow: "var(--shadow-card-elevated)" }}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex justify-center pt-3 pb-1 md:hidden">
          <div className="w-8 h-1 rounded-full" style={{ backgroundColor: "var(--border)" }} />
        </div>
        <div className="flex flex-col gap-5 px-6 pt-4 pb-8 md:px-8 md:pt-6">
          <div className="flex items-start justify-between">
            <div
              className="size-12 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)" }}
            >
              <Lock className="size-5" style={{ color: "var(--accent)" }} strokeWidth={1.8} />
            </div>
            <button onClick={onSkip} className="p-1 rounded-full text-muted-foreground hover:text-foreground transition-colors" aria-label="Close">
              <X className="size-5" strokeWidth={1.8} />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-heading font-bold text-foreground text-title-2 leading-title-2">Save this itinerary?</h3>
            <p className="font-body text-muted-foreground text-body-sm leading-body-sm">
              Create a free Wayfarer account to permanently save your{" "}
              <strong style={{ color: "var(--card-foreground)" }}>{destination}</strong> journey and unlock{" "}
              <span style={{ color: "var(--accent)", fontWeight: "var(--font-weight-bold)" }}>deeper local cultural insights</span>.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {[
              "Permanently save & revisit this itinerary",
              "Hyper-personalized AI recommendations",
              "Community insider tips not available to guests",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2.5">
                <BadgeCheck className="size-4 shrink-0" style={{ color: "var(--accent)" }} strokeWidth={1.8} />
                <span className="font-body text-body-sm" style={{ color: "var(--card-foreground)", fontWeight: "var(--font-weight-medium)" }}>
                  {benefit}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={onCreateAccount}
                className="font-heading w-full h-[48px] rounded-full gap-2 bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta)] hover:opacity-90 transition-opacity font-bold"
              >
                <UserPlus className="size-4" />
                Create a free account
              </Button>
            </motion.div>
            <button
              onClick={onSkip}
              className="font-body text-center text-body-sm underline underline-offset-2 outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm transition-colors"
              style={{ color: "var(--muted-foreground)" }}
            >
              Skip and view preview
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main Page ── */
export default function PlanTripPage() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const { inferredInterests, tier } = usePersonalization();

  const inferredStyles = useMemo(() => {
    if (!user?.experiences) return [];
    const mapping: Record<string, string> = {
      "Nature & Outdoors": "nature",
      "Cultural & Historic": "cultural",
      "Food & Culinary": "food",
      "Hidden Gems": "hidden-gems",
      "Bucket List Experiences": "adventure",
      "Entertainment & Music": "relaxation",
      "Top Activities": "adventure",
      "Attractions & Tickets": "photography",
      "Family Friendly": "group",
      "Nightlife": "relaxation",
    };
    const styles = user.experiences.map((e) => mapping[e]).filter(Boolean) as string[];
    if (user.adventureLevel >= 7 && !styles.includes("adventure")) styles.push("adventure");
    if (user.cultureLevel >= 7 && !styles.includes("cultural")) styles.push("cultural");
    if (user.companions?.includes("With Partner") && !styles.includes("romantic")) styles.push("romantic");
    return [...new Set(styles)];
  }, [user]);

  const guestPreselectedStyles = useMemo(() => {
    if (isAuthenticated || tier !== "implicit") return [];
    return inferredInterests.map((cat) => IMPLICIT_CAT_TO_STYLE[cat]).filter(Boolean) as string[];
  }, [inferredInterests, isAuthenticated, tier]);

  const hasGuestPreselection = guestPreselectedStyles.length > 0;
  const hasAuthPreselection = isAuthenticated && inferredStyles.length > 0;

  /* ── State ── */
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [destination, setDestination] = useState("");
  const [durationPreset, setDurationPreset] = useState("");
  const [companion, setCompanion] = useState("");
  const [selectedStyles, setSelectedStyles] = useState<string[]>(
    isAuthenticated ? inferredStyles : guestPreselectedStyles
  );
  const [pace, setPace] = useState("balanced");
  const [budget, setBudget] = useState("");
  const [mustSee, setMustSee] = useState("");
  const [avoidNotes, setAvoidNotes] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [processingMsgIdx, setProcessingMsgIdx] = useState(0);

  const totalSteps = 3;

  /* ── Navigation ── */
  const goNext = useCallback(() => { setDirection(1); setStep((s) => Math.min(s + 1, totalSteps - 1)); }, []);
  const goBack = useCallback(() => { setDirection(-1); setStep((s) => Math.max(s - 1, 0)); }, []);
  const toggleStyle = useCallback((id: string) => {
    setSelectedStyles((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  }, []);

  const canProceed = () => {
    switch (step) {
      case 0: return destination.trim().length > 0 && durationPreset.length > 0 && companion.length > 0;
      case 1: return selectedStyles.length > 0 && budget.length > 0;
      case 2: return true;
      default: return true;
    }
  };

  /* ── Computed values ── */
  const nightCount = durationPresets.find((d) => d.id === durationPreset)?.nights ?? 0;
  const durationLabel = durationPresets.find((d) => d.id === durationPreset)?.label ?? "";
  const firstName = user?.firstName;

  const primaryStyle = useMemo(
    () => travelStyles.find((s) => s.id === selectedStyles[0])?.label ?? "adventure",
    [selectedStyles]
  );

  const processingMessages = useMemo(
    () => buildProcessingMessages(destination || "your destination", companion, primaryStyle),
    [destination, companion, primaryStyle]
  );

  /* ── Processing logic ── */
  const startGenerating = useCallback(() => {
    setGenerating(true);
    setProgress(0);
    setProcessingMsgIdx(0);
  }, []);

  useEffect(() => {
    if (!generating) return;
    const id = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 10 + 3, 100);
        if (next >= 100) {
          clearInterval(id);
          setTimeout(() => { setGenerating(false); setGenerated(true); }, 400);
        }
        return next;
      });
    }, 200);
    return () => clearInterval(id);
  }, [generating]);

  useEffect(() => {
    if (!generating) return;
    const id = setInterval(() => {
      setProcessingMsgIdx((i) => (i + 1) % processingMessages.length);
    }, 900);
    return () => clearInterval(id);
  }, [generating, processingMessages.length]);

  const handleGenerateClick = useCallback(() => {
    if (!isAuthenticated) { setShowRegistrationModal(true); }
    else { startGenerating(); }
  }, [isAuthenticated, startGenerating]);

  /* ── Find best-matching destinations ── */
  const bestMatch = useMemo(() => {
    return (
      destinations.find((d) =>
        d.location.toLowerCase().includes(destination.toLowerCase()) ||
        destination.toLowerCase().includes(d.country.toLowerCase()) ||
        destination.toLowerCase().includes(d.location.split(",")[0].toLowerCase())
      ) || destinations[0]
    );
  }, [destination]);

  const wantsLocalGems = selectedStyles.includes("hidden-gems") || selectedStyles.includes("cultural");

  const resultDestinations = useMemo(() => {
    if (wantsLocalGems) {
      const gems = destinations.filter((d) =>
        d.categories.includes("Hidden Gems") || d.categories.includes("Cultural & Historic")
      );
      if (gems.length >= 3) return gems.slice(0, 3);
    }
    const regional = destinations.filter((d) => d.countrySlug === bestMatch.countrySlug);
    return regional.length >= 2
      ? regional.slice(0, 3)
      : [bestMatch, ...destinations.filter((d) => d.id !== bestMatch.id).slice(0, 2)];
  }, [bestMatch, wantsLocalGems]);

  const daySchedule = useMemo(() => {
    const days = [];
    for (let i = 0; i < Math.min(nightCount, 5); i++) {
      days.push({ dayNum: i + 1, label: `Day ${i + 1}`, dest: resultDestinations[i % resultDestinations.length] });
    }
    return days;
  }, [nightCount, resultDestinations]);

  const handleShare = async () => {
    const shareData = {
      title: `Wayfarer Trip: ${destination}`,
      text: `Check out my AI-curated trip to ${destination} on Wayfarer!`,
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

  const handleClose = () => navigate("/");

  const handleReset = () => {
    setGenerated(false);
    setStep(0);
    setDestination("");
    setDurationPreset("");
    setCompanion("");
    setSelectedStyles(isAuthenticated ? inferredStyles : guestPreselectedStyles);
    setPace("balanced");
    setBudget("");
    setMustSee("");
    setAvoidNotes("");
    setProgress(0);
  };

  const stepActionLabels = [
    "Choose travel style",
    "Personalise my trip",
    "Generate my itinerary",
  ];

  const companionTripLabel: Record<string, string> = {
    solo: "solo escape",
    couple: "romantic escape",
    friends: "trip with friends",
    family: "family adventure",
  };

  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden bg-surface font-body">
      <WayfarerNavbar />

      <main className="relative flex-1 flex items-start justify-center">
        {/* Background */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={bgImage}
            alt="Mountain landscape background"
            className="absolute inset-0 object-cover size-full"
          />
          <div className="absolute inset-0 bg-foreground/20" />
        </div>

        {/* Registration Bridge Modal */}
        <AnimatePresence>
          {showRegistrationModal && (
            <RegistrationBridgeModal
              destination={destination}
              onCreateAccount={() => navigate("/signup")}
              onSkip={() => { setShowRegistrationModal(false); startGenerating(); }}
            />
          )}
        </AnimatePresence>

        {/* Wizard card */}
        <motion.div
          className="relative z-10 w-full max-w-[680px] bg-surface rounded-2xl overflow-hidden"
          style={{ boxShadow: "var(--shadow-card-elevated)", margin: "clamp(24px, 5vw, 48px) 16px" }}
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center px-6 sm:px-10 pt-6 pb-8 gap-(--space-stack-md)">
            {/* Close */}
            <div className="flex justify-end w-full">
              <button
                onClick={handleClose}
                className="text-foreground hover:text-primary transition-colors rounded-full p-1 outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close"
              >
                <X className="size-6" strokeWidth={1.8} />
              </button>
            </div>

            {/* ══════════ WIZARD FLOW ══════════ */}
            {!generating && !generated && (
              <>
                {/* AI badge + Step header */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    className="flex flex-col items-center gap-3 text-center"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step === 0 && (
                      <div
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)",
                          border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
                        }}
                      >
                        <Sparkles className="size-3.5" style={{ color: "var(--accent)" }} strokeWidth={1.8} />
                        <span
                          className="font-body text-caption"
                          style={{ color: "var(--accent)", fontWeight: "var(--font-weight-medium)" }}
                        >
                          AI Travel Concierge
                        </span>
                      </div>
                    )}
                    <h1 className="font-heading text-foreground font-bold text-title-1 leading-title-1">
                      {step === 0
                        ? isAuthenticated && firstName
                          ? `Hi ${firstName}, where next?`
                          : "Where are you headed?"
                        : step === 1
                          ? "How do you like to travel?"
                          : "Add a personal touch"}
                    </h1>
                    <p className="font-body text-foreground/80 text-body-sm leading-body-sm">
                      {step === 0
                        ? "Choose your destination, trip length and who's coming."
                        : step === 1
                          ? hasGuestPreselection
                            ? "Pre-selected from your recent browsing — adjust as you like."
                            : hasAuthPreselection
                              ? "Based on your Wayfarer profile — customise to your taste."
                              : "Your travel style, pace and budget help us personalise everything."
                          : "These details are optional but make your itinerary much richer."}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Progress dots */}
                <ProgressIndicator currentStep={step} />

                {/* Live summary strip */}
                {step > 0 && (
                  <TripSummaryStrip
                    destination={destination}
                    durationPreset={durationPreset}
                    companion={companion}
                    selectedStyles={selectedStyles}
                    budget={budget}
                    showStylesAndBudget={step > 1}
                  />
                )}

                {/* Step content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    className="w-full"
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* ── Step 0: Where & When ── */}
                    {step === 0 && (
                      <div className="flex flex-col gap-6">
                        {/* Destination */}
                        <div className="flex flex-col gap-2">
                          <span className="font-body font-bold text-body" style={{ color: "var(--card-foreground)" }}>
                            Where are you going?
                          </span>
                          <DestinationCombobox value={destination} onChange={setDestination} />
                        </div>

                        {/* Duration */}
                        <div className="flex flex-col gap-2">
                          <span className="font-body font-bold text-body" style={{ color: "var(--card-foreground)" }}>
                            How long is the trip?
                          </span>
                          <DurationChips value={durationPreset} onChange={setDurationPreset} />
                        </div>

                        {/* Companion */}
                        <div className="flex flex-col gap-2">
                          <span className="font-body font-bold text-body" style={{ color: "var(--card-foreground)" }}>
                            Who's coming?
                          </span>
                          <CompanionPicker value={companion} onChange={setCompanion} />
                        </div>
                      </div>
                    )}

                    {/* ── Step 1: How You Travel ── */}
                    {step === 1 && (
                      <div className="flex flex-col gap-6">
                        {/* Travel styles */}
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-col gap-1">
                            <span className="font-body font-bold text-body" style={{ color: "var(--card-foreground)" }}>
                              What kind of experiences do you enjoy?
                            </span>
                            {(hasGuestPreselection || hasAuthPreselection) && (
                              <motion.div
                                className="flex items-center gap-1.5 mt-0.5"
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <Sparkles className="size-3.5 shrink-0" style={{ color: "var(--accent)" }} strokeWidth={1.8} />
                                <span className="font-body text-caption" style={{ color: "var(--accent)", fontStyle: "italic" }}>
                                  {hasGuestPreselection
                                    ? "Pre-selected from your recent inspiration browsing"
                                    : "Pre-applied from your Wayfarer profile — adjust as needed"}
                                </span>
                              </motion.div>
                            )}
                            <span className="font-body text-caption mt-0.5" style={{ color: "var(--muted-foreground)" }}>
                              Choose all that apply.
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {travelStyles.map((style) => (
                              <ToggleChip
                                key={style.id}
                                label={style.label}
                                icon={style.icon}
                                selected={selectedStyles.includes(style.id)}
                                preSelected={
                                  !isAuthenticated
                                    ? guestPreselectedStyles.includes(style.id)
                                    : inferredStyles.includes(style.id)
                                }
                                onToggle={() => toggleStyle(style.id)}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Pace */}
                        <div className="flex flex-col gap-2">
                          <span className="font-body font-bold text-body" style={{ color: "var(--card-foreground)" }}>
                            What's your travel pace?
                          </span>
                          <PacePicker value={pace} onChange={setPace} />
                        </div>

                        {/* Budget */}
                        <div className="flex flex-col gap-3">
                          <span className="font-body font-bold text-body" style={{ color: "var(--card-foreground)" }}>
                            What's your comfort level?
                          </span>
                          <div className="flex flex-col gap-2.5">
                            {budgetOptions.map((opt) => (
                              <BudgetCard
                                key={opt.id}
                                label={opt.label}
                                sub={opt.sub}
                                range={opt.range}
                                icon={opt.icon}
                                selected={budget === opt.id}
                                onSelect={() => setBudget(opt.id)}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ── Step 2: Personal Touch ── */}
                    {step === 2 && (
                      <div className="flex flex-col gap-5">
                        {/* AI insight callout */}
                        <motion.div
                          className="flex items-start gap-3 px-4 py-3 rounded-xl"
                          style={{
                            backgroundColor: "color-mix(in srgb, var(--accent) 8%, transparent)",
                            border: "1.5px solid color-mix(in srgb, var(--accent) 18%, transparent)",
                          }}
                          initial={{ opacity: 0, scale: 0.97 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          <Sparkles className="size-4 shrink-0 mt-0.5" style={{ color: "var(--accent)" }} strokeWidth={1.8} />
                          <p className="font-body text-body-sm" style={{ color: "var(--accent)", fontWeight: "var(--font-weight-medium)" }}>
                            Your AI concierge is ready. These optional details help us go beyond the typical tourist route.
                          </p>
                        </motion.div>

                        {/* Must-see */}
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-2">
                            <label className="font-body font-bold text-body" style={{ color: "var(--card-foreground)" }}>
                              Any must-see places or experiences?
                            </label>
                            <span
                              className="font-body text-caption px-1.5 py-0.5 rounded-full"
                              style={{ backgroundColor: "var(--muted)", color: "var(--muted-foreground)" }}
                            >
                              Optional
                            </span>
                          </div>
                          <FocusableTextarea
                            value={mustSee}
                            onChange={setMustSee}
                            rows={2}
                            placeholder="e.g. Sagrada Família, local food markets, a cooking class..."
                          />
                        </div>

                        {/* Avoid */}
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-2">
                            <label className="font-body font-bold text-body" style={{ color: "var(--card-foreground)" }}>
                              Anything to avoid?
                            </label>
                            <span
                              className="font-body text-caption px-1.5 py-0.5 rounded-full"
                              style={{ backgroundColor: "var(--muted)", color: "var(--muted-foreground)" }}
                            >
                              Optional
                            </span>
                          </div>
                          <span className="font-body text-caption" style={{ color: "var(--muted-foreground)" }}>
                            Dietary needs, accessibility requirements, crowd sensitivity
                          </span>
                          <FocusableTextarea
                            value={avoidNotes}
                            onChange={setAvoidNotes}
                            rows={2}
                            placeholder="e.g. vegetarian only, avoid very crowded spots, no extreme sports..."
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation buttons */}
                <div className="w-full flex items-center justify-center gap-3 mt-2">
                  {step > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        onClick={goBack}
                        variant="outline"
                        className="font-heading h-[48px] px-6 rounded-full gap-2 border-border text-card-foreground hover:bg-muted transition-colors font-bold"
                      >
                        <ArrowLeft className="size-4" />
                        Back
                      </Button>
                    </motion.div>
                  )}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      onClick={step === totalSteps - 1 ? handleGenerateClick : goNext}
                      disabled={!canProceed()}
                      className="font-heading h-[48px] px-8 rounded-full gap-2 bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta)] hover:opacity-90 transition-opacity disabled:opacity-40 font-bold"
                    >
                      {step === totalSteps - 1 && <Sparkles className="size-4" />}
                      {stepActionLabels[step]}
                      {step < totalSteps - 1 && <ArrowRight className="size-4" />}
                    </Button>
                  </motion.div>
                </div>
              </>
            )}

            {/* ══════════ GENERATING STATE ══════════ */}
            {generating && (
              <motion.div
                className="flex flex-col items-center justify-center text-center py-8 w-full"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Animated rings */}
                <div className="relative size-20 mb-(--space-stack-md)">
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ border: "2px solid", borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)" }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute inset-2 rounded-full"
                    style={{ border: "2px solid", borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)" }}
                    animate={{ scale: [1, 1.15, 1], opacity: [0.7, 0.1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}
                  />
                  <div
                    className="absolute inset-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)" }}
                  >
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
                      <Sparkles className="size-6" style={{ color: "var(--accent)" }} strokeWidth={1.8} />
                    </motion.div>
                  </div>
                </div>

                <h2 className="font-heading text-foreground font-semibold text-title-2 mb-(--space-stack-xs)">
                  {isAuthenticated && firstName ? `Crafting your trip, ${firstName}...` : "Crafting your itinerary..."}
                </h2>
                <p className="font-body text-muted-foreground text-body-sm mb-6">
                  Your {durationLabel.toLowerCase()}{" "}
                  <span style={{ color: "var(--card-foreground)", fontWeight: "var(--font-weight-medium)" }}>
                    {companionTripLabel[companion] || "trip"}
                  </span>{" "}
                  to <strong style={{ color: "var(--card-foreground)" }}>{destination}</strong>
                </p>

                {/* Progress bar */}
                <div className="w-full max-w-[360px]">
                  <div className="flex justify-between mb-1.5">
                    <span className="font-body text-caption" style={{ color: "var(--muted-foreground)" }}>Processing</span>
                    <span className="font-body text-caption font-bold" style={{ color: "var(--accent)" }}>
                      {Math.round(Math.min(progress, 100))}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: "linear-gradient(to right, var(--accent), color-mix(in srgb, var(--accent) 70%, var(--primary)))",
                        width: `${Math.min(progress, 100)}%`,
                      }}
                      transition={{ duration: 0.15 }}
                    />
                  </div>
                  <div className="h-10 flex items-center justify-center mt-3">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={processingMsgIdx}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                      >
                        {([
                          <Compass key="c" className="size-3 mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />,
                          <Sparkles key="s" className="size-3 mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />,
                          <Heart key="h" className="size-3 mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />,
                          <MapPin key="m" className="size-3 mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />,
                          <Star key="st" className="size-3 mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />,
                          <Globe key="g" className="size-3 mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />,
                        ] as React.ReactElement[])[processingMsgIdx % 6]}
                        <p className="font-body text-caption text-left" style={{ color: "var(--muted-foreground)", fontStyle: "italic" }}>
                          {processingMessages[processingMsgIdx]}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ══════════ RESULTS ══════════ */}
            {generated && (
              <motion.div
                className="flex flex-col items-center w-full gap-(--space-stack-md)"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProgressIndicator currentStep={totalSteps - 1} isComplete />

                {/* Success header */}
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="size-10 rounded-full bg-success/12 flex items-center justify-center">
                    <Check className="size-5 text-success" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="font-heading text-foreground font-bold text-title-1 leading-title-1">
                      Your trip is ready!
                    </h2>
                    <p className="font-body text-foreground/80 mx-auto max-w-[480px] text-body-sm leading-body-sm mt-(--space-stack-xs)">
                      A {nightCount}-night {companionTripLabel[companion] || "trip"} to{" "}
                      <strong>{bestMatch.country}</strong> tailored for{" "}
                      {selectedStyles
                        .slice(0, 2)
                        .map((s) => travelStyles.find((t) => t.id === s)?.label)
                        .filter(Boolean)
                        .join(" & ")}{" "}
                      lovers.
                    </p>
                  </div>
                </div>

                {/* Summary badges */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <Badge variant="outline" className="rounded-full px-3 py-1.5 font-body text-caption" style={{ borderColor: "var(--border)", color: "var(--card-foreground)" }}>
                    <MapPin className="size-3 mr-1" />{destination}
                  </Badge>
                  <Badge variant="outline" className="rounded-full px-3 py-1.5 font-body text-caption" style={{ borderColor: "var(--border)", color: "var(--card-foreground)" }}>
                    <Clock className="size-3 mr-1" />{durationLabel}
                  </Badge>
                  {companion && (
                    <Badge variant="outline" className="rounded-full px-3 py-1.5 font-body text-caption" style={{ borderColor: "var(--border)", color: "var(--card-foreground)" }}>
                      {companionOptions.find((c) => c.id === companion)?.label}
                    </Badge>
                  )}
                  {selectedStyles.slice(0, 2).map((s) => {
                    const style = travelStyles.find((ts) => ts.id === s);
                    return (
                      <Badge key={s} variant="outline" className="rounded-full px-3 py-1.5 font-body text-caption" style={{ borderColor: "var(--border)", color: "var(--card-foreground)" }}>
                        {style?.label}
                      </Badge>
                    );
                  })}
                </div>

                {/* Local gems indicator */}
                {wantsLocalGems && (
                  <motion.div
                    className="flex items-center gap-2 rounded-xl px-4 py-2.5 w-full"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)",
                      border: "1.5px solid color-mix(in srgb, var(--accent) 25%, transparent)",
                    }}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.35 }}
                  >
                    <Gem className="size-4 shrink-0" style={{ color: "var(--accent)" }} strokeWidth={1.8} />
                    <p className="font-body text-body-sm" style={{ color: "var(--accent)", fontWeight: "var(--font-weight-medium)" }}>
                      Showing hyper-local experiences, off the tourist trail
                    </p>
                  </motion.div>
                )}

                <Separator className="bg-border w-full" />

                {/* Day-by-day */}
                <div className="w-full">
                  <span className="font-body font-bold text-body" style={{ color: "var(--card-foreground)" }}>
                    {wantsLocalGems ? "Local gems included" : "Top experiences included"}
                  </span>
                  <div className="flex flex-col gap-3 mt-3">
                    {(daySchedule.length > 0
                      ? daySchedule
                      : resultDestinations.map((dest, i) => ({ dayNum: i + 1, label: `Day ${i + 1}`, dest }))
                    ).map((item, i) => {
                      const matchPct = computeStyleMatch(item.dest.categories, selectedStyles);
                      const isHighMatch = matchPct >= 85;
                      return (
                        <motion.button
                          key={item.dest.id + i}
                          className="flex items-center gap-3 w-full rounded-[12px] border border-border bg-transparent px-3 py-2.5 text-left cursor-pointer outline-none transition-colors hover:border-primary/40 hover:bg-muted/40"
                          onClick={() => navigate(`/experience/${item.dest.slug}`)}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          whileHover={{ x: 3 }}
                        >
                          <div className="size-12 rounded-[8px] overflow-hidden shrink-0">
                            <img src={item.dest.image} alt={item.dest.title} className="size-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-body text-caption block mb-0.5" style={{ color: "var(--accent)", fontWeight: "var(--font-weight-medium)" }}>
                              {item.label}
                            </span>
                            <p className="font-heading text-card-foreground truncate font-semibold text-body-sm">{item.dest.title}</p>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <MapPin className="size-3" strokeWidth={1.8} />
                              <span className="font-body text-caption">{item.dest.location}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1 shrink-0">
                            <div
                              className="flex items-center gap-1 rounded-full px-2 py-0.5"
                              style={{
                                backgroundColor: isHighMatch
                                  ? "color-mix(in srgb, var(--accent) 12%, transparent)"
                                  : "color-mix(in srgb, var(--primary) 10%, transparent)",
                                border: "1px solid",
                                borderColor: isHighMatch
                                  ? "color-mix(in srgb, var(--accent) 30%, transparent)"
                                  : "color-mix(in srgb, var(--primary) 25%, transparent)",
                              }}
                            >
                              <span
                                className="font-body font-bold"
                                style={{ fontSize: "10px", color: isHighMatch ? "var(--accent)" : "var(--primary)", letterSpacing: "0.01em" }}
                              >
                                {matchPct}% match
                              </span>
                            </div>
                            <div className="flex items-center gap-0.5">
                              <Star className="size-3 text-warning fill-warning" />
                              <span className="font-body text-card-foreground text-caption font-medium">{item.dest.rating}</span>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 mt-2">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      onClick={() =>
                        navigate("/itinerary", {
                          state: { destination, selectedStyles, durationPreset, companion, pace, budget, nightCount, resultDestinations },
                        })
                      }
                      className="font-heading h-[48px] px-8 rounded-full gap-2 bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta)] hover:opacity-90 transition-opacity font-bold"
                    >
                      View full itinerary
                      <ArrowRight className="size-4" />
                    </Button>
                  </motion.div>
                  <Button
                    variant="outline"
                    onClick={handleShare}
                    className="font-heading h-[48px] px-6 rounded-full gap-2 border-border text-card-foreground hover:bg-muted font-bold"
                  >
                    <Share2 className="size-4" />
                    {copied ? "Copied!" : "Share trip"}
                  </Button>
                </div>

                <button
                  onClick={handleReset}
                  className="font-body underline cursor-pointer outline-none text-caption font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  Plan a different trip
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
