import imgLandscapeBodyImage from "figma:asset/fc109d945abb0894d1ba4ce01874fa59b9084196.png";
import imgLandscapeBodyImage1 from "figma:asset/8002921c5ea6a11bcc431a0e39e3070185ba2803.jpg";
import imgLandscapeBodyImage2 from "figma:asset/30d25324936154a66198ebdf5b3aee0ea33834c1.jpg";
import imgLandscapeBodyImage3 from "figma:asset/10229b5a73858413df0b08a90d518fca03b97bde.jpg";
import { motion } from "motion/react";
import {
  fadeUp,
  slideFromLeft,
  slideFromRight,
  staggerSlow,
  viewport,
  defaultTransition,
} from "./animations";

const features = [
  {
    id: 1,
    image: imgLandscapeBodyImage,
    imageLeft: true,
    tag: "AI-Powered",
    title: "Personalized Travel Planning",
    description:
      "Discover destinations tailored to your unique travel preferences, thanks to our sophisticated AI and machine learning algorithms.",
  },
  {
    id: 2,
    image: imgLandscapeBodyImage1,
    imageLeft: false,
    tag: "Authentic",
    title: "For the Modern Traveler",
    description:
      "We encourage you to delve deeper, beyond popular tourist spots, to experience the true essence of local cultures and communities.",
  },
  {
    id: 3,
    image: imgLandscapeBodyImage2,
    imageLeft: true,
    tag: "Discovery",
    title: "Research and Discover",
    description:
      "Utilize Wayfarer not just to plan trips but to research and discover new destinations that align with your travel history and future aspirations.",
  },
  {
    id: 4,
    image: imgLandscapeBodyImage3,
    imageLeft: false,
    tag: "Tailored",
    title: "A Journey Tailored to You",
    description:
      "Find destinations that match your passions and interests, with personalized suggestions that evolve as you interact with our platform.",
  },
];

function TravelDot({ index }: { index: number }) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer ring */}
      <div
        className="size-7 rounded-full flex items-center justify-center border-2 border-accent-muted bg-surface"
        style={{ boxShadow: "var(--shadow-dot-ring)" }}
      >
        {/* Inner dot */}
        <div
          className="size-3.5 rounded-full bg-accent"
          style={{ boxShadow: "var(--shadow-dot-glow)" }}
        />
      </div>
    </div>
  );
}

/* ── Desktop Feature Row (alternating image/text layout) ── */
function DesktopFeatureRow({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const isImageLeft = feature.imageLeft;
  const imageVariant = isImageLeft ? slideFromLeft : slideFromRight;
  const textVariant = isImageLeft ? slideFromRight : slideFromLeft;

  return (
    <div className="hidden lg:flex items-center gap-0 items-stretch w-full">
      {/* Image */}
      <motion.div
        className={`w-[45%] ${isImageLeft ? "order-1" : "order-3"}`}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={imageVariant}
      >
        <div
          className="relative rounded-[24px] overflow-hidden shadow-[var(--shadow-feature)] h-[clamp(224px,20vw,288px)]"
        >
          <img
            src={feature.image}
            alt={feature.title}
            className="absolute inset-0 object-cover size-full"
          />
          <div className="absolute inset-0 shadow-[var(--shadow-inset-subtle)]" />
        </div>
      </motion.div>

      {/* Center column — dot + vertical line connector */}
      <motion.div
        className="order-2 flex flex-col items-center w-[10%] self-stretch justify-center relative"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={{ ...defaultTransition, delay: 0.15 }}
      >
        <TravelDot index={index} />
      </motion.div>

      {/* Text */}
      <motion.div
        className={`w-[45%] flex flex-col justify-center gap-(--space-stack-xs) ${isImageLeft ? "order-3" : "order-1"}`}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={textVariant}
      >
        <h3
          className="font-heading text-foreground font-bold text-title-2 leading-title-2"
        >
          {feature.title}
        </h3>
        <p
          className="font-body text-muted-foreground font-normal text-subtitle leading-subtitle"
        >
          {feature.description}
        </p>
      </motion.div>
    </div>
  );
}

/* Mobile child variant */
const mobileFeatureItem = {
  hidden: { y: 28 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

/* ── Mobile Feature Row (image on top, text below) ── */
function MobileFeatureRow({ feature }: { feature: (typeof features)[0] }) {
  return (
    <motion.div
      className="flex flex-col gap-4 items-start justify-center w-full relative"
      variants={mobileFeatureItem}
    >
      {/* Dot aligned with Image Center */}
      <div
        className="absolute -left-[24px] -translate-x-1/2 z-10"
        style={{ top: "clamp(52px, 16vw, 80px)" }}
      >
        <div className="size-[14px] rounded-full bg-accent border-[3px] border-surface shadow-sm" />
      </div>

      {/* Image */}
      <div
        className="relative rounded-[16px] overflow-hidden shadow-[var(--shadow-feature-sm)] w-full bg-card h-[clamp(88px,27vw,136px)]"
      >
        <img
          src={feature.image}
          alt={feature.title}
          className="absolute inset-0 object-cover size-full"
        />
        <div className="absolute inset-0 shadow-[var(--shadow-inset-subtle-sm)]" />
      </div>

      {/* Text */}
      <div className="flex flex-col items-start w-full gap-(--space-stack-xs)">
        <h3
          className="font-heading text-foreground font-bold text-title-2 leading-title-2"
        >
          {feature.title}
        </h3>
        <p
          className="font-body text-card-foreground w-full font-normal text-body leading-body"
        >
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export function WayfarerWhySection() {
  return (
    <section
      className="bg-surface w-full pt-(--section-py-md) pb-(--section-py-md)"
    >
      <div className="px-(--container-px)">

        {/* Title */}
        <motion.div
          className="text-left lg:text-center mb-(--space-section-title)"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <h2
            className="font-heading text-foreground font-bold text-display leading-display"
          >
            Why Wayfarer
          </h2>
        </motion.div>

        {/* ── Desktop: alternating rows with centered travel line ── */}
        <div className="hidden lg:block relative w-full">
          {/* Vertical travel line — desktop */}
          <motion.div
            className="absolute left-1/2 top-12 bottom-12 w-[2px] -translate-x-1/2 pointer-events-none"
            style={{
              background: "var(--accent-muted)",
              opacity: 0.7,
            }}
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="flex flex-col gap-(--space-stack-lg)">
            {features.map((feature, index) => (
              <DesktopFeatureRow key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* ── Mobile: travel line on LEFT, cards on RIGHT (per Figma) ── */}
        <div className="lg:hidden relative pl-[24px]">
          {/* Mobile Travel Line */}
          <div
            className="absolute left-[0px] w-[2px] bg-accent-muted/60"
            style={{
              top: "clamp(52px, 16vw, 80px)",
              bottom: "clamp(104px, 32vw, 160px)",
              background: "linear-gradient(to bottom, var(--accent-muted) 0%, var(--accent-muted) 85%, transparent 100%)",
            }}
          />

          <motion.div
            className="flex flex-col flex-1"
            style={{ gap: "clamp(32px, 10vw, 56px)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerSlow}
          >
            {features.map((feature) => (
              <MobileFeatureRow key={feature.id} feature={feature} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
