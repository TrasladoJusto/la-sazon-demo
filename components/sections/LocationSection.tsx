export function LocationSection() {
  return (
    <section className="py-xxl bg-surface-container-lowest">
      <div className="px-margin-desktop max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xxl items-center">
        <div className="reveal h-[500px] bg-surface-container-high relative overflow-hidden">
          <div className="absolute inset-0 grayscale opacity-40 hover:grayscale-0 transition-all duration-700">
            <img className="w-full h-full object-cover" src="/images/map-location.jpg" alt="Mapa de Madrid" loading="lazy" />
          </div>
          <div className="absolute inset-0 pointer-events-none border border-primary/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="material-symbols-outlined text-primary text-[48px] animate-pulse" aria-hidden="true">location_on</span>
          </div>
        </div>
        <div className="reveal space-y-12">
          <div className="space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Dónde encontrarnos</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Calle de la Memoria, 12. Madrid, España.</p>
          </div>
          <div className="grid grid-cols-2 gap-gutter">
            <div className="space-y-2">
              <p className="font-label-sm text-label-sm text-primary uppercase">Horarios</p>
              <p className="text-on-surface-variant font-body-md">Martes a Sábado<br />13:30 - 15:30<br />20:30 - 23:00</p>
            </div>
            <div className="space-y-2">
              <p className="font-label-sm text-label-sm text-primary uppercase">Contacto</p>
              <p className="text-on-surface-variant font-body-md">+34 912 345 678<br />hola@provenance.es</p>
            </div>
          </div>
          <p className="font-label-sm text-label-sm text-outline uppercase tracking-widest italic border-l-2 border-primary pl-4">Solo con reserva previa para garantizar la experiencia.</p>
        </div>
      </div>
    </section>
  );
}
