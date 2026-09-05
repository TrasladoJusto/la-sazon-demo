"use client";
import Link from "next/link";

export function LocationSection() {
  return (
    <section className="py-xl md:py-xxl bg-surface-container-lowest" id="ubicacion">
      <div className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Map */}
        <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] overflow-hidden group">
          <div className="absolute inset-0 border border-primary/15 transition-colors duration-500 group-hover:border-primary/30 z-10 pointer-events-none" />
          <img className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 transition-all duration-700" src="/images/map-location.jpg" alt="Mapa de Madrid" loading="lazy" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
            <span className="material-symbols-outlined text-primary text-[40px] drop-shadow-[0_0_10px_rgba(200,169,94,0.5)] animate-pulse" aria-hidden="true">location_on</span>
            <div className="bg-surface-container/90 backdrop-blur-sm px-4 py-2 mt-2 border border-primary/30">
              <p className="font-label-sm text-label-sm text-primary uppercase tracking-tighter">Provenance Madrid</p>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">Dónde encontrarnos</h2>
            <p className="font-body-lg text-on-surface-variant">Calle de la Memoria, 12. Madrid, España.</p>
          </div>

          <div>
            <h3 className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary/70 mb-4">Horario de Apertura</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-outline/10 pb-3">
                <span className="font-body-md text-on-surface-variant">Martes - Jueves</span>
                <span className="font-body-md text-on-surface">13:30 - 15:30 / 20:30 - 23:00</span>
              </div>
              <div className="flex justify-between border-b border-outline/10 pb-3">
                <span className="font-body-md text-on-surface-variant">Viernes - Sábado</span>
                <span className="font-body-md text-on-surface">13:30 - 15:30 / 20:00 - 00:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body-md text-on-surface-variant italic">Domingo - Lunes</span>
                <span className="font-body-md text-primary/60 italic">Cerrado</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div>
                <span className="font-label-sm text-label-sm text-primary/70 uppercase mb-1 block">Teléfono</span>
                <a className="font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors" href="tel:+34912345678">+34 912 345 678</a>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-primary/70 uppercase mb-1 block">Email</span>
                <a className="font-body-lg text-on-surface hover:text-primary transition-colors border-b border-primary/20 pb-1" href="mailto:reservas@provenance.com">reservas@provenance.com</a>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <div className="bg-gradient-to-r from-transparent via-primary/20 to-transparent h-[1px] mb-4" />
            <p className="font-label-sm text-primary/40 uppercase tracking-widest text-center md:text-left italic mb-4">Solo con reserva previa para garantizar la experiencia.</p>
            <Link href="/reservar" className="inline-flex items-center justify-center bg-primary-container text-on-primary-container px-6 py-3 font-label-sm text-label-sm uppercase tracking-[0.15em] hover:bg-primary transition-all duration-300 shadow-[0_4px_14px_0_rgba(200,169,94,0.3)] hover:shadow-[0_6px_20px_0_rgba(200,169,94,0.4)]">
              Solicitar Mesa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
