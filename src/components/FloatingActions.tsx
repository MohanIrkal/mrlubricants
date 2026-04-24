import { Phone, MessageCircle } from "lucide-react";

const PHONE = "919986594622";
const WHATSAPP_MSG = encodeURIComponent(
  "Hello MR Lubricants, I'd like to enquire about bulk lubricants.",
);

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-white shadow-elegant animate-pulse-gold transition-smooth hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
      </a>
      <a
        href={`tel:+${PHONE}`}
        aria-label="Call MR Lubricants"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-ink shadow-gold transition-smooth hover:scale-110 md:hidden"
      >
        <Phone className="h-6 w-6" strokeWidth={2.4} />
      </a>
    </div>
  );
}
