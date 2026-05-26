import { Gem } from "@/types";
import ProductCard from "./ProductCard";
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'


async function OtherListing() {

    const data = await client.fetch(`*[_type == "other"]{
        name,
        "category": category->title,
        images,
        "video": video.asset->url
    }`, {}, { next: { revalidate: 30 } })

    const categoryOrder: Record<string, number> = { rugs: 0, bags: 1, shoes: 2 }

    const gems: Gem[] = data
        .map((gem: any) => ({
            ...gem,
            images: gem.images?.map((img: any) => urlFor(img).width(600).format('webp').url()) || [],
        }))
        .sort((a: any, b: any) => {
            const aOrder = categoryOrder[a.category?.toLowerCase()] ?? 99
            const bOrder = categoryOrder[b.category?.toLowerCase()] ?? 99
            return aOrder - bOrder
        })

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

export default OtherListing;