import Image from "next/image";
import { ContactForm } from "@/components/sections/ContactForm";

export function LocationSection() {
  return (
    <section className="py-xxl bg-surface-container-lowest" id="contacto">
      <div className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="font-label-sm text-label-sm text-primary uppercase tracking-[0.4em] mb-4">Visítanos</p>
          <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface">Encuéntranos</h2>
          <div className="w-20 h-[1px] bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Izquierda: mapa + datos */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="relative h-[300px] md:h-[420px] bg-surface-container-high overflow-hidden group">
              <div className="absolute inset-0 grayscale opacity-40 hover:grayscale-0 group-hover:opacity-60 transition-all duration-700">
                <Image
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  src="/images/map-location.jpg"
                  alt="Mapa de Lima"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 pointer-events-none border border-primary/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="material-symbols-outlined text-primary text-[48px] animate-pulse block" aria-hidden="true">location_on</span>
                <p className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest mt-2">Calle Ejemplo, 123</p>
              </div>
              <a
                href="https://maps.google.com/?q=Calle+Ejemplo+123,+Lima,+Perú"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-primary text-background-dark px-5 py-3 font-label-sm text-label-sm uppercase tracking-widest font-bold hover:bg-primary-container transition-all inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">map</span>
                Cómo llegar
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
              <div className="border border-outline-variant/10 p-6 space-y-2">
                <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Horarios</p>
                <div className="space-y-1">
                  <p className="text-on-surface font-body-md">Martes a Sábado</p>
                  <p className="text-on-surface-variant font-body-md">13:30 - 15:30<br />20:30 - 23:00</p>
                  <p className="text-on-surface-variant font-body-md">Domingo y Lunes: cerrado</p>
                </div>
              </div>
              <div className="border border-outline-variant/10 p-6 space-y-2 min-w-0">
                <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Contacto</p>
                <div className="space-y-2 min-w-0">
                  <a href="tel:+51900000000" className="flex items-center gap-2 text-on-surface-variant font-body-md hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0" aria-hidden="true">call</span>
                    +51 900 000 000
                  </a>
                  <a href="mailto:reservas@la-sazon-demo.com" className="flex items-start gap-2 text-on-surface-variant font-body-md hover:text-primary transition-colors min-w-0 break-all">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0" aria-hidden="true">mail</span>
                    reservas@la-sazon-demo.com
                  </a>
                  <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-on-surface-variant font-body-md hover:text-primary transition-colors min-w-0">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0" aria-hidden="true">public</span>
                    @example
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Derecha: formulario de contacto */}
          <div className="lg:col-span-2 relative bg-surface-container/60 backdrop-blur border border-outline-variant/10 p-8 md:p-10">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Escríbanos</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mt-3 mb-8">Formulario de contacto</h3>
            <ContactForm />
            <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider italic mt-8">Acceso con reserva previa. Experiencia estimada: 2 horas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}