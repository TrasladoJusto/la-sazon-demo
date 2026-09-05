"use client";
import { SectionReveal } from "@/components/animations/ScrollReveal";

export function ReservationsSection() {
  return (
    <section className="py-xxl px-margin-desktop relative" id="reservas">
      <div className="max-w-4xl mx-auto bg-surface-container border border-primary/20 p-xxl relative z-10 reveal shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-widest">Reservar mesa</h2>
          <p className="font-label-sm text-label-sm text-on-surface-variant mt-4 uppercase">Disponibilidad exclusiva para cenas y eventos</p>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="space-y-2">
            <label className="font-label-sm text-label-sm text-primary uppercase">Fecha</label>
            <input className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:ring-0" type="date" />
          </div>
          <div className="space-y-2">
            <label className="font-label-sm text-label-sm text-primary uppercase">Hora</label>
            <input className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:ring-0" type="time" />
          </div>
          <div className="space-y-2">
            <label className="font-label-sm text-label-sm text-primary uppercase">Comensales</label>
            <select className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:ring-0">
              <option className="bg-surface">2 Personas</option>
              <option className="bg-surface">4 Personas</option>
              <option className="bg-surface">6 Personas</option>
              <option className="bg-surface">Grupo (+8)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="font-label-sm text-label-sm text-primary uppercase">Ocasión</label>
            <select className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:ring-0">
              <option className="bg-surface">Cena romántica</option>
              <option className="bg-surface">Negocios</option>
              <option className="bg-surface">Celebración</option>
              <option className="bg-surface">Chef's Table</option>
            </select>
          </div>
          <div className="col-span-full space-y-2">
            <label className="font-label-sm text-label-sm text-primary uppercase">Preferencias</label>
            <textarea className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:ring-0 placeholder:text-outline-variant" placeholder="Alergias o solicitudes especiales..." rows={3} />
          </div>
          <button className="col-span-full bg-primary-container text-on-primary-container py-5 font-label-sm text-label-sm uppercase tracking-[0.2em] hover:bg-primary transition-all duration-500 mt-8" type="submit">
            Confirmar reserva
          </button>
        </form>
        <div className="mt-8 text-center">
          <a className="flex items-center justify-center gap-2 text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined text-[18px]" data-icon="chat">chat</span>
            Consulta rápida vía WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
