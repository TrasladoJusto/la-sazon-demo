"use client";
import Link from "next/link";
import { SectionReveal } from "@/components/animations/ScrollReveal";

export function ReservationsSection() {
  return (
    <section className="relative py-xxl overflow-hidden" id="reservas">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/interior.jpg"
          alt="Luxury Provenance restaurant interior at twilight"
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/60 to-background-dark/90" />
      </div>

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
        <div className="bg-surface-container/80 backdrop-blur-sm border border-primary/20 p-6 md:p-xxl reveal shadow-2xl">
          <div className="text-center mb-8 md:mb-12">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Experiencia Exclusiva</span>
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-widest mt-3">Reservar mesa</h2>
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-4 uppercase">Disponibilidad exclusiva para cenas y eventos</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="space-y-2">
              <label className="font-label-sm text-label-sm text-primary uppercase">Fecha</label>
              <input className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:ring-0" type="date" data-icon="calendar_today" data-alt="reservation date" />
            </div>
            <div className="space-y-2">
              <label className="font-label-sm text-label-sm text-primary uppercase">Hora</label>
              <input className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:ring-0" type="time" data-icon="access_time" data-alt="reservation time" />
            </div>
            <div className="space-y-2">
              <label className="font-label-sm text-label-sm text-primary uppercase">Comensales</label>
              <select className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:ring-0" data-icon="group" data-alt="number of guests">
                <option className="bg-surface">2 Personas</option>
                <option className="bg-surface">4 Personas</option>
                <option className="bg-surface">6 Personas</option>
                <option className="bg-surface">Grupo (+8)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-label-sm text-label-sm text-primary uppercase">Ocasión</label>
              <select className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:ring-0" data-icon="event" data-alt="occasion">
                <option className="bg-surface">Cena romántica</option>
                <option className="bg-surface">Negocios</option>
                <option className="bg-surface">Celebración</option>
                <option className="bg-surface">Chef's Table</option>
              </select>
            </div>
            <div className="col-span-full space-y-2">
              <label className="font-label-sm text-label-sm text-primary uppercase">Preferencias</label>
              <textarea className="w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:ring-0 placeholder:text-outline-variant" placeholder="Alergias o solicitudes especiales..." rows={3} data-icon="document" data-alt="special preferences" />
            </div>
            <button className="col-span-full bg-primary-container text-on-primary-container py-4 md:py-5 font-label-sm text-label-sm uppercase tracking-[0.2em] hover:bg-primary transition-all duration-500 mt-4 md:mt-8" data-icon="check" data-alt="confirm reservation" type="submit">
              Confirmar reserva
            </button>
          </form>

          <div className="mt-6 md:mt-8 text-center">
            <a className="flex items-center justify-center gap-2 text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" data-icon="chat" data-alt="WhatsApp">
              <span className="material-symbols-outlined text-[18px]" data-icon="chat" data-alt="WhatsApp chat">chat</span>
              Consulta rápida vía WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
