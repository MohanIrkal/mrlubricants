import logo from "@/assets/mr-lubricants-logo.png";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-white" style={{ backgroundColor: "oklch(0.1 0.01 250)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="MR Lubricants" className="h-12 w-12 rounded-md object-cover" />
              <div className="font-display text-xl font-extrabold tracking-tight">
                MR <span className="text-gradient-gold">LUBRICANTS</span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Wholesale traders in automotive and industrial lubricants — proudly
              serving North Karnataka.
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--gold)]" />
                <span>Chitta Complex, Shop No. 15, Near Indi Pump Circle, Hubballi – 580024</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-[var(--gold)]" />
                <a href="tel:+919986594622" className="hover:text-[var(--gold)]">+91 99865 94622</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-[var(--gold)]" />
                <a href="tel:+919886156577" className="hover:text-[var(--gold)]">+91 98861 56577</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-[var(--gold)]" />
                <a href="mailto:mrlhubli@gmail.com" className="hover:text-[var(--gold)]">mrlhubli@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
              Coverage
            </p>
            <p className="mt-4 font-display text-2xl font-extrabold leading-tight">
              Serving <span className="text-gradient-gold">North Karnataka</span>
            </p>
            <p className="mt-3 text-sm text-white/60">
              Hubballi · Dharwad · Belagavi · Gadag · Haveri · Bagalkot · Vijayapura
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} MR Lubricants. All rights reserved.</p>
          <p>Built for performance · Crafted in Hubballi</p>
        </div>
      </div>
    </footer>
  );
}
