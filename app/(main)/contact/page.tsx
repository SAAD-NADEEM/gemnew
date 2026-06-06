import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata = {
  title: 'Contact Us | Jilani International',
  description: 'Get in touch with Jilani International for bespoke inquiries, private viewings, or detailed information on our collections.',
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Jilani International",
    description: "Reach out for bespoke gem inquiries, private viewings, or wholesale information. Visit us in Karachi, Pakistan.",
    url: "https://www.jilanigemsandminerals.com/contact",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Contact Jilani International",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Jilani International",
    description: "Reach out for bespoke gem inquiries, private viewings, or wholesale information.",
    images: ["/opengraph.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  "name": "Jilani International",
  "alternateName": "Jilani Gems and Minerals",
  "url": "https://www.jilanigemsandminerals.com",
  "logo": "https://www.jilanigemsandminerals.com/logo3.png",
  "image": "https://www.jilanigemsandminerals.com/opengraph.png",
  "description": "Wholesale supplier of rare gems and minerals including rubies, emeralds, sapphires, and gold ore from Pakistan.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "21-KMCHS Block 7-8",
    "addressLocality": "Karachi",
    "addressRegion": "Sindh",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.8607,
    "longitude": 67.0011
  },
  "telephone": "+923219299828",
  "email": "jilanigemsandminerals@gmail.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "19:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "PKR, USD",
  "paymentAccepted": "Cash, Bank Transfer",
  "areaServed": "Worldwide",
  "sameAs": [
    "https://wa.me/923219299828"
  ]
};

export default function ContactPage() {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col justify-center">
      <JsonLd data={localBusinessSchema} />
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif text-primary mb-6">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
          We invite you to reach out for bespoke inquiries, private viewing appointments,
          or detailed information regarding our collection.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* Left Column: Contact Info */}
        <div className="bg-background p-10 md:p-14 rounded-2xl border border-border/50 h-full flex flex-col justify-center">
          <h2 className="text-3xl font-serif text-foreground mb-10">
            Visit Our Atelier
          </h2>

          <div className="flex flex-col gap-8">

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 mt-1 text-emerald-800 dark:text-emerald-400 shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">WhatsApp</h3>
                <a href="https://wa.me/923219299828" className="text-lg md:text-xl font-light hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  +92 321 9299828
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 mt-1 text-emerald-800 dark:text-emerald-400 shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Email</h3>
                <div className='flex flex-col'>
                  <Link href="mailto:Jilaniinternational11@gmail.com" className="text-lg md:text-xl font-light hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors break-all">
                    Jilaniinternational11@gmail.com
                  </Link>
                  <Link href="mailto:jilanigemsandminerals@gmail.com" className="text-lg md:text-xl font-light hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors break-all">
                    jilanigemsandminerals@gmail.com
                  </Link>
                </div>
              </div>
            </div>

             <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1 text-emerald-800 dark:text-emerald-400 shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Location</h3>
                <p className="text-lg md:text-xl font-light text-foreground leading-relaxed">
                  21-KMCHS Block 7-8<br />
                  Karachi, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 mt-1 text-emerald-800 dark:text-emerald-400 shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Viewing Hours</h3>
                <p className="text-lg md:text-xl font-light text-foreground leading-relaxed">
                  Monday - Saturday: 10am - 7pm<br />
                  <span className="text-muted-foreground italic text-base">By appointment only</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Google Maps */}
        <div className="w-full h-full min-h-[500px] lg:min-h-full rounded-2xl overflow-hidden border border-border/50 bg-muted">
          <iframe
            src="https://maps.google.com/maps?q=21-KMCHS%20Block%207-8%20Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '100%' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[500px] lg:min-h-[600px] block"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
