import { Reveal } from "./Reveal";
import { Phone, MessageCircle, Quote } from "lucide-react";

const founders = [
  {
    name: "Mr. Yallappa M Irkal",
    role: "Co-Founder",
    phone: "+91 99865 94622",
    tel: "919986594622",
    initials: "YI",
    quote:
      "We built MR Lubricants with a vision to provide reliable, high-quality lubricants to businesses across North Karnataka. Our focus has always been trust, consistency, and long-term relationships.",
  },
  {
    name: "Mrs. Vidya Nagaraj Irkal",
    role: "Co-Founder",
    phone: "+91 98861 56577",
    tel: "919886156577",
    initials: "VI",
    quote:
      "As a female entrepreneur myself, our goal is to expand and dominate the regional market while maintaining strong service and customer satisfaction. We are committed to growth and excellence.",
  },
];

export function Founders() {
  return (
    <section id="founders" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold-deep)]">
              Leadership
            </p>
            <h2 className="mt-3 text-4xl font-extrabold text-foreground md:text-5xl">
              Meet the <span className="text-gradient-gold">Founders</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-gold" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 120}>
              <article className="group relative h-full overflow-hidden rounded-3xl bg-card p-8 shadow-card transition-smooth hover:shadow-elegant md:p-10">
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-gradient-gold opacity-10 transition-smooth group-hover:opacity-20" />
                <Quote
                  className="absolute right-6 top-6 h-10 w-10 text-[var(--gold)] opacity-30"
                  strokeWidth={2}
                />

                <div className="relative flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-gold font-display text-xl font-extrabold text-ink shadow-gold">
                    {f.initials}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-extrabold text-foreground md:text-2xl">
                      {f.name}
                    </h3>
                    <p className="text-sm font-medium text-[var(--gold-deep)]">
                      {f.role}
                    </p>
                  </div>
                </div>

                <p className="relative mt-6 text-base leading-relaxed text-muted-foreground">
                  "{f.quote}"
                </p>

                <div className="relative mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
                  <a
                    href={`tel:${f.tel}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-smooth hover:bg-ink-soft"
                  >
                    <Phone className="h-4 w-4" />
                    {f.phone}
                  </a>
                  <a
                    href={`https://wa.me/${f.tel}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full border-2 border-[var(--gold)] px-5 py-3 text-sm font-semibold text-[var(--gold-deep)] transition-smooth hover:bg-[var(--gold)] hover:text-ink"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
