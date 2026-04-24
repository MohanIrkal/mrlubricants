import { useEffect, useState } from "react";
import logo from "@/assets/mr-lubricants-logo.png";

const links = [
  { href: "#brands", label: "Brands" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#founders", label: "Founders" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-smooth ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "oklch(0.12 0.01 250 / 0.9)" } : {}}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="MR Lubricants" className="h-10 w-10 rounded-md object-cover" />
          <span className="font-display text-lg font-extrabold tracking-tight text-white">
            MR <span className="text-gradient-gold">LUBRICANTS</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-smooth hover:text-[var(--gold)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+919986594622"
          className="hidden rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-ink shadow-gold transition-smooth hover:scale-105 md:inline-flex"
        >
          Call Now
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 backdrop-blur-md md:hidden" style={{ backgroundColor: "oklch(0.12 0.01 250 / 0.95)" }}>
          <nav className="flex flex-col px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-white/90 transition-smooth hover:text-[var(--gold)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+919986594622"
              className="mt-3 rounded-full bg-gradient-gold px-5 py-3 text-center text-sm font-semibold text-ink"
            >
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
