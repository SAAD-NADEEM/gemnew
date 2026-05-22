import { Globe, Leaf, Handshake } from "lucide-react";

export function EthicalProvenance() {
  return (
    <section className="mt-[120px] max-w-7xl mx-auto px-6 md:px-16">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-4">
          The Jilani Standard
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Delivering exceptional quality and authentic earth treasures to clients worldwide. We bridge the gap between nature's raw beauty and the exacting standards of our global clientele
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border/30 p-8 rounded flex flex-col justify-between aspect-square">
          <div>
            <Globe className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-2xl font-medium text-primary mb-2">Global Sourcing</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              We leverage our international network to carefully source premium rough and polished stones directly from the world's most renowned gem-producing regions
            </p>
          </div>
        </div>

        <div className="bg-card border border-border/30 p-8 rounded flex flex-col justify-between aspect-square">
          <div>
            <Leaf className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-2xl font-medium text-primary mb-2">Natural Authenticity</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our commitment to genuine quality ensures that every mineral specimen and gemstone we supply is 100% natural, honoring the true, unembellished artistry of the earth
            </p>
          </div>
        </div>

        <div className="bg-card border border-border/30 p-8 rounded flex flex-col justify-between aspect-square">
          <div>
            <Handshake className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-2xl font-medium text-primary mb-2">Trusted Partnerships</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              We build lasting relationships with collectors, jewelers, and wholesalers through uncompromising transparency, competitive pricing, and dedicated professional service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}