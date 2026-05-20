import { WayfarerNavbar } from "../components/WayfarerNavbar";
import { WayfarerFooter } from "../components/WayfarerFooter";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion, useScroll, useTransform } from "motion/react";
import {
  fadeUp,
  stagger,
  staggerSlow,
  slideFromLeft,
  slideFromRight,
  scaleUp,
  viewport,
  defaultTransition,
  fastTransition,
  slowTransition,
} from "../components/animations";
import { useBrandMotionEnabled } from "../components/useBrandMotion";
import { useNavigate } from "react-router";
import { useRef } from "react";
import { showComingSoon } from "../components/utils/comingSoon";
import {
  Compass,
  Sparkles,
  Heart,
  Users,
  Target,
  ArrowRight,
  Palette,
  Globe,
  ExternalLink,
  Lightbulb,
  Layers,
} from "lucide-react";

/* ── Animation variants ── */
const sectionItem = {
  hidden: { y: 24 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

const statItem = {
  hidden: { opacity: 0, scale: 0.96, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: defaultTransition },
};

const valueItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

/* ── Data ── */
const stats = [
  { value: "26+", label: "Curated destinations" },
  { value: "23", label: "Countries to explore" },
  { value: "50K+", label: "Hidden gems uncovered" },
  { value: "1M+", label: "Adventures inspired" },
];

const whatWeDoCards = [
  {
    icon: Compass,
    title: "Discover Hidden Gems",
    description:
      "Places the guidebooks miss — tucked-away cafes, secret viewpoints, locals-only trails.",
    color: "accent" as const,
  },
  {
    icon: Sparkles,
    title: "AI That Gets You",
    description:
      "The more you explore, the smarter your suggestions get. It learns what moves you.",
    color: "primary" as const,
  },
  {
    icon: Globe,
    title: "Research Your Way",
    description:
      "No flights. No hotels. Just honest help figuring out where your next adventure should be.",
    color: "secondary" as const,
  },
  {
    icon: Heart,
    title: "Stories That Inspire",
    description:
      "Vibrant photography, insider tips, and real narratives — feel a place before you arrive.",
    color: "primary" as const,
  },
  {
    icon: Target,
    title: "Matched to Your Passions",
    description:
      "Summit trails, night markets, ancient ruins — we connect who you are to where you should go.",
    color: "accent" as const,
  },
  {
    icon: Users,
    title: "Made for People Like You",
    description:
      "Always planning the next trip? Craving something new? You're exactly who we built this for.",
    color: "secondary" as const,
  },
];

const cultureValues = [
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "Diverse perspectives make for better adventures — for everyone.",
    color: "accent" as const,
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "The best ideas come from rethinking how things have always been done.",
    color: "primary" as const,
  },
  {
    icon: Sparkles,
    title: "Inspiration",
    description:
      "We draw energy from our users, our colleagues, and the world itself.",
    color: "secondary" as const,
  },
];

/* ── Hero Section ── */
function AboutHero() {
  const heroRef = useRef<HTMLElement>(null);
  const motionEnabled = useBrandMotionEnabled();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // Doctrine R6: parallax disabled under prefers-reduced-motion.
  // R4/R3: gentle parallax only — 3% scale, 10% Y, no theatrical zoom.
  const bgY = useTransform(scrollYProgress, [0, 1], motionEnabled ? ["0%", "10%"] : ["0%", "0%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], motionEnabled ? [1, 1.03] : [1, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], motionEnabled ? [1, 0] : [1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.6], motionEnabled ? [0, -16] : [0, 0]);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden h-[clamp(320px,50vw,480px)]"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={slowTransition}
        style={{ y: bgY, scale: bgScale }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761266735109-9e7dc06115d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFja2VyJTIwc3Vuc2V0JTIwc2lsaG91dHRlJTIwcGVha3xlbnwxfHx8fDE3NzM1Njg0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Silhouette of a traveler at a mountain summit during golden hour"
          className="absolute inset-0 object-cover size-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground/20" />
        <div className="absolute inset-0 shadow-[var(--shadow-inset-hero)]" />
      </motion.div>

      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-(--container-px) gap-(--space-stack-sm)"
        style={{
          opacity: textOpacity,
          y: textY,
        }}
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.p
          className="font-body text-accent-light tracking-widest uppercase text-badge font-medium"
          style={{
            letterSpacing: "0.12em",
          }}
          variants={sectionItem}
        >
          Get to Know Wayfarer
        </motion.p>
        <motion.h1
          className="font-heading text-surface max-w-[700px] font-bold text-display leading-display"
          variants={sectionItem}
        >
          Every Great Journey
          <br />
          Starts with a Dream
        </motion.h1>
        <motion.p
          className="font-body text-surface/90 max-w-[600px] text-subtitle leading-subtitle font-normal"
          variants={sectionItem}
        >
          We built Wayfarer for people like you — curious souls who
          see travel as more than a vacation. It's how you discover
          who you are, one destination at a time.
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ── Stats Bar ── */
function StatsBar() {
  return (
    <section className="bg-foreground w-full">
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 px-(--container-px) pt-(--space-stack-lg) pb-(--space-stack-lg) gap-(--space-stack-md)"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center text-center gap-(--space-stack-xs)"
            variants={statItem}
          >
            <span
              className="font-heading text-primary font-bold text-display"
              style={{ lineHeight: "1" }}
            >
              {stat.value}
            </span>
            <span
              className="font-body text-surface/70 text-body-sm font-normal"
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ── Our Story Section ── */
function StorySection() {
  return (
    <section
      className="bg-surface w-full pt-(--section-py-lg) pb-(--section-py-lg)"
    >
      <div
        className="px-(--container-px)"
      >
        <div
          className="flex flex-col lg:flex-row items-center lg:items-stretch gap-(--space-stack-lg)"
        >
          {/* Image */}
          <motion.div
            className="w-full lg:w-1/2 relative rounded-[24px] overflow-hidden shadow-[var(--shadow-feature)] min-h-[clamp(240px,30vw,400px)]"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideFromLeft}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1768843883463-4c64257c830b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwdGVtcGxlJTIwZm9nJTIwbXlzdGljYWwlMjBtb3JuaW5nfGVufDF8fHx8MTc3MzU2ODQ0MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Ancient temple emerging from morning mist"
              className="absolute inset-0 object-cover size-full"
            />
            <div className="absolute inset-0 shadow-[var(--shadow-inset-subtle)]" />
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center gap-(--space-stack-md)"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideFromRight}
          >
            <p
              className="font-body text-accent tracking-widest uppercase text-badge font-medium"
              style={{
                letterSpacing: "0.12em",
              }}
            >
              Who We Are
            </p>
            <h2
              className="font-heading text-foreground font-bold text-title-1 leading-title-1"
            >
              Your travel companion,
              <br className="hidden lg:block" />
              not your travel agent
            </h2>
            <p
              className="font-body text-muted-foreground text-body leading-body font-normal"
            >
              Think of us as that well-traveled friend who always knows
              the perfect spot. We help you figure out where to go next
              through vivid photography, real stories, and AI that learns
              your style the more you explore.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Vision Section (reversed layout) ── */
function VisionSection() {
  return (
    <section
      className="bg-card w-full pt-(--section-py-lg) pb-(--section-py-lg)"
    >
      <div
        className="px-(--container-px)"
      >
        <div
          className="flex flex-col lg:flex-row-reverse items-center lg:items-stretch gap-(--space-stack-lg)"
        >
          {/* Image */}
          <motion.div
            className="w-full lg:w-1/2 relative rounded-[24px] overflow-hidden shadow-[var(--shadow-feature)] min-h-[clamp(240px,30vw,400px)]"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideFromRight}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1769050738628-0ce36b3716aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwbG9jYWwlMjBzdHJlZXQlMjBtYXJrZXQlMjBsYW50ZXJucyUyMGV2ZW5pbmclMjBhdG1vc3BoZXJpY3xlbnwxfHx8fDE3NzM1ODkzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Atmospheric local street market glowing with warm lantern light"
              className="absolute inset-0 object-cover size-full"
            />
            <div className="absolute inset-0 shadow-[var(--shadow-inset-subtle)]" />
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col justify-center gap-(--space-stack-md)"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideFromLeft}
          >
            <p
              className="font-body text-accent tracking-widest uppercase text-badge font-medium"
              style={{
                letterSpacing: "0.12em",
              }}
            >
              Our Vision
            </p>
            <h2
              className="font-heading text-foreground font-bold text-title-1 leading-title-1"
            >
              Travel that feels
              <br className="hidden lg:block" />
              like you
            </h2>
            <p
              className="font-body text-muted-foreground text-body leading-body font-normal"
            >
              Skip the tourist traps. Dive into local culture. Your
              suggestions get smarter over time — surfacing destinations
              you didn't even know you were looking for.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── What We Do Section ── */
function WhatWeDoSection() {
  return (
    <section
      className="bg-surface w-full pt-(--section-py-lg) pb-(--section-py-lg)"
    >
      <div
        className="px-(--container-px)"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-(--space-section-title)"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <p
            className="font-body text-accent tracking-widest uppercase text-badge font-medium mb-(--space-stack-xs)"
            style={{
              letterSpacing: "0.12em",
            }}
          >
            What We Do
          </p>
          <h2
            className="font-heading text-foreground font-bold text-display leading-display"
          >
            From Routine to Remarkable
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-(--grid-gap)"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerSlow}
        >
          {whatWeDoCards.map((v) => {
            const Icon = v.icon;
            const colorMap = {
              primary: { bg: "bg-primary/10", text: "text-primary" },
              accent: { bg: "bg-accent/10", text: "text-accent" },
              secondary: { bg: "bg-secondary/30", text: "text-secondary-foreground" },
            };
            const colors = colorMap[v.color];
            return (
              <motion.div
                key={v.title}
                className="bg-card rounded-[20px] flex flex-col border border-border shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-card-elevated)] hover:border-primary/20 p-(--space-stack-md) gap-(--space-stack-sm)"
                variants={valueItem}
                whileHover={{
                  y: -4,
                  transition: fastTransition,
                }}
              >
                <div
                  className={`size-10 rounded-[12px] flex items-center justify-center shrink-0 ${colors.bg}`}
                >
                  <Icon
                    className={`size-5 ${colors.text}`}
                    strokeWidth={1.8}
                  />
                </div>
                <h3
                  className="font-heading text-foreground font-bold text-title-3 leading-title-3"
                >
                  {v.title}
                </h3>
                <p
                  className="font-body text-muted-foreground text-body leading-body font-normal"
                >
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Workplace Culture Section ── */
function CultureSection() {
  return (
    <section
      className="bg-card w-full pt-(--section-py-lg) pb-(--section-py-lg)"
    >
      <div
        className="px-(--container-px)"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-(--space-section-title)"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <p
            className="font-body text-accent tracking-widest uppercase text-badge font-medium mb-(--space-stack-xs)"
            style={{
              letterSpacing: "0.12em",
            }}
          >
            A Compass for Creative Pioneers
          </p>
          <h2
            className="font-heading text-foreground font-bold text-display leading-display"
          >
            Our Culture
          </h2>
        </motion.div>

        {/* Intro text */}
        <motion.p
          className="font-body text-muted-foreground text-center max-w-[680px] mx-auto text-body leading-body font-normal mb-(--space-stack-lg)"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          The same curiosity that drives great travel drives how we
          work. We lead, experiment, and bring bold ideas to the table.
        </motion.p>

        {/* Culture pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 max-w-[960px] mx-auto gap-(--grid-gap)"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          {cultureValues.map((c) => {
            const Icon = c.icon;
            const colorMap = {
              primary: { bg: "bg-primary/10", text: "text-primary" },
              accent: { bg: "bg-accent/10", text: "text-accent" },
              secondary: { bg: "bg-secondary/30", text: "text-secondary-foreground" },
            };
            const colors = colorMap[c.color];
            return (
              <motion.div
                key={c.title}
                className="bg-surface rounded-[20px] flex flex-col items-center text-center border border-border shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-card-elevated)] hover:border-primary/20 p-(--space-stack-lg) gap-(--space-stack-sm)"
                variants={valueItem}
                whileHover={{
                  y: -4,
                  transition: fastTransition,
                }}
              >
                <div className={`size-12 rounded-full flex items-center justify-center shrink-0 ${colors.bg}`}>
                  <Icon className={`size-5 ${colors.text}`} strokeWidth={1.8} />
                </div>
                <h3
                  className="font-heading text-foreground font-bold text-title-3 leading-title-3"
                >
                  {c.title}
                </h3>
                <p
                  className="font-body text-muted-foreground text-body leading-body font-normal"
                >
                  {c.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing quote */}
        <motion.p
          className="font-body text-muted-foreground text-center max-w-[640px] mx-auto text-body leading-body font-normal mt-(--space-stack-lg)"
          style={{
            fontStyle: "italic",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          &ldquo;We build the compass that helps others find
          their own path.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}

/* ── Meet the Creator — Natasha Ow ── */
function CreatorSection() {
  return (
    <section
      className="bg-surface w-full pt-(--section-py-lg) pb-(--section-py-lg)"
    >
      <div
        className="px-(--container-px)"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-(--space-section-title)"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <p
            className="font-body text-primary tracking-widest uppercase text-badge font-medium mb-(--space-stack-xs)"
            style={{
              letterSpacing: "0.12em",
            }}
          >
            Behind the Scenes
          </p>
          <h2
            className="font-heading text-foreground font-bold text-display leading-display"
          >
            Meet the Creator
          </h2>
        </motion.div>

        {/* Creator card */}
        <motion.div
          className="relative rounded-[24px] overflow-hidden bg-card border border-border shadow-[var(--shadow-section-card-lg)] max-w-[640px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={scaleUp}
        >
          {/* Gradient cover */}
          <div
            className="relative w-full bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/30 h-[clamp(96px,12vw,136px)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--primary)/0.08,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,var(--accent)/0.08,transparent_50%)]" />
          </div>

          {/* Avatar — overlaps cover */}
          <div className="flex justify-center" style={{ marginTop: "-56px" }}>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...defaultTransition, delay: 0.15 }}
            >
              <div className="size-[112px] rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[var(--shadow-primary-cta)] ring-4 ring-card">
                <span
                  className="font-heading text-primary-foreground font-bold"
                  style={{
                    fontSize: "clamp(36px, 3.5vw, 44px)",
                    lineHeight: "1",
                  }}
                >
                  NO
                </span>
              </div>
              <motion.div
                className="absolute -bottom-1 -right-1 bg-surface border border-border rounded-full shadow-[var(--shadow-card)] flex items-center justify-center"
                style={{ padding: "6px" }}
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                }}
              >
                <Palette className="size-4 text-primary" />
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            className="flex flex-col items-center text-center p-(--space-stack-sm) gap-(--space-stack-sm)"
            style={{
              paddingLeft: "var(--space-stack-lg)",
              paddingRight: "var(--space-stack-lg)",
              paddingBottom: "var(--space-stack-lg)",
            }}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Name + role */}
            <motion.div variants={sectionItem}>
              <h3
                className="font-heading text-foreground font-bold text-title-2 leading-title-2"
              >
                Natasha Ow
              </h3>
              <p
                className="font-body text-primary text-body font-medium"
                style={{ marginTop: "2px" }}
              >Experience & Systems Designer</p>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="font-body text-muted-foreground max-w-[480px] text-body leading-body font-normal"
              variants={sectionItem}
            > This is a travel website designed by Natasha based on a fictional brief provided in DesignLab's UX foundation course.</motion.p>

            {/* Skill tags */}
            <motion.div
              className="flex items-center justify-center flex-wrap"
              style={{ gap: "8px", marginTop: "4px" }}
              variants={sectionItem}
            >
              {[
                "Product Design",
                "Design Systems",
                "Figma",
                "Prototyping",
                "UX Research",
                "Motion Design",
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-body rounded-full border text-card-foreground bg-secondary/40 border-secondary-hover text-badge font-medium"
                  style={{
                    padding: "4px 12px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Portfolio link */}
            <motion.div variants={sectionItem} style={{ marginTop: "8px" }}>
              <a
                href="https://nowandabout.com/wayfarer-travel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-primary hover:text-primary-active transition-colors rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary/8 hover:bg-primary/12 text-body-sm font-medium"
                style={{
                  padding: "8px 16px",
                }}
              >
                View the full case study
                <ExternalLink className="size-3.5" />
              </a>
            </motion.div>

            {/* Prototype note */}
            <motion.div
              className="flex items-center justify-center"
              style={{ gap: "6px", marginTop: "4px" }}
              variants={sectionItem}
            >
              <Layers className="size-3 text-muted-foreground/60" strokeWidth={2} />
              <span
                className="font-body text-muted-foreground/60 text-caption font-normal"
              >This is a design prototype</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── CTA Section ── */
function AboutCTA() {
  const navigate = useNavigate();

  return (
    <section
      className="bg-card w-full pt-(--section-py-lg) pb-(--section-py-lg)"
    >
      <div
        className="px-(--container-px)"
      >
        <motion.div
          className="relative rounded-[24px] overflow-hidden shadow-[var(--shadow-section-card-lg)] min-h-[clamp(256px,28vw,384px)]"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={scaleUp}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1765350618480-288bb475ebf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFja2VyJTIwaGlraW5nJTIwcmVtb3RlJTIwdHJhaWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzczNTY5ODY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Adventurer hiking a remote trail through untouched wilderness"
            className="absolute inset-0 object-cover size-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
          <div className="absolute inset-0 shadow-[var(--shadow-inset-card-lg)]" />

          <div
            className="relative z-10 h-full flex flex-col justify-center gap-(--space-stack-md) min-h-[clamp(256px,28vw,384px)] pt-[clamp(24px,5vw,64px)] pb-[clamp(24px,5vw,64px)] pl-[clamp(24px,5vw,64px)] pr-[clamp(24px,5vw,64px)]"
          >
            <h2
              className="font-heading text-surface max-w-[520px] font-bold text-title-1 leading-title-1"
            >
              Ready to go beyond the tourist trail?
            </h2>
            <p
              className="font-body text-surface/85 max-w-[440px] text-subtitle leading-subtitle font-normal"
            >
              Let our AI match your passions to your next destination.
            </p>
            <div
              className="flex flex-wrap items-center gap-(--space-stack-sm)"
            >
              <motion.div
                className="bg-gradient-to-b from-primary-hover to-primary relative rounded-[40px] shrink-0 cursor-pointer shadow-[var(--shadow-primary-cta)]"
                whileHover={{ opacity: 0.92 }}
                whileTap={{ opacity: 0.82 }}
                onClick={() => showComingSoon()}
              >
                <div
                  className="flex items-center justify-center overflow-clip px-6 py-3 rounded-[inherit]"
                  style={{ gap: "8px" }}
                >
                  <span
                    className="font-heading text-primary-foreground whitespace-nowrap font-bold"
                    style={{
                      fontSize: "var(--text-button)",
                      lineHeight: "normal",
                    }}
                  >
                    Start a trip with AI
                  </span>
                  <ArrowRight className="size-4 text-primary-foreground" />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute border-primary-dark border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px]"
                />
              </motion.div>

              <motion.div
                className="bg-gradient-to-b from-secondary-btn to-secondary-btn-end relative rounded-[40px] shrink-0 cursor-pointer shadow-[var(--shadow-secondary-cta)]"
                whileHover={{ opacity: 0.92 }}
                whileTap={{ opacity: 0.82 }}
                onClick={() => navigate("/explore")}
              >
                <div
                  className="flex items-center justify-center overflow-clip px-6 py-3 rounded-[inherit]"
                  style={{ gap: "8px" }}
                >
                  <span
                    className="font-heading text-primary whitespace-nowrap font-bold"
                    style={{
                      fontSize: "var(--text-button)",
                      lineHeight: "normal",
                    }}
                  >
                    Explore destinations
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute border-primary border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Main Page ── */
export default function AboutPage() {
  return (
    <div
      className="flex flex-col w-full min-h-screen overflow-x-hidden bg-surface relative font-body"
    >
      <WayfarerNavbar />
      <main className="flex flex-col w-full flex-1 relative">
        <AboutHero />
        <StatsBar />
        <StorySection />
        <VisionSection />
        <WhatWeDoSection />
        <CultureSection />
        <CreatorSection />
        <AboutCTA />
      </main>
      <WayfarerFooter />
    </div>
  );
}
