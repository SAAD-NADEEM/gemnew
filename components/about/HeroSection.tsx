import WhatsAppButton from "@/components/ui/whatsapp-button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          About Jilani Gems & Minerals
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
          Where Nature’s Beauty Meets Trust and Excellence
        </p>
        <WhatsAppButton message="Hello%20Jilani%20Gems!%20I%27d%20like%20to%20learn%20more%20about%20your%20business.">
          Connect with us on WhatsApp
        </WhatsAppButton>
      </div>
    </section>
  );
}