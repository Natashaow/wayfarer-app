import { useState, useMemo, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { WayfarerNavbar } from "../components/WayfarerNavbar";
import { WayfarerFooter } from "../components/WayfarerFooter";
import { DestinationCard } from "../components/WayfarerExperiences";
import {
  destinations,
  filters,
  countries,
  countryFlags,
} from "../components/destinations-data";
import { Globe, Search, SlidersHorizontal, X, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { cn } from "../components/ui/utils";
import { motion, AnimatePresence } from "motion/react";
import {
  stagger,
  staggerFast,
  fadeUp,
  sectionItem,
  badgeItem,
  viewport,
  fastTransition,
  quickTransition,
} from "../components/animations";
import { usePersonalization } from "../components/PersonalizationContext";

export default function ExploreAllPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialFilter = searchParams.get("filter") ?? "All";
  const initialQuery = searchParams.get("q") ?? "";

  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [showCountries, setShowCountries] = useState(false);
  const [smartSort, setSmartSort] = useState(false);

  const { tier, getPersonalizedFeed } = usePersonalization();
  const canSmartSort = tier !== "none";

  const allFilters = ["All", ...filters];

  const filtered = useMemo(() => {
    let results = destinations;

    // Category filter
    if (activeFilter !== "All") {
      results = results.filter((d) => d.categories.includes(activeFilter));
    }

    // Country filter
    if (selectedCountry) {
      results = results.filter((d) => d.country === selectedCountry);
    }

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      results = results.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.location.toLowerCase().includes(q) ||
          d.country.toLowerCase().includes(q)
      );
    }

    // Smart sort — rank by personalization score
    if (smartSort && canSmartSort) {
      return getPersonalizedFeed(results);
    }

    return results;
  }, [activeFilter, selectedCountry, searchQuery, smartSort, canSmartSort, getPersonalizedFeed]);

  const handleClearFilters = useCallback(() => {
    setActiveFilter("All");
    setSelectedCountry(null);
    setSearchQuery("");
  }, []);

  const hasActiveFilters =
    activeFilter !== "All" || selectedCountry !== null || searchQuery.trim() !== "";

  return (
    <div
      className="flex flex-col w-full min-h-screen overflow-x-hidden bg-surface font-body"
    >
      <WayfarerNavbar />
      <main className="flex flex-col w-full flex-1">
        <section
          className="w-full py-(--section-py-lg)"
        >
          <div
            className="px-(--container-px)"
          >
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              {/* Breadcrumbs */}
              <motion.div variants={sectionItem}>
                <Breadcrumbs items={[{ label: "Explore all" }]} />
              </motion.div>

              {/* Header */}
              <motion.div
                className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-(--space-stack-md)"
                variants={sectionItem}
              >
                <div>
                  <h1
                    className="font-heading text-foreground text-title-1 font-semibold leading-title-1"
                  >
                    Explore all experiences
                  </h1>
                  <p
                    className="font-body text-muted-foreground mt-1 text-body"
                  >
                    {filtered.length} experience{filtered.length !== 1 ? "s" : ""}{" "}
                    {hasActiveFilters ? "matching your filters" : "worldwide"}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {/* Smart sort toggle — only when personalization data exists */}
                  {canSmartSort && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={fastTransition}
                    >
                      <Button
                        variant="outline"
                        className={cn(
                          "font-body rounded-full h-9 px-4 w-fit font-medium text-body-sm gap-1.5 transition-all",
                          smartSort
                            ? "bg-accent-light border-2 border-accent text-accent hover:bg-accent-light shadow-[var(--shadow-badge-active)]"
                            : "border-border text-card-foreground hover:bg-muted"
                        )}
                        onClick={() => setSmartSort(!smartSort)}
                      >
                        <Sparkles className="size-3.5" />
                        Smart sort
                      </Button>
                    </motion.div>
                  )}
                  {hasActiveFilters && (
                    <Button
                      variant="outline"
                      className="font-body rounded-full border-border text-card-foreground hover:bg-muted h-9 px-4 w-fit font-medium text-body-sm"
                      onClick={handleClearFilters}
                    >
                      <X className="size-3.5 mr-1.5" />
                      Clear all filters
                    </Button>
                  )}
                </div>
              </motion.div>

              {/* Search bar */}
              <motion.div
                variants={sectionItem}
                className="relative mb-4 max-w-[480px]"
              >
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                  <Search className="size-[18px]" strokeWidth={1.8} />
                </div>
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, location, or country..."
                  className="font-body pl-11 h-[44px] rounded-full border-2 border-border bg-surface text-foreground placeholder:text-muted-foreground text-sm shadow-[var(--shadow-input)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </motion.div>

              {/* Category filters */}
              <motion.div
                className="mb-(--space-stack-xs)"
                variants={staggerFast}
              >
                <ScrollArea className="w-full">
                  <div className="flex pb-2 gap-2">
                    {allFilters.map((filter) => {
                      const isActive = filter === activeFilter;
                      return (
                        <motion.div
                          key={filter}
                          variants={badgeItem}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            onClick={() => setActiveFilter(filter)}
                            className={cn(
                              "font-body cursor-pointer rounded-full px-[12px] md:px-3 py-1.5 whitespace-nowrap transition-all select-none outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 text-badge",
                              isActive
                                ? "bg-accent-light text-accent border-2 border-accent hover:bg-accent-light shadow-[var(--shadow-badge-active)] font-medium h-[36px]"
                                : "bg-surface text-card-foreground border border-border hover:bg-muted hover:border-muted-foreground/30 active:bg-muted shadow-[var(--shadow-badge)] font-normal h-[34px]"
                            )}
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

              {/* Country pills */}
              <motion.div
                className="mb-(--space-stack-md)"
                variants={sectionItem}
              >
                <button
                  className="flex items-center gap-2 font-body text-muted-foreground hover:text-foreground transition-colors mb-2 text-body-sm font-medium"
                  onClick={() => setShowCountries(!showCountries)}
                >
                  <SlidersHorizontal className="size-3.5" />
                  {showCountries ? "Hide" : "Filter by"} country
                </button>
                <AnimatePresence>
                  {showCountries && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={quickTransition}
                      className="overflow-hidden"
                    >
                      <ScrollArea className="w-full">
                        <div className="flex pb-2 gap-2">
                          <Badge
                            onClick={() => setSelectedCountry(null)}
                            className={cn(
                              "font-body cursor-pointer rounded-full px-3 py-1.5 whitespace-nowrap transition-all select-none text-badge",
                              selectedCountry === null
                                ? "bg-accent-light text-accent border-2 border-accent font-medium h-[36px]"
                                : "bg-surface text-card-foreground border border-border hover:bg-muted font-normal h-[34px]"
                            )}
                          >
                            <Globe className="size-3.5 mr-1" />
                            All countries
                          </Badge>
                          {countries.map((country) => {
                            const isActive = selectedCountry === country;
                            return (
                              <Badge
                                key={country}
                                onClick={() => setSelectedCountry(country)}
                                className={cn(
                                  "font-body cursor-pointer rounded-full px-3 py-1.5 whitespace-nowrap transition-all select-none text-badge",
                                  isActive
                                    ? "bg-accent-light text-accent border-2 border-accent font-medium h-[36px]"
                                    : "bg-surface text-card-foreground border border-border hover:bg-muted font-normal h-[34px]"
                                )}
                              >
                                <span className="mr-1">{countryFlags[country]}</span>
                                {country}
                              </Badge>
                            );
                          })}
                        </div>
                        <ScrollBar orientation="horizontal" className="hidden" />
                      </ScrollArea>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Results grid */}
              {filtered.length > 0 ? (
                <motion.div
                  key={`${activeFilter}-${selectedCountry}-${searchQuery}`}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-(--grid-gap)"
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                >
                  {filtered.map((dest) => (
                    <DestinationCard key={dest.id} dest={dest} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="flex flex-col items-center justify-center py-20 gap-4"
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                >
                  <Globe className="size-10 text-muted-foreground/40" />
                  <p
                    className="font-heading text-muted-foreground text-center text-body font-medium"
                  >
                    No experiences match your current filters
                  </p>
                  <Button
                    variant="outline"
                    onClick={handleClearFilters}
                    className="font-body rounded-full border-border text-card-foreground hover:bg-muted font-medium text-body-sm"
                  >
                    Clear all filters
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <WayfarerFooter />
    </div>
  );
}
