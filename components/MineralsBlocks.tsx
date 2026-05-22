import Image from "next/image";


function Card({ info }: { info: { image: string, name: string, desc: string } }) {
    return (
        <div className="space-y-7">
            <div className="relative aspect-video">
                <Image src={info.image} alt={info.name} fill className="object-cover"/>
            </div>
            <h2 className="text-2xl leading-6 font-bold tracking-tighter text-center">{info.name}</h2>
            <p className="text-muted-foreground text-center ">{info.desc}</p>
        </div>
    )
}

function MineralsBlocks() {

    const data = [
        {
            image: '/minerals/IMG-20251128-WA0389.jpg.jpeg',
            name: 'Gold Ore',
            desc: 'Gold ore is often found near quartz veins, iron staining, and sulfide minerals like pyrite and arsenopyrite.'
        },
        {
            image: '/minerals/IMG-20260407-WA0759.jpg.jpeg',
            name: 'Tungsten Ore',
            desc: 'Tungsten ore deposits are predominantly magmatic or hydrothermal in origin and are associated with felsic igneous intrusions.'
        },
        {
            image: '/minerals/IMG-20260430-WA0176.jpg.jpeg',
            name: 'Copper Ore',
            desc: 'Copper ore is defined as a type of mineral deposit that contains economically valuable copper minerals.'
        },
    ]

    return (
        <div className="w-full max-w-360 mx-auto py-20 mb-20 space-y-7 px-5 xl:px-0">
            <h1 className="text-3xl lg:text-5xl font-medium text-center">Featured Minerals</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {data.map((info, i) => (
                    <Card info={info} key={i} />
                ))}
            </div>
        </div>
    );
}

export default MineralsBlocks;