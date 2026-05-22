import GemsListing from "@/components/GemsListing";
import BuyerConfidenceFAQ from "@/components/BuyerConfidenceFAQ";
import HeroBanner from "@/components/HeroBanner";
import MainBanner from "@/components/MainBanner";
import MasonryGrid from "@/components/MasonryGrid";

function page() {

  const data = {
    image: '/emerald_banner.png',
    title: 'Earth’s Rarest Elements',
    p: 'Unprocessed precious metals, raw minerals, and naturally formed gemstones'
  }

  return (
    <main className='h-full w-full'>
      <MainBanner data={data} />
      <GemsListing />
      <HeroBanner />
      <MasonryGrid />
    </main>
  );
}

export default page;