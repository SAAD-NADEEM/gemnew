export const metadata = {
  title: "Terms of Service | Jilani International",
  description: "Terms of Service and operational guidelines for B2B transactions with Jilani International.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfService() {
  return (
    <div className="bg-background min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-semibold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last Updated: May 25, 2026</p>

        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-medium text-foreground mb-2">1. Nature of the Business</h2>
            <p>This website serves as a digital catalog for raw minerals, precious metal ores, unpolished gemstones, and traditional textiles. We operate exclusively as a B2B supplier.</p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-2">2. Inquiry-Based Transactions</h2>
            <p>No direct e-commerce transactions are processed on this website. All listings, including weights, lab reports, and availability, are for informational purposes. Final acquisitions, pricing, and shipping logistics are negotiated and bound strictly through private, direct communication.</p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-2">3. Accuracy of Materials</h2>
            <p>While we strive to display our raw materials and lab verifications as accurately as possible, natural variations in raw ores and rough gemstones occur. Final physical verification and grading are confirmed privately before any transaction is finalized. We reserve the right to update or correct website information without prior notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-2">4. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or reliance on its informational content.</p>
          </section>
        </div>
      </div>
    </div>
  );
}