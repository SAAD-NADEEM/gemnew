import HeroSection from "@/components/about/HeroSection";
import AboutContent from "@/components/about/AboutContent";
import CTASection from "@/components/about/CTASection";
import Footer from "@/components/about/Footer";

export default function AboutPage() {
  return (
    <main className="max-w-[1440px] mx-auto my-20">
      <HeroSection />
      <AboutContent />
      <CTASection />
    </main>
  );
}