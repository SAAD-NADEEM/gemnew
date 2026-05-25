export const metadata = {
  title: "Privacy Policy | Jilani International",
  description: "Privacy Policy of Jilani International. Learn about how we handle and protect your information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-background min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-semibold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: May 25, 2026</p>

        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-medium text-foreground mb-2">1. Information We Collect</h2>
            <p>We collect minimal personal information necessary to facilitate business communications. When you contact us via email or WhatsApp, we collect the information you voluntarily provide, such as your name, phone number, email address, and business procurement details.</p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-2">2. How We Use Your Information</h2>
            <p>Your information is used strictly to respond to your inquiries, provide requested documentation (such as assayer reports or XRF data), and coordinate private B2B logistics.</p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-2">3. Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal or business information to third parties. Information is only shared with trusted logistics and shipping partners when explicitly necessary to fulfill an agreed-upon transaction.</p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-2">4. Analytics and Tracking</h2>
            <p>We may use basic website analytics to monitor traffic and improve our user experience. This data is aggregated and does not personally identify you.</p>
          </section>
        </div>
      </div>
    </div>
  );
}