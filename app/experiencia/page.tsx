import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ExperienciaEnhanced } from "@/components/sections/ExperienciaEnhanced";

export const metadata = {
  title: "Experiencia | PROVENANCE",
  description: "Una experiencia gastronómica completa: curaduría, archivo, técnica vanguardista y atmósfera.",
};

export default function ExperienciaPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-0">
        <div className="px-margin-desktop max-w-screen-2xl mx-auto pt-8">
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Experiencia" }]} />
       </div>
        <ExperienciaEnhanced />
     </main>
      <Footer />
    </>
  );
}
