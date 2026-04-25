import { Reveal } from "./Reveal";

const brands = [
  { name: "HP Lubricants", sub: "Hindustan Petroleum " },
  { name: "Servo", sub: "IndianOil" },
  { name: "Castrol", sub: "Premium Engine Oils" },
  { name: "Motul", sub: "Performance" },
  { name: "Balmerol", sub: "Industrial" },
  { name: "Simpsons", sub: "Trusted Quality" },
];

export function Brands() {
  return (
    <section id="brands" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold-deep)]">
              Authorized Dealers
            </p>
            <h2 className="mt-3 text-4xl font-extrabold text-foreground md:text-5xl">
              Brands We Serve
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-gold" />
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((b, i) => (
            <Reveal key={b.name} delay={i * 80}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-smooth hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-gold">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-gold opacity-0 transition-smooth group-hover:opacity-100" />
                <div className="font-display text-lg font-extrabold tracking-tight text-foreground md:text-xl">
                  {b.name}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {b.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
