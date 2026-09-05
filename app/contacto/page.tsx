import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { LocationSection } from "@/components/sections/LocationSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata = {
  title: "Contacto | PROVENANCE",
  description: "Visítanos en Calle de la Memoria, 12. Madrid. Horarios, contacto y ubicación.",
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-0">
        <div className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto pt-8">
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
        </div>
        <section className="py-xl md:py-xxl px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Encuéntranos</span>
            <h1 className="font-display-lg text-display-lg text-on-surface mt-3 gold-gradient-text">Contacto</h1>
          </div>
        </section>
        <LocationSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
