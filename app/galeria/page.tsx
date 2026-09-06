import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { GaleriaEnhanced } from "@/components/sections/GaleriaEnhanced";

export const metadata = {
  title: "Galería | AURA",
  description: "Un recorrido visual por nuestra herencia culinaria. Sala, platos, detalles, bodega y ambiente.",
};

export default function GaleriaPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-0">
        <div className="px-margin-desktop max-w-screen-2xl mx-auto pt-8">
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Galería" }]} />
      </div>
        <GaleriaEnhanced />
    </main>
      <Footer />
    </>
  );
}
