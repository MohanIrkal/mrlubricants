import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Founders } from "@/components/Founders";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MR Lubricants — Wholesale Lubricants in Hubballi, North Karnataka" },
      {
        name: "description",
        content:
          "MR Lubricants — wholesale traders in automotive & industrial lubricants. HP, Servo, Castrol, Motul, Balmerol & Simpsons. Bulk supply across North Karnataka.",
      },
      { property: "og:title", content: "MR Lubricants — Wholesale Lubricants in Hubballi" },
      {
        property: "og:description",
        content:
          "Bulk supply of automotive & industrial lubricants across North Karnataka. Trusted brands. Wholesale pricing.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Brands />
        <Products />
        <About />
        <Founders />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
