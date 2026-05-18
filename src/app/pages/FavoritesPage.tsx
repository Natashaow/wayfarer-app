import { useState, useMemo } from "react";
import { WayfarerNavbar } from "../components/WayfarerNavbar";
import { WayfarerFooter } from "../components/WayfarerFooter";
import { DestinationCard } from "../components/WayfarerExperiences";
import { useFavorites } from "../components/FavoritesContext";
import { destinations } from "../components/destinations-data";
import { Heart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { cn } from "../components/ui/utils";
import { motion, AnimatePresence } from "motion/react";
import {
  stagger,
  staggerFast,
  fadeUp,
  defaultTransition,
  fastTransition,
} from "../components/animations";
import { useNavigate } from "react-router";

const sectionItem = {
  hidden: { y: 24 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

const badgeItem = {
  hidden: { scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: fastTransition },
};

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const favoriteDestinations = useMemo(
    () => destinations.filter((d) => favorites.has(d.id)),
    [favorites]
  );

  // Derive category options from saved destinations only
  const availableCategories = useMemo(() => {
    const cats = new Set<string>();
    favoriteDestinations.forEach((d) => d.categories.forEach((c) => cats.add(c)));
    return ["All", ...Array.from(cats)];
  }, [favoriteDestinations]);

  // Filter by selected category
  const displayedDestinations = useMemo(() => {
    if (activeFilter === "All") return favoriteDestinations;
    return favoriteDestinations.filter((d) => d.categories.includes(activeFilter));
  }, [favoriteDestinations, activeFilter]);

  // Reset filter if the active one no longer has results
  const safeFilter = availableCategories.includes(activeFilter) ? activeFilter : "All";
  if (safeFilter !== activeFilter) setActiveFilter("All");

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
            {/* Back button + Header */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={sectionItem}>
                <Breadcrumbs items={[{ label: "Saved destinations" }]} />
              </motion.div>

              <motion.div
                className="flex items-center gap-3 mb-(--space-stack-md)"
                variants={sectionItem}
              >
                <div className="flex items-center justify-center size-12 rounded-full bg-accent/10">
                  <Heart className="size-5 text-accent" />
                </div>
                <div>
                  <h1
                    className="font-heading text-foreground text-title-1 font-semibold leading-title-1"
                  >
                    Saved Destinations
                  </h1>
                  <p
                    className="font-body text-muted-foreground text-body"
                  >
                    {favoriteDestinations.length === 0
                      ? "You haven't saved any destinations yet"
                      : `${favoriteDestinations.length} destination${favoriteDestinations.length !== 1 ? "s" : ""} saved`}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Category filter pills */}
            {favoriteDestinations.length > 0 && (
              <motion.div
                className="mb-(--space-stack-md)"
                initial="hidden"
                animate="visible"
                variants={staggerFast}
              >
                <ScrollArea className="w-full">
                  <div className="flex pb-2 gap-2">
                    {availableCategories.map((cat) => {
                      const isActive = cat === activeFilter;
                      return (
                        <motion.div
                          key={cat}
                          variants={badgeItem}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            onClick={() => setActiveFilter(cat)}
                            className={cn(
                              "font-body cursor-pointer rounded-full px-[12px] md:px-3 py-1.5 whitespace-nowrap transition-all select-none outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 text-badge",
                              isActive
                                ? "bg-accent-light text-accent border-2 border-accent hover:bg-accent-light shadow-[var(--shadow-badge-active)] font-medium h-[36px]"
                                : "bg-surface text-card-foreground border border-border hover:bg-muted hover:border-muted-foreground/30 active:bg-muted shadow-[var(--shadow-badge)] font-normal h-[34px]"
                            )}
                            tabIndex={0}
                          >
                            {cat}
                          </Badge>
                        </motion.div>
                      );
                    })}
                  </div>
                  <ScrollBar orientation="horizontal" className="hidden" />
                </ScrollArea>
              </motion.div>
            )}

            {/* Cards grid or empty state */}
            {favoriteDestinations.length > 0 ? (
              displayedDestinations.length > 0 ? (
                <motion.div
                  key={activeFilter}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-(--grid-gap)"
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                >
                  {displayedDestinations.map((dest) => (
                    <DestinationCard key={dest.id} dest={dest} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="flex flex-col items-center justify-center py-16 gap-4"
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                >
                  <p
                    className="font-body text-muted-foreground text-body"
                  >
                    No saved destinations match this category.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setActiveFilter("All")}
                    className="font-body rounded-full border-border text-card-foreground hover:bg-muted font-medium text-body-sm"
                  >
                    Show all saved
                  </Button>
                </motion.div>
              )
            ) : (
              <motion.div
                className="flex flex-col items-center justify-center py-24 gap-6"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <div className="flex items-center justify-center size-20 rounded-full bg-muted">
                  <Heart className="size-8 text-muted-foreground" />
                </div>
                <div className="text-center">
                  <p
                    className="font-heading text-foreground text-title-2 font-semibold mb-[8px]"
                  >
                    No saved destinations yet
                  </p>
                  <p
                    className="font-body text-muted-foreground max-w-md text-body"
                  >
                    Tap the heart icon on any destination to save it here for later.
                  </p>
                </div>
                <Button
                  onClick={() => navigate("/")}
                  className="font-heading rounded-full h-12 px-8 bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta-sm)] hover:opacity-90 font-bold"
                >
                  Explore destinations
                </Button>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <WayfarerFooter />
    </div>
  );
}
