"use client";
import { useState } from "react";

export function ReservationForm() {
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 4000);
  };

  const fieldClass = "w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:outline-none transition-colors text-on-surface font-body-md py-3 placeholder:text-outline-variant appearance-none";
  const labelClass = "font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2 block";

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} htmlFor="fecha">Fecha</label>
          <input id="fecha" className={fieldClass} type="date" required />
       </div>
        <div>
          <label className={labelClass} htmlFor="hora">Hora</label>
          <select id="hora" className={fieldClass} required defaultValue="">
            <option value="" disabled className="bg-surface text-outline-variant">Seleccionar hora</option>
            <option className="bg-surface">19:00</option>
            <option className="bg-surface">19:30</option>
            <option className="bg-surface">20:00</option>
            <option className="bg-surface">20:30</option>
            <option className="bg-surface">21:00</option>
            <option className="bg-surface">21:30</option>
            <option className="bg-surface">22:00</option>
            <option className="bg-surface">22:30</option>
         </select>
       </div>
        <div>
          <label className={labelClass} htmlFor="comensales">Comensales</label>
          <select id="comensales" className={fieldClass} required defaultValue="">
            <option value="" disabled className="bg-surface text-outline-variant">Seleccionar</option>
            {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} className="bg-surface">{n} {n === 1 ? "persona" : "personas"}</option>)}
            <option className="bg-surface">Grupo (+10</option>
         </select>
       </div>
        <div>
          <label className={labelClass} htmlFor="ocasion">Ocasión</label>
          <select id="ocasion" className={fieldClass} required defaultValue="">
            <option value="" disabled className="bg-surface text-outline-variant">Seleccionar</option>
            <option className="bg-surface">Cena romántica</option>
            <option className="bg-surface">Negocios</option>
            <option className="bg-surface">Celebración</option>
            <option className="bg-surface">Chef's Table</option>
            <option className="bg-surface">Otra</option>
         </select>
       </div>
        <div>
          <label className={labelClass} htmlFor="nombre">Nombre completo</label>
          <input id="nombre" className={fieldClass} type="text" placeholder="Su nombre" required />
       </div>
        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input id="email" className={fieldClass} type="email" placeholder="su@email.com" required />
       </div>
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="telefono">Teléfono</label>
          <input id="telefono" className={fieldClass} type="tel" placeholder="+34 600 000 000" required />
       </div>
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="preferencias">Preferencias o alergias</label>
          <textarea id="preferencias" className={`${fieldClass} resize-none`} placeholder="Alergias, peticiones especiales, ocasión..." rows={3} />
       </div>
     </div>
      <div className="flex flex-col md:flex-row gap-4 pt-6">
        <button
          type="submit"
          disabled={submitting || confirmed}
          className={`flex-1 font-label-sm text-label-sm uppercase tracking-widest py-5 transition-all duration-500 ${
            confirmed
              ? "bg-green-600 text-white"
              : submitting
              ? "bg-primary/40 text-on-primary-container"
              : "bg-primary text-on-primary hover:bg-primary-container"
          }`}
        >
          {confirmed ? "✓ RESERVA CONFIRMADA" : submitting ? "Procesando..." : "Confirmar reserva"}
       </button>
        <a
          href="https://wa.me/34912345678"
          className="flex-1 inline-flex items-center justify-center gap-2 border border-primary text-primary font-label-sm text-label-sm uppercase tracking-widest py-5 hover:bg-primary hover:text-on-primary transition-all"
        >
          <span className="material-symbols-outlined text-[18px]" data-icon="chat">chat</span>
          Reservar vía WhatsApp
       </a>
     </div>
   </form>
  );
}
