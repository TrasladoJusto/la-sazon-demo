import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { LocationSection } from "@/components/sections/LocationSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata = {
  title: "Contacto | AURA",
  description: "Visítanos en Calle de la Memoria, 12. Madrid. Escríbenos, llámanos o reserva.",
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
            <div className="w-20 h-[1px] bg-primary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Datos de contacto */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="font-headline-md text-headline-md text-on-surface">Escríbanos</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  ¿Preguntas sobre nuestra carta, un evento privado o una ocasión especial? Estaremos encantados de atenderle.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                  href="mailto:reservas@aura-restaurant.com"
                  className="group border border-outline-variant/10 hover:border-primary/40 transition-all duration-300 p-6 space-y-3 block"
                >
                  <span className="material-symbols-outlined text-primary text-[32px]" data-icon="mail">mail</span>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Email</p>
                  <p className="font-body-md text-on-surface group-hover:text-primary transition-colors">reservas@aura-restaurant.com</p>
                </a>
                <a
                  href="tel:+34912345678"
                  className="group border border-outline-variant/10 hover:border-primary/40 transition-all duration-300 p-6 space-y-3 block"
                >
                  <span className="material-symbols-outlined text-primary text-[32px]" data-icon="call">call</span>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Teléfono</p>
                  <p className="font-body-md text-on-surface group-hover:text-primary transition-colors">+34 912 345 678</p>
                </a>
              </div>
              <div className="border border-outline-variant/10 p-6 space-y-3">
                <span className="material-symbols-outlined text-primary text-[32px]" data-icon="schedule">schedule</span>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Horarios</p>
                <div>
                  <p className="font-body-md text-on-surface">Martes a Sábado</p>
                  <p className="font-body-md text-on-surface-variant">13:30 - 15:30 · 20:30 - 23:00</p>
                </div>
                <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider italic">Domingo y Lunes: cerrado</p>
              </div>
            </div>

            {/* Formulario */}
            <div className="relative bg-surface-container/60 backdrop-blur border border-outline-variant/10 p-8 md:p-12">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-8">Formulario de contacto</h2>
              <ContactForm />
            </div>
          </div>
        </section>

        <LocationSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}