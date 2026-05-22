import WhatsAppButton from "@/components/ui/whatsapp-button";

export default function CTASection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to start your collection?
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          Whether you're a collector, jeweler, or designer – let's talk. We're just a WhatsApp message away.
        </p>
        <WhatsAppButton message="Hello%20Jilani%20Gems!%20I'm%20interested%20in%20your%20gems%20and%20minerals.">
          Chat with us on WhatsApp
        </WhatsAppButton>
      </div>
    </section>
  );
}