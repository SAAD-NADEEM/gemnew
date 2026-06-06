import MainBanner from "@/components/MainBanner";
import MasonryGrid from "@/components/MasonryGrid";
import MineralsBlocks from "@/components/MineralsBlocks";
import MineralsListing from "@/components/MineralsListing";

export const metadata = {
  title: "Raw Ores & Minerals | Jilani International",
  description: "Direct-source precious metals, industrial minerals, and natural roughs for global buyers from Pakistan.",
  alternates: {
    canonical: "/minerals",
  },
  openGraph: {
    title: "Raw Ores & Minerals | Jilani International",
    description: "Direct-source precious metals, industrial minerals, and natural rough gemstones for global buyers. Sourced from Pakistan.",
    url: "https://www.jilanigemsandminerals.com/minerals",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Raw Ores and Minerals — Jilani International",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raw Ores & Minerals | Jilani International",
    description: "Direct-source precious metals, industrial minerals, and natural rough gemstones from Pakistan.",
    images: ["/opengraph.png"],
  },
};

function page() {

    const data = {
        image: '/minerals_banner.png',
        title: 'Raw Ores & Uncut Gemstones',
        p: 'Direct-source precious metals, industrial minerals, and natural roughs for global buyers.'
    }

    const images = [
        { id: 1, src: "/minerals/20260509_171103.jpg.jpeg", alt: "Raw mineral ore specimen from Pakistan" },
        { id: 2, src: "/minerals/20260509_171144.jpg.jpeg", alt: "Uncut natural mineral rough from Jilani International" },
        { id: 3, src: "/minerals/IMG-20251025-WA0369.jpeg", alt: "Precious mineral specimen wholesale Pakistan" },
        { id: 4, src: "/minerals/IMG-20251105-WA0778.jpg.jpeg", alt: "Raw ore and mineral collection Jilani International" },
        { id: 5, src: "/minerals/IMG-20251128-WA0389.jpg.jpeg", alt: "Natural rough mineral gemstone from Pakistan" },
        { id: 6, src: "/minerals/IMG-20260407-WA0759.jpg.jpeg", alt: "Industrial mineral rough specimen for global buyers" },
        { id: 7, src: "/minerals/IMG-20260426-WA0440.jpg.jpeg", alt: "Wholesale raw ore and natural mineral specimen" },
        { id: 8, src: "/minerals/IMG-20260430-WA0176.jpg.jpeg", alt: "Direct-source precious metal and mineral rough Pakistan" },
    ]

    return (
        <main className='flex-1 w-full bg-muted'>
            <MainBanner data={data} />
            <MineralsListing />
            <MineralsBlocks />
            <MasonryGrid images={images} />
        </main>
    );
}

export default page;