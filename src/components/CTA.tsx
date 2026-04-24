import { Phone, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-ink py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-40 -skew-x-12 bg-gradient-gold opacity-15" />
      <div className="pointer-events-none absolute right-20 top-0 h-72 w-24 -skew-x-12 bg-gradient-gold opacity-25" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-32 -skew-x-12 bg-gradient-gold opacity-15" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
            Ready to Order?
          </p>
          <h2 className="mt-4 font-display text-5xl font-extrabold leading-tight md:text-7xl">
            Need <span className="text-gradient-gold">Bulk</span>
            <br className="md:hidden" /> Lubricants?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Get wholesale pricing on premium automotive and industrial
            lubricants. One call — we handle the rest.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+919986594622"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-gold px-10 py-5 text-lg font-semibold text-ink shadow-gold transition-smooth hover:scale-105"
            >
              <Phone className="h-6 w-6" strokeWidth={2.4} />
              Call Now
            </a>
            <a
              href="https://wa.me/919986594622?text=Hi%20MR%20Lubricants%2C%20I%20need%20bulk%20lubricants."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/30 bg-white/5 px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-smooth hover:border-[var(--gold)] hover:bg-[var(--gold)]/10"
            >
              <MessageCircle className="h-6 w-6" strokeWidth={2.4} />
              WhatsApp Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
