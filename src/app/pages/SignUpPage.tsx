import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { WayfarerNavbar } from "../components/WayfarerNavbar";
import { motion, AnimatePresence, useAnimate } from "motion/react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Slider } from "../components/ui/slider";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
  AlertCircle,
  Star,
  Compass,
  Home,
  Trophy,
  TreePine,
  Landmark,
  Music,
  Ticket,
  UtensilsCrossed,
  Moon,
  Gem,
  Heart,
  Users,
  UserPlus,
  MoreHorizontal,
  Car,
  Bus,
  Footprints,
  Bike,
  Plane,
  TrainFront,
  Mail,
  MapPin,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useAuth } from "../components/AuthContext";
import { usePersonalization } from "../components/PersonalizationContext";

import bgImage from "figma:asset/f5674fb8c81228aad16688b6e79873cbfc000594.jpg";

const steps = ["Personal Details", "Travel Preferences", "Other Preferences"];

/* ── Experience options ── */
const experiences = [
  { label: "Top Activities", icon: Star },
  { label: "Hidden Gems", icon: Gem },
  { label: "Family Friendly", icon: Home },
  { label: "Bucket List Experiences", icon: Trophy },
  { label: "Nature & Outdoors", icon: TreePine },
  { label: "Cultural & Historic", icon: Landmark },
  { label: "Entertainment & Music", icon: Music },
  { label: "Attractions & Tickets", icon: Ticket },
  { label: "Food & Culinary", icon: UtensilsCrossed },
  { label: "Nightlife", icon: Moon },
];

/* ── Companion options ── */
const companions = [
  { label: "Solo", icon: Compass },
  { label: "With Partner", icon: Heart },
  { label: "With Family", icon: Home },
  { label: "With Friends", icon: Users },
  { label: "With Organized Groups", icon: UserPlus },
  { label: "Other", icon: MoreHorizontal },
];

/* ── Travel mode options ── */
const travelModes = [
  { label: "Car", icon: Car },
  { label: "Public transport", icon: Bus },
  { label: "By Foot", icon: Footprints },
  { label: "Bicycle", icon: Bike },
  { label: "Plane", icon: Plane },
  { label: "Train", icon: TrainFront },
  { label: "Other", icon: MoreHorizontal },
];

/* ── Countries for country code ── */
const countryCodes = [
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+1", country: "United States", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
];

const residences = [
  "Singapore",
  "United States",
  "United Kingdom",
  "Australia",
  "Japan",
  "South Korea",
  "Germany",
  "France",
  "Italy",
  "Spain",
];

/* ── Progress Indicator ── */
function ProgressIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-between w-full max-w-[520px] mx-auto relative">
      {/* Progress lines behind dots */}
      <div className="absolute top-[10px] left-[54px] right-[54px] h-[2px] flex">
        <div
          className="flex-1 h-full transition-colors duration-300"
          style={{
            backgroundColor:
              currentStep > 0 ? "var(--accent)" : "var(--accent-muted)",
          }}
        />
        <div
          className="flex-1 h-full transition-colors duration-300"
          style={{
            backgroundColor:
              currentStep > 1 ? "var(--accent)" : "var(--accent-muted)",
          }}
        />
      </div>

      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center gap-1.5 z-10 w-[108px]">
          <div
            className="size-5 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              backgroundColor:
                i < currentStep
                  ? "var(--accent)"
                  : i === currentStep
                    ? "var(--accent-light)"
                    : "var(--accent-muted)",
              boxShadow:
                i === currentStep
                  ? "var(--shadow-dot-ring), var(--shadow-dot-glow)"
                  : i < currentStep
                    ? "var(--shadow-dot-glow)"
                    : "var(--shadow-inset-subtle-sm)",
            }}
          >
            {i < currentStep ? (
              <Check
                className="size-3"
                style={{ color: "var(--accent-foreground)" }}
                strokeWidth={3}
              />
            ) : i === currentStep ? (
              <div
                className="size-2.5 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
            ) : null}
          </div>
          <span
            className="font-body text-center whitespace-nowrap text-caption leading-caption"
            style={{
              fontWeight:
                i === currentStep
                  ? "var(--font-weight-bold)"
                  : "var(--font-weight-medium)",
              color:
                i <= currentStep
                  ? "var(--accent)"
                  : "var(--card-foreground)",
            }}
          >
            {step}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Toggle Chip ── */
function ToggleChip({
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
      className="flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer outline-none"
      style={{
        backgroundColor: selected ? "var(--accent-light)" : "var(--background)",
        borderColor: selected ? "var(--accent)" : "var(--border)",
        color: selected ? "var(--accent)" : "var(--card-foreground)",
        fontWeight: selected
          ? "var(--font-weight-bold)"
          : "var(--font-weight-medium)",
        fontSize: "var(--text-body-sm)",
        boxShadow: selected
          ? "var(--shadow-badge-active)"
          : "var(--shadow-badge)",
        transition: "background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s",
      }}
      whileHover={{
        backgroundColor: selected
          ? "#aed9df"
          : "#f3f4f5",
      }}
      whileTap={{ scale: 0.95 }}
      onFocus={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 2px var(--accent)`;
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = selected
          ? "var(--shadow-badge-active)"
          : "var(--shadow-badge)";
      }}
    >
      <Icon className="size-4" strokeWidth={selected ? 2.2 : 1.8} />
      {label}
    </motion.button>
  );
}

/* ── Range Slider with labels ── */
function LabeledSlider({
  label,
  lowLabel,
  highLabel,
  value,
  onChange,
}: {
  label: React.ReactNode;
  lowLabel: string;
  highLabel: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span
        className="font-body font-bold text-body"
        style={{
          color: "var(--card-foreground)",
        }}
      >
        {label}
      </span>
      <div
        className="font-body text-caption leading-caption"
        style={{
          color: "var(--muted-foreground)",
        }}
      >
        <p>0= {lowLabel}</p>
        <p>10= {highLabel}</p>
      </div>
      <div className="relative flex flex-col pb-6">
        <div className="flex items-center gap-3">
          <span
            className="font-body shrink-0 w-4 text-center text-body-sm font-medium"
            style={{
              color: "var(--muted-foreground)",
            }}
          >
            0
          </span>
          <Slider
            min={0}
            max={10}
            step={1}
            value={[value]}
            onValueChange={(v) => onChange(v[0])}
            className="flex-1 [&_[data-slot=slider-track]]:h-[2px] [&_[data-slot=slider-track]]:bg-border [&_[data-slot=slider-range]]:bg-accent [&_[data-slot=slider-thumb]]:size-3.5 [&_[data-slot=slider-thumb]]:border-0 [&_[data-slot=slider-thumb]]:bg-accent [&_[data-slot=slider-thumb]]:shadow-none"
          />
          <span
            className="font-body shrink-0 w-4 text-center text-body-sm font-medium"
            style={{
              color: "var(--muted-foreground)",
            }}
          >
            10
          </span>
        </div>
        <span
          className="font-body absolute bottom-0 text-caption font-bold"
          style={{
            color: "var(--accent)",
            left: `calc(1.75rem + ${value / 10} * (100% - 3.5rem))`,
            transform: "translateX(-50%)",
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

/* ── Required field mark ── */
function RequiredMark() {
  return (
    <sup
      aria-hidden="true"
      style={{
        fontSize: "0.65em",
        color: "var(--destructive)",
        position: "relative",
        top: "-0.25em",
        lineHeight: 0,
        marginLeft: "0.1em",
      }}
    >
      *
    </sup>
  );
}

/* ── Step 1: Personal Details ── */
function StepPersonalDetails({
  data,
  setData,
  fieldErrors,
  shakeKey,
}: {
  data: Record<string, string>;
  setData: (d: Record<string, string>) => void;
  fieldErrors: Record<string, string>;
  shakeKey: number;
}) {
  const update = (key: string, val: string) =>
    setData({ ...data, [key]: val });

  const labelStyle = (errKey: string): React.CSSProperties => ({
    fontSize: "var(--text-body-sm)",
    color: fieldErrors[errKey] ? "var(--destructive)" : "var(--card-foreground)",
    fontWeight: "var(--font-weight-medium)",
    transition: "color 0.2s",
  });

  const inputBorder = (errKey: string): React.CSSProperties => ({
    borderWidth: "1.5px",
    ...(fieldErrors[errKey] ? { borderColor: "var(--destructive)" } : {}),
    transition: "border-color 0.2s",
  });

  return (
    <div className="flex flex-col gap-5">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FieldWrapper fieldKey="firstName" hasError={!!fieldErrors.firstName} shakeKey={shakeKey}>
          <Label className="font-body" style={labelStyle("firstName")}>First name<RequiredMark /></Label>
          <Input
            placeholder="Enter your first name"
            value={data.firstName || ""}
            onChange={(e) => update("firstName", e.target.value)}
            className="h-[40px] border-border bg-surface text-foreground placeholder:text-muted-foreground"
            style={inputBorder("firstName")}
          />
          <FieldErrorMessage message={fieldErrors.firstName} />
        </FieldWrapper>

        <FieldWrapper fieldKey="lastName" hasError={!!fieldErrors.lastName} shakeKey={shakeKey}>
          <Label className="font-body" style={labelStyle("lastName")}>Last name<RequiredMark /></Label>
          <Input
            placeholder="Enter your last name"
            value={data.lastName || ""}
            onChange={(e) => update("lastName", e.target.value)}
            className="h-[40px] border-border bg-surface text-foreground placeholder:text-muted-foreground"
            style={inputBorder("lastName")}
          />
          <FieldErrorMessage message={fieldErrors.lastName} />
        </FieldWrapper>
      </div>

      {/* DOB + Residence */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FieldWrapper fieldKey="dob" hasError={!!fieldErrors.dob} shakeKey={shakeKey}>
          <Label className="font-body" style={labelStyle("dob")}>Date of birth<RequiredMark /></Label>
          <div className="grid grid-cols-3 gap-2">
            <Select value={data.dobDay || ""} onValueChange={(v) => update("dobDay", v)}>
              <SelectTrigger className="h-[40px] border-border bg-surface" style={inputBorder("dob")}>
                <SelectValue placeholder="DD" />
              </SelectTrigger>
              <SelectContent side="bottom" position="popper" avoidCollisions={false}>
                {Array.from({ length: 31 }, (_, i) => (
                  <SelectItem key={i + 1} value={String(i + 1).padStart(2, "0")}>
                    {String(i + 1).padStart(2, "0")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={data.dobMonth || ""} onValueChange={(v) => update("dobMonth", v)}>
              <SelectTrigger className="h-[40px] border-border bg-surface" style={inputBorder("dob")}>
                <SelectValue placeholder="MM" />
              </SelectTrigger>
              <SelectContent side="bottom" position="popper" avoidCollisions={false}>
                {Array.from({ length: 12 }, (_, i) => (
                  <SelectItem key={i + 1} value={String(i + 1).padStart(2, "0")}>
                    {String(i + 1).padStart(2, "0")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={data.dobYear || ""} onValueChange={(v) => update("dobYear", v)}>
              <SelectTrigger className="h-[40px] border-border bg-surface" style={inputBorder("dob")}>
                <SelectValue placeholder="YY" />
              </SelectTrigger>
              <SelectContent side="bottom" position="popper" avoidCollisions={false}>
                {Array.from({ length: 80 }, (_, i) => {
                  const yr = 2026 - i;
                  return <SelectItem key={yr} value={String(yr)}>{yr}</SelectItem>;
                })}
              </SelectContent>
            </Select>
          </div>
          <FieldErrorMessage message={fieldErrors.dob} />
        </FieldWrapper>

        <FieldWrapper fieldKey="residence" hasError={!!fieldErrors.residence} shakeKey={shakeKey}>
          <Label className="font-body" style={labelStyle("residence")}>Place of residence<RequiredMark /></Label>
          <Select value={data.residence || ""} onValueChange={(v) => update("residence", v)}>
            <SelectTrigger className="h-[40px] border-border bg-surface" style={inputBorder("residence")}>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent side="bottom" position="popper">
              {residences.map((r) => (
                <SelectItem key={r} value={r}>{r}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldErrorMessage message={fieldErrors.residence} />
        </FieldWrapper>
      </div>

      {/* Country code + Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label
            className="font-body text-body-sm font-medium"
            style={{ color: "var(--card-foreground)" }}
          >
            Country/Region code<RequiredMark />
          </Label>
          <Select value={data.countryCode || "+65"} onValueChange={(v) => update("countryCode", v)}>
            <SelectTrigger className="h-[40px] border-border bg-surface" style={{ borderWidth: "1.5px" }}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {countryCodes.map((c) => (
                <SelectItem key={c.code} value={c.code}>
                  {c.flag} {c.code} ({c.country})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <FieldWrapper fieldKey="mobile" hasError={!!fieldErrors.mobile} shakeKey={shakeKey}>
          <Label className="font-body" style={labelStyle("mobile")}>Mobile number<RequiredMark /></Label>
          <Input
            placeholder={data.countryCode || "+65"}
            value={data.mobile || ""}
            onChange={(e) => update("mobile", e.target.value)}
            className="h-[40px] border-border bg-surface text-foreground placeholder:text-muted-foreground"
            style={inputBorder("mobile")}
          />
          <FieldErrorMessage message={fieldErrors.mobile} />
        </FieldWrapper>
      </div>

      {/* Email */}
      <FieldWrapper fieldKey="email" hasError={!!fieldErrors.email} shakeKey={shakeKey}>
        <Label className="font-body" style={labelStyle("email")}>Email address<RequiredMark /></Label>
        <div className="relative">
          <div
            className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-colors"
            style={{ color: fieldErrors.email ? "var(--destructive)" : "var(--muted-foreground)" }}
          >
            <Mail className="size-4" strokeWidth={1.8} />
          </div>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={data.email || ""}
            onChange={(e) => update("email", e.target.value)}
            className="h-[40px] pl-10 border-border bg-surface text-foreground placeholder:text-muted-foreground"
            style={inputBorder("email")}
          />
        </div>
        <FieldErrorMessage message={fieldErrors.email} />
      </FieldWrapper>

      {/* Password */}
      <FieldWrapper fieldKey="password" hasError={!!fieldErrors.password} shakeKey={shakeKey}>
        <Label className="font-body" style={labelStyle("password")}>Create password<RequiredMark /></Label>
        <Input
          type="password"
          placeholder="Enter your password"
          value={data.password || ""}
          onChange={(e) => update("password", e.target.value)}
          className="h-[40px] border-border bg-surface text-foreground placeholder:text-muted-foreground"
          style={inputBorder("password")}
        />
        {fieldErrors.password ? (
          <FieldErrorMessage message={fieldErrors.password} />
        ) : (
          <span className="font-body text-caption" style={{ color: "var(--muted-foreground)" }}>
            Must be at least <strong style={{ color: "var(--accent)" }}>6</strong> characters
          </span>
        )}
      </FieldWrapper>
    </div>
  );
}

/* ── Step 2: Travel Preferences ── */
function StepTravelPreferences({
  selectedExperiences,
  setSelectedExperiences,
  adventureLevel,
  setAdventureLevel,
  cultureLevel,
  setCultureLevel,
}: {
  selectedExperiences: string[];
  setSelectedExperiences: (v: string[]) => void;
  adventureLevel: number;
  setAdventureLevel: (v: number) => void;
  cultureLevel: number;
  setCultureLevel: (v: number) => void;
}) {
  const toggleExperience = (label: string) => {
    setSelectedExperiences(
      selectedExperiences.includes(label)
        ? selectedExperiences.filter((e) => e !== label)
        : [...selectedExperiences, label]
    );
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Experiences */}
      <div className="flex flex-col gap-2">
        <span
          className="font-body font-bold text-body"
          style={{
            color: "var(--card-foreground)",
          }}
        >
          What are your favourite experiences?<RequiredMark />
        </span>
        <span
          className="font-body text-caption"
          style={{
            color: "var(--muted-foreground)",
          }}
        >
          Choose all that apply.
        </span>
        <div className="flex flex-wrap gap-2 mt-1">
          {experiences.map((exp) => (
            <ToggleChip
              key={exp.label}
              label={exp.label}
              icon={exp.icon}
              selected={selectedExperiences.includes(exp.label)}
              onToggle={() => toggleExperience(exp.label)}
            />
          ))}
        </div>
      </div>

      {/* Adventure slider */}
      <LabeledSlider
        label={<>How adventurous are you?<RequiredMark /></>}
        lowLabel="I like to play it safe"
        highLabel="Maximum adventure"
        value={adventureLevel}
        onChange={setAdventureLevel}
      />

      {/* Culture slider */}
      <LabeledSlider
        label={<>How interested are you in local cultures?<RequiredMark /></>}
        lowLabel="Not interested at all"
        highLabel="Extremely interested"
        value={cultureLevel}
        onChange={setCultureLevel}
      />
    </div>
  );
}

/* ── Step 3: Other Preferences ── */
function StepOtherPreferences({
  selectedCompanions,
  setSelectedCompanions,
  selectedModes,
  setSelectedModes,
  otherModeText,
  setOtherModeText,
  healthCondition,
  setHealthCondition,
  keepUpdated,
  setKeepUpdated,
  agreeTerms,
  setAgreeTerms,
}: {
  selectedCompanions: string[];
  setSelectedCompanions: (v: string[]) => void;
  selectedModes: string[];
  setSelectedModes: (v: string[]) => void;
  otherModeText: string;
  setOtherModeText: (v: string) => void;
  healthCondition: string;
  setHealthCondition: (v: string) => void;
  keepUpdated: boolean;
  setKeepUpdated: (v: boolean) => void;
  agreeTerms: boolean;
  setAgreeTerms: (v: boolean) => void;
}) {
  const toggleCompanion = (label: string) => {
    setSelectedCompanions(
      selectedCompanions.includes(label)
        ? selectedCompanions.filter((c) => c !== label)
        : [...selectedCompanions, label]
    );
  };

  const toggleMode = (label: string) => {
    setSelectedModes(
      selectedModes.includes(label)
        ? selectedModes.filter((m) => m !== label)
        : [...selectedModes, label]
    );
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Companions */}
      <div className="flex flex-col gap-2">
        <span
          className="font-body font-bold text-body"
          style={{
            color: "var(--card-foreground)",
          }}
        >
          Who are your usual travel companions?<RequiredMark />
        </span>
        <span
          className="font-body text-caption"
          style={{
            color: "var(--muted-foreground)",
          }}
        >
          Choose all that apply.
        </span>
        <div className="flex flex-wrap gap-2 mt-1">
          {companions.map((c) => (
            <ToggleChip
              key={c.label}
              label={c.label}
              icon={c.icon}
              selected={selectedCompanions.includes(c.label)}
              onToggle={() => toggleCompanion(c.label)}
            />
          ))}
        </div>
      </div>

      {/* Travel modes */}
      <div className="flex flex-col gap-2">
        <span
          className="font-body font-bold text-body"
          style={{
            color: "var(--card-foreground)",
          }}
        >
          How do you prefer to travel?<RequiredMark />
        </span>
        <span
          className="font-body text-caption"
          style={{
            color: "var(--muted-foreground)",
          }}
        >
          Choose all that apply.
        </span>
        <div className="flex flex-wrap gap-2 mt-1">
          {travelModes.map((m) => (
            <ToggleChip
              key={m.label}
              label={m.label}
              icon={m.icon}
              selected={selectedModes.includes(m.label)}
              onToggle={() => toggleMode(m.label)}
            />
          ))}
        </div>
      </div>

      {/* Other mode textarea - shown when "Other" is selected */}
      {selectedModes.includes("Other") && (
        <Textarea
          placeholder="Specify your preferred mode..."
          value={otherModeText}
          onChange={(e) => setOtherModeText(e.target.value)}
          className="min-h-[80px] border-border bg-surface text-foreground placeholder:text-muted-foreground"
          style={{ borderWidth: "1.5px" }}
        />
      )}

      {/* Health condition */}
      <div className="flex flex-col gap-2">
        <span
          className="font-body font-bold text-body"
          style={{
            color: "var(--card-foreground)",
          }}
        >
          Do you have any health conditions we should consider?<RequiredMark />
        </span>
        <span
          className="font-body text-caption"
          style={{
            color: "var(--muted-foreground)",
          }}
        >
          Select one option.
        </span>
        <div className="flex gap-5 mt-1">
          {(["Yes", "No"] as const).map((option) => {
            const val = option.toLowerCase();
            const isSelected = healthCondition === val;
            return (
              <motion.button
                key={val}
                type="button"
                onClick={() => setHealthCondition(val)}
                className="flex items-center gap-2.5 cursor-pointer outline-none font-body text-body-sm"
                style={{
                  color: isSelected ? "var(--accent)" : "var(--card-foreground)",
                  fontWeight: isSelected ? "var(--font-weight-bold)" : "var(--font-weight-medium)",
                  transition: "color 0.2s",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Radio circle */}
                <div
                  className="size-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200"
                  style={{
                    borderColor: isSelected ? "var(--accent)" : "var(--border)",
                    backgroundColor: "var(--background)",
                  }}
                >
                  {isSelected && (
                    <motion.div
                      className="size-2 rounded-full"
                      style={{ backgroundColor: "var(--accent)" }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    />
                  )}
                </div>
                {option}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Checkboxes */}
      <div className="flex flex-col gap-3 mt-2">
        <div className="flex items-start gap-2.5">
          <Checkbox
            checked={keepUpdated}
            onCheckedChange={(c) => setKeepUpdated(c === true)}
            id="updates"
            className="mt-0.5"
          />
          <Label
            htmlFor="updates"
            className="font-body cursor-pointer text-body-sm font-normal"
            style={{
              color: "var(--card-foreground)",
            }}
          >
            Keep me updated with Wayfarer's latest travel tips and
            recommendations.
          </Label>
        </div>
        <div className="flex items-start gap-2.5">
          <Checkbox
            checked={agreeTerms}
            onCheckedChange={(c) => setAgreeTerms(c === true)}
            id="terms"
            className="mt-0.5"
          />
          <Label
            htmlFor="terms"
            className="font-body cursor-pointer text-body-sm font-normal"
            style={{
              color: "var(--card-foreground)",
            }}
          >
            I agree to the{" "}
            <span
              className="underline cursor-pointer"
              style={{ color: "var(--accent)" }}
            >
              Terms & Conditions.
            </span>
          </Label>
        </div>
      </div>
    </div>
  );
}

/* ── Validation helpers ── */
function validateStep1(data: Record<string, string>): string[] {
  const errors: string[] = [];
  if (!data.firstName?.trim()) errors.push("First name is required.");
  if (!data.lastName?.trim()) errors.push("Last name is required.");
  if (!data.dobDay || !data.dobMonth || !data.dobYear)
    errors.push("Date of birth is required.");
  if (!data.residence) errors.push("Place of residence is required.");
  if (!data.mobile?.trim()) errors.push("Mobile number is required.");
  if (!data.email?.trim()) errors.push("Email address is required.");
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.push("Please enter a valid email address.");
  if (!data.password?.trim()) errors.push("Password is required.");
  else if (data.password.length < 6)
    errors.push("Password must be at least 6 characters.");
  return errors;
}

/* ── Field-level validation for step 1 ── */
function validateStep1Fields(data: Record<string, string>): Record<string, string> {
  const e: Record<string, string> = {};
  if (!data.firstName?.trim()) e.firstName = "First name is required";
  if (!data.lastName?.trim()) e.lastName = "Last name is required";
  if (!data.dobDay || !data.dobMonth || !data.dobYear) e.dob = "Date of birth is required";
  if (!data.residence) e.residence = "Place of residence is required";
  if (!data.mobile?.trim()) e.mobile = "Mobile number is required";
  if (!data.email?.trim()) e.email = "Email address is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Please enter a valid email";
  if (!data.password?.trim()) e.password = "Password is required";
  else if (data.password.length < 6) e.password = "Must be at least 6 characters";
  return e;
}

/* ── Shake wrapper — imperative animation, no remounting ── */
function FieldWrapper({
  fieldKey,
  hasError,
  shakeKey,
  children,
}: {
  fieldKey: string;
  hasError: boolean;
  shakeKey: number;
  children: React.ReactNode;
}) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (hasError && shakeKey > 0) {
      animate(scope.current, { x: [0, -7, 7, -5, 5, -3, 3, 0] }, { duration: 0.42, ease: "easeInOut" });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shakeKey]);
  return (
    <div ref={scope} className="flex flex-col gap-1.5">
      {children}
    </div>
  );
}

/* ── Inline field error message ── */
function FieldErrorMessage({ message }: { message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          key="err"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
          className="font-body flex items-center gap-1 text-caption leading-caption"
          style={{
            color: "var(--destructive)",
          }}
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

function validateStep2(selectedExperiences: string[]): string[] {
  const errors: string[] = [];
  if (selectedExperiences.length === 0)
    errors.push("Please select at least one experience.");
  return errors;
}

function validateStep3(
  selectedCompanions: string[],
  selectedModes: string[],
  agreeTerms: boolean
): string[] {
  const errors: string[] = [];
  if (selectedCompanions.length === 0)
    errors.push("Please select at least one travel companion.");
  if (selectedModes.length === 0)
    errors.push("Please select at least one travel mode.");
  if (!agreeTerms) errors.push("You must agree to the Terms & Conditions.");
  return errors;
}

/* ── Validation Error Banner ── */
function ValidationErrors({ errors }: { errors: string[] }) {
  if (errors.length === 0) return null;
  return (
    <motion.div
      className="w-full flex items-center justify-center gap-1.5"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <AlertCircle
        className="size-3.5 shrink-0"
        style={{ color: "var(--destructive)" }}
        strokeWidth={2}
      />
      <span
        className="font-body text-caption"
        style={{
          color: "var(--muted-foreground)",
          fontStyle: "italic",
        }}
      >
        {errors.length === 1
          ? "1 field needs attention"
          : `${errors.length} fields need attention`}
      </span>
    </motion.div>
  );
}

/* ── Main Signup Page ── */
export default function SignUpPage() {
  const navigate = useNavigate();
  const { signUp, isAuthenticated } = useAuth();
  const { setPendingOnboarding } = usePersonalization();
  const [currentStep, setCurrentStep] = useState(0);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [step1FieldErrors, setStep1FieldErrors] = useState<Record<string, string>>({});
  const [shakeKey, setShakeKey] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  // Step 1 state
  const [personalData, setPersonalData] = useState<Record<string, string>>({
    countryCode: "+65",
  });

  // Step 2 state
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([
    "Top Activities",
  ]);
  const [adventureLevel, setAdventureLevel] = useState(5);
  const [cultureLevel, setCultureLevel] = useState(5);

  // Step 3 state
  const [selectedCompanions, setSelectedCompanions] = useState<string[]>([
    "Solo",
  ]);
  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [otherModeText, setOtherModeText] = useState("");
  const [healthCondition, setHealthCondition] = useState("no");
  const [keepUpdated, setKeepUpdated] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const validateCurrentStep = (): string[] => {
    switch (currentStep) {
      case 0:
        return validateStep1(personalData);
      case 1:
        return validateStep2(selectedExperiences);
      case 2:
        return validateStep3(selectedCompanions, selectedModes, agreeTerms);
      default:
        return [];
    }
  };

  const handleNext = () => {
    if (currentStep === 0) {
      const fieldErrs = validateStep1Fields(personalData);
      setStep1FieldErrors(fieldErrs);
      setShakeKey((k) => k + 1);
      if (Object.keys(fieldErrs).length > 0) return;
      setStep1FieldErrors({});
    } else {
      const errors = validateCurrentStep();
      setValidationErrors(errors);
      if (errors.length > 0) return;
    }
    if (currentStep < 2) {
      setDirection(1);
      setCurrentStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    setValidationErrors([]);
    setStep1FieldErrors({});
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((s) => s - 1);
    }
  };

  const handleComplete = () => {
    const errors = validateCurrentStep();
    setValidationErrors(errors);
    if (errors.length > 0) return;

    // Build user profile from collected data
    signUp({
      firstName: personalData.firstName || "",
      lastName: personalData.lastName || "",
      email: personalData.email || "",
      password: personalData.password || "",
      mobile: personalData.mobile || "",
      countryCode: personalData.countryCode || "+65",
      residence: personalData.residence || "",
      dob: `${personalData.dobDay || ""}/${personalData.dobMonth || ""}/${personalData.dobYear || ""}`,
      experiences: selectedExperiences,
      adventureLevel,
      cultureLevel,
      companions: selectedCompanions,
      travelModes: selectedModes,
      healthCondition,
      keepUpdated,
    });

    // Trigger personalization onboarding after signup
    setPendingOnboarding(true);

    toast.success(`Welcome aboard, ${personalData.firstName || "Traveler"}! Your profile is ready.`, {
      duration: 3000,
    });
    navigate("/");
  };

  const handleClose = () => {
    navigate("/");
  };

  // Redirect if already signed up
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const stepTitles = [
    "Let's Begin Your Journey!",
    "Tell Us Your Preferences",
    "Ready for Adventure?",
  ];

  const stepSubtitles = [
    "Fill in your details to create your Wayfarer account.",
    "Help us understand your travel interests to personalize your experience.",
    "Let's wrap up your preferences!",
  ];

  const stepButtons = [
    { label: "Continue to Preferences", icon: ArrowRight },
    { label: "Save & Continue", icon: ArrowRight },
    { label: "Complete Profile", icon: null },
  ];

  return (
    <div
      className="flex flex-col w-full min-h-screen overflow-x-hidden bg-surface font-body"
    >
      <WayfarerNavbar />

      {/* Hero background with form overlay */}
      <main className="relative flex-1 flex items-start justify-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={bgImage}
            alt="Mountain landscape background"
            className="absolute inset-0 object-cover size-full"
          />
          <div className="absolute inset-0 bg-foreground/20" />
        </div>

        {/* Form card */}
        <motion.div
          className="relative z-10 w-full max-w-[680px] bg-surface rounded-2xl overflow-hidden"
          style={{
            boxShadow: "var(--shadow-card-elevated)",
            margin: "clamp(24px, 5vw, 48px) 16px",
          }}
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="flex flex-col items-center px-6 sm:px-10 pt-6 pb-8 gap-(--space-stack-md)"
          >
            {/* Close button */}
            <div className="flex justify-end w-full">
              <button
                onClick={handleClose}
                className="text-foreground hover:text-primary transition-colors rounded-full p-1 outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close"
              >
                <X className="size-6" strokeWidth={1.8} />
              </button>
            </div>

            <>
                {/* Header */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    className="flex flex-col items-center gap-3 text-center"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h1
                      className="font-heading text-foreground font-bold text-title-1 leading-title-1"
                    >
                      {stepTitles[currentStep]}
                    </h1>
                    <p
                      className="font-body text-foreground/80 text-body-sm leading-body-sm"
                    >
                      {stepSubtitles[currentStep]}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Progress */}
                <ProgressIndicator currentStep={currentStep} />

                {/* Validation errors — compact banner only for steps 1 & 2 */}
                <AnimatePresence>
                  {currentStep > 0 && validationErrors.length > 0 && (
                    <ValidationErrors errors={validationErrors} />
                  )}
                </AnimatePresence>

                {/* Step content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    className="w-full"
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {currentStep === 0 && (
                      <StepPersonalDetails
                        data={personalData}
                        setData={setPersonalData}
                        fieldErrors={step1FieldErrors}
                        shakeKey={shakeKey}
                      />
                    )}
                    {currentStep === 1 && (
                      <StepTravelPreferences
                        selectedExperiences={selectedExperiences}
                        setSelectedExperiences={setSelectedExperiences}
                        adventureLevel={adventureLevel}
                        setAdventureLevel={setAdventureLevel}
                        cultureLevel={cultureLevel}
                        setCultureLevel={setCultureLevel}
                      />
                    )}
                    {currentStep === 2 && (
                      <StepOtherPreferences
                        selectedCompanions={selectedCompanions}
                        setSelectedCompanions={setSelectedCompanions}
                        selectedModes={selectedModes}
                        setSelectedModes={setSelectedModes}
                        otherModeText={otherModeText}
                        setOtherModeText={setOtherModeText}
                        healthCondition={healthCondition}
                        setHealthCondition={setHealthCondition}
                        keepUpdated={keepUpdated}
                        setKeepUpdated={setKeepUpdated}
                        agreeTerms={agreeTerms}
                        setAgreeTerms={setAgreeTerms}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Action buttons */}
                <div className="w-full flex items-center justify-center gap-3 mt-2">
                  {currentStep > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        onClick={handleBack}
                        variant="outline"
                        className="font-heading h-[48px] px-6 rounded-full gap-2 border-border text-card-foreground hover:bg-muted transition-colors font-bold"
                      >
                        <ArrowLeft className="size-4" />
                        Back
                      </Button>
                    </motion.div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      onClick={currentStep === 2 ? handleComplete : handleNext}
                      className="font-heading h-[48px] px-8 rounded-full gap-2 bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta)] hover:opacity-90 transition-opacity font-bold"
                    >
                      {stepButtons[currentStep].label}
                      {stepButtons[currentStep].icon && (
                        <ArrowRight className="size-4" />
                      )}
                    </Button>
                  </motion.div>
                </div>

                {/* Login link */}
                {currentStep === 0 && (
                  <p
                    className="font-body text-center text-caption"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Already have an account?{" "}
                    <button
                      onClick={() => navigate("/login")}
                      className="underline cursor-pointer outline-none font-medium"
                      style={{ color: "var(--accent)" }}
                    >
                      Log in
                    </button>
                  </p>
                )}
            </>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
