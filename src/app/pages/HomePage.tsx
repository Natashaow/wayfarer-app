import { WayfarerNavbar } from "../components/WayfarerNavbar";
import { WayfarerHero } from "../components/WayfarerHero";
import { WayfarerExperiences } from "../components/WayfarerExperiences";
import { PersonalizedSection } from "../components/PersonalizedSection";
import { WayfarerWhySection } from "../components/WayfarerWhySection";
import { WayfarerCTA } from "../components/WayfarerCTA";
import { WayfarerTestimonials } from "../components/WayfarerTestimonials";
import { WayfarerFooter } from "../components/WayfarerFooter";

export default function HomePage() {
  return (
    <div
      className="flex flex-col w-full min-h-screen overflow-x-hidden bg-surface font-body"
    >
      <WayfarerNavbar />
      <main className="flex flex-col w-full flex-1">
        <WayfarerHero />
        <WayfarerExperiences />
        <PersonalizedSection />
        <WayfarerWhySection />
        <WayfarerCTA />
        <WayfarerTestimonials />
      </main>
      <WayfarerFooter />
    </div>
  );
}
