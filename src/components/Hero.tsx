import { Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/mr-lubricants-logo.png";
import hero from "@/assets/hero-gears.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Industrial gears with lubricant"
          className="h-full w-full object-cover opacity-35"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.12 0.01 250 / 0.7) 0%, oklch(0.12 0.01 250 / 0.85) 100%)",
          }}
        />
      </div>

      {/* Decorative gold chevrons */}
      <div className="pointer-events-none absolute -right-20 top-20 hidden md:block">
        <div className="h-72 w-32 -skew-x-12 bg-gradient-gold opacity-20" />
        <div className="absolute right-12 top-10 h-72 w-20 -skew-x-12 bg-gradient-gold opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center md:py-40">
        <div className="animate-fade-in mb-8 flex justify-center">
          <div className="rounded-2xl bg-gradient-gold p-1 shadow-gold animate-float">
            <img
              src={logo}
              alt="MR Lubricants logo"
              className="h-24 w-24 rounded-xl object-cover md:h-28 md:w-28"
              width={112}
              height={112}
            />
          </div>
        </div>

        <h1 className="animate-fade-in-up delay-100 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl">
          MR <span className="text-gradient-gold">LUBRICANTS</span>
        </h1>

        <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
          Wholesale Traders in Automotive & Industrial Lubricants
        </p>

        <div className="animate-fade-in-up delay-300 mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-gold" />

        <p className="animate-fade-in-up delay-300 mx-auto mt-8 max-w-xl text-base text-white/60">
          Trusted bulk supply across North Karnataka — partnering with garages,
          retailers, and industries for over a decade.
        </p>

        <div className="animate-fade-in-up delay-500 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+919986594622"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-ink shadow-gold transition-smooth hover:scale-105"
          >
            <Phone className="h-5 w-5" strokeWidth={2.4} />
            Call Now
          </a>
          <a
            href="https://wa.me/919986594622"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-smooth hover:border-[var(--gold)] hover:bg-[var(--gold)]/10"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
            WhatsApp Now
          </a>
        </div>

        <div className="animate-fade-in delay-500 mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/50">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--gold)]" /> Wholesale Pricing
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--gold)]" /> Bulk Delivery
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--gold)]" /> All Major Brands
          </span>
        </div>
      </div>
    </section>
  );
}
