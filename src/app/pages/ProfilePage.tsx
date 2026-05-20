import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { WayfarerNavbar } from "../components/WayfarerNavbar";
import { WayfarerFooter } from "../components/WayfarerFooter";
import { motion, AnimatePresence } from "motion/react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Slider } from "../components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  ArrowLeft,
  User,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Compass,
  Heart,
  Home,
  Users,
  UserPlus,
  MoreHorizontal,
  Car,
  Bus,
  Footprints,
  Bike,
  Plane,
  TrainFront,
  Star,
  Gem,
  Trophy,
  TreePine,
  Landmark,
  Music,
  Ticket,
  UtensilsCrossed,
  Moon,
  Pencil,
  Check,
  X,
  Shield,
  Trash2,
  AlertTriangle,
} from "lucide-react";
import { useAuth, type UserProfile } from "../components/AuthContext";
import {
  stagger,
  fadeUp,
  defaultTransition,
  viewport,
  fastTransition,
  quickTransition,
} from "../components/animations";

/* ── Data options (same as SignUpPage) ── */
const experienceOptions = [
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

const companionOptions = [
  { label: "Solo", icon: Compass },
  { label: "With Partner", icon: Heart },
  { label: "With Family", icon: Home },
  { label: "With Friends", icon: Users },
  { label: "With Organized Groups", icon: UserPlus },
  { label: "Other", icon: MoreHorizontal },
];

const travelModeOptions = [
  { label: "Car", icon: Car },
  { label: "Public transport", icon: Bus },
  { label: "By Foot", icon: Footprints },
  { label: "Bicycle", icon: Bike },
  { label: "Plane", icon: Plane },
  { label: "Train", icon: TrainFront },
  { label: "Other", icon: MoreHorizontal },
];

const residences = [
  "Singapore", "United States", "United Kingdom", "Australia",
  "Japan", "South Korea", "Germany", "France", "Italy", "Spain",
];

/* ── Chip component ── */
function Chip({
  label,
  icon: Icon,
  selected,
  onToggle,
  disabled,
}: {
  label: string;
  icon: React.ElementType;
  selected: boolean;
  onToggle: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border cursor-pointer outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      style={{
        backgroundColor: selected ? "var(--accent-light)" : "var(--background)",
        borderColor: selected ? "var(--accent)" : "var(--border)",
        color: selected ? "var(--accent)" : "var(--card-foreground)",
        fontWeight: selected ? "var(--font-weight-bold)" : "var(--font-weight-medium)",
        fontSize: "var(--text-caption)",
      }}
    >
      <Icon className="size-3.5" strokeWidth={selected ? 2.2 : 1.8} />
      {label}
    </button>
  );
}

/* ── Section card ── */
function ProfileSection({
  title,
  icon: Icon,
  children,
  onEdit,
  isEditing,
  onSave,
  onCancel,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  onEdit?: () => void;
  isEditing?: boolean;
  onSave?: () => void;
  onCancel?: () => void;
}) {
  return (
    <motion.div
      className="bg-surface rounded-xl border border-border overflow-hidden"
      style={{ boxShadow: "var(--shadow-card)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={defaultTransition}
    >
      <div className="flex items-center justify-between px-6 sm:px-6 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Icon className="size-5" style={{ color: "var(--accent)" }} strokeWidth={1.8} />
          <h2
            className="font-heading text-foreground font-bold text-body"
          >
            {title}
          </h2>
        </div>
        {isEditing ? (
          <div className="flex items-center gap-2">
            <button
              onClick={onCancel}
              className="font-body flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-card-foreground hover:bg-muted transition-colors outline-none text-caption font-medium"
            >
              <X className="size-3.5" strokeWidth={2} />
              Cancel
            </button>
            <button
              onClick={onSave}
              className="font-body flex items-center gap-1.5 px-3 py-1.5 rounded-full text-surface transition-colors outline-none text-caption font-bold"
              style={{
                backgroundColor: "var(--accent)",
              }}
            >
              <Check className="size-3.5" strokeWidth={2} />
              Save
            </button>
          </div>
        ) : onEdit ? (
          <button
            onClick={onEdit}
            className="font-body flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-card-foreground hover:bg-muted transition-colors outline-none text-caption font-medium"
          >
            <Pencil className="size-3.5" strokeWidth={1.8} />
            Edit
          </button>
        ) : null}
      </div>
      <div className="px-6 sm:px-6 py-6">{children}</div>
    </motion.div>
  );
}

/* ── Info row for display mode ── */
function InfoRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <Icon className="size-4 mt-0.5 shrink-0" style={{ color: "var(--muted-foreground)" }} strokeWidth={1.8} />
      <div className="flex flex-col min-w-0">
        <span
          className="font-body text-muted-foreground text-caption font-medium"
        >
          {label}
        </span>
        <span
          className="font-body text-foreground truncate text-body-sm font-medium"
        >
          {value || "Not set"}
        </span>
      </div>
    </div>
  );
}

/* ── Avatar ── */
function ProfileAvatar({ firstName, lastName }: { firstName: string; lastName: string }) {
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  return (
    <div
      className="rounded-full flex items-center justify-center shrink-0 font-heading"
      style={{
        width: 80,
        height: 80,
        backgroundColor: "var(--accent)",
        color: "var(--accent-foreground)",
        fontSize: 28,
        fontWeight: "var(--font-weight-bold)",
        letterSpacing: "0.02em",
      }}
    >
      {initials}
    </div>
  );
}

/* ── Main Profile Page ── */
export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, isAuthenticated, updateProfile, signOut, deleteAccount, changePassword } = useAuth();

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Edit states
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Personal details draft
  const [draftPersonal, setDraftPersonal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    residence: "",
  });

  // Preferences draft
  const [draftExperiences, setDraftExperiences] = useState<string[]>([]);
  const [draftAdventure, setDraftAdventure] = useState(5);
  const [draftCulture, setDraftCulture] = useState(5);

  // Other preferences draft
  const [draftCompanions, setDraftCompanions] = useState<string[]>([]);
  const [draftModes, setDraftModes] = useState<string[]>([]);

  // Password change state
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [pwError, setPwError] = useState("");
  const [showCurrentPw, setShowCurrentPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);

  if (!user) return null;

  const startEdit = (section: string) => {
    setEditingSection(section);
    if (section === "personal") {
      setDraftPersonal({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        residence: user.residence,
      });
    } else if (section === "travel") {
      setDraftExperiences([...user.experiences]);
      setDraftAdventure(user.adventureLevel);
      setDraftCulture(user.cultureLevel);
    } else if (section === "other") {
      setDraftCompanions([...user.companions]);
      setDraftModes([...user.travelModes]);
    }
  };

  const cancelEdit = () => setEditingSection(null);

  const savePersonal = () => {
    if (!draftPersonal.firstName.trim() || !draftPersonal.lastName.trim() || !draftPersonal.email.trim()) {
      toast.error("Name and email are required.");
      return;
    }
    updateProfile(draftPersonal);
    setEditingSection(null);
    toast.success("Personal details updated!");
  };

  const saveTravel = () => {
    if (draftExperiences.length === 0) {
      toast.error("Select at least one experience.");
      return;
    }
    updateProfile({
      experiences: draftExperiences,
      adventureLevel: draftAdventure,
      cultureLevel: draftCulture,
    });
    setEditingSection(null);
    toast.success("Travel preferences updated!");
  };

  const saveOther = () => {
    if (draftCompanions.length === 0 || draftModes.length === 0) {
      toast.error("Select at least one option in each category.");
      return;
    }
    updateProfile({
      companions: draftCompanions,
      travelModes: draftModes,
    });
    setEditingSection(null);
    toast.success("Other preferences updated!");
  };

  const handleDeleteAccount = () => {
    deleteAccount();
    toast("Account deleted. We're sorry to see you go.", { duration: 3000 });
    navigate("/");
  };

  const handleSignOut = () => {
    signOut();
    toast("Signed out successfully", { duration: 2000 });
    navigate("/");
  };

  const toggleInList = (list: string[], item: string, setter: (v: string[]) => void) => {
    setter(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  };

  const handlePasswordChange = () => {
    setPwError("");
    if (!currentPw.trim()) {
      setPwError("Current password is required.");
      return;
    }
    if (newPw !== confirmPw) {
      setPwError("New passwords do not match.");
      return;
    }
    if (newPw.length < 6) {
      setPwError("New password must be at least 6 characters.");
      return;
    }
    const result = changePassword(currentPw, newPw);
    if (result.success) {
      toast.success("Password changed successfully!");
      setShowPasswordForm(false);
      setCurrentPw("");
      setNewPw("");
      setConfirmPw("");
      setPwError("");
    } else {
      setPwError(result.error || "Password change failed.");
    }
  };

  return (
    <div
      className="flex flex-col w-full min-h-screen overflow-x-hidden bg-surface font-body"
    >
      <WayfarerNavbar />

      <main
        className="flex-1 flex flex-col w-full pt-(--section-py-sm) pb-(--section-py-lg) px-(--container-px)"
      >
        {/* Back button */}
        <motion.button
          className="flex items-center gap-2 text-card-foreground hover:text-primary transition-colors outline-none mb-6 self-start text-body-sm font-medium"
          onClick={() => navigate("/")}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={fastTransition}
        >
          <ArrowLeft className="size-4" strokeWidth={1.8} />
          Back to home
        </motion.button>

        {/* Profile header */}
        <motion.div
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...defaultTransition, delay: 0.05 }}
        >
          <ProfileAvatar firstName={user.firstName} lastName={user.lastName} />
          <div className="flex flex-col items-center sm:items-start gap-1">
            <h1
              className="font-heading text-foreground font-bold text-title-1 leading-title-1"
            >
              {user.firstName} {user.lastName}
            </h1>
            <p
              className="font-body text-muted-foreground text-body-sm"
            >
              {user.email}
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPin className="size-3.5" style={{ color: "var(--accent)" }} strokeWidth={1.8} />
              <span
                className="font-body text-caption font-medium"
                style={{ color: "var(--accent)" }}
              >
                {user.residence}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Sections grid */}
        <div className="flex flex-col gap-6 max-w-[720px] w-full mx-auto sm:mx-0">
          {/* Personal Details */}
          <ProfileSection
            title="Personal Details"
            icon={User}
            onEdit={editingSection === "personal" ? undefined : () => startEdit("personal")}
            isEditing={editingSection === "personal"}
            onSave={savePersonal}
            onCancel={cancelEdit}
          >
            {editingSection === "personal" ? (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Label className="font-body text-caption font-medium" style={{ color: "var(--card-foreground)" }}>First name</Label>
                    <Input
                      value={draftPersonal.firstName}
                      onChange={(e) => setDraftPersonal({ ...draftPersonal, firstName: e.target.value })}
                      className="h-[40px] border-border bg-surface text-foreground"
                      style={{ borderWidth: "1.5px" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label className="font-body text-caption font-medium" style={{ color: "var(--card-foreground)" }}>Last name</Label>
                    <Input
                      value={draftPersonal.lastName}
                      onChange={(e) => setDraftPersonal({ ...draftPersonal, lastName: e.target.value })}
                      className="h-[40px] border-border bg-surface text-foreground"
                      style={{ borderWidth: "1.5px" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="font-body text-caption font-medium" style={{ color: "var(--card-foreground)" }}>Email</Label>
                  <Input
                    type="email"
                    value={draftPersonal.email}
                    onChange={(e) => setDraftPersonal({ ...draftPersonal, email: e.target.value })}
                    className="h-[40px] border-border bg-surface text-foreground"
                    style={{ borderWidth: "1.5px" }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="font-body text-caption font-medium" style={{ color: "var(--card-foreground)" }}>Mobile</Label>
                  <Input
                    value={draftPersonal.mobile}
                    onChange={(e) => setDraftPersonal({ ...draftPersonal, mobile: e.target.value })}
                    className="h-[40px] border-border bg-surface text-foreground"
                    style={{ borderWidth: "1.5px" }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="font-body text-caption font-medium" style={{ color: "var(--card-foreground)" }}>Place of residence</Label>
                  <Select value={draftPersonal.residence} onValueChange={(v) => setDraftPersonal({ ...draftPersonal, residence: v })}>
                    <SelectTrigger className="h-[40px] border-border bg-surface" style={{ borderWidth: "1.5px" }}>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {residences.map((r) => (
                        <SelectItem key={r} value={r}>{r}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                <InfoRow icon={User} label="Full name" value={`${user.firstName} ${user.lastName}`} />
                <InfoRow icon={Calendar} label="Date of birth" value={user.dob} />
                <InfoRow icon={Mail} label="Email" value={user.email} />
                <InfoRow icon={Phone} label="Mobile" value={`${user.countryCode} ${user.mobile}`} />
                <InfoRow icon={MapPin} label="Residence" value={user.residence} />
              </div>
            )}
          </ProfileSection>

          {/* Travel Preferences */}
          <ProfileSection
            title="Travel Preferences"
            icon={Compass}
            onEdit={editingSection === "travel" ? undefined : () => startEdit("travel")}
            isEditing={editingSection === "travel"}
            onSave={saveTravel}
            onCancel={cancelEdit}
          >
            {editingSection === "travel" ? (
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <span className="font-body font-bold text-body-sm" style={{ color: "var(--card-foreground)" }}>
                    Favourite experiences
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {experienceOptions.map((exp) => (
                      <Chip
                        key={exp.label}
                        label={exp.label}
                        icon={exp.icon}
                        selected={draftExperiences.includes(exp.label)}
                        onToggle={() => toggleInList(draftExperiences, exp.label, setDraftExperiences)}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-body font-bold text-body-sm" style={{ color: "var(--card-foreground)" }}>
                    Adventure level: {draftAdventure}/10
                  </span>
                  <Slider min={0} max={10} step={1} value={[draftAdventure]} onValueChange={(v) => setDraftAdventure(v[0])}
                    className="[&_[data-slot=slider-track]]:h-[2px] [&_[data-slot=slider-track]]:bg-border [&_[data-slot=slider-range]]:bg-accent [&_[data-slot=slider-thumb]]:size-3.5 [&_[data-slot=slider-thumb]]:border-0 [&_[data-slot=slider-thumb]]:bg-accent [&_[data-slot=slider-thumb]]:shadow-none" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-body font-bold text-body-sm" style={{ color: "var(--card-foreground)" }}>
                    Culture interest: {draftCulture}/10
                  </span>
                  <Slider min={0} max={10} step={1} value={[draftCulture]} onValueChange={(v) => setDraftCulture(v[0])}
                    className="[&_[data-slot=slider-track]]:h-[2px] [&_[data-slot=slider-track]]:bg-border [&_[data-slot=slider-range]]:bg-accent [&_[data-slot=slider-thumb]]:size-3.5 [&_[data-slot=slider-thumb]]:border-0 [&_[data-slot=slider-thumb]]:bg-accent [&_[data-slot=slider-thumb]]:shadow-none" />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="font-body text-muted-foreground text-caption font-medium">
                    Favourite experiences
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {user.experiences.map((exp) => {
                      const opt = experienceOptions.find((o) => o.label === exp);
                      const Icon = opt?.icon || Star;
                      return (
                        <span
                          key={exp}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border"
                          style={{
                            borderColor: "var(--accent)",
                            backgroundColor: "var(--accent-light)",
                            color: "var(--accent)",
                            fontSize: "var(--text-caption)",
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          <Icon className="size-3" strokeWidth={2} />
                          {exp}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-body text-muted-foreground text-caption font-medium">Adventure level</span>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-[4px] rounded-full bg-border overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{ width: `${user.adventureLevel * 10}%`, backgroundColor: "var(--accent)" }}
                        />
                      </div>
                      <span className="font-body text-body-sm font-bold" style={{ color: "var(--accent)" }}>
                        {user.adventureLevel}/10
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-body text-muted-foreground text-caption font-medium">Culture interest</span>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-[4px] rounded-full bg-border overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{ width: `${user.cultureLevel * 10}%`, backgroundColor: "var(--accent)" }}
                        />
                      </div>
                      <span className="font-body text-body-sm font-bold" style={{ color: "var(--accent)" }}>
                        {user.cultureLevel}/10
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ProfileSection>

          {/* Other Preferences */}
          <ProfileSection
            title="Other Preferences"
            icon={Heart}
            onEdit={editingSection === "other" ? undefined : () => startEdit("other")}
            isEditing={editingSection === "other"}
            onSave={saveOther}
            onCancel={cancelEdit}
          >
            {editingSection === "other" ? (
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <span className="font-body font-bold text-body-sm" style={{ color: "var(--card-foreground)" }}>
                    Travel companions
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {companionOptions.map((c) => (
                      <Chip
                        key={c.label}
                        label={c.label}
                        icon={c.icon}
                        selected={draftCompanions.includes(c.label)}
                        onToggle={() => toggleInList(draftCompanions, c.label, setDraftCompanions)}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-body font-bold text-body-sm" style={{ color: "var(--card-foreground)" }}>
                    Preferred travel modes
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {travelModeOptions.map((m) => (
                      <Chip
                        key={m.label}
                        label={m.label}
                        icon={m.icon}
                        selected={draftModes.includes(m.label)}
                        onToggle={() => toggleInList(draftModes, m.label, setDraftModes)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="font-body text-muted-foreground text-caption font-medium">Travel companions</span>
                  <div className="flex flex-wrap gap-1.5">
                    {user.companions.map((c) => {
                      const opt = companionOptions.find((o) => o.label === c);
                      const Icon = opt?.icon || Users;
                      return (
                        <span key={c} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border"
                          style={{ borderColor: "var(--accent)", backgroundColor: "var(--accent-light)", color: "var(--accent)", fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-medium)" }}>
                          <Icon className="size-3" strokeWidth={2} />
                          {c}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-body text-muted-foreground text-caption font-medium">Preferred travel modes</span>
                  <div className="flex flex-wrap gap-1.5">
                    {user.travelModes.map((m) => {
                      const opt = travelModeOptions.find((o) => o.label === m);
                      const Icon = opt?.icon || Car;
                      return (
                        <span key={m} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border"
                          style={{ borderColor: "var(--accent)", backgroundColor: "var(--accent-light)", color: "var(--accent)", fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-medium)" }}>
                          <Icon className="size-3" strokeWidth={2} />
                          {m}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-body text-muted-foreground text-caption font-medium">Health conditions</span>
                  <span className="font-body text-foreground text-body-sm font-medium">
                    {user.healthCondition === "yes" ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            )}
          </ProfileSection>

          {/* Account actions */}
          <ProfileSection title="Account" icon={Shield}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  className="font-heading h-[42px] px-6 rounded-full gap-2 border-border text-card-foreground hover:bg-muted transition-colors font-bold text-caption"
                  onClick={handleSignOut}
                >
                  Sign out
                </Button>
                <Button
                  variant="outline"
                  className="font-heading h-[42px] px-6 rounded-full gap-2 border-border hover:bg-muted transition-colors font-bold text-caption"
                  style={{ color: "var(--destructive)", borderColor: "var(--destructive)" }}
                  onClick={() => setShowDeleteConfirm(true)}
                >
                  <Trash2 className="size-3.5" strokeWidth={1.8} />
                  Delete account
                </Button>
              </div>

              {/* Delete confirmation */}
              <AnimatePresence>
                {showDeleteConfirm && (
                  <motion.div
                    className="flex flex-col gap-3 p-4 rounded-lg border"
                    style={{ borderColor: "var(--destructive)", backgroundColor: "var(--destructive-light, #fef2f2)" }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={quickTransition}
                  >
                    <div className="flex items-start gap-2.5">
                      <AlertTriangle className="size-5 mt-0.5 shrink-0" style={{ color: "var(--destructive)" }} strokeWidth={1.8} />
                      <div className="flex flex-col gap-1">
                        <span className="font-heading font-bold text-body-sm" style={{ color: "var(--destructive)" }}>
                          Are you sure?
                        </span>
                        <span className="font-body text-caption" style={{ color: "var(--muted-foreground)" }}>
                          This will permanently delete your account and all data. This cannot be undone.
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-7">
                      <Button
                        size="sm"
                        className="font-heading h-[34px] px-4 rounded-full text-surface font-bold text-caption"
                        style={{ backgroundColor: "var(--destructive)" }}
                        onClick={handleDeleteAccount}
                      >
                        Yes, delete
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="font-heading h-[34px] px-4 rounded-full border-border text-card-foreground font-bold text-caption"
                        onClick={() => setShowDeleteConfirm(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ProfileSection>

          {/* Password change */}
          <ProfileSection title="Password" icon={Shield}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  className="font-heading h-[42px] px-6 rounded-full gap-2 border-border text-card-foreground hover:bg-muted transition-colors font-bold text-caption"
                  onClick={() => setShowPasswordForm(true)}
                >
                  Change password
                </Button>
              </div>

              {/* Password change form */}
              <AnimatePresence>
                {showPasswordForm && (
                  <motion.div
                    className="flex flex-col gap-4 p-4 rounded-lg border"
                    style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={quickTransition}
                  >
                    <div className="flex flex-col gap-1.5">
                      <Label className="font-body text-caption font-medium" style={{ color: "var(--card-foreground)" }}>Current password</Label>
                      <Input
                        type="password"
                        placeholder="Enter your current password"
                        value={currentPw}
                        onChange={(e) => { setCurrentPw(e.target.value); setPwError(""); }}
                        className="h-[40px] border-border bg-surface text-foreground"
                        style={{ borderWidth: "1.5px" }}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label className="font-body text-caption font-medium" style={{ color: "var(--card-foreground)" }}>New password</Label>
                      <Input
                        type="password"
                        placeholder="At least 6 characters"
                        value={newPw}
                        onChange={(e) => { setNewPw(e.target.value); setPwError(""); }}
                        className="h-[40px] border-border bg-surface text-foreground"
                        style={{ borderWidth: "1.5px" }}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label className="font-body text-caption font-medium" style={{ color: "var(--card-foreground)" }}>Confirm new password</Label>
                      <Input
                        type="password"
                        placeholder="Re-enter new password"
                        value={confirmPw}
                        onChange={(e) => { setConfirmPw(e.target.value); setPwError(""); }}
                        className="h-[40px] border-border bg-surface text-foreground"
                        style={{ borderWidth: "1.5px" }}
                      />
                    </div>
                    <AnimatePresence>
                      {pwError && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                          transition={quickTransition}
                          className="font-body flex items-center gap-1.5 text-caption"
                          style={{ color: "var(--destructive)" }}
                        >
                          <AlertTriangle className="size-3.5 shrink-0" strokeWidth={2} />
                          {pwError}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="font-heading h-[36px] px-5 rounded-full text-surface font-bold text-caption"
                        style={{ backgroundColor: "var(--accent)" }}
                        onClick={handlePasswordChange}
                      >
                        <Check className="size-3.5" strokeWidth={2} />
                        Update password
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="font-heading h-[36px] px-5 rounded-full border-border text-card-foreground hover:bg-muted font-bold text-caption"
                        onClick={() => { setShowPasswordForm(false); setCurrentPw(""); setNewPw(""); setConfirmPw(""); setPwError(""); }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ProfileSection>
        </div>
      </main>

      <WayfarerFooter />
    </div>
  );
}
