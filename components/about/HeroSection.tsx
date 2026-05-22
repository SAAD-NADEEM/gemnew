import Image from "next/image";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 pt-[140px]">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-serif text-5xl md:text-[64px] leading-[1.1] tracking-tight font-bold text-primary mb-6">
          A Trusted Name in Natural Gemstones
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Welcome to Jilani Gems and Minerals by Jilani International. We are passionate about bringing the beauty and authenticity of nature to collectors, jewelers, wholesalers, and gemstone enthusiasts worldwide
        </p>
      </div>
      <div className="w-full h-[600px] relative overflow-hidden rounded bg-muted border border-border/30 flex items-center justify-center">
        <Image
          src={'/about1.png'}
          alt="Gem cutting atelier"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}