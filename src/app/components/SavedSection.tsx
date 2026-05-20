import { useMemo } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Heart, ArrowRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { destinations } from "./destinations-data";
import { useFavorites } from "./FavoritesContext";
import { DestinationCard } from "./WayfarerExperiences";
import { stagger, sectionItem, viewport } from "./animations";

const DESKTOP_LIMIT = 6;
const MIN_ITEMS = 3;

export function SavedSection() {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  const items = useMemo(() => {
    return destinations
      .filter((d) => favorites.has(d.id))
      .slice(0, DESKTOP_LIMIT);
  }, [favorites]);

  if (items.length < MIN_ITEMS) return null;

  return (
    <section className="bg-surface w-full pt-(--section-py-sm) pb-(--section-py-md)">
      <div className="px-(--container-px)">
        <motion.div
          className="flex items-start md:items-center justify-between gap-3 mb-(--space-stack-md)"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.div className="flex flex-col gap-1" variants={sectionItem}>
            <div className="flex items-center gap-2">
              <Heart
                className="size-4 shrink-0"
                style={{ color: "var(--accent)" }}
                strokeWidth={1.8}
              />
              <span
                className="font-body text-caption font-medium"
                style={{ color: "var(--accent)" }}
              >
                Your saved spots
              </span>
            </div>
            <h2 className="font-heading text-foreground text-title-1 font-semibold leading-title-1">
              Saved for later
            </h2>
          </motion.div>

          <motion.button
            className="font-body text-text-link font-medium underline whitespace-nowrap shrink-0 hover:text-text-link-hover active:opacity-70 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm transition-colors self-start md:self-center text-body flex items-center gap-1"
            variants={sectionItem}
            onClick={() => navigate("/favorites")}
          >
            View all
            <ArrowRight className="size-3.5" />
          </motion.button>
        </motion.div>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:block">
          <motion.div
            className="grid grid-cols-3 gap-(--grid-gap)"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            {items.slice(0, 3).map((dest) => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}
          </motion.div>

          {items.length >= 6 && (
            <motion.div
              className="grid grid-cols-3 gap-(--grid-gap) mt-(--grid-gap)"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={stagger}
            >
              {items.slice(3, 6).map((dest) => (
                <DestinationCard key={dest.id} dest={dest} />
              ))}
            </motion.div>
          )}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="lg:hidden">
          <ScrollArea className="w-[calc(100%+var(--container-px))] -mr-[var(--container-px)]">
            <motion.div
              className="flex pb-4 pr-[var(--container-px)] gap-(--grid-gap)"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={stagger}
            >
              {items.map((dest) => (
                <div key={dest.id} className="shrink-0 w-[clamp(220px,67vw,280px)]">
                  <DestinationCard dest={dest} compact />
                </div>
              ))}
            </motion.div>
            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}
