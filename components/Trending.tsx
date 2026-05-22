import { Gem } from "@/types";
import Image from "next/image";



function ProductCard({ gems }: { gems: Gem }) {
    return (
        <div className="bg-background rounded-sm overflow-hidden">
            <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                    src={gems.image}
                    alt={gems.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="px-3 py-2 border-t-5 border-muted flex flex-col justify-center items-center">
                <p className="tracking-tighter text-base md:text-lg text-primary cursor-pointer text-center font-medium">{gems.name}</p>

                <p className="text-center text-sm">{gems.price} USD</p>
            </div>
        </div>
    )
}



function Trending() {

    const gems: Gem[] = [
        { name: "Blue Ceylon Sapphire", price: "$1,200", image: "/gem1.png", shortdesc: "Exquisite natural gemstone" },
        { name: "Pigeon Blood Ruby", price: "$2,800", image: "/gem2.png", shortdesc: "Rare untreated ruby specimen" },
        { name: "Colombian Green Emerald", price: "$1,500", image: "/gem3.png", shortdesc: "Vivid natural Colombian emerald" },
        { name: "Santa Maria Aquamarine", price: "$800", image: "/gem4.png", shortdesc: "Stunning ocean blue gemstone" },
        { name: "Royal Star Sapphire", price: "$3,400", image: "/gem1.png", shortdesc: "Natural asterism star sapphire" },
        { name: "Mozambique Red Ruby", price: "$1,900", image: "/gem2.png", shortdesc: "Deep red certified natural ruby" },
        { name: "Zambian Deep Emerald", price: "$2,100", image: "/gem3.png", shortdesc: "Rich velvety Zambian emerald" },
        { name: "Brazilian Aquamarine", price: "$1,350", image: "/gem4.png", shortdesc: "Crystal clear aquamarine stone" },
        { name: "Unheated Kashmir Sapphire", price: "$5,000", image: "/gem1.png", shortdesc: "Legendary unheated Kashmir origin" },
        { name: "Burmese Vivid Ruby", price: "$4,200", image: "/gem2.png", shortdesc: "Finest Burmese ruby available" },
    ];

    return (
        <div className="bg-muted px-3">
            <div className="max-w-360 w-full mx-auto py-20">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Best Selling</h2>
                    <p className="text-xs md:text-sm">Our most selling items</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {gems.map((gem, i) => (
                        <ProductCard key={i} gems={gem} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Trending;