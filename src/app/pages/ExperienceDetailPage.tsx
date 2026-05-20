import { useParams, useNavigate, Link } from "react-router";
import { useEffect } from "react";
import { WayfarerNavbar } from "../components/WayfarerNavbar";
import { WayfarerFooter } from "../components/WayfarerFooter";
import { DestinationCard } from "../components/WayfarerExperiences";
import { useFavorites } from "../components/FavoritesContext";
import { useRecentlyViewed } from "../components/RecentlyViewedContext";
import { Breadcrumbs } from "../components/Breadcrumbs";
import {
  getDestinationBySlug,
  getDestinationsByCountry,
  countryFlags,
  destinations,
} from "../components/destinations-data";
import {
  Heart,
  ArrowLeft,
  MapPin,
  Star,
  Clock,
  Users,
  ChevronRight,
  Share2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import { motion } from "motion/react";
import {
  stagger,
  fadeUp,
  sectionItem,
  fadeIn,
  viewport,
} from "../components/animations";

export default function ExperienceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { trackView } = useRecentlyViewed();
  const dest = getDestinationBySlug(slug ?? "");

  // Track as recently viewed
  const destId = dest?.id;
  useEffect(() => {
    if (destId != null) {
      trackView(destId);
    }
  }, [destId, trackView]);

  if (!dest) {
    return (
      <div
        className="flex flex-col w-full min-h-screen overflow-x-hidden bg-surface font-body"
      >
        <WayfarerNavbar />
        <main className="flex flex-col items-center justify-center flex-1 py-24 gap-4">
          <p
            className="font-heading text-foreground text-title-2 font-semibold"
          >
            Experience not found
          </p>
          <Button
            onClick={() => navigate("/")}
            className="font-heading rounded-full h-12 px-8 bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta-sm)] hover:opacity-90 font-bold"
          >
            Back to explore
          </Button>
        </main>
        <WayfarerFooter />
      </div>
    );
  }

  const saved = isFavorite(dest.id);
  const relatedByCountry = getDestinationsByCountry(dest.countrySlug).filter(
    (d) => d.id !== dest.id
  );
  const relatedByCategory = destinations
    .filter(
      (d) =>
        d.id !== dest.id &&
        !relatedByCountry.find((r) => r.id === d.id) &&
        d.categories.some((c) => dest.categories.includes(c))
    )
    .slice(0, 3);
  const relatedCards = [...relatedByCountry, ...relatedByCategory].slice(0, 3);

  return (
    <div
      className="flex flex-col w-full min-h-screen overflow-x-hidden bg-surface font-body"
    >
      <WayfarerNavbar />
      <main className="flex flex-col w-full flex-1">
        {/* Hero image */}
        <motion.div
          className="relative w-full h-[clamp(280px,50vw,520px)]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <img
            src={dest.image}
            alt={dest.title}
            className="absolute inset-0 object-cover size-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/60" />

          {/* Overlay actions */}
          <div
            className="absolute top-0 left-0 right-0 flex items-center justify-between px-(--container-px) pt-[clamp(16px,3vw,24px)]"
          >
            <Button
              variant="ghost"
              size="icon"
              className="size-10 rounded-full bg-surface/20 hover:bg-surface/30 backdrop-blur-sm text-surface"
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="size-10 rounded-full bg-surface/20 hover:bg-surface/30 backdrop-blur-sm text-surface"
                aria-label="Share"
              >
                <Share2 className="size-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="size-10 rounded-full bg-surface/20 hover:bg-surface/30 backdrop-blur-sm text-surface"
                onClick={() => toggleFavorite(dest.id)}
                aria-label={saved ? "Remove from favorites" : "Save"}
              >
                <Heart
                  className={`size-5 transition-colors ${saved ? "fill-surface text-surface" : "text-surface"}`}
                />
              </Button>
            </div>
          </div>

          {/* Bottom info overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 px-(--container-px) pb-[clamp(24px,4vw,40px)]"
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {dest.categories.slice(0, 3).map((cat) => (
                  <Badge
                    key={cat}
                    className="font-body bg-surface/20 backdrop-blur-sm text-surface border-0 rounded-full px-3 py-1 text-caption"
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
              <h1
                className="font-heading text-surface text-display font-bold leading-display"
              >
                {dest.title}
              </h1>
              <Link
                to={`/country/${dest.countrySlug}`}
                className="flex items-center gap-1.5 text-surface/90 hover:text-surface transition-colors w-fit"
              >
                <MapPin className="size-4 shrink-0" />
                <span
                  className="italic text-body"
                >
                  {dest.location}
                </span>
                <ChevronRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Content body */}
        <section
          className="pt-(--section-py-sm) pb-(--section-py-md) px-(--container-px)"
        >
          <div className="max-w-[880px] mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="flex flex-col gap-(--space-stack-lg)"
            >
              {/* Breadcrumbs */}
              <motion.div variants={sectionItem}>
                <Breadcrumbs
                  items={[
                    { label: "Explore", href: "/explore" },
                    { label: dest.country, href: `/country/${dest.countrySlug}` },
                    { label: dest.title },
                  ]}
                />
              </motion.div>

              {/* Stats bar */}
              <motion.div
                variants={sectionItem}
                className="flex flex-wrap items-center gap-4 md:gap-6 py-4 border-b border-border"
              >
                <div className="flex items-center gap-1.5">
                  <Star className="size-4 text-primary fill-primary" />
                  <span
                    className="text-foreground font-bold text-body"
                  >
                    {dest.rating}
                  </span>
                  <span
                    className="font-body text-muted-foreground text-body-sm"
                  >
                    ({dest.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="size-4 text-accent" />
                  <span
                    className="font-body text-card-foreground text-body"
                  >
                    {dest.duration}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="size-4 text-accent" />
                  <span
                    className="font-body text-card-foreground text-body"
                  >
                    Small group
                  </span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div variants={sectionItem} className="flex flex-col gap-(--space-stack-sm)">
                <h2
                  className="font-heading text-foreground text-title-2 font-semibold leading-title-2"
                >
                  About this experience
                </h2>
                <p
                  className="font-body text-card-foreground text-body leading-body"
                >
                  {dest.description}
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div variants={sectionItem} className="flex flex-col gap-(--space-stack-sm)">
                <h2
                  className="font-heading text-foreground text-title-2 font-semibold leading-title-2"
                >
                  Highlights
                </h2>
                <ul className="flex flex-col gap-3">
                  {dest.highlights.map((hl, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      variants={sectionItem}
                    >
                      <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                      <span
                        className="font-body text-card-foreground text-body leading-body"
                      >
                        {hl}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Country link */}
              <motion.div variants={sectionItem}>
                <Link
                  to={`/country/${dest.countrySlug}`}
                  className="flex items-center gap-3 p-4 rounded-[16px] border border-border bg-surface hover:bg-muted transition-colors group"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {countryFlags[dest.country] ?? ""}
                  </span>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span
                      className="text-foreground font-semibold text-body"
                    >
                      Explore more in {dest.country}
                    </span>
                    <span
                      className="font-body text-muted-foreground text-body-sm"
                    >
                      {getDestinationsByCountry(dest.countrySlug).length} experience
                      {getDestinationsByCountry(dest.countrySlug).length !== 1 ? "s" : ""} available
                    </span>
                  </div>
                  <ChevronRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </Link>
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={sectionItem}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button
                  className="font-heading flex-1 h-12 rounded-full bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta-sm)] hover:opacity-90 font-bold"
                >
                  Book this experience
                </Button>
                <Button
                  variant="outline"
                  className="font-heading h-12 rounded-full border-border text-card-foreground hover:bg-muted px-8 font-bold"
                  onClick={() => toggleFavorite(dest.id)}
                >
                  <Heart
                    className={`size-4 mr-2 transition-colors ${saved ? "fill-primary text-primary" : ""}`}
                  />
                  {saved ? "Saved" : "Save for later"}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Related experiences */}
        {relatedCards.length > 0 && (
          <section
            className="w-full bg-surface pt-(--section-py-sm) pb-(--section-py-md)"
          >
            <div
              className="px-(--container-px)"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={stagger}
              >
                <motion.h2
                  className="font-heading text-foreground text-title-2 font-semibold leading-title-2 mb-(--space-stack-md)"
                  variants={sectionItem}
                >
                  You might also enjoy
                </motion.h2>

                {/* Desktop grid */}
                <div className="hidden lg:grid grid-cols-3 gap-(--grid-gap)">
                  {relatedCards.map((d) => (
                    <DestinationCard key={d.id} dest={d} />
                  ))}
                </div>

                {/* Mobile scroll */}
                <div className="lg:hidden">
                  <ScrollArea className="w-[calc(100%+var(--container-px))] -mr-[var(--container-px)]">
                    <div
                      className="flex pb-4 pr-[var(--container-px)] gap-(--grid-gap)"
                    >
                      {relatedCards.map((d) => (
                        <div
                          key={d.id}
                          className="shrink-0 w-[clamp(220px,67vw,280px)]"
                        >
                          <DestinationCard dest={d} compact />
                        </div>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" className="hidden" />
                  </ScrollArea>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </main>
      <WayfarerFooter />
    </div>
  );
}
