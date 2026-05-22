import { Gem } from "@/types";
import ProductCard from "./ProductCard";
import gemsData from '@/data/gems.json'


function GemsListing() {

    const gems: Gem[] = gemsData

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