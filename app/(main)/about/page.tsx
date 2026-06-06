import { HeroSection } from "@/components/about/HeroSection";
import { OurHeritage } from "@/components/about/OurHeritage";
import { EthicalProvenance } from "@/components/about/EthicalProvenance";
import { TheArtisans } from "@/components/about/TheArtisans";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = {
  title: "About Us | Jilani International",
  description: "Learn about the heritage, ethical provenance, and artisans behind Jilani International.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Jilani International",
    description: "Learn about the heritage, ethical provenance, and artisans behind Jilani International — purveyors of rare gems and minerals from Pakistan.",
    url: "https://www.jilanigemsandminerals.com/about",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Jilani International — About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Jilani International",
    description: "Learn about the heritage, ethical provenance, and artisans behind Jilani International.",
    images: ["/opengraph.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Jilani International",
  "alternateName": "Jilani Gems and Minerals",
  "url": "https://www.jilanigemsandminerals.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.jilanigemsandminerals.com/logo3.png",
    "width": 512,
    "height": 512
  },
  "image": "https://www.jilanigemsandminerals.com/opengraph.png",
  "description": "Jilani International is a wholesale supplier of rare gems, minerals, rubies, emeralds, sapphires, and gold ore sourced directly from Pakistan, serving global buyers.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "21-KMCHS Block 7-8",
    "addressLocality": "Karachi",
    "addressRegion": "Sindh",
    "addressCountry": "PK"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+923219299828",
    "email": "jilanigemsandminerals@gmail.com",
    "contactType": "customer service",
    "areaServed": "Worldwide",
    "availableLanguage": ["English", "Urdu"]
  },
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "sameAs": [
    "https://wa.me/923219299828"
  ]
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <JsonLd data={organizationSchema} />
      <HeroSection />
      <OurHeritage />
      <EthicalProvenance />
      <TheArtisans />
    </main>
  );
}