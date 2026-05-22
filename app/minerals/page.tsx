import MainBanner from "@/components/MainBanner";
import MasonryGrid from "@/components/MasonryGrid";
import MineralsBlocks from "@/components/MineralsBlocks";
import MineralsListing from "@/components/MineralsListing";

function page() {

    const data = {
        image: '/minerals_banner.png',
        title: 'Raw Ores & Uncut Gemstones',
        p: 'Direct-source precious metals, industrial minerals, and natural roughs for global buyers.'
    }

    const images = [
        { id: 1, src: "/minerals/20260509_171103.jpg.jpeg", alt: "Photo 1" },
        { id: 2, src: "/minerals/20260509_171144.jpg.jpeg", alt: "Photo 2" },
        { id: 3, src: "/minerals/IMG-20251025-WA0369.jpeg", alt: "Photo 3" },
        { id: 4, src: "/minerals/IMG-20251105-WA0778.jpg.jpeg", alt: "Photo 4" },
        { id: 5, src: "/minerals/IMG-20251128-WA0389.jpg.jpeg", alt: "Photo 5" },
        { id: 6, src: "/minerals/IMG-20260407-WA0759.jpg.jpeg", alt: "Photo 6" },
        { id: 7, src: "/minerals/IMG-20260426-WA0440.jpg.jpeg", alt: "Photo 7" },
        { id: 8, src: "/minerals/IMG-20260430-WA0176.jpg.jpeg", alt: "Photo 8" },
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