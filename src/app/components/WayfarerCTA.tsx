import imgFeatureImage from "figma:asset/fdd7ef2bdcec3dd5700c66fad60c69f02d7b8b3e.jpg";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useAuth } from "./AuthContext";
import { showComingSoon } from "./utils/comingSoon";
import {
  scaleUp,
  stagger,
  fadeUp,
  slideFromLeft,
  slideFromRight,
  viewport,
  defaultTransition,
  quickTransition,
  sectionItem,
} from "./animations";

export function WayfarerCTA() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  return (
    <>
      {/* ── Mobile: full-width card treatment (per Figma) ── */}
      <motion.section
        className="lg:hidden bg-card relative shadow-[var(--shadow-section-card)] w-full"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={scaleUp}
      >
        <div className="flex flex-col items-center w-full">
          <div
            className="flex flex-col items-center w-full gap-(--space-stack-md) pb-(--section-py-lg) pt-(--space-stack-md) px-(--container-px)"
          >
            {/* Image */}
            <motion.div
              className="relative w-full overflow-hidden pointer-events-none rounded-none h-[clamp(176px,42vw,272px)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={{ ...defaultTransition, delay: 0.1 }}
            >
              <img
                src={imgFeatureImage}
                alt="A scenic adventure landscape"
                className="absolute inset-0 object-cover size-full"
              />
              <div className="absolute inset-0 shadow-[var(--shadow-inset-card)]" />
            </motion.div>

            {/* Text */}
            <motion.h2
              className="font-heading text-foreground text-center font-bold text-subtitle leading-subtitle"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...defaultTransition, delay: 0.18 }}
            >
              {isAuthenticated
                ? "Your next adventure is just a tap away!"
                : "There's an adventure waiting just for you!"}
            </motion.h2>

            {/* Button */}
            <motion.div
              className="bg-gradient-to-b from-primary-hover to-primary relative rounded-[40px] shrink-0 cursor-pointer shadow-[var(--shadow-primary-cta)]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...defaultTransition, delay: 0.26 }}
              whileHover={{ opacity: 0.92 }}
              whileTap={{ opacity: 0.82 }}
              onClick={() => isAuthenticated ? showComingSoon() : navigate("/signup")}
            >
              <div className="flex items-center justify-center overflow-clip px-6 py-3 rounded-[inherit]">
                <span
                  className="text-primary-foreground text-center whitespace-nowrap shrink-0 font-bold text-nav"
                  style={{ lineHeight: "normal" }}
                >
                  {isAuthenticated ? "Plan a trip with AI" : "Sign up"}
                </span>
              </div>
              <div aria-hidden="true" className="absolute border-primary-dark border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px]" />
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[var(--shadow-inset-card)] rounded-none" />
      </motion.section>

      {/* ── Desktop: card treatment ── */}
      <section
        className="hidden lg:block bg-surface w-full pt-(--section-py-md) pb-(--section-py-md)"
      >
        <div className="px-(--container-px)">
          <motion.div
            className="bg-card rounded-none overflow-hidden flex flex-row border-[0.5px] border-card-border shadow-[var(--shadow-section-card-lg)] w-full"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={scaleUp}
          >
            {/* Image panel — slides in from left */}
            <motion.div
              className="relative w-1/2 overflow-hidden min-h-[clamp(296px,26vw,416px)]"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={slideFromLeft}
            >
              <img
                src={imgFeatureImage}
                alt="A scenic adventure landscape"
                className="absolute inset-0 object-cover size-full"
              />
              <div className="absolute inset-0 shadow-[var(--shadow-inset-card-lg)]" />
            </motion.div>

            {/* Text panel — stagger in */}
            <motion.div
              className="w-1/2 flex flex-col items-center justify-center text-center"
              style={{
                gap: "clamp(24px, 3vw, 32px)",
                paddingLeft: "clamp(32px, 5vw, 72px)",
                paddingRight: "clamp(32px, 5vw, 72px)",
                paddingTop: "clamp(48px, 5.5vw, 80px)",
                paddingBottom: "clamp(48px, 5.5vw, 80px)",
              }}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={stagger}
            >
              <motion.h2
                className="font-heading text-foreground text-center font-bold text-display leading-display"
                variants={sectionItem}
              >
                {isAuthenticated
                  ? "Your next adventure is just a tap away!"
                  : "There's an adventure waiting just for you!"}
              </motion.h2>

              <motion.div variants={sectionItem} whileHover={{ opacity: 0.92 }} whileTap={{ opacity: 0.82 }} transition={quickTransition}>
                <Button
                  size="lg"
                  className="font-heading h-[48px] px-8 rounded-full gap-2 bg-gradient-to-b from-primary-hover to-primary text-primary-foreground border-[0.5px] border-primary-dark shadow-[var(--shadow-primary-cta)] hover:opacity-90 transition-opacity font-bold"
                  style={{
                    fontSize: "var(--text-button)",
                  }}
                  onClick={() => isAuthenticated ? showComingSoon() : navigate("/signup")}
                >
                  {isAuthenticated ? "Plan a trip with AI" : "Sign up"}
                  <ArrowRight className="size-4" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
