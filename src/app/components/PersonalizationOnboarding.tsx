import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import {
  Compass,
  Mountain,
  Landmark,
  Gem,
  TreePine,
  Trophy,
  Star,
  Waves,
  ArrowRight,
  Sparkles,
  X,
} from "lucide-react";
import { cn } from "./ui/utils";
import { usePersonalization } from "./PersonalizationContext";
import { useAuth } from "./AuthContext";

// Destination category chips for the onboarding
const PASSION_OPTIONS = [
  { label: "Adventure Travel", icon: Mountain },
  { label: "Cultural & Historic", icon: Landmark },
  { label: "Hidden Gems", icon: Gem },
  { label: "Nature & Outdoors", icon: TreePine },
  { label: "Bucket List Experiences", icon: Trophy },
  { label: "Top Experiences", icon: Star },
  { label: "Top Attractions", icon: Compass },
  { label: "Trending", icon: Waves },
];

function PassionChip({
  label,
  icon: Icon,
  selected,
  onToggle,
}: {
  label: string;
  icon: React.ElementType;
  selected: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileTap={{ scale: 0.93 }}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer outline-none font-body transition-all",
        "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        selected
          ? "bg-accent-light border-2 border-accent text-accent"
          : "bg-surface border border-border text-card-foreground hover:bg-muted"
      )}
      style={{
        fontSize: "var(--text-body-sm)",
        fontWeight: selected ? "var(--font-weight-bold)" : "var(--font-weight-medium)",
        boxShadow: selected ? "var(--shadow-badge-active)" : "var(--shadow-badge)",
      }}
    >
      <Icon className="size-4 shrink-0" strokeWidth={selected ? 2.2 : 1.8} />
      {label}
    </motion.button>
  );
}

export function PersonalizationOnboarding() {
  const { completeOnboarding, pendingOnboarding, setPendingOnboarding } = usePersonalization();
  const { user } = useAuth();

  const [step, setStep] = useState<0 | 1>(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [immersion, setImmersion] = useState(user?.adventureLevel ?? 5);

  if (!pendingOnboarding || !user) return null;

  const toggle = (label: string) =>
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );

  const handleDismiss = () => {
    completeOnboarding(selected, immersion);
  };

  const handleSkip = () => {
    setPendingOnboarding(false);
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
          onClick={handleSkip}
          aria-hidden="true"
        />

        {/* Modal card */}
        <motion.div
          className="relative z-10 w-full max-w-[540px] bg-surface rounded-2xl overflow-hidden flex flex-col"
          style={{ boxShadow: "var(--shadow-card-elevated)" }}
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 16 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header bar */}
          <div
            className="flex items-center justify-between px-6 pt-5 pb-0"
          >
            {/* Step indicator */}
            <div className="flex items-center gap-1.5">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === step ? "20px" : "6px",
                    height: "6px",
                    backgroundColor:
                      i <= step ? "var(--accent)" : "var(--accent-muted)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={handleSkip}
              className="text-muted-foreground hover:text-foreground transition-colors rounded-full p-1 outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Skip personalization"
            >
              <X className="size-5" strokeWidth={1.8} />
            </button>
          </div>

          {/* Step content */}
          <div className="px-6 pt-4 pb-6 flex flex-col gap-5">
            <AnimatePresence mode="wait">
              {step === 0 ? (
                <motion.div
                  key="step0"
                  className="flex flex-col gap-5"
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -32 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Welcome header */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Sparkles
                        className="size-5 shrink-0"
                        style={{ color: "var(--accent)" }}
                        strokeWidth={1.8}
                      />
                      <span
                        className="font-body text-caption font-medium"
                        style={{ color: "var(--accent)" }}
                      >
                        Feed personalization
                      </span>
                    </div>
                    <h2
                      className="font-heading font-bold text-foreground text-title-2 leading-title-2"
                    >
                      Your feed is almost ready,{" "}
                      <span style={{ color: "var(--accent)" }}>{user.firstName}</span>!
                    </h2>
                    <p
                      className="font-body text-muted-foreground text-body-sm leading-body-sm"
                    >
                      Pick the types of destinations that excite you most.
                      We'll use this to rank your discovery feed.
                    </p>
                  </div>

                  {/* Category chips */}
                  <div>
                    <p
                      className="font-body font-medium text-body-sm mb-3"
                      style={{ color: "var(--card-foreground)" }}
                    >
                      What destinations excite you most?
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {PASSION_OPTIONS.map((opt) => (
                        <PassionChip
                          key={opt.label}
                          label={opt.label}
                          icon={opt.icon}
                          selected={selected.includes(opt.label)}
                          onToggle={() => toggle(opt.label)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <button
                      onClick={handleSkip}
                      className="font-body text-body-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2 outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                    >
                      Skip for now
                    </button>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        onClick={() => setStep(1)}
                        className="font-heading h-[44px] px-6 rounded-full gap-2 bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta)] hover:opacity-90 transition-opacity font-bold"
                      >
                        Next
                        <ArrowRight className="size-4" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step1"
                  className="flex flex-col gap-5"
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -32 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Immersion header */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Mountain
                        className="size-5 shrink-0"
                        style={{ color: "var(--accent)" }}
                        strokeWidth={1.8}
                      />
                      <span
                        className="font-body text-caption font-medium"
                        style={{ color: "var(--accent)" }}
                      >
                        Adventure depth
                      </span>
                    </div>
                    <h2
                      className="font-heading font-bold text-foreground text-title-2 leading-title-2"
                    >
                      How deep do you want to go?
                    </h2>
                    <p
                      className="font-body text-muted-foreground text-body-sm leading-body-sm"
                    >
                      This helps us tune how adventurous your recommendations are.
                    </p>
                  </div>

                  {/* Immersion slider */}
                  <div className="flex flex-col gap-3 py-2">
                    <div className="flex justify-between">
                      <span
                        className="font-body text-caption"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Relaxed & comfortable
                      </span>
                      <span
                        className="font-body text-caption"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Max adventure
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className="font-body w-4 text-center shrink-0 text-body-sm"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        0
                      </span>
                      <div className="relative flex-1">
                        <Slider
                          min={0}
                          max={10}
                          step={1}
                          value={[immersion]}
                          onValueChange={(v) => setImmersion(v[0])}
                          className="[&_[data-slot=slider-track]]:h-[3px] [&_[data-slot=slider-track]]:bg-border [&_[data-slot=slider-range]]:bg-accent [&_[data-slot=slider-thumb]]:size-4 [&_[data-slot=slider-thumb]]:border-0 [&_[data-slot=slider-thumb]]:bg-accent [&_[data-slot=slider-thumb]]:shadow-none"
                        />
                      </div>
                      <span
                        className="font-body w-4 text-center shrink-0 text-body-sm"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        10
                      </span>
                    </div>
                    {/* Immersion value display */}
                    <div className="flex justify-center">
                      <motion.span
                        key={immersion}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="font-heading font-bold"
                        style={{
                          fontSize: "var(--text-title-1)",
                          color: "var(--accent)",
                        }}
                      >
                        {immersion}
                        <span
                          className="font-body font-normal text-body ml-1"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          / 10
                        </span>
                      </motion.span>
                    </div>
                    {/* Immersion label */}
                    <div className="flex justify-center">
                      <span
                        className="font-body text-caption"
                        style={{ color: "var(--muted-foreground)", fontStyle: "italic" }}
                      >
                        {immersion <= 2
                          ? "Easy & comfortable experiences"
                          : immersion <= 4
                          ? "Mild adventures, comfort priority"
                          : immersion <= 6
                          ? "Balanced exploration"
                          : immersion <= 8
                          ? "Challenging & off-the-beaten-path"
                          : "Full immersion, nothing held back"}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <button
                      onClick={() => setStep(0)}
                      className="font-body text-body-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2 outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                    >
                      Back
                    </button>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        onClick={handleDismiss}
                        className="font-heading h-[44px] px-6 rounded-full gap-2 bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta)] hover:opacity-90 transition-opacity font-bold"
                      >
                        Start exploring
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
