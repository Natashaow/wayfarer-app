import { useParams, useNavigate } from "react-router";
import { WayfarerNavbar } from "../components/WayfarerNavbar";
import { WayfarerFooter } from "../components/WayfarerFooter";
import { DestinationCard } from "../components/WayfarerExperiences";
import {
  getDestinationsByCountry,
  getCountryNameBySlug,
  countryFlags,
} from "../components/destinations-data";
import { Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { motion } from "motion/react";
import {
  stagger,
  defaultTransition,
} from "../components/animations";

const sectionItem = {
  hidden: { y: 24 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

export default function CountryPage() {
  const { countrySlug } = useParams<{ countrySlug: string }>();
  const navigate = useNavigate();
  const countryName = getCountryNameBySlug(countrySlug ?? "");
  const experiences = getDestinationsByCountry(countrySlug ?? "");
  const flag = countryName ? countryFlags[countryName] ?? "" : "";

  if (!countryName || experiences.length === 0) {
    return (
      <div
        className="flex flex-col w-full min-h-screen overflow-x-hidden bg-surface font-body"
      >
        <WayfarerNavbar />
        <main className="flex flex-col items-center justify-center flex-1 py-24 gap-4">
          <Globe className="size-12 text-muted-foreground/40" />
          <p
            className="font-heading text-foreground text-title-2 font-semibold"
          >
            Country not found
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

  return (
    <div
      className="flex flex-col w-full min-h-screen overflow-x-hidden bg-surface font-body"
    >
      <WayfarerNavbar />
      <main className="flex flex-col w-full flex-1">
        <section
          className="w-full py-(--section-py-lg)"
        >
          <div
            className="px-(--container-px)"
          >
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              {/* Breadcrumbs */}
              <motion.div variants={sectionItem}>
                <Breadcrumbs
                  items={[
                    { label: "Explore", href: "/explore" },
                    { label: countryName },
                  ]}
                />
              </motion.div>

              {/* Header */}
              <motion.div
                className="flex items-center gap-3 mb-(--space-stack-lg)"
                variants={sectionItem}
              >
                <span className="text-4xl md:text-5xl" aria-hidden="true">
                  {flag}
                </span>
                <div>
                  <h1
                    className="font-heading text-foreground text-title-1 font-semibold leading-title-1"
                  >
                    Explore {countryName}
                  </h1>
                  <p
                    className="font-body text-muted-foreground text-body"
                  >
                    {experiences.length} experience
                    {experiences.length !== 1 ? "s" : ""} available
                  </p>
                </div>
              </motion.div>

              {/* Grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-(--grid-gap)"
                variants={stagger}
              >
                {experiences.map((dest) => (
                  <DestinationCard key={dest.id} dest={dest} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <WayfarerFooter />
    </div>
  );
}
