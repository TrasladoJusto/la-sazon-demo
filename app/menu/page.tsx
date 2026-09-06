import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FullMenu } from "@/components/sections/FullMenu";

export const metadata = {
  title: "Nuestra Carta | AURA",
  description: "Una odisea culinaria donde el origen dicta el destino. Degustación, Carta y Maridaje.",
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-0 grain-overlay">
        <section className="py-xxl px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto" id="carta">
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Nuestra Carta" }]} />
          <div className="text-center mb-16 mt-8">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Experiencia Gastronómica</span>
            <h1 className="font-display-lg text-display-lg text-on-surface mt-4 gold-gradient-text">Nuestra carta</h1>
            <div className="w-20 h-[1px] bg-primary mx-auto mt-6" />
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-8 leading-relaxed">
              Una odisea culinaria donde el origen dicta el destino. Cada plato es un capítulo de nuestra historia, una exploración de los sabores más auténticos del terroir.
           </p>
       </div>
          <FullMenu />
       </section>
     </main>
      <Footer />
    </>
  );
}
