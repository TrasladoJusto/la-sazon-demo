import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ReservationForm } from "@/components/sections/ReservationForm";

export const metadata = {
  title: "Reservar Mesa | AURA",
  description: "Reserve su mesa en AURA. Le responderemos en 15 minutos.",
};

export default function ReservarPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-0 relative overflow-hidden">
        <span className="pv-watermark select-none" aria-hidden="true">PV</span>
        <section className="py-xxl px-margin-desktop relative" id="reservar-form">
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Reservar Mesa" }]} />
          <div className="max-w-2xl mx-auto mt-12 relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative bg-surface-container/90 backdrop-blur-xl border border-primary/20 p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-12">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Experiencia Exclusiva</span>
                <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mt-4 gold-gradient-text">Reservar mesa</h1>
                <div className="custom-divider my-6" />
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Le responderemos en 15 minutos</p>
             </div>
              <ReservationForm />
           </div>
         </div>
       </section>
     </main>
      <Footer />
    </>
  );
}
