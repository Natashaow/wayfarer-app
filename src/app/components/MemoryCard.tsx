import { useCallback } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowRight, Bookmark, MapPin } from "lucide-react";
import { Card } from "./ui/card";
import type { Destination } from "./destinations-data";
import { useFavorites } from "./FavoritesContext";
import { cardItem, quickTransition } from "./animations";
import { formatRelativeTime } from "../lib/relative-time";

interface MemoryCardProps {
  dest: Destination;
  viewedAt: string;
  /** Mobile horizontal-scroll uses a denser 88px thumbnail; desktop grid uses 112px. */
  compact?: boolean;
}

/**
 * MemoryCard — compact, horizontal "you've been here before" tile.
 *
 * Visually distinct from DestinationCard (the discovery hero): smaller,
 * thumbnail-left, with a personal meta-row ("Last visit · Tuesday · Saved")
 * and a forward verb CTA ("Resume"). Used by RecentlyViewedSection only.
 *
 * Rationale: the discovery rail sells destinations; the memory rail honours
 * the user's prior intent. Same data, different job — different card.
 */
export function MemoryCard({ dest, viewedAt, compact }: MemoryCardProps) {
  const { isFavorite } = useFavorites();
  const saved = isFavorite(dest.id);
  const navigate = useNavigate();
  const relative = formatRelativeTime(viewedAt);

  const handleClick = useCallback(() => {
    navigate(`/experience/${dest.slug}`);
  }, [navigate, dest.slug]);

  const handleLocationClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      navigate(`/country/${dest.countrySlug}`);
    },
    [navigate, dest.countrySlug]
  );

  const thumbSize = compact ? "88px" : "112px";

  return (
    <motion.div
      variants={cardItem}
      whileHover={{ y: -2, transition: quickTransition }}
    >
      <Card
        className="group relative flex flex-row items-stretch gap-(--space-stack-md) rounded-[16px] border border-border bg-surface p-(--space-stack-sm) cursor-pointer outline-none transition-colors hover:border-accent/40 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 shadow-none hover:shadow-[var(--shadow-card)]"
        onClick={handleClick}
        role="link"
        tabIndex={0}
        aria-label={`Resume ${dest.title}, last viewed ${relative}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        {/* Thumbnail — square, lower-emphasis than discovery hero crop */}
        <div
          className="relative shrink-0 overflow-hidden rounded-[12px]"
          style={{ width: thumbSize, height: thumbSize }}
        >
          <img
            src={dest.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 min-w-0 flex-col justify-between gap-1 py-1">
          {/* Top meta row — the "memory" signal */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-body text-caption text-muted-foreground">
              Last visit · <span className="text-foreground/80">{relative}</span>
            </span>
            {saved && (
              <span
                className="inline-flex items-center gap-1 font-body text-caption font-medium"
                style={{ color: "var(--accent)" }}
              >
                <Bookmark
                  className="size-3 fill-current"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Saved
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-heading text-foreground text-title-3 leading-title-3 font-semibold truncate">
            {dest.title}
          </h3>

          {/* Bottom row — location + Resume CTA */}
          <div className="flex items-center justify-between gap-2">
            <button
              type="button"
              className="flex items-center gap-1 min-w-0 hover:opacity-80 transition-opacity outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              onClick={handleLocationClick}
              aria-label={`Explore ${dest.country}`}
            >
              <MapPin
                className="size-3.5 shrink-0 text-muted-foreground"
                strokeWidth={1.8}
              />
              <span
                className="font-heading italic text-muted-foreground text-caption truncate"
              >
                {dest.location}
              </span>
            </button>
            <span className="font-body text-caption font-medium text-text-link inline-flex items-center gap-1 shrink-0 transition-all group-hover:gap-2">
              Resume
              <ArrowRight className="size-3.5" />
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
