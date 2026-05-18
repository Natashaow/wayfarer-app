import { useMemo } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { destinations } from "./destinations-data";
import { usePersonalization } from "./PersonalizationContext";
import { useAuth } from "./AuthContext";
import { DestinationCard } from "./WayfarerExperiences";
import {
  stagger,
  sectionItem,
  viewport,
} from "./animations";

const DESKTOP_LIMIT = 6;

export function PersonalizedSection() {
  const { tier, getPersonalizedFeed, inferredInterests, getMatchScore } = usePersonalization();
  const { user } = useAuth();
  const navigate = useNavigate();

  const topDestinations = useMemo(() => {
    if (tier === "none") return [];
    const feed = getPersonalizedFeed(destinations);
    // Only show destinations with a meaningful match score
    return feed.filter((d) => {
      const score = getMatchScore(d);
      return score !== null && score >= 60;
    }).slice(0, DESKTOP_LIMIT);
  }, [tier, getPersonalizedFeed, getMatchScore]);

  if (tier === "none" || topDestinations.length < 3) return null;

  const heading =
    user
      ? `Curated for you, ${user.firstName}`
      : "Trending for your taste";

  const subtext =
    tier === "explicit"
      ? "Based on your preferences and browsing history"
      : inferredInterests.length > 0
      ? `Inspired by your interest in ${inferredInterests.slice(0, 2).join(" & ")}`
      : "Based on your recent browsing";

  return (
    <section className="bg-surface w-full pt-(--section-py-sm) pb-(--section-py-md)">
      <div className="px-(--container-px)">
        {/* Header */}
        <motion.div
          className="flex items-start md:items-center justify-between gap-3 mb-(--space-stack-md)"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.div className="flex flex-col gap-1" variants={sectionItem}>
            <div className="flex items-center gap-2">
              <Sparkles
                className="size-4 shrink-0"
                style={{ color: "var(--accent)" }}
                strokeWidth={1.8}
              />
              <span
                className="font-body text-caption font-medium"
                style={{ color: "var(--accent)" }}
              >
                {tier === "explicit" ? "AI-personalized" : "Personalized for you"}
              </span>
            </div>
            <h2
              className="font-heading text-foreground text-title-1 font-semibold leading-title-1"
            >
              {heading}
            </h2>
            <p
              className="font-body text-muted-foreground text-body-sm"
            >
              {subtext}
            </p>
          </motion.div>

          <motion.button
            className="font-body text-text-link font-medium underline whitespace-nowrap shrink-0 hover:text-text-link-hover active:opacity-70 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm transition-colors self-start md:self-center text-body flex items-center gap-1"
            variants={sectionItem}
            onClick={() => navigate("/explore")}
          >
            View all
            <ArrowRight className="size-3.5" />
          </motion.button>
        </motion.div>

        {/* Desktop: 3-column grid (first 3) */}
        <div className="hidden lg:block">
          <motion.div
            className="grid grid-cols-3 gap-(--grid-gap)"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            {topDestinations.slice(0, 3).map((dest) => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}
          </motion.div>

          {/* Second row (next 3) — only if we have 6 */}
          {topDestinations.length >= 6 && (
            <motion.div
              className="grid grid-cols-3 gap-(--grid-gap) mt-(--grid-gap)"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={stagger}
            >
              {topDestinations.slice(3, 6).map((dest) => (
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
              {topDestinations.map((dest) => (
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
