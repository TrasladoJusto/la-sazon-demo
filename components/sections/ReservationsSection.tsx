"use client";
import { useState } from "react";
import { SectionReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Select } from "@/components/ui/Input";

export function ReservationsSection() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="py-xxl px-margin-desktop relative" id="reservas">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-widest mb-4">¡Gracias!</h2>
          <p className="font-body-lg text-on-surface-variant">Hemos recibido tu solicitud de reserva. Te contactaremos en menos de 15 minutos.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-xxl px-margin-desktop relative" id="reservas">
      <div className="max-w-4xl mx-auto bg-surface-container border border-primary/20 p-xxl relative z-10 reveal shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase tracking-widest">Reservar mesa</h2>
          <p className="font-label-sm text-label-sm text-on-surface-variant mt-4 uppercase">Disponibilidad exclusiva para cenas y eventos</p>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-gutter" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <Input label="Fecha" type="date" />
          <Select label="Hora" options={[{ value: "19:00", label: "19:00" }, { value: "20:00", label: "20:00" }, { value: "21:00", label: "21:00" }, { value: "22:00", label: "22:00" }]} placeholder="Selecciona hora" />
          <Input label="Comensales" type="number" placeholder="Número de personas" min={1} max={10} />
          <Select label="Ocasión" options={[{ value: "romantic", label: "Cena romántica" }, { value: "business", label: "Negocios" }, { value: "celebration", label: "Celebración" }, { value: "chef", label: "Chef's Table" }]} placeholder="Selecciona ocasión" />
          <Input label="Nombre completo" placeholder="Ej. Javier Gómez" />
          <Input label="Email" type="email" placeholder="javier@ejemplo.com" />
          <Input label="Teléfono" type="tel" placeholder="+34 600 000 000" />
          <div></div>
          <Textarea label="Preferencias o Alergias" placeholder="Indique cualquier detalle..." rows={3} />
          <div></div>
          <Button variant="primary" size="lg" type="submit" className="col-span-full">Confirmar reserva</Button>
        </form>
        <div className="mt-8 text-center">
          <a className="flex items-center justify-center gap-2 text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>chat</span>
            Consulta rápida vía WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
