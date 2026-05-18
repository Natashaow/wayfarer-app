import { useState, forwardRef, useCallback, useMemo } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Heart, MapPin, ChevronRight, ChevronLeft, ChevronDown, Check, Globe } from "lucide-react";
import { cn } from "./ui/utils";
import { motion, AnimatePresence } from "motion/react";
import {
  fadeUp,
  stagger,
  staggerFast,
  viewport,
  defaultTransition,
  sectionItem,
  badgeItem,
  cardItem,
} from "./animations";
import { destinations, filters, countries, countryFlags, type Destination } from "./destinations-data";
import { useFavorites } from "./FavoritesContext";
import { useNavigate } from "react-router";
import { usePersonalization } from "./PersonalizationContext";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

/** Shared country list renderer used by both Popover and Drawer */
function CountryList({
  selectedCountry,
  onSelect,
}: {
  selectedCountry: string | null;
  onSelect: (country: string | null) => void;
}) {
  return (
    <Command className="bg-transparent">
      <CommandInput
        placeholder="Search countries..."
        className="font-body border-b border-border text-body-sm"
      />
      <CommandList className="max-h-[50vh] md:max-h-[300px]">
        <CommandEmpty
          className="font-body py-4 text-center text-muted-foreground text-body-sm"
        >
          No country found.
        </CommandEmpty>
        <CommandGroup>
          {/* Anywhere (reset) option */}
          <CommandItem
            className="font-body flex items-center gap-3 cursor-pointer rounded-[8px] transition-colors min-h-[44px] px-3 text-body-sm"
            onSelect={() => onSelect(null)}
          >
            <Globe className="size-4 text-muted-foreground shrink-0" />
            <span className="flex-1">Anywhere</span>
            {selectedCountry === null && (
              <Check className="size-4 text-accent shrink-0" />
            )}
          </CommandItem>
          {/* Country options */}
          {countries.map((country) => (
            <CommandItem
              key={country}
              className="font-body flex items-center gap-3 cursor-pointer rounded-[8px] transition-colors min-h-[44px] px-3 text-body-sm"
              onSelect={() => onSelect(country)}
            >
              <span className="shrink-0" aria-hidden="true">{countryFlags[country]}</span>
              <span className="flex-1">{country}</span>
              {selectedCountry === country && (
                <Check className="size-4 text-accent shrink-0" />
              )}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}


/** Match badge shown on cards when personalization is active */
function MatchBadge({ score }: { score: number }) {
  const isHighMatch = score >= 80;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-1 px-2 py-1 rounded-full backdrop-blur-sm"
      style={{
        backgroundColor: isHighMatch ? "var(--accent)" : "var(--surface)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
      }}
    >
      <span
        className="font-body font-bold"
        style={{
          fontSize: "10px",
          lineHeight: 1,
          color: isHighMatch ? "var(--accent-foreground)" : "var(--accent)",
          letterSpacing: "0.01em",
        }}
      >
        {score}% match
      </span>
    </motion.div>
  );
}

const DestinationCard = forwardRef<HTMLDivElement, { dest: Destination, compact?: boolean }>(({ dest, compact }, ref) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { trackInteraction, getMatchScore, tier } = usePersonalization();
  const saved = isFavorite(dest.id);
  const navigate = useNavigate();

  const matchScore = tier !== "none" ? getMatchScore(dest) : null;
  const showBadge = matchScore !== null && matchScore >= 65;

  const handleCardClick = useCallback(() => {
    trackInteraction(dest.id, dest.categories);
    navigate(`/experience/${dest.slug}`);
  }, [navigate, dest.slug, dest.id, dest.categories, trackInteraction]);

  const handleLocationClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/country/${dest.countrySlug}`);
  }, [navigate, dest.countrySlug]);

  return (
    <motion.div
      layout
      ref={ref}
      variants={cardItem}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      <Card
        className="relative rounded-[20px] overflow-hidden shrink-0 border-0 shadow-[var(--shadow-card-elevated)] p-0 gap-0 cursor-pointer group/card"
        style={{
          width: "100%",
          height: compact ? "clamp(224px, 58vw, 288px)" : "clamp(288px, 32vw, 400px)",
        }}
        onClick={handleCardClick}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter") handleCardClick(); }}
      >
        {/* Image */}
        <img
          src={dest.image}
          alt={dest.title}
          className="absolute inset-0 object-cover size-full transition-transform duration-500 group-hover/card:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/60" />
        <div className="absolute inset-0 shadow-[var(--shadow-inset-overlay)]" />

        {/* Content */}
        <div
          className="absolute inset-0 flex flex-col justify-between"
          style={{ padding: "clamp(16px, 1.5vw, 18px)" }}
        >
          {/* Top: match badge (left) + favourite (right) */}
          <div className="flex justify-between items-start">
            {showBadge && matchScore !== null ? (
              <MatchBadge score={matchScore} />
            ) : (
              <div />
            )}
            <Button
              variant="ghost"
              size="icon"
              className="size-8 md:size-10 rounded-full bg-surface/20 hover:bg-surface/30 active:scale-95 backdrop-blur-sm shadow-[var(--shadow-button-glow)] outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all"
              onClick={(e) => { e.stopPropagation(); toggleFavorite(dest.id); }}
              aria-label={saved ? "Remove from saved" : "Save destination"}
            >
              <Heart
                className={cn("size-4 md:size-5 transition-colors", saved ? "fill-surface text-surface" : "text-surface")}
              />
            </Button>
          </div>

          {/* Bottom: Info */}
          <div className="flex flex-col gap-1 md:gap-2">
            <p
              className="font-heading text-surface leading-tight font-bold text-title-3 leading-title-3"
            >
              {dest.title}
            </p>
            <button
              className="flex items-center gap-1 md:gap-1.5 w-fit hover:opacity-80 transition-opacity"
              onClick={handleLocationClick}
              aria-label={`Explore ${dest.country}`}
            >
              <MapPin className="size-3.5 md:size-4 text-surface shrink-0" />
              <span
                className="font-heading text-surface underline decoration-surface/40 underline-offset-2 text-body"
                style={{
                  fontStyle: "italic",
                }}
              >
                {dest.location}
              </span>
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
});
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };

const CARDS_PER_PAGE = 3;

export function WayfarerExperiences() {
  const [activeFilter, setActiveFilter] = useState("Trending");
  const [page, setPage] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [countryOpen, setCountryOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleCountrySelect = useCallback((country: string | null) => {
    setSelectedCountry(country);
    setPage(0);
    setCountryOpen(false);
    setDrawerOpen(false);
  }, []);

  const filteredDestinations = useMemo(() =>
    destinations.filter((dest) => {
      const matchesFilter = dest.categories.includes(activeFilter);
      const matchesCountry = selectedCountry ? dest.country === selectedCountry : true;
      return matchesFilter && matchesCountry;
    }),
    [activeFilter, selectedCountry]
  );

  const totalPages = useMemo(
    () => Math.ceil(filteredDestinations.length / CARDS_PER_PAGE),
    [filteredDestinations.length]
  );

  const visibleCards = useMemo(
    () => filteredDestinations.slice(page * CARDS_PER_PAGE, (page + 1) * CARDS_PER_PAGE),
    [filteredDestinations, page]
  );

  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
    setPage(0);
  }, []);

  const handleNext = useCallback(() => {
    setPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  return (
    <section
      className="bg-surface w-full pt-(--section-py-sm) pb-(--section-py-md)"
    >
      <div className="px-(--container-px)">

        {/* Header */}
        <motion.div
          className="flex items-center md:items-center justify-between gap-3 mb-(--space-stack-md)"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.h2
            className="font-heading leading-title-1"
            variants={sectionItem}
          >
            <span
              className="text-foreground text-title-1 font-semibold"
            >
              Find experiences around{" "}
            </span>
            <span className="inline items-center gap-1">
              {/* Desktop/Tablet: Popover dropdown */}
              <span className="hidden md:inline">
                <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                  <PopoverTrigger asChild>
                    <button
                      className="inline-flex items-center gap-1 font-heading text-foreground italic cursor-pointer rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-colors hover:text-accent text-title-1 font-normal"
                      aria-label="Select country"
                    >
                      {selectedCountry ? `${countryFlags[selectedCountry] ?? ""} ${selectedCountry}` : "Anywhere"}
                      <ChevronDown className={cn(
                        "size-5 md:size-7 inline-block align-middle transition-transform",
                        countryOpen && "rotate-180"
                      )} />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-[260px] p-0 border-border bg-surface shadow-lg rounded-[12px]"
                    align="start"
                    side="bottom"
                    sideOffset={8}
                  >
                    <CountryList
                      selectedCountry={selectedCountry}
                      onSelect={handleCountrySelect}
                    />
                  </PopoverContent>
                </Popover>
              </span>

              {/* Mobile: Drawer from bottom */}
              <span className="inline md:hidden">
                <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                  <DrawerTrigger asChild>
                    <button
                      className="inline-flex items-center gap-1 font-heading text-foreground italic cursor-pointer rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-colors hover:text-accent text-title-1 font-normal"
                      aria-label="Select country"
                    >
                      {selectedCountry ? `${countryFlags[selectedCountry] ?? ""} ${selectedCountry}` : "Anywhere"}
                      <ChevronDown className={cn(
                        "size-5 inline-block align-middle transition-transform",
                        drawerOpen && "rotate-180"
                      )} />
                    </button>
                  </DrawerTrigger>
                  <DrawerContent className="rounded-t-[16px]">
                    <DrawerHeader className="pb-0">
                      <DrawerTitle
                        className="font-heading text-foreground text-center text-title-3 font-semibold"
                      >
                        Select a destination
                      </DrawerTitle>
                    </DrawerHeader>
                    <div className="px-2 pb-4">
                      <CountryList
                        selectedCountry={selectedCountry}
                        onSelect={handleCountrySelect}
                      />
                    </div>
                  </DrawerContent>
                </Drawer>
              </span>
            </span>
          </motion.h2>
          <motion.a
            href="#"
            className="font-body text-text-link font-medium underline whitespace-nowrap shrink-0 hover:text-text-link-hover active:opacity-70 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm transition-colors self-center md:self-auto text-body"
            variants={sectionItem}
            onClick={(e) => { e.preventDefault(); navigate("/explore"); }}
          >
            View all
          </motion.a>
        </motion.div>

        {/* Filter Navigation — horizontal scroll */}
        <motion.div
          className="mb-(--space-stack-md)"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerFast}
        >
          <ScrollArea className="w-full">
            <div className="flex pb-2 gap-2 overflow-x-auto no-scrollbar">
              {filters.map((filter) => {
                const isActive = filter === activeFilter;
                return (
                  <motion.div
                    key={filter}
                    variants={badgeItem}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      onClick={() => handleFilterChange(filter)}
                      className={cn(
                        "font-body cursor-pointer rounded-full px-[12px] md:px-3 py-1.5 whitespace-nowrap transition-all select-none outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 text-badge",
                        isActive
                          ? "bg-accent-light text-accent border-2 border-accent hover:bg-accent-light shadow-[var(--shadow-badge-active)] font-medium"
                          : "bg-surface text-card-foreground border border-border hover:bg-muted hover:border-muted-foreground/30 active:bg-muted shadow-[var(--shadow-badge)] font-normal"
                      )}
                      style={{
                        height: isActive ? "36px" : "34px",
                      }}
                      tabIndex={0}
                    >
                      {filter}
                    </Badge>
                  </motion.div>
                );
              })}
            </div>
            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
        </motion.div>

        {/* Cards Row */}

        {filteredDestinations.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Globe className="size-10 text-muted-foreground/40 mb-3" />
            <p
              className="font-heading text-muted-foreground text-body font-medium"
            >
              No experiences found for {selectedCountry} in "{activeFilter}"
            </p>
            <button
              className="font-body text-accent mt-2 underline cursor-pointer hover:text-accent/80 transition-colors text-body-sm"
              onClick={() => { setSelectedCountry(null); setPage(0); }}
            >
              Show all countries
            </button>
          </div>
        ) : (
        <>
        {/* Desktop: CSS Grid — 3 equal columns + prev/next arrows */}
        <div className="hidden lg:block relative">
          {/* Previous button — overlay */}
          <AnimatePresence>
            {page > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 size-10 rounded-full border-border bg-surface text-card-foreground shadow-sm outline-none transition-all hover:bg-primary/8 hover:border-primary hover:text-primary hover:shadow-md active:scale-95 active:bg-primary/12 active:border-primary active:shadow-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                  onClick={handlePrev}
                  aria-label="Go to previous destinations"
                >
                  <ChevronLeft className="size-4" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next button — overlay */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={defaultTransition}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10",
              totalPages <= 1 && "opacity-30 pointer-events-none"
            )}
          >
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 size-10 rounded-full border-border bg-surface text-card-foreground shadow-sm outline-none transition-all hover:bg-primary/8 hover:border-primary hover:text-primary hover:shadow-md active:scale-95 active:bg-primary/12 active:border-primary active:shadow-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
              onClick={handleNext}
              aria-label="See more destinations"
            >
              <ChevronRight className="size-4" />
            </Button>
          </motion.div>

          {/* Card grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              className="grid grid-cols-3 gap-(--grid-gap)"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {visibleCards.map((dest) => (
                <DestinationCard key={dest.id} dest={dest} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Page indicator dots — desktop only */}
        {totalPages > 1 && (
          <div className="hidden lg:flex justify-center items-center gap-2 mt-(--space-stack-sm)">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={cn(
                  "rounded-full transition-all",
                  i === page
                    ? "bg-accent w-2 h-2 scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2 h-2"
                )}
              />
            ))}
          </div>
        )}

        {/* Mobile: horizontal scroll — show all filtered cards */}
        <div className="lg:hidden">
          <ScrollArea className="w-[calc(100%+var(--container-px))] -mr-[var(--container-px)]">
            <motion.div
              className="flex pb-4 pr-[var(--container-px)] gap-(--grid-gap)"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={stagger}
            >
              {filteredDestinations.map((dest) => (
                <div key={dest.id} className="shrink-0 w-[clamp(220px,67vw,280px)]">
                  <DestinationCard dest={dest} compact />
                </div>
              ))}
            </motion.div>
            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
        </div>
        </>
        )}
      </div>
    </section>
  );
}
