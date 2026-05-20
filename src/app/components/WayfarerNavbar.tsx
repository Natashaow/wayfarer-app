import { Heart, Search, Menu, CircleUserRound, LogOut, Settings, MapPin, User, LogIn, UserPlus, Compass, Sparkles, ChevronRight, X } from "lucide-react";
import imgWayfarerBlack12 from "figma:asset/31bfa83910aefa179da0ef0052c94a5701371e0c.png";
import imgWayfarerBlack23 from "figma:asset/ee0ae046dd453c8d4b5bc89b2cfbcca670ff8d17.png";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { motion } from "motion/react";
import { slideDown, stagger, fadeIn, fastTransition } from "./animations";
import { useState, useCallback, useRef, useEffect, useMemo, type KeyboardEvent } from "react";
import { useNavigate } from "react-router";
import { useFavorites } from "./FavoritesContext";
import { useAuth } from "./AuthContext";
import { toast } from "sonner";
import { showComingSoon } from "./utils/comingSoon";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "./ui/dropdown-menu";

import { destinations, type Destination } from "./destinations-data";

/* ── Search helpers ─── */
const MAX_SEARCH_RESULTS = 6;

function useSearch(query: string) {
  return useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    const results: typeof destinations = [];
    for (const d of destinations) {
      if (results.length >= MAX_SEARCH_RESULTS) break;
      if (
        d.title.toLowerCase().includes(q) ||
        d.location.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        d.categories.some((c) => c.toLowerCase().includes(q))
      ) {
        results.push(d);
      }
    }
    return results;
  }, [query]);
}

/** Desktop search input with dropdown results */
function DesktopSearchInput({ navigate }: { navigate: (to: string) => void }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const results = useSearch(query);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSubmit = useCallback(() => {
    if (highlightIndex >= 0 && results[highlightIndex]) {
      navigate(`/experience/${results[highlightIndex].slug}`);
    } else if (query.trim()) {
      navigate(`/explore?q=${encodeURIComponent(query.trim())}`);
    }
    setOpen(false);
    setQuery("");
    inputRef.current?.blur();
  }, [query, highlightIndex, results, navigate]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightIndex((prev) => Math.max(prev - 1, -1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        handleSubmit();
      } else if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    },
    [results.length, handleSubmit]
  );

  const handleResultClick = useCallback(
    (dest: Destination) => {
      navigate(`/experience/${dest.slug}`);
      setOpen(false);
      setQuery("");
    },
    [navigate]
  );

  const showDropdown = open && query.trim().length > 0;

  return (
    <div ref={wrapperRef} style={{ width: "clamp(240px, 30vw, 392px)" }} className="relative">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
          <Search className="size-[20px]" strokeWidth={1.8} />
        </div>
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setHighlightIndex(-1);
          }}
          onFocus={() => query.trim() && setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search destinations, experiences, or adventures"
          className="font-body pl-12 h-12 rounded-full border-2 border-border bg-surface text-foreground placeholder:text-muted-foreground text-body-sm shadow-[var(--shadow-input)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-transparent transition-all"
        />
        {query && (
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => { setQuery(""); setOpen(false); inputRef.current?.focus(); }}
            aria-label="Clear search"
          >
            <X className="size-4" strokeWidth={1.8} />
          </button>
        )}
      </div>

      {/* Dropdown results */}
      {showDropdown && (
        <div
          className="absolute top-full left-0 right-0 mt-2 bg-surface border border-border rounded-2xl shadow-[var(--shadow-card-elevated)] overflow-hidden z-50"
        >
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((dest, i) => (
                <button
                  key={dest.id}
                  className={`w-full flex items-center gap-2 px-4 py-3 text-left transition-colors cursor-pointer outline-none ${
                    i === highlightIndex ? "bg-muted" : "hover:bg-muted/50"
                  }`}
                  onClick={() => handleResultClick(dest)}
                  onMouseEnter={() => setHighlightIndex(i)}
                >
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="size-10 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex flex-col min-w-0 flex-1">
                    <span
                      className="text-foreground truncate font-medium text-body-sm"
                    >
                      {dest.title}
                    </span>
                    <span
                      className="font-body text-muted-foreground truncate flex items-center gap-1 text-caption"
                    >
                      <MapPin className="size-3 shrink-0" strokeWidth={1.8} />
                      {dest.location}
                    </span>
                  </div>
                  <ChevronRight className="size-3.5 text-muted-foreground/40 shrink-0" strokeWidth={1.8} />
                </button>
              ))}
              {/* View all link */}
              <div className="border-t border-border mt-1 pt-1">
                <button
                  className="w-full px-4 py-2 text-left font-body text-accent hover:bg-muted/50 transition-colors cursor-pointer flex items-center gap-2 text-body-sm font-medium"
                  onClick={handleSubmit}
                >
                  <Search className="size-3.5" strokeWidth={1.8} />
                  View all results for "{query}"
                </button>
              </div>
            </div>
          ) : (
            <div className="px-4 py-6 text-center">
              <p
                className="font-body text-muted-foreground text-body-sm"
              >
                No destinations found for "{query}"
              </p>
              <button
                className="font-body text-accent mt-1 cursor-pointer hover:underline text-caption"
                onClick={() => { navigate("/explore"); setOpen(false); setQuery(""); }}
              >
                Browse all experiences
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/** Mobile full-screen search overlay */
function MobileSearchOverlay({
  open,
  onClose,
  navigate,
}: {
  open: boolean;
  onClose: () => void;
  navigate: (to: string) => void;
}) {
  const [query, setQuery] = useState("");
  const results = useSearch(query);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus on open
  useEffect(() => {
    if (open) {
      setQuery("");
      // Small delay so the DOM is rendered
      const t = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [open]);

  const handleSelect = useCallback(
    (dest: Destination) => {
      navigate(`/experience/${dest.slug}`);
      onClose();
    },
    [navigate, onClose]
  );

  const handleSubmit = useCallback(() => {
    if (query.trim()) {
      navigate(`/explore?q=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  }, [query, navigate, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-surface flex flex-col">
      {/* Header */}
      <div
        className="flex items-center gap-2 border-b border-border shrink-0 px-(--container-px) h-14"
      >
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            <Search className="size-[18px]" strokeWidth={1.8} />
          </div>
          <Input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(); }}
            placeholder="Search destinations..."
            className="font-body pl-10 pr-8 h-10 rounded-full border-2 border-border bg-surface text-foreground placeholder:text-muted-foreground text-body-sm focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-transparent transition-all"
          />
          {query && (
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => { setQuery(""); inputRef.current?.focus(); }}
              aria-label="Clear search"
            >
              <X className="size-4" strokeWidth={1.8} />
            </button>
          )}
        </div>
        <button
          className="font-body text-accent shrink-0 cursor-pointer text-body-sm font-medium"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto pt-2">
        {query.trim() === "" ? (
          <div className="px-4 py-8 text-center">
            <Search className="size-8 text-muted-foreground/30 mx-auto mb-2" strokeWidth={1.5} />
            <p
              className="font-body text-muted-foreground text-body-sm"
            >
              Search for destinations, countries, or experiences
            </p>
          </div>
        ) : results.length > 0 ? (
          <>
            {results.map((dest) => (
              <button
                key={dest.id}
                className="w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-muted/50 active:bg-muted transition-colors cursor-pointer outline-none pl-(--container-px) pr-(--container-px)"
                onClick={() => handleSelect(dest)}
              >
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="size-12 rounded-[10px] object-cover shrink-0"
                />
                <div className="flex flex-col min-w-0 flex-1">
                  <span
                    className="text-foreground truncate font-medium text-body"
                  >
                    {dest.title}
                  </span>
                  <span
                    className="font-body text-muted-foreground truncate flex items-center gap-1 text-body-sm"
                  >
                    <MapPin className="size-3 shrink-0" strokeWidth={1.8} />
                    {dest.location}
                  </span>
                </div>
                <ChevronRight className="size-4 text-muted-foreground/40 shrink-0" strokeWidth={1.8} />
              </button>
            ))}
            {/* View all */}
            <button
              className="w-full px-4 py-3 text-left font-body text-accent hover:bg-muted/50 transition-colors cursor-pointer flex items-center gap-2 border-t border-border mt-1 pl-(--container-px) pr-(--container-px) text-body-sm font-medium"
              onClick={handleSubmit}
            >
              <Search className="size-4" strokeWidth={1.8} />
              View all results for "{query}"
            </button>
          </>
        ) : (
          <div className="px-4 py-8 text-center">
            <p
              className="font-body text-muted-foreground text-body-sm"
            >
              No results found for "{query}"
            </p>
            <button
              className="font-body text-accent mt-2 cursor-pointer hover:underline text-caption"
              onClick={() => { navigate("/explore"); onClose(); }}
            >
              Browse all experiences
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Shared Logo Components ─── */

function Logo() {
  return (
    <div className="flex items-center gap-1.5 shrink-0">
      <div className="relative h-[30px] w-[30px]">
        <img src={imgWayfarerBlack12} alt="Wayfarer icon" className="absolute inset-0 object-contain size-full" />
      </div>
      <div className="relative h-[30px] w-[131px]">
        <img src={imgWayfarerBlack23} alt="Wayfarer" className="absolute inset-0 object-contain size-full" />
      </div>
    </div>
  );
}

function MobileLogo() {
  return (
    <div className="flex items-center gap-0 shrink-0">
      <div className="relative h-[32px] w-[27px]">
        <img src={imgWayfarerBlack12} alt="Wayfarer icon" className="absolute inset-0 object-contain size-full" />
      </div>
      <div className="relative h-[24px] w-[88px] ml-[6px]">
        <img src={imgWayfarerBlack23} alt="Wayfarer" className="absolute inset-0 object-contain size-full" />
      </div>
    </div>
  );
}

/* ── User Avatar (initials) ─── */
function UserAvatar({ firstName, lastName, size = 32 }: { firstName: string; lastName: string; size?: number }) {
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  return (
    // token-audit-exception: font-heading-misuse — initials are a brand-mark, treated as title-like typography even without a text-title-* token.
    <div
      className="rounded-full flex items-center justify-center shrink-0 font-heading font-bold"
      style={{
        width: size,
        height: size,
        backgroundColor: "var(--accent)",
        color: "var(--accent-foreground)",
        fontSize: size * 0.38,
        letterSpacing: "0.02em",
      }}
    >
      {initials}
    </div>
  );
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Trips", href: "/explore" },
  { label: "Recently viewed", href: "/recently-viewed" },
];

/* Child variants reuse the parent stagger */
const navItem = {
  hidden: { y: -8 },
  visible: { opacity: 1, y: 0, transition: fastTransition },
};

export function WayfarerNavbar() {
  const navigate = useNavigate();
  const { count } = useFavorites();
  const { user, isAuthenticated, signOut } = useAuth();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSignOut = () => {
    setSheetOpen(false);
    signOut();
    toast("Signed out successfully", { duration: 2000 });
    navigate("/");
  };

  /** Navigate and close the mobile drawer */
  const drawerNavigate = useCallback((href: string) => {
    setSheetOpen(false);
    navigate(href);
  }, [navigate]);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-surface border-b border-secondary shadow-[var(--shadow-navbar)] w-full"
      initial="hidden"
      animate="visible"
      variants={slideDown}
    >
      {/* ── Desktop ─────────────────────────────────── */}
      <motion.div
        className="hidden lg:flex items-center justify-between w-full h-[clamp(64px,7vw,80px)] px-(--container-px) gap-[clamp(16px,2vw,24px)]"
        variants={stagger}
      >
        <motion.div className="flex items-center shrink-0 gap-[clamp(16px,2vw,28px)]" variants={navItem}>
          <button onClick={() => navigate("/")} className="cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg" aria-label="Go to homepage">
            <Logo />
          </button>

          {/* Search */}
          <DesktopSearchInput navigate={navigate} />
        </motion.div>

        {/* Nav links + right actions */}
        <motion.nav className="flex items-center gap-[clamp(14px,2vw,24px)]" variants={stagger}>
          {navLinks.map((link) => (
            <motion.span
              key={link.label}
              className="font-body text-card-foreground cursor-pointer hover:text-text-link-hover whitespace-nowrap outline-none focus-visible:text-accent transition-colors font-medium text-nav"
              tabIndex={0}
              role="button"
              variants={navItem}
              onClick={() => navigate(link.href)}
            >
              {link.label}
            </motion.span>
          ))}
          <motion.button
            className="relative text-card-foreground hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-1"
            variants={navItem}
            whileHover={{ opacity: 0.7 }}
            whileTap={{ opacity: 0.85 }}
            onClick={() => navigate("/favorites")}
            aria-label="Saved destinations"
          >
            <Heart className="size-[22px]" strokeWidth={1.8} />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-accent text-surface flex items-center justify-center font-bold text-caption">
                {count}
              </span>
            )}
          </motion.button>

          {/* Desktop: User area — guest vs authenticated */}
          {isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="shrink-0 outline-none active:opacity-80 focus-visible:ring-2 focus-visible:ring-accent rounded-full transition-all cursor-pointer ring-2 ring-transparent hover:ring-accent/20"
                  aria-label="Account menu"
                >
                  <UserAvatar firstName={user.firstName} lastName={user.lastName} size={32} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="w-[272px] bg-surface border-border shadow-[var(--shadow-card-elevated)] rounded-2xl p-0 overflow-hidden"
              >
                {/* Profile header */}
                <div
                  className="flex items-center gap-2 px-4 py-4"
                  style={{ backgroundColor: "var(--bg-subtle)" }}
                >
                  <UserAvatar firstName={user.firstName} lastName={user.lastName} size={40} />
                  <div className="flex flex-col min-w-0 flex-1">
                    <span
                      className="text-foreground truncate font-bold text-body"
                    >
                      {user.firstName} {user.lastName}
                    </span>
                    <span
                      className="font-body text-muted-foreground truncate text-caption"
                    >
                      {user.email}
                    </span>
                  </div>
                </div>

                <DropdownMenuSeparator className="bg-border m-0" />

                {/* Navigation group */}
                <div className="p-1.5">
                  <DropdownMenuItem
                    className="flex items-center gap-2 cursor-pointer rounded-lg px-3 h-10 font-body text-card-foreground hover:bg-muted hover:text-primary transition-colors text-body-sm"
                    onClick={() => navigate("/profile")}
                  >
                    <div className="size-8 rounded-lg bg-accent/8 flex items-center justify-center shrink-0">
                      <User className="size-4 text-accent" strokeWidth={1.8} />
                    </div>
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="font-medium">Profile</span>
                      <span className="text-muted-foreground text-caption">
                        Manage your account
                      </span>
                    </div>
                    <ChevronRight className="size-3.5 text-muted-foreground/50 shrink-0" strokeWidth={1.8} />
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="flex items-center gap-2 cursor-pointer rounded-lg px-3 h-10 font-body text-card-foreground hover:bg-muted hover:text-primary transition-colors text-body-sm"
                  >
                    <div className="size-8 rounded-lg bg-accent/8 flex items-center justify-center shrink-0">
                      <Settings className="size-4 text-accent" strokeWidth={1.8} />
                    </div>
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="font-medium">Settings</span>
                      <span className="text-muted-foreground text-caption">
                        Preferences & privacy
                      </span>
                    </div>
                    <ChevronRight className="size-3.5 text-muted-foreground/50 shrink-0" strokeWidth={1.8} />
                  </DropdownMenuItem>
                </div>

                <DropdownMenuSeparator className="bg-border m-0" />

                {/* AI CTA */}
                <div className="p-1.5">
                  <DropdownMenuItem
                    className="flex items-center gap-2 cursor-pointer rounded-lg px-3 h-10 font-body text-foreground hover:bg-accent-light transition-colors text-body-sm"
                    onClick={() => showComingSoon()}
                  >
                    <div className="size-8 rounded-lg bg-gradient-to-br from-primary/12 to-accent/12 flex items-center justify-center shrink-0">
                      <Sparkles className="size-4 text-primary" strokeWidth={1.8} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-medium">Plan with AI</span>
                      <span className="text-muted-foreground text-caption">
                        Coming soon
                      </span>
                    </div>
                  </DropdownMenuItem>
                </div>

                <DropdownMenuSeparator className="bg-border m-0" />

                {/* Sign out */}
                <div className="p-1.5">
                  <DropdownMenuItem
                    className="flex items-center gap-2 cursor-pointer rounded-lg px-3 h-10 font-body text-muted-foreground hover:bg-destructive/6 hover:text-destructive transition-colors text-body-sm"
                    onClick={handleSignOut}
                  >
                    <LogOut className="size-4" strokeWidth={1.8} />
                    <span className="font-medium">Sign out</span>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="shrink-0 outline-none hover:text-primary active:opacity-80 focus-visible:ring-2 focus-visible:ring-accent rounded-full p-1 transition-all cursor-pointer"
                  aria-label="Account menu"
                >
                  <CircleUserRound className="size-[22px]" strokeWidth={1.8} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="w-[256px] bg-surface border-border shadow-[var(--shadow-card-elevated)] rounded-2xl p-0 overflow-hidden"
              >
                {/* Welcome header */}
                <div
                  className="flex flex-col items-center gap-2 px-4 py-5"
                  style={{ backgroundColor: "var(--bg-subtle)" }}
                >
                  <div className="size-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Compass className="size-5 text-accent" strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-center">
                    <span
                      className="text-foreground font-bold text-body"
                    >
                      Welcome to Wayfarer
                    </span>
                    <span
                      className="font-body text-muted-foreground text-caption leading-caption"
                    >
                      Sign in to save trips and get AI-powered recommendations
                    </span>
                  </div>
                </div>

                <DropdownMenuSeparator className="bg-border m-0" />

                {/* Auth actions */}
                <div className="flex flex-col gap-2 p-4">
                  <Button
                    className="w-full h-[40px] rounded-full bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta-sm)] hover:opacity-90 transition-opacity font-bold text-body-sm"
                    onClick={() => navigate("/signup")}
                  >
                    <UserPlus className="size-4 mr-1.5" strokeWidth={1.8} />
                    Create account
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-[40px] rounded-full border-border text-card-foreground hover:bg-muted hover:border-muted-foreground/30 transition-all font-bold text-body-sm"
                    onClick={() => navigate("/login")}
                  >
                    <LogIn className="size-4 mr-1.5" strokeWidth={1.8} />
                    Log in
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </motion.nav>
      </motion.div>

      {/* ── Mobile (matches Figma MobileNew) ────────── */}
      <motion.div
        className="lg:hidden flex items-center justify-between h-[56px] w-full px-(--container-px) pt-[12px] pb-[12px]"
        variants={fadeIn}
      >
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-[16px]">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button className="text-card-foreground shrink-0 outline-none hover:text-primary active:opacity-80 focus-visible:ring-2 focus-visible:ring-accent rounded-full p-1 transition-all" aria-label="Open menu">
                <Menu className="size-[24px]" strokeWidth={1.8} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-surface border-secondary w-[280px] p-0"
            >
              <SheetHeader className="px-6 pt-8 pb-4">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
                <MobileLogo />
              </SheetHeader>

              <Separator className="bg-border" />

              {/* Authenticated: show user profile card in drawer */}
              {isAuthenticated && user && (
                <>
                  <div className="px-6 py-4 flex items-center gap-2">
                    <UserAvatar firstName={user.firstName} lastName={user.lastName} size={40} />
                    <div className="flex flex-col min-w-0">
                      <p
                        className="text-foreground truncate font-bold text-body"
                      >
                        {user.firstName} {user.lastName}
                      </p>
                      <p
                        className="font-body text-muted-foreground truncate text-caption"
                      >
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <Separator className="bg-border" />
                </>
              )}

              <nav className="flex flex-col px-6 py-4 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href="#"
                    onClick={(e) => { e.preventDefault(); drawerNavigate(link.href); }}
                    className="font-body text-card-foreground py-3 px-2 rounded-lg hover:bg-muted hover:text-primary active:bg-accent-light active:text-accent transition-colors text-body-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
                  >
                    {link.label}
                  </a>
                ))}
                {isAuthenticated && user && (
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); drawerNavigate("/favorites"); }}
                    className="font-body text-card-foreground py-3 px-2 rounded-lg hover:bg-muted hover:text-primary active:bg-accent-light active:text-accent transition-colors text-body-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 flex items-center gap-2"
                  >
                    <Heart className="size-4" strokeWidth={1.8} />
                    Saved destinations
                    {count > 0 && (
                      <span
                        className="ml-auto size-5 rounded-full bg-accent text-surface flex items-center justify-center font-bold text-caption"
                      >
                        {count}
                      </span>
                    )}
                  </a>
                )}
                {isAuthenticated && user && (
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); drawerNavigate("/profile"); }}
                    className="font-body text-card-foreground py-3 px-2 rounded-lg hover:bg-muted hover:text-primary active:bg-accent-light active:text-accent transition-colors text-body-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 flex items-center gap-2"
                  >
                    <Settings className="size-4" strokeWidth={1.8} />
                    Profile & Settings
                  </a>
                )}
              </nav>

              <Separator className="bg-border mx-6" style={{ width: "calc(100% - 48px)" }} />

              <div className="flex flex-col px-6 py-4 gap-2">
                {isAuthenticated ? (
                  <>
                    <Button
                      className="w-full h-11 rounded-full text-body-sm bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta-sm)] hover:opacity-90 font-bold"
                      onClick={() => { setSheetOpen(false); showComingSoon(); }}
                    >
                      Start a trip with AI
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full h-11 rounded-full text-body-sm border-border text-card-foreground hover:bg-muted gap-2 font-bold"
                      onClick={handleSignOut}
                    >
                      <LogOut className="size-4" strokeWidth={1.8} />
                      Sign out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="w-full h-11 rounded-full text-body-sm bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta-sm)] hover:opacity-90 font-bold"
                      onClick={() => navigate("/signup")}
                    >
                      Sign up
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full h-11 rounded-full text-body-sm border-border text-card-foreground hover:bg-muted font-bold"
                      onClick={() => navigate("/login")}
                    >
                      Log in
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
          <button onClick={() => navigate("/")} className="cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg" aria-label="Go to homepage">
            <MobileLogo />
          </button>
        </div>

        {/* Right: Search + Save + User */}
        <div className="flex items-center gap-2 md:gap-4 text-card-foreground">
          <button className="shrink-0 outline-none hover:text-primary active:opacity-80 focus-visible:ring-2 focus-visible:ring-accent rounded-full p-1 transition-all" aria-label="Search" onClick={() => setMobileSearchOpen(true)}>
            <Search className="size-[22px]" strokeWidth={1.8} />
          </button>
          <button className="shrink-0 outline-none hover:text-primary active:opacity-80 focus-visible:ring-2 focus-visible:ring-accent rounded-full p-1 transition-all relative" aria-label="Saved" onClick={() => navigate("/favorites")}>
            <Heart className="size-[22px]" strokeWidth={1.8} />
            {isAuthenticated && count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 size-4 rounded-full bg-accent text-surface flex items-center justify-center font-bold text-caption">
                {count}
              </span>
            )}
          </button>
          {isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="shrink-0 outline-none hover:text-primary active:opacity-80 focus-visible:ring-2 focus-visible:ring-accent rounded-full transition-all cursor-pointer"
                  aria-label="Account menu"
                >
                  <UserAvatar firstName={user.firstName} lastName={user.lastName} size={28} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="w-[256px] bg-surface border-border shadow-[var(--shadow-card-elevated)] rounded-2xl p-0 overflow-hidden"
              >
                {/* Profile header */}
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{ backgroundColor: "var(--bg-subtle)" }}
                >
                  <UserAvatar firstName={user.firstName} lastName={user.lastName} size={36} />
                  <div className="flex flex-col min-w-0 flex-1">
                    <span
                      className="text-foreground truncate font-bold text-body-sm"
                    >
                      {user.firstName} {user.lastName}
                    </span>
                    <span
                      className="font-body text-muted-foreground truncate text-caption"
                    >
                      {user.email}
                    </span>
                  </div>
                </div>

                <DropdownMenuSeparator className="bg-border m-0" />

                <div className="p-1.5">
                  <DropdownMenuItem
                    className="flex items-center gap-2 cursor-pointer rounded-lg px-3 h-11 font-body text-card-foreground hover:bg-muted hover:text-primary transition-colors text-body-sm"
                    onClick={() => navigate("/profile")}
                  >
                    <div className="size-8 rounded-lg bg-accent/8 flex items-center justify-center shrink-0">
                      <User className="size-4 text-accent" strokeWidth={1.8} />
                    </div>
                    <span className="font-medium">Profile</span>
                    <ChevronRight className="size-3.5 text-muted-foreground/50 shrink-0 ml-auto" strokeWidth={1.8} />
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="flex items-center gap-2 cursor-pointer rounded-lg px-3 h-11 font-body text-card-foreground hover:bg-muted hover:text-primary transition-colors text-body-sm"
                  >
                    <div className="size-8 rounded-lg bg-accent/8 flex items-center justify-center shrink-0">
                      <Settings className="size-4 text-accent" strokeWidth={1.8} />
                    </div>
                    <span className="font-medium">Settings</span>
                    <ChevronRight className="size-3.5 text-muted-foreground/50 shrink-0 ml-auto" strokeWidth={1.8} />
                  </DropdownMenuItem>
                </div>

                <DropdownMenuSeparator className="bg-border m-0" />

                <div className="p-1.5">
                  <DropdownMenuItem
                    className="flex items-center gap-2 cursor-pointer rounded-lg px-3 h-11 font-body text-muted-foreground hover:bg-destructive/6 hover:text-destructive transition-colors text-body-sm"
                    onClick={handleSignOut}
                  >
                    <LogOut className="size-4" strokeWidth={1.8} />
                    <span className="font-medium">Sign out</span>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="shrink-0 outline-none hover:text-primary active:opacity-80 focus-visible:ring-2 focus-visible:ring-accent rounded-full p-1 transition-all cursor-pointer"
                  aria-label="Account menu"
                >
                  <CircleUserRound className="size-[22px]" strokeWidth={1.8} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="w-[240px] bg-surface border-border shadow-[var(--shadow-card-elevated)] rounded-2xl p-0 overflow-hidden"
              >
                {/* Welcome header */}
                <div
                  className="flex flex-col items-center gap-2 px-4 py-4"
                  style={{ backgroundColor: "var(--bg-subtle)" }}
                >
                  <div className="size-9 rounded-full bg-accent/10 flex items-center justify-center">
                    <Compass className="size-[18px] text-accent" strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-center">
                    <span
                      className="text-foreground font-bold text-body-sm"
                    >
                      Welcome to Wayfarer
                    </span>
                    <span
                      className="font-body text-muted-foreground text-caption leading-caption"
                    >
                      Sign in to save & plan trips
                    </span>
                  </div>
                </div>

                <DropdownMenuSeparator className="bg-border m-0" />

                <div className="flex flex-col gap-2 p-3">
                  <Button
                    className="w-full h-10 rounded-full bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta-sm)] hover:opacity-90 transition-opacity font-bold text-body-sm"
                    onClick={() => navigate("/signup")}
                  >
                    <UserPlus className="size-4 mr-1.5" strokeWidth={1.8} />
                    Create account
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-10 rounded-full border-border text-card-foreground hover:bg-muted hover:border-muted-foreground/30 transition-all font-bold text-body-sm"
                    onClick={() => navigate("/login")}
                  >
                    <LogIn className="size-4 mr-1.5" strokeWidth={1.8} />
                    Log in
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </motion.div>

      {/* Mobile search overlay */}
      <MobileSearchOverlay
        open={mobileSearchOpen}
        onClose={() => setMobileSearchOpen(false)}
        navigate={navigate}
      />
    </motion.header>
  );
}
