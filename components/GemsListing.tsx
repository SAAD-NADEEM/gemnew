import { Gem } from "@/types";
import ProductCard from "./ProductCard";
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'


async function GemsListing() {

    const data = await client.fetch(`*[_type == "gem"]{
        name,
        category,
        images,
        "video": video.asset->url
    }`)

    const gems: Gem[] = data.map((gem: any) => ({
        ...gem,
        images: gem.images?.map((img: any) => urlFor(img).url()) || [],
    }))

    return (
        <div className="bg-muted px-3 xl:px-0">
            <div className="max-w-360 w-full mx-auto py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7">
                    {gems.map((gem, i) => (
                        <ProductCard key={i} gems={gem} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GemsListing;