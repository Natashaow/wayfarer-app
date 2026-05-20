import imgWayfarerFooterLogo from "figma:asset/d13da812caf4ab09f5f6e1a8c36531f26e7ae0e2.png";
import imgWayfarerBlack12 from "figma:asset/31bfa83910aefa179da0ef0052c94a5701371e0c.png";
import imgWayfarerBlack23 from "figma:asset/ee0ae046dd453c8d4b5bc89b2cfbcca670ff8d17.png";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp, stagger, staggerFast, viewport, defaultTransition, fastTransition } from "./animations";
import { useNavigate } from "react-router";

const footerLinks = [
  {
    heading: "Travel",
    links: [
      { label: "Get Started", href: "/signup" },
      { label: "Community", href: "/explore" },
      { label: "Discover", href: "/explore" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/explore" },
      { label: "Reviews", href: "/explore" },
      { label: "Help Centre", href: "/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Media", href: "/" },
      { label: "Contact Us", href: "/" },
    ],
  },
  {
    heading: "More",
    links: [
      { label: "Terms & Conditions", href: "/" },
      { label: "Privacy Policy", href: "/" },
      { label: "FAQ", href: "/" },
    ],
  },
];

const socialIcons = [
  {
    label: "Facebook",
    href: "#",
    icon: <Facebook className="size-[20px]" />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: <Instagram className="size-[20px]" />,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: <Linkedin className="size-[20px]" />,
  },
  {
    label: "X (Twitter)",
    href: "#",
    icon: <Twitter className="size-[20px]" />,
  },
];

/* Mobile Logo */
function MobileFooterLogo() {
  return (
    <div className="flex items-center gap-0 shrink-0">
      <div className="relative h-[32px] w-[32px]">
        <img src={imgWayfarerBlack12} alt="Wayfarer icon" className="absolute inset-0 object-contain size-full" />
      </div>
      <div className="relative h-[24px] w-[103px] ml-[7px]">
        <img src={imgWayfarerBlack23} alt="Wayfarer" className="absolute inset-0 object-contain size-full" />
      </div>
    </div>
  );
}

/** Shared child variant — matches doctrine sectionItem (16px Y + fade) */
const footerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

/** Social icon: subtle scale within R4 chrome cap (0.96 → 1) */
const socialItem = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: fastTransition },
};

export function WayfarerFooter() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-secondary shadow-[var(--shadow-footer)]">

      {/* ── Mobile Footer (per Figma) ── */}
      <div className="lg:hidden">
        {/* Main body */}
        <motion.div
          className="flex flex-col items-start gap-(--space-stack-lg) pb-(--section-py-lg) pt-(--section-py-md) px-(--container-px)"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          {/* Logo */}
          <motion.div variants={footerItem}>
            <button onClick={() => navigate("/")} className="cursor-pointer outline-none">
              <MobileFooterLogo />
            </button>
          </motion.div>

          {/* Links grid — 2×2 using grid-gap */}
          <motion.div
            className="grid grid-cols-2 w-full gap-(--grid-gap)"
            variants={stagger}
          >
            {footerLinks.map((section) => (
              <motion.div key={section.heading} className="flex flex-col gap-(--space-stack-lg)" variants={footerItem}>
                <p
                  className="font-body text-card-foreground font-bold text-body"
                >
                  {section.heading}
                </p>
                <div className="flex flex-col gap-(--space-stack-sm)">
                  {section.links.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => navigate(link.href)}
                      className="font-body text-card-foreground hover:text-text-link-hover active:opacity-70 transition-colors outline-none focus-visible:text-accent focus-visible:underline rounded-sm text-left cursor-pointer text-body-sm"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer notes — mobile */}
        <motion.div
          className="flex flex-col items-start gap-(--space-stack-md) pt-(--space-stack-md) pb-(--section-py-md) px-(--container-px)"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <div className="bg-card-foreground h-px rounded-[4px] w-full opacity-10" />
          {/* Social icons */}
          <motion.div className="flex items-center gap-[16px] text-card-foreground" variants={staggerFast}>
            {socialIcons.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="shrink-0 hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-0.5"
                variants={socialItem}
                whileHover={{ opacity: 0.7 }}
                whileTap={{ opacity: 0.85 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            className="font-body text-card-foreground font-normal text-body-sm"
            variants={footerItem}
          >
            © 2025 Wayfarer. All rights reserved.
          </motion.p>
        </motion.div>
      </div>

      {/* ── Desktop Footer ── */}
      <div className="hidden lg:block w-full">
        {/* Main footer body */}
        <motion.div
          className="flex flex-row items-start justify-between w-full gap-(--grid-gap) px-(--container-px) pt-[clamp(48px,5vw,64px)] pb-[clamp(56px,6.5vw,88px)]"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          {/* Brand column */}
          <motion.div
            className="flex flex-col gap-6 shrink-0"
            style={{ width: "clamp(240px, 30vw, 416px)" }}
            variants={footerItem}
          >
            <div className="relative w-[79px] h-[clamp(64px,7vw,88px)]">
              <img
                src={imgWayfarerFooterLogo}
                alt="Wayfarer"
                className="absolute inset-0 object-contain size-full"
                style={{ opacity: 0.85 }}
              />
            </div>
            <p
              className="font-body text-card-foreground max-w-[286px] font-normal text-body leading-body"
            >
              Embark on a journey of discovery with Wayfarer, where travel adventure awaits.
            </p>
          </motion.div>

          {/* Link columns */}
          <motion.div
            className="flex flex-row flex-1 justify-between gap-(--grid-gap)"
            variants={stagger}
          >
            {footerLinks.map((section) => (
              <motion.div
                key={section.heading}
                className="flex flex-col min-w-[140px] gap-(--space-stack-lg)"
                style={{ width: "clamp(140px, 13vw, 183px)" }}
                variants={footerItem}
              >
                <p
                  className="font-body text-card-foreground font-bold text-body"
                >
                  {section.heading}
                </p>
                <div className="flex flex-col gap-(--space-stack-sm)">
                  {section.links.map((link) => (
                    <Button
                      key={link.label}
                      variant="link"
                      className="font-body text-card-foreground hover:text-primary p-0 h-auto justify-start font-normal no-underline hover:no-underline transition-colors cursor-pointer text-body"
                      onClick={() => navigate(link.href)}
                    >
                      {link.label}
                    </Button>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer notes — desktop */}
        <motion.div
          className="flex flex-col w-full pt-(--space-stack-sm) px-(--container-px) pb-[clamp(32px,3.5vw,48px)] gap-(--space-stack-sm)"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.div variants={footerItem}>
            <Separator className="bg-card-foreground opacity-20" />
          </motion.div>

          <motion.div
            className="flex flex-row items-center justify-between gap-4"
            variants={stagger}
          >
            <motion.p
              className="font-body text-card-foreground font-normal text-body-sm"
              variants={footerItem}
            >
              © 2025 Wayfarer. All rights reserved.
            </motion.p>

            {/* Social icons with tooltips */}
            <motion.div className="flex items-center gap-2" variants={staggerFast}>
              {socialIcons.map((s) => (
                <motion.div key={s.label} variants={socialItem} whileHover={{ opacity: 0.7 }} whileTap={{ opacity: 0.85 }}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-9 rounded-full text-card-foreground hover:bg-secondary-hover hover:text-primary transition-colors"
                        asChild
                      >
                        <a href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                          {s.icon}
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>{s.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </footer>
  );
}
