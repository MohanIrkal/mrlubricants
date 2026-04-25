import { Reveal } from "./Reveal";
import { Truck, Award, MapPin, Handshake } from "lucide-react";

const stats = [
  { icon: Award, label: "Trusted Brands", value: "6+" },
  { icon: Truck, label: "Bulk Delivery", value: "Daily" },
  { icon: MapPin, label: "Region Served", value: "N. Karnataka" },
  { icon: Handshake, label: "Client Focus", value: "B2B" },
];

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold-deep)]">
                About Us
              </p>
              <h2 className="mt-3 text-4xl font-extrabold text-foreground md:text-5xl">
                Powering Industry Across{" "}
                <span className="text-gradient-gold">North Karnataka</span>
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-gold" />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                MR Lubricants is a leading wholesale supplier of automotive and
                industrial lubricants based in Hubballi. We specialize in bulk
                supply across North Karnataka, serving retailers, and
                industrial clients with trusted brands and reliable service.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our mission is to dominate and expand across the region by
                delivering quality products at competitive prices.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-gold"
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-gold opacity-10 transition-smooth group-hover:opacity-20" />
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-ink shadow-gold">
                      <s.icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <div className="mt-4 font-display text-2xl font-extrabold text-foreground">
                      {s.value}
                    </div>
                    <div className="mt-1 text-sm font-medium text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
