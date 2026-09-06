import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ChefEnhanced } from "@/components/sections/ChefEnhanced";

export const metadata = {
  title: "El Chef | AURA",
  description: "Adrián Castillo - Chef ejecutivo de AURA. 3 Estrellas Michelin, 15 años de maestría.",
};

export default function ChefPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-0">
        <div className="px-margin-desktop max-w-screen-2xl mx-auto pt-8">
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "El Chef" }]} />
       </div>
        <ChefEnhanced />
     </main>
      <Footer />
    </>
  );
}
