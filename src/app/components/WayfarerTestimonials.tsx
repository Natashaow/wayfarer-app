import imgUserProfile1 from "figma:asset/b41c98dab08bc3348c5322a353f0050a4a3a2ded.png";
import imgUserProfile2 from "figma:asset/4728b493b16c8c7caabba896e57c533a6e789832.png";
const imgUserProfile3 = "https://images.unsplash.com/photo-1573991082514-3cc23ad2130e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwdHJhdmVsZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIzNzkzODR8MA&ixlib=rb-4.1.0&q=80&w=256";
const imgUserProfile4 = "https://images.unsplash.com/photo-1718307701476-bf46ac964396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB0cmF2ZWxlciUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzczNTEzNzYwfDA&ixlib=rb-4.1.0&q=80&w=256";
const imgUserProfile5 = "https://images.unsplash.com/photo-1683574810915-f1bec5c0148f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMGFkdmVudHVyZSUyMHBvcnRyYWl0JTIwb3V0ZG9vcnN8ZW58MXx8fHwxNzczNTEzNzYwfDA&ixlib=rb-4.1.0&q=80&w=256";
const imgUserProfile6 = "https://images.unsplash.com/photo-1667382137969-a11fd256717d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGV4cGxvcmVyJTIwcG9ydHJhaXQlMjBzbWlsZXxlbnwxfHx8fDE3NzM1MTM3NjB8MA&ixlib=rb-4.1.0&q=80&w=256";
const imgUserProfile7 = "https://images.unsplash.com/photo-1768933294181-82778103e501?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwdHJhdmVsZXIlMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzczNTE1OTA1fDA&ixlib=rb-4.1.0&q=80&w=256";
const imgUserProfile8 = "https://images.unsplash.com/photo-1760638261503-155136144fd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG1hbiUyMGV4cGxvcmVyJTIwcG9ydHJhaXQlMjBvdXRkb29yfGVufDF8fHx8MTc3MzUxNTkwNXww&ixlib=rb-4.1.0&q=80&w=256";
const imgUserProfile9 = "https://images.unsplash.com/photo-1722963126401-f9c9f7b4ea6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbmElMjB3b21hbiUyMGJhY2twYWNrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM1MTU5MDZ8MA&ixlib=rb-4.1.0&q=80&w=256";
const imgUserProfile10 = "https://images.unsplash.com/photo-1762286801642-15824347594b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwbWFuJTIwYWR2ZW50dXJlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzUxNTkwNnww&ixlib=rb-4.1.0&q=80&w=256";
const imgUserProfile11 = "https://images.unsplash.com/photo-1761580525127-392880387ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwd29tYW4lMjB0cmF2ZWxlciUyMHBvcnRyYWl0JTIwaGFwcHl8ZW58MXx8fHwxNzczNTE1OTA3fDA&ixlib=rb-4.1.0&q=80&w=256";
const imgUserProfile12 = "https://images.unsplash.com/photo-1600657644140-aa5b5e003829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGNvdXBsZSUyMGhpa2luZyUyMGFkdmVudHVyZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzUxNTkwN3ww&ixlib=rb-4.1.0&q=80&w=256";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { ChevronRight, ChevronLeft, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  fadeUp,
  stagger,
  viewport,
  defaultTransition,
  quickTransition,
  fastTransition,
} from "./animations";
import { useState, useCallback } from "react";
import { cn } from "./ui/utils";

interface Testimonial {
  id: number;
  rating: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
  initials: string;
  bio: string;
  tripsCount: number;
  countriesVisited: number;
  memberSince: string;
  favoriteDestination: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "Wayfarer transformed how I see travel. It's not just about the destinations; it's about the stories and the people. Each recommendation led me to experiences I never would have found on my own. It's travel personalized in the truest sense.",
    name: "Emma L.",
    role: "Adventurer & Wayfarer User",
    avatar: imgUserProfile1,
    initials: "EL",
    bio: "Full-time adventurer with a passion for mountain trails and hidden waterfalls. Loves sharing travel stories over campfire coffee.",
    tripsCount: 47,
    countriesVisited: 23,
    memberSince: "2022",
    favoriteDestination: "Patagonia, Argentina",
  },
  {
    id: 2,
    rating: 5,
    text: "Every trip planned with Wayfarer has been an eye-opener. From hidden mountain retreats to bustling local markets, Wayfarer's insights are priceless. It's not just a platform; it's a community that understands what travelers really seek.",
    name: "Alex T.",
    role: "Globe Trotter",
    avatar: imgUserProfile2,
    initials: "AT",
    bio: "Retired tech executive turned full-time globe trotter. Has visited every continent and is now focused on slow travel and cultural immersion.",
    tripsCount: 62,
    countriesVisited: 41,
    memberSince: "2021",
    favoriteDestination: "Kyoto, Japan",
  },
  {
    id: 3,
    rating: 5,
    text: "Wayfarer's smart recommendations have changed the way I travel. From personalized trip suggestions to the easy-to-use planning tools, it's become an essential part of my travel routine. It feels like it was made just for me!",
    name: "Chris P.",
    role: "Travel Blogger & Explorer",
    avatar: imgUserProfile3,
    initials: "CP",
    bio: "Travel blogger and content creator documenting off-the-beaten-path adventures for over 200K followers.",
    tripsCount: 38,
    countriesVisited: 19,
    memberSince: "2023",
    favoriteDestination: "Marrakech, Morocco",
  },
  {
    id: 4,
    rating: 5,
    text: "Wayfarer has been a game-changer for my solo trips. The curated itineraries introduced me to hidden gems I'd never have discovered through typical travel guides. Every suggestion felt handpicked for my taste.",
    name: "Sofia R.",
    role: "Solo Traveler & Photographer",
    avatar: imgUserProfile4,
    initials: "SR",
    bio: "Landscape photographer who travels solo to capture the world's most breathtaking sunsets and remote landscapes.",
    tripsCount: 31,
    countriesVisited: 16,
    memberSince: "2023",
    favoriteDestination: "Iceland",
  },
  {
    id: 5,
    rating: 5,
    text: "As someone who travels for work, Wayfarer helps me make the most of my downtime abroad. The local experience recommendations are always authentic and far from the usual tourist traps.",
    name: "Marcus D.",
    role: "Digital Nomad",
    avatar: imgUserProfile5,
    initials: "MD",
    bio: "Software developer turned digital nomad, working remotely from a different city every month. Coffee shop connoisseur.",
    tripsCount: 54,
    countriesVisited: 28,
    memberSince: "2022",
    favoriteDestination: "Lisbon, Portugal",
  },
  {
    id: 6,
    rating: 5,
    text: "Wayfarer understands that travel is about connection. Every recommendation feels like it comes from a well-traveled friend who truly knows the culture and the best-kept secrets of each destination.",
    name: "Priya K.",
    role: "Cultural Explorer",
    avatar: imgUserProfile6,
    initials: "PK",
    bio: "Anthropologist and cultural explorer who immerses herself in local traditions, festivals, and culinary arts.",
    tripsCount: 29,
    countriesVisited: 14,
    memberSince: "2023",
    favoriteDestination: "Bali, Indonesia",
  },
  {
    id: 7,
    rating: 5,
    text: "I've tried dozens of travel apps, but Wayfarer is the only one that consistently surprises me with recommendations I didn't know I needed. It's like having a personal travel concierge that truly knows my style.",
    name: "Yuki M.",
    role: "Luxury Traveler",
    avatar: imgUserProfile7,
    initials: "YM",
    bio: "Luxury travel enthusiast and wellness advocate who seeks out the world's best spas, resorts, and fine dining experiences.",
    tripsCount: 22,
    countriesVisited: 18,
    memberSince: "2024",
    favoriteDestination: "Maldives",
  },
  {
    id: 8,
    rating: 5,
    text: "Wayfarer helped me plan a three-week African safari that was beyond anything I could have imagined. The AI recommendations for off-season timing and lesser-known reserves were absolutely spot-on.",
    name: "James O.",
    role: "Wildlife Enthusiast",
    avatar: imgUserProfile8,
    initials: "JO",
    bio: "Conservation photographer and wildlife enthusiast dedicated to ethical safari experiences and wildlife protection.",
    tripsCount: 19,
    countriesVisited: 12,
    memberSince: "2024",
    favoriteDestination: "Serengeti, Tanzania",
  },
  {
    id: 9,
    rating: 5,
    text: "What I love most about Wayfarer is how it balances popular attractions with hidden local favorites. My family trip to South America was perfectly paced, with something for everyone from kids to grandparents.",
    name: "Valentina C.",
    role: "Family Travel Planner",
    avatar: imgUserProfile9,
    initials: "VC",
    bio: "Mom of three and family travel expert who proves that adventure doesn't stop when you have kids. Specialist in multi-generational trips.",
    tripsCount: 35,
    countriesVisited: 15,
    memberSince: "2022",
    favoriteDestination: "Cusco, Peru",
  },
  {
    id: 10,
    rating: 5,
    text: "Wayfarer's trip planning AI created an itinerary for my Middle East journey that seamlessly blended ancient history with modern culture. I would have never found half of these experiences on my own.",
    name: "Omar B.",
    role: "History & Architecture Buff",
    avatar: imgUserProfile10,
    initials: "OB",
    bio: "Architect by profession, explorer by passion. Fascinated by how ancient and modern architecture coexist around the world.",
    tripsCount: 27,
    countriesVisited: 20,
    memberSince: "2023",
    favoriteDestination: "Petra, Jordan",
  },
  {
    id: 11,
    rating: 5,
    text: "At 68, I thought my traveling days were behind me. Wayfarer's accessible travel recommendations and pace-friendly itineraries have proven me wrong. I've explored more in the last two years than in the previous decade!",
    name: "Margaret H.",
    role: "Retired Teacher & World Traveler",
    avatar: imgUserProfile11,
    initials: "MH",
    bio: "Retired English teacher who discovered her love for slow travel after 40 years in the classroom. Avid journal keeper and watercolor painter.",
    tripsCount: 16,
    countriesVisited: 11,
    memberSince: "2024",
    favoriteDestination: "Amalfi Coast, Italy",
  },
  {
    id: 12,
    rating: 5,
    text: "My partner and I used Wayfarer to plan our honeymoon, and it was absolutely magical. The romantic experience suggestions and off-peak timing advice made every moment feel exclusive and intimate.",
    name: "Ryan & Mei L.",
    role: "Adventure Couple",
    avatar: imgUserProfile12,
    initials: "RM",
    bio: "Newlywed adventure couple who bond over hiking, diving, and exploring new cuisines. They document their journeys on their joint travel blog.",
    tripsCount: 12,
    countriesVisited: 8,
    memberSince: "2025",
    favoriteDestination: "Santorini, Greece",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-[2.5px]" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle
            cx="9"
            cy="9"
            r="8.5"
            className="fill-success stroke-success-stroke"
          />
        </svg>
      ))}
    </div>
  );
}

/** Card child variant */
const cardItem = {
  hidden: { y: 32, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: defaultTransition },
};

function TestimonialCard({
  t,
  onClickUser,
}: {
  t: Testimonial;
  onClickUser: (t: Testimonial) => void;
}) {
  return (
    <motion.div
      variants={cardItem}
      className="h-full"
      whileHover={{ y: -5, transition: { duration: 0.28, ease: "easeOut" } }}
    >
      <Card
        className="border border-muted rounded-[20px] flex flex-col gap-0 p-0 bg-transparent shadow-sm h-full transition-all hover:border-primary/30 hover:shadow-md"
      >
        <CardContent
          className="flex flex-col h-full gap-(--space-stack-md) pt-(--space-stack-md) pb-(--space-stack-lg) px-(--space-stack-md)"
        >
          {/* Stars */}
          <StarRating count={t.rating} />

          {/* Quote */}
          <p
            className="font-body text-card-foreground flex-1 font-normal text-body leading-subtitle"
          >
            {t.text}
          </p>

          {/* Reviewer — clickable */}
          <button
            className="flex items-center gap-3 text-left group cursor-pointer rounded-lg -mx-1 px-1 py-1 transition-colors hover:bg-muted/50 outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => onClickUser(t)}
          >
            <Avatar className="size-[36px] md:size-9 shrink-0 ring-2 ring-transparent group-hover:ring-primary/20 transition-all">
              <AvatarImage src={t.avatar} alt={t.name} />
              <AvatarFallback
                className="text-card-foreground text-xs font-semibold bg-accent-light"
              >
                {t.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p
                className="font-heading text-card-foreground group-hover:text-primary transition-colors font-normal text-body"
              >
                {t.name}
              </p>
              <p
                className="font-heading text-muted-foreground font-normal text-body-sm"
                style={{
                  fontStyle: "italic",
                }}
              >
                {t.role}
              </p>
            </div>
          </button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/* ── Traveler Profile Dialog ── */
function TravelerProfileDialog({
  traveler,
  open,
  onOpenChange,
}: {
  traveler: Testimonial | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!traveler) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[440px] rounded-[20px] bg-surface border-border p-0 overflow-hidden gap-0">
        {/* Header with avatar */}
        <div
          className="flex flex-col items-center text-center pt-(--space-stack-lg) pb-(--space-stack-md) px-(--space-stack-md)"
        >
          <Avatar className="size-[72px] ring-2 ring-primary/20 mb-3">
            <AvatarImage src={traveler.avatar} alt={traveler.name} />
            <AvatarFallback className="text-card-foreground bg-accent-light text-title-3">
              {traveler.initials}
            </AvatarFallback>
          </Avatar>
          <DialogHeader className="items-center gap-1">
            <DialogTitle
              className="font-heading text-foreground font-bold text-title-3 leading-title-3"
            >
              {traveler.name}
            </DialogTitle>
            <DialogDescription
              className="font-heading text-muted-foreground font-normal text-body-sm"
              style={{
                fontStyle: "italic",
              }}
            >
              {traveler.role}
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Bio */}
        <div
          className="px-(--space-stack-md) pb-(--space-stack-md)"
        >
          <p
            className="font-body text-card-foreground text-center text-body leading-body"
          >
            {traveler.bio}
          </p>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 border-t border-muted p-(--space-stack-md)"
        >
          <div className="flex flex-col items-center gap-1">
            <span
              className="font-heading text-primary font-bold text-title-3"
            >
              {traveler.tripsCount}
            </span>
            <span
              className="font-body text-muted-foreground text-caption"
            >
              Trips
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span
              className="font-heading text-primary font-bold text-title-3"
            >
              {traveler.countriesVisited}
            </span>
            <span
              className="font-body text-muted-foreground text-caption"
            >
              Countries
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span
              className="font-heading text-primary font-bold text-title-3"
            >
              {traveler.memberSince}
            </span>
            <span
              className="font-body text-muted-foreground text-caption"
            >
              Member since
            </span>
          </div>
        </div>

        {/* Favorite destination */}
        <div
          className="border-t border-muted flex items-center gap-3 p-(--space-stack-md)"
        >
          <div className="size-8 rounded-[8px] bg-primary/10 flex items-center justify-center shrink-0">
            <MapPin className="size-4 text-primary" strokeWidth={1.8} />
          </div>
          <div className="flex flex-col min-w-0">
            <span
              className="font-body text-muted-foreground text-caption"
            >
              Favorite destination
            </span>
            <span
              className="font-body text-card-foreground text-body font-medium"
            >
              {traveler.favoriteDestination}
            </span>
          </div>
        </div>

        {/* Quote */}
        <div
          className="border-t border-muted bg-muted/30 p-(--space-stack-md)"
        >
          <div className="flex gap-2">
            <span className="text-primary shrink-0 text-title-1" style={{ lineHeight: "1" }}>"</span>
            <p
              className="font-body text-card-foreground italic text-body-sm leading-body"
            >
              {traveler.text}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const CARDS_PER_PAGE = 3;

export function WayfarerTestimonials() {
  const [page, setPage] = useState(0);
  const [selectedTraveler, setSelectedTraveler] = useState<Testimonial | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);
  const start = page * CARDS_PER_PAGE;
  const visibleCards = testimonials.slice(start, start + CARDS_PER_PAGE);

  const handleNext = useCallback(() => {
    setPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const handleClickUser = useCallback((t: Testimonial) => {
    setSelectedTraveler(t);
    setDialogOpen(true);
  }, []);

  return (
    <section
      className="bg-surface w-full pt-(--section-py-lg) pb-(--section-py-lg)"
    >
      <div className="px-(--container-px)">

        {/* Title */}
        <motion.div
          className="text-center mb-(--space-section-title)"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <h2
            className="font-heading text-foreground font-semibold text-title-1 leading-title-1"
          >
            What travelers are raving about
          </h2>
        </motion.div>

        {/* Desktop: CSS Grid — 3 equal columns + overlay arrows */}
        <div className="hidden lg:block relative">
          {/* Previous button — overlay */}
          <AnimatePresence>
            {page > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={quickTransition}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 size-10 rounded-full border-border bg-surface text-card-foreground shadow-sm outline-none transition-all hover:bg-primary/8 hover:border-primary hover:text-primary hover:shadow-md active:opacity-80 active:bg-primary/12 active:border-primary active:shadow-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                  onClick={handlePrev}
                  aria-label="Go to previous reviews"
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
              className="shrink-0 size-10 rounded-full border-border bg-surface text-card-foreground shadow-sm outline-none transition-all hover:bg-primary/8 hover:border-primary hover:text-primary hover:shadow-md active:opacity-80 active:bg-primary/12 active:border-primary active:shadow-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
              onClick={handleNext}
              aria-label="See more reviews"
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
              transition={fastTransition}
            >
              {visibleCards.map((t) => (
                <TestimonialCard key={t.id} t={t} onClickUser={handleClickUser} />
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

        {/* Mobile / Tablet: horizontal scroll — show all cards (matches Experiences pattern) */}
        <div className="lg:hidden">
          <ScrollArea className="w-[calc(100%+var(--container-px))] -mr-[var(--container-px)]">
            <motion.div
              className="flex pb-4 pr-[var(--container-px)] gap-(--grid-gap)"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={stagger}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="shrink-0 w-[clamp(262px,72vw,340px)]">
                  <TestimonialCard t={t} onClickUser={handleClickUser} />
                </div>
              ))}
            </motion.div>
            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
        </div>

      </div>

      {/* Traveler profile dialog */}
      <TravelerProfileDialog
        traveler={selectedTraveler}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  );
}
