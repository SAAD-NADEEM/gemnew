import GemsListing from "@/components/GemsListing";
import BuyerConfidenceFAQ from "@/components/BuyerConfidenceFAQ";
import HeroBanner from "@/components/HeroBanner";
import MainBanner from "@/components/MainBanner";
import MasonryGrid from "@/components/MasonryGrid";

export const metadata = {
  title: "Jilani International | Premium Gems & Minerals",
  description: "Wholesale supplier of rare gems and minerals including rubies, emeralds, sapphires, and gold ore from Pakistan.",
  alternates: {
    canonical: "/",
  },
};

function page() {

  const data = {
    image: '/emerald_banner.png',
    title: 'Earth’s Rarest Elements',
    p: 'Unprocessed precious metals, raw minerals, and naturally formed gemstones'
  }

  const images = [
    { id: 1, src: "/gems/emerald01.png", alt: "Emerald 01" },
    { id: 2, src: "/gems/emerald02.jpeg", alt: "Emerald 02" },
    { id: 3, src: "/gems/emerald03.jpeg", alt: "Emerald 03" },
    { id: 4, src: "/gems/emerald04.jpeg", alt: "Emerald 04" },
    { id: 5, src: "/gems/emerald05.jpeg", alt: "Emerald 05" },
    { id: 6, src: "/gems/emerald06.jpeg", alt: "Emerald 06" },
    { id: 7, src: "/gems/emerald07.jpeg", alt: "Emerald 07" },
    { id: 8, src: "/gems/emeraldbox01.png", alt: "Emerald Box 01" },
    { id: 9, src: "/gems/emeraldbox02.png", alt: "Emerald Box 02" },
    { id: 10, src: "/gems/ruby01.png", alt: "Ruby 01" },
    { id: 11, src: "/gems/ruby0102.png", alt: "Ruby 0102" },
    { id: 12, src: "/gems/ruby02.jpeg", alt: "Ruby 02" },
    { id: 13, src: "/gems/ruby0202.jpeg", alt: "Ruby 0202" },
    { id: 14, src: "/gems/ruby0203.jpeg", alt: "Ruby 0203" },
    { id: 15, src: "/gems/ruby0204.jpeg", alt: "Ruby 0204" },
    { id: 16, src: "/gems/ruby0205.jpeg", alt: "Ruby 0205" },
    { id: 17, src: "/gems/ruby03.jpeg", alt: "Ruby 03" },
    { id: 18, src: "/gems/ruby0302.jpeg", alt: "Ruby 0302" },
    { id: 19, src: "/gems/ruby0303.jpeg", alt: "Ruby 0303" },
    { id: 20, src: "/gems/ruby0304.jpeg", alt: "Ruby 0304" },
    { id: 21, src: "/gems/saphhire01.jpeg", alt: "Saphhire 01" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jilani International",
    "url": "https://www.jilanigemsandminerals.com",
    "logo": "https://www.jilanigemsandminerals.com/opengraph.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "jilanigemsandminerals@gmail.com",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "21-KMCHS Block 7-8",
      "addressLocality": "Karachi",
      "addressCountry": "PK"
    }
  };

  return (
    <main className='h-full w-full'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MainBanner data={data} />
      <GemsListing />
      <HeroBanner />
      <MasonryGrid images={images} />
    </main>
  );
}

export default page;