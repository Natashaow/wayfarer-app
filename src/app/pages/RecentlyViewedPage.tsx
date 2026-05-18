import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { WayfarerNavbar } from "../components/WayfarerNavbar";
import { WayfarerFooter } from "../components/WayfarerFooter";
import { DestinationCard } from "../components/WayfarerExperiences";
import { useRecentlyViewed } from "../components/RecentlyViewedContext";
import { destinations } from "../components/destinations-data";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Clock, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import {
  stagger,
  fadeUp,
  defaultTransition,
} from "../components/animations";

const sectionItem = {
  hidden: { y: 24 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

export default function RecentlyViewedPage() {
  const { recentIds } = useRecentlyViewed();
  const navigate = useNavigate();

  // Fallback to localStorage on mount in case the provider state is empty
  // (e.g. hard reload landing directly on this page).
  const [fallbackIds, setFallbackIds] = useState<number[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("wayfarer_recently_viewed");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setFallbackIds(parsed.filter((n) => typeof n === "number"));
        }
      }
    } catch {
      // noop
    }
  }, []);

  const effectiveIds = recentIds.length > 0 ? recentIds : fallbackIds;

  const recentDestinations = useMemo(
    () =>
      effectiveIds
        .map((id) => destinations.find((d) => d.id === id))
        .filter(Boolean) as (typeof destinations)[number][],
    [effectiveIds]
  );

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
              <motion.div variants={sectionItem}>
                <Breadcrumbs items={[{ label: "Recently viewed" }]} />
              </motion.div>

              {/* Header */}
              <motion.div
                className="flex items-center gap-3 mb-(--space-stack-lg)"
                variants={sectionItem}
              >
                <div className="flex items-center justify-center size-12 rounded-full bg-accent/10">
                  <Clock className="size-5 text-accent" />
                </div>
                <div>
                  <h1
                    className="font-heading text-foreground text-title-1 font-semibold leading-title-1"
                  >
                    Recently viewed
                  </h1>
                  <p
                    className="font-body text-muted-foreground text-body"
                  >
                    {recentDestinations.length === 0
                      ? "You haven't viewed any experiences yet"
                      : `${recentDestinations.length} experience${recentDestinations.length !== 1 ? "s" : ""} viewed`}
                  </p>
                </div>
              </motion.div>

              {/* Grid or empty state */}
              {recentDestinations.length > 0 ? (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-(--grid-gap)"
                  variants={stagger}
                >
                  {recentDestinations.map((dest) => (
                    <DestinationCard key={dest.id} dest={dest} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="flex flex-col items-center justify-center py-24 gap-6"
                  variants={fadeUp}
                >
                  <div className="flex items-center justify-center size-20 rounded-full bg-muted">
                    <Clock className="size-8 text-muted-foreground" />
                  </div>
                  <div className="text-center">
                    <p
                      className="font-heading text-foreground text-title-2 font-semibold mb-[8px]"
                    >
                      Nothing here yet
                    </p>
                    <p
                      className="font-body text-muted-foreground max-w-md text-body"
                    >
                      Experiences you view will appear here so you can easily
                      find them again.
                    </p>
                  </div>
                  <Button
                    onClick={() => navigate("/")}
                    className="font-heading rounded-full h-12 px-8 bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta-sm)] hover:opacity-90 font-bold"
                  >
                    Start exploring
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
