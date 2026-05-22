"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do these stones come with GIA/AGL certificates?",
    answer:
      "Yes. Every stone in our collection is accompanied by an independent certification from GIA (Gemological Institute of America) or AGL (American Gemological Laboratories). These reports detail the stone's origin, color grade, clarity, carat weight, and any treatments — giving you complete transparency and peace of mind with your purchase.",
  },
  {
    question: "How does the purchasing and shipping process work?",
    answer:
      "Once you select a stone, our team will reach out to confirm the details and arrange secure payment. Each gem is individually insured, double-sealed, and shipped via a bonded courier with full tracking. Domestic orders typically arrive within 3–5 business days; international shipments are handled through our vetted logistics partners with customs-cleared delivery.",
  },
  {
    question: "Are these stones treated or heated?",
    answer:
      "We specialize exclusively in natural, untreated gemstones. None of our stones undergo heating, diffusion, or any form of enhancement. The certificate accompanying each stone explicitly states its treatment status. Our commitment to offering only untreated specimens is what sets our collection apart.",
  },
  {
    question: "Can I request a custom cut or setting?",
    answer:
      "Absolutely. We work with master lapidaries and bespoke jewelers who can re-cut or set any stone to your exact specifications. Whether you're envisioning a classic emerald cut or a one-of-a-kind design, our team will guide you through the process from concept to completion.",
  },
];

function BuyerConfidenceFAQ() {
  return (
    <section className="bg-muted py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* ── Left Column ── */}
        <div className="flex flex-col gap-5 md:sticky md:top-24">
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            Buyer Confidence
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-tight text-foreground">
            Frequently
            <br />
            Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
            Everything you need to know before making your next acquisition.
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="#"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              Reach out to us directly.
            </a>
          </p>
        </div>

        {/* ── Right Column ── */}
        <div>
          <Accordion>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-[15px] py-5 cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default BuyerConfidenceFAQ;
