import Image from "next/image";

const gems = [
    {
        name: "Ruby",
        info: "A fiery red corundum prized for its passion and vitality.",
        color: "from-red-500/20 to-red-900/10",
        ring: "ring-red-400/60",
        accent: "text-red-400",
        src: "/gems/ruby03.jpeg",
    },
    {
        name: "Sapphire",
        info: "A brilliant blue corundum symbolizing wisdom and royalty.",
        color: "from-blue-500/20 to-blue-900/10",
        ring: "ring-blue-400/60",
        accent: "text-blue-400",
        src: "/gems/saphhire01.jpeg",
    },
    {
        name: "Emerald",
        info: "A lush green beryl treasured for renewal and eternal love.",
        color: "from-emerald-500/20 to-emerald-900/10",
        ring: "ring-emerald-400/60",
        accent: "text-emerald-400",
        src: "/gems/emerald01.png",
    },
];

function MainBanner() {
    return (
        <section className="w-full bg-muted py-10 px-4">
            <div className="max-w-360 mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16">
                {gems.map((gem) => (
                    <div
                        key={gem.name}
                        className="flex flex-col items-center text-center gap-3 group"
                    >
                        {/* Circular image */}
                        <div
                            className={`relative w-24 h-24 rounded-full overflow-hidden ring-3 ${gem.ring} bg-gradient-to-br ${gem.color} transition-transform duration-300 group-hover:scale-105`}
                        >
                            <Image
                                src={gem.src}
                                alt={gem.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Gem name */}
                        <h3
                            className={`text-lg font-semibold tracking-wide ${gem.accent} transition-colors duration-300`}
                        >
                            {gem.name}
                        </h3>

                        {/* One-line info */}
                        <p className="text-zinc-400 text-sm max-w-56 leading-snug">
                            {gem.info}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MainBanner;