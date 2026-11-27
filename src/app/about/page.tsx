import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurMission from "@/components/about/OurMission";
import TeamSection from "@/components/about/TeamSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the coastal heritage, sustainability mission, and hospitality team behind Ocean Haven Resort & Spa in Key West.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <OurMission />
      <TeamSection />
    </main>
  );
}
