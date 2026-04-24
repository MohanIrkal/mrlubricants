import { Reveal } from "./Reveal";
import { MapPin, Mail, FileText, Phone, Navigation } from "lucide-react";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Chitta+Complex+Shop+No+15+Indi+Pump+Circle+Hubballi";

export function Contact() {
  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold-deep)]">
              Visit Us
            </p>
            <h2 className="mt-3 text-4xl font-extrabold text-foreground md:text-5xl">
              Contact & <span className="text-gradient-gold">Location</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-gold" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="grid gap-4">
              <ContactCard
                icon={MapPin}
                title="Address"
                lines={[
                  "Chitta Complex, Shop No. 15",
                  "Near Indi Pump Circle",
                  "Hubballi – 580024",
                ]}
              />
              <ContactCard
                icon={Mail}
                title="Email"
                href="mailto:mrlhubli@gmail.com"
                lines={["mrlhubli@gmail.com"]}
              />
              <ContactCard
                icon={Phone}
                title="Phone"
                lines={["+91 99865 94622", "+91 98861 56577"]}
              />
              <ContactCard
                icon={FileText}
                title="GSTIN"
                lines={["29XXXXXXXXXX1ZX"]}
                muted
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl bg-gradient-ink p-8 text-white shadow-elegant md:p-10">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gradient-gold opacity-15" />
              <div className="absolute -bottom-12 -left-8 h-40 w-40 -skew-x-12 bg-gradient-gold opacity-10" />

              <div className="relative flex h-full flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold text-ink shadow-gold">
                  <Navigation className="h-7 w-7" strokeWidth={2.2} />
                </div>

                <h3 className="mt-6 font-display text-3xl font-extrabold md:text-4xl">
                  Find us on <span className="text-gradient-gold">the map</span>
                </h3>
                <p className="mt-4 text-white/70">
                  Located at the heart of Hubballi, near Indi Pump Circle. Walk
                  in or call ahead for bulk orders and pricing.
                </p>

                <div className="mt-auto pt-8">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-gradient-gold px-7 py-4 text-base font-semibold text-ink shadow-gold transition-smooth hover:scale-105"
                  >
                    <MapPin className="h-5 w-5" strokeWidth={2.4} />
                    Open Location
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
  href,
  muted = false,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  lines: string[];
  href?: string;
  muted?: boolean;
}) {
  const inner = (
    <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-0.5 hover:border-[var(--gold)] hover:shadow-gold">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-gold text-ink shadow-gold">
        <Icon className="h-6 w-6" strokeWidth={2.2} />
      </div>
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-deep)]">
          {title}
        </p>
        <div className={`mt-1 space-y-0.5 ${muted ? "text-muted-foreground" : "text-foreground"}`}>
          {lines.map((l) => (
            <div key={l} className="font-medium">
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
