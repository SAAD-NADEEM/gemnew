import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Jilani International',
};

export default function ContactPage() {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col justify-center">
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
                <a href="mailto:Jilaniinternational11@gmail.com" className="text-lg md:text-xl font-light hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors break-all">
                  Jilaniinternational11@gmail.com
                </a>
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
