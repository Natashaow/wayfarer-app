import imgHeroImage from "figma:asset/b9eec30ee7db572fec86e8db69b530b9fd818720.png";
import imgHeroMobile from "figma:asset/e2e3f204a6869d3991cb9ff963548e71e9e76281.png";
import { motion } from "motion/react";
import { stagger, fadeIn } from "./animations";
import { useNavigate } from "react-router";
import { useAuth } from "./AuthContext";

/** Child variant for each staggered hero element */
const heroItem = {
  hidden: { y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

/** Background image reveal — subtle scale only, no opacity fade */
const bgReveal = {
  hidden: { scale: 1.04 },
  visible: { scale: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const } },
};

export function WayfarerHero() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  return (
    <section
      className="relative w-full overflow-hidden shadow-[var(--shadow-section)] h-(--hero-height)"
    >
      {/* Background Image — cinematic fade + subtle scale */}
      <motion.div
        className="absolute inset-0"
        initial="hidden"
        animate="visible"
        variants={bgReveal}
      >
        <img
          src={imgHeroImage}
          alt="Travel destination — open road through a mountain landscape"
          className="absolute object-cover size-full hidden min-[700px]:block min-[700px]:object-[60%_center] lg:object-center"
        />
        <img
          src={imgHeroMobile}
          alt="Travel destination — open road through a mountain landscape"
          className="absolute object-cover size-full min-[700px]:hidden object-[center_35%] min-[620px]:object-[center_30%]"
        />
        {/* Desktop gradient: left → right (full desktop when text is left-aligned) */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-foreground/82 via-foreground/46 to-transparent" />
        {/* Tablet-transition gradient: 700–1024px — desktop image with centered text needs even overlay */}
        <div className="absolute inset-0 hidden min-[700px]:block lg:hidden bg-gradient-to-b from-[rgba(0,0,0,0.60)] via-[rgba(0,0,0,0.32)] via-55% to-[rgba(0,0,0,0.10)]" />
        {/* Wide-phone gradient: 620–700px — mobile image, centered text, softer top overlay */}
        <div className="absolute inset-0 hidden min-[620px]:block min-[700px]:hidden bg-gradient-to-b from-[rgba(0,0,0,0.64)] via-[rgba(0,0,0,0.36)] via-58% to-transparent" />
        {/* Mobile gradient: top-weighted for top-centered content, extends past midpoint */}
        <div className="absolute inset-0 min-[620px]:hidden bg-gradient-to-b from-[rgba(0,0,0,0.68)] via-[rgba(0,0,0,0.38)] via-60% to-transparent" />
        <div className="absolute inset-0 shadow-[var(--shadow-inset-hero)]" />
      </motion.div>

      {/* Content — staggered entrance after background reveals */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center lg:items-start justify-start lg:justify-start pt-(--hero-pt) pb-(--hero-pb) px-(--container-px) gap-(--space-stack-md)"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div
          className="w-full flex flex-col items-center lg:items-start lg:justify-center gap-(--space-stack-md)"
          variants={stagger}
        >
          {/* Header: H1 + body */}
          <div className="flex flex-col items-center lg:items-start max-w-[clamp(280px,82vw,420px)] md:max-w-[55vw] lg:max-w-[603px] gap-(--space-stack-md)">
            {/* H1 */}
            <motion.h1
              className="font-heading text-surface text-center lg:text-left whitespace-pre-wrap font-bold text-display leading-display"
              style={{
                textShadow: "var(--text-shadow-hero)",
              }}
              variants={heroItem}
            >
              {isAuthenticated && user
                ? `Welcome back,\n${user.firstName}!`
                : "Discover Unforgettable New Destinations"}
            </motion.h1>

            {/* Body */}
            <motion.p
              className="font-body text-surface text-center lg:text-left font-normal text-subtitle leading-subtitle"
              style={{
                textShadow: "var(--text-shadow-hero-body)",
              }}
              variants={heroItem}
            >
              {isAuthenticated
                ? "Ready for your next adventure? Let's explore the world together."
                : "Wayfarer makes it simple to discover a world of adventures tailored just for you."}
            </motion.p>
          </div>

          {/* CTA Buttons — stagger slightly after copy */}
          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start"
            style={{ gap: "var(--hero-btn-gap)" }}
            variants={stagger}
          >
            {/* Primary — orange gradient */}
            <motion.div
              className="bg-gradient-to-b from-primary-hover to-primary relative rounded-[40px] shrink-0 cursor-pointer shadow-[var(--shadow-primary-cta)]"
              variants={heroItem}
              whileHover={{ opacity: 0.92, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
              onClick={() => navigate("/plan-trip")}
            >
              <div
                className="flex items-center justify-center overflow-clip rounded-[inherit]"
                style={{
                  paddingLeft: "var(--hero-btn-px)",
                  paddingRight: "var(--hero-btn-px)",
                  paddingTop: "var(--hero-btn-py)",
                  paddingBottom: "var(--hero-btn-py)",
                }}
              >
                <span
                  className="font-heading text-primary-foreground text-center whitespace-nowrap shrink-0 font-bold"
                  style={{
                    fontSize: "var(--text-button)",
                    lineHeight: "normal",
                  }}
                >
                  Start a trip with AI
                </span>
              </div>
              <div aria-hidden="true" className="absolute border-primary-dark border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px]" />
            </motion.div>

            {/* Secondary — peach gradient */}
            {!isAuthenticated && (
            <motion.div
              className="bg-gradient-to-b from-secondary-btn to-secondary-btn-end relative rounded-[40px] shrink-0 cursor-pointer shadow-[var(--shadow-secondary-cta)]"
              variants={heroItem}
              whileHover={{ opacity: 0.92, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
              onClick={() => navigate("/signup")}
            >
              <div
                className="flex items-center justify-center overflow-clip rounded-[inherit]"
                style={{
                  paddingLeft: "var(--hero-btn-px)",
                  paddingRight: "var(--hero-btn-px)",
                  paddingTop: "var(--hero-btn-py)",
                  paddingBottom: "var(--hero-btn-py)",
                }}
              >
                <span
                  className="font-heading text-primary text-center whitespace-nowrap shrink-0 font-bold"
                  style={{
                    fontSize: "var(--text-button)",
                    lineHeight: "normal",
                  }}
                >
                  Sign up now
                </span>
              </div>
              <div aria-hidden="true" className="absolute border-primary border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px]" />
            </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
