import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { EventosEnhanced } from "@/components/sections/EventosEnhanced";

export const metadata = {
  title: "Eventos Privados | PROVENANCE",
  description: "Cenas privadas, eventos corporativos, buyout completo y experiencias a medida.",
};

export default function EventosPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-0">
        <div className="px-margin-desktop max-w-screen-2xl mx-auto pt-8">
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Eventos Privados" }]} />
      </div>
        <EventosEnhanced />
    </main>
      <Footer />
    </>
  );
}
