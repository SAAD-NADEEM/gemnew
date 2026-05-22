import Image from "next/image";

export function OurHeritage() {
  return (
    <section className="mt-[120px] max-w-7xl mx-auto px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5 md:col-start-2">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-6 leading-tight">
            Our Mission
          </h2>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            Our mission is to build long-term relationships through trust, transparency, and excellence in service. Whether you are seeking unique gemstones for jewelry, mineral specimens for collection, or reliable wholesale supply, Jilani Gems and Minerals is dedicated to meeting your needs with professionalism and care.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Driven by experience, guided by quality, and inspired by nature — we continue to connect clients across the globe with the timeless beauty of gems and minerals.
          </p>
        </div>
        <div className="md:col-span-5 md:col-start-8 h-[500px] relative rounded overflow-hidden border border-border/30 mt-8 md:mt-0">
          <Image
            src="/about2.png"
            alt="Loupe and sapphire"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}