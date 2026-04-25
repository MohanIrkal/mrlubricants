import { Reveal } from "./Reveal";
import engineOil from "@/assets/product-engine-oil.jpg";
import gearOil from "@/assets/product-gear-oil.jpg";
import grease from "@/assets/product-grease.jpg";
import hydraulic from "@/assets/product-hydraulic.jpg";

const groups = [
  {
    brand: "HP Lubricants",
    accent: "Hindustan Petroleum ",
    image: engineOil,
    items: [
      "HP Racer Splendid 20W40 / 15W30 (1L / 900ml)",
      "HP Enklo 68 (26L)",
      "HP Gear Oil EP 90 (1L / 5L / 20L / 26L)",
      "Laal Ghoda",
      "Milcy Turbo",
      "UTTO (Wet Brake Oil)",
      "FuturX Racer/Neosynth ",
      "EP 2 Grease",
    ],
  },
  {
    brand: "Servo",
    accent: "Indian Oil",
    image: hydraulic,
    items: ["Servo 20W40 Engine Oil 1L/900mL"],
  },
  {
    brand: "Castrol",
    accent: "Premium",
    image: gearOil,
    items: [
      "Castrol Activ 20W40 (1L / 900ml / 820ml)",
      "Castrol Activ Scooter + Gear Oil Combo",
    ],
  },
  {
    brand: "Balmerol",
    accent: "Industrial",
    image: grease,
    items: ["Industrial Greases — full range"],
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-gradient-ink py-20 text-white md:py-28"
    >
      {/* Decorative gold stripes */}
      <div className="pointer-events-none absolute -left-16 top-0 hidden md:block">
        <div className="h-80 w-24 -skew-x-12 bg-gradient-gold opacity-10" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              Our Range
            </p>
            <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
              Top <span className="text-gradient-gold">Products</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-gold" />
            <p className="mx-auto mt-5 max-w-2xl text-white/70">
              Comprehensive selection of automotive and industrial lubricants
              available in retail and bulk packaging.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.brand} delay={i * 100}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-smooth hover:border-[var(--gold)]/60 hover:shadow-gold">
                <div className="relative h-56 overflow-hidden md:h-64">
                  <img
                    src={g.image}
                    alt={g.brand}
                    className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 30%, oklch(0.12 0.01 250 / 0.95) 100%)",
                    }}
                  />
                  <div className="absolute bottom-4 left-6 right-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                      {g.accent}
                    </p>
                    <h3 className="mt-1 font-display text-3xl font-extrabold text-white">
                      {g.brand}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-2.5 p-6">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/85"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--gold)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/919986594622?text=Hi%20MR%20Lubricants%2C%20I%27d%20like%20a%20product%20catalogue%20%26%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-ink shadow-gold transition-smooth hover:scale-105"
            >
              Request Full Catalogue
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
