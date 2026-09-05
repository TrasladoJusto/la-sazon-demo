"use client";
import Link from "next/link";

export function ReservationsSection() {
  return (
    <section className="relative py-xl md:py-xxl overflow-hidden bg-surface" id="reservas">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/images/restaurant-interior.jpg" alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/95 via-surface/85 to-surface/95" />
      </div>

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Experiencia Exclusiva</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-3 mb-4">Reservar mesa</h2>
          <div className="w-16 h-[1px] bg-primary mx-auto mb-6" />
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Disponibilidad exclusiva para cenas y eventos. Cada reserva es una experiencia personalizada adaptada a tus preferencias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Option Cards */}
          <div className="bg-surface-container border border-primary/10 p-6 text-center hover:border-primary/30 transition-all duration-300 group">
            <span className="material-symbols-outlined text-primary text-[32px] mb-4 block group-hover:scale-110 transition-transform" aria-hidden="true">restaurant</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Cena Privada</h3>
            <p className="font-body-sm text-on-surface-variant mb-4">Hasta 12 comensales en nuestra sala íntima</p>
            <Link href="/reservar" className="font-label-sm text-label-sm text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors uppercase tracking-widest">
              Reservar →
            </Link>
          </div>

          <div className="bg-surface-container border border-primary/10 p-6 text-center hover:border-primary/30 transition-all duration-300 group">
            <span className="material-symbols-outlined text-primary text-[32px] mb-4 block group-hover:scale-110 transition-transform" aria-hidden="true">local_fire_department</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Chef&apos;s Table</h3>
            <p className="font-body-sm text-on-surface-variant mb-4">Experiencia exclusiva junto a la cocina</p>
            <Link href="/reservar" className="font-label-sm text-label-sm text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors uppercase tracking-widest">
              Reservar →
            </Link>
          </div>

          <div className="bg-surface-container border border-primary/10 p-6 text-center hover:border-primary/30 transition-all duration-300 group">
            <span className="material-symbols-outlined text-primary text-[32px] mb-4 block group-hover:scale-110 transition-transform" aria-hidden="true">groups</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Evento Corporativo</h3>
            <p className="font-body-sm text-on-surface-variant mb-4">Espacios versátiles para eventos empresariales</p>
            <Link href="/eventos" className="font-label-sm text-label-sm text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors uppercase tracking-widest">
              Ver eventos →
            </Link>
          </div>
        </div>

        {/* Quick Reservation Form */}
        <div className="bg-surface-container/50 backdrop-blur-sm border border-primary/15 p-6 md:p-10 max-w-4xl mx-auto">
          <h3 className="font-headline-md text-headline-md text-on-surface text-center mb-8">Reserva rápida</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="font-label-sm text-label-sm text-primary uppercase block mb-2">Fecha</label>
              <input type="date" className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:outline-none" />
            </div>
            <div>
              <label className="font-label-sm text-label-sm text-primary uppercase block mb-2">Hora</label>
              <select className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:outline-none">
                <option className="bg-surface">20:00</option>
                <option className="bg-surface">20:30</option>
                <option className="bg-surface">21:00</option>
                <option className="bg-surface">21:30</option>
                <option className="bg-surface">22:00</option>
              </select>
            </div>
            <div>
              <label className="font-label-sm text-label-sm text-primary uppercase block mb-2">Personas</label>
              <select className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:outline-none">
                <option className="bg-surface">2</option>
                <option className="bg-surface">3</option>
                <option className="bg-surface">4</option>
                <option className="bg-surface">5</option>
                <option className="bg-surface">6+</option>
              </select>
            </div>
            <div>
              <label className="font-label-sm text-label-sm text-primary uppercase block mb-2">Ocasión</label>
              <select className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:outline-none">
                <option className="bg-surface">Cena romántica</option>
                <option className="bg-surface">Negocios</option>
                <option className="bg-surface">Celebración</option>
                <option className="bg-surface">Otra</option>
              </select>
            </div>
          </div>
          <div className="text-center">
            <Link href="/reservar" className="inline-flex items-center justify-center bg-primary-container text-on-primary-container px-8 py-4 font-label-sm text-label-sm uppercase tracking-[0.15em] hover:bg-primary transition-all duration-300 shadow-[0_4px_14px_0_rgba(200,169,94,0.3)] hover:shadow-[0_6px_20px_0_rgba(200,169,94,0.4)]">
              Verificar disponibilidad
            </Link>
          </div>
          <div className="mt-6 text-center">
            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-label-sm text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">chat</span>
              Consulta rápida vía WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
