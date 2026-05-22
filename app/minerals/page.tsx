import MainBanner from "@/components/MainBanner";
import MineralsBlocks from "@/components/MineralsBlocks";
import MineralsListing from "@/components/MineralsListing";

function page() {

    const data = {
        image: '/minerals_banner.png',
        title: 'Raw Ores & Uncut Gemstones',
        p: 'Direct-source precious metals, industrial minerals, and natural roughs for global buyers.'
    }

    return (
        <main className='flex-1 w-full bg-muted'>
            <MainBanner data={data}/>
            <MineralsListing />
            <MineralsBlocks />
        </main>
    );
}

export default page;