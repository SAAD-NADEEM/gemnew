import { HeroSection } from "@/components/about/HeroSection";
import { OurHeritage } from "@/components/about/OurHeritage";
import { EthicalProvenance } from "@/components/about/EthicalProvenance";
import { TheArtisans } from "@/components/about/TheArtisans";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <OurHeritage />
      <EthicalProvenance />
      <TheArtisans />
    </main>
  );
}