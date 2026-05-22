import Image from "next/image";

export function TheArtisans() {
  return (
    <section className="mt-[120px] max-w-7xl mx-auto px-6 md:px-16 mb-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-6 h-[500px] md:h-[700px] relative rounded overflow-hidden border border-border/30 order-2 md:order-1 mt-8 md:mt-0">
          <Image
            src="/about3.png"
            alt="Artisan examining a diamond"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:col-span-4 md:col-start-8 order-1 md:order-2">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-6 leading-tight">
            Exceptional Craftsmanship
          </h2>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            We take immense pride in offering carefully selected products that reflect exceptional craftsmanship, natural beauty, and genuine value. Our process is rooted in a deep understanding of geological perfection, ensuring that every stone we offer meets the highest industry standards
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            From rare, untouched mineral collections to premium, masterfully cut gemstones, every piece is chosen with strict attention to quality and authenticity. We are dedicated to providing our clients with genuine earth treasures that guarantee complete customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}