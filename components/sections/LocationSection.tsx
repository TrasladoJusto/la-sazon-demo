"use client";
import { SectionReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function LocationSection() {
  return (
    <section className="py-xxl bg-surface-container-lowest" id="ubicacion">
      <div className="px-margin-desktop max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xxl items-start">
        <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] overflow-hidden group reveal">
          <div className="absolute inset-0 border border-primary/20 transition-colors duration-500 group-hover:border-primary/40 z-10 pointer-events-none"></div>
          <img className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJElJMDS1jt9mbdlZHUJh1ZbOHFTIARAqsRNvSsY6nAg6RlwbgeAO3SSBEsM5QUz68I9LnSznvpmR0oTqA2y7uHgCGgHMRBacw8vIA_CFi3WlpKZb8RpQJj5Aut--VprlP8VjGVOGIhY28A5m8wgavgcR37z5uAZCxmF78LvTjN1Tuzp18tNKUAGHjIWZPSy9M6T4i0fFsWLhD_fhBy0iICKtc2rnocK_hVfXOy9jPJvUVPg6icPRRJaoxJzKf9DVGiQ-zYAUkAtoU" alt="Madrid map" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
            <span className="material-symbols-outlined text-primary text-[48px] drop-shadow-[0_0_10px_rgba(200,169,94,0.5)]" style={{ fontVariationSettings: { 'FILL': 1 } }}>location_on</span>
            <div className="bg-surface-container-highest/90 backdrop-blur-md px-md py-xs mt-sm border border-primary/30">
              <p className="font-label-sm text-label-sm text-primary uppercase tracking-tighter">Provenance Madrid</p>
            </div>
          </div>
        </div>
        <div className="reveal space-y-xl">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Dónde encontrarnos</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Calle de la Memoria, 12. Madrid, España.</p>
          </div>
          <div className="space-y-md">
            <h3 className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary/70">Horario de Apertura</h3>
            <table className="w-full text-left font-body-md text-body-md border-collapse">
              <tbody className="divide-y divide-outline-variant/5">
                <tr><td className="py-md text-on-surface-variant">Martes - Jueves</td><td className="py-md text-on-surface">13:30 - 15:30 / 20:30 - 23:00</td></tr>
                <tr><td className="py-md text-on-surface-variant">Viernes - Sábado</td><td className="py-md text-on-surface">13:30 - 15:30 / 20:00 - 00:00</td></tr>
                <tr><td className="py-md text-on-surface-variant italic">Domingo - Lunes</td><td className="py-md text-primary/60 italic">Cerrado</td></tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-lg">
            <div className="flex flex-col md:flex-row gap-lg">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-primary/70 uppercase mb-xs">Teléfono</span>
                <a className="font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors" href="tel:+34912345678">+34 912 345 678</a>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-primary/70 uppercase mb-xs">Email</span>
                <a className="font-body-lg text-body-lg text-on-surface hover:text-primary transition-colors border-b border-primary/20 pb-1" href="mailto:reservas@provenance.com">reservas@provenance.com</a>
              </div>
            </div>
            <div className="pt-md">
              <div className="gold-divider h-[1px] w-full mb-md" />
              <p className="font-label-md text-label-md text-primary/40 uppercase tracking-widest text-center md:text-left italic">Solo con reserva previa para garantizar la experiencia.</p>
              <Button variant="primary" size="lg" href="#reservas">Solicitar Mesa</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
