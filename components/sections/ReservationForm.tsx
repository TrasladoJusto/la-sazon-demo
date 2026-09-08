"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { reservationSchema } from "@/lib/validation";

type ReservationInput = z.infer<typeof reservationSchema>;

const fieldBase =
  "w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:outline-none transition-colors text-on-surface font-body-md py-3 placeholder:text-outline-variant appearance-none rounded-none";
const labelClass = "font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2 block";

export function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<ReservationInput>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      preferences: "",
    },
  });

  const onSubmit = async (data: ReservationInput) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Error en la solicitud.");
      }
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const timeOptions = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"];
  const occasions = ["Cena romántica", "Negocios", "Celebración", "Chef's Table", "Otra"];

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} htmlFor="fecha">Fecha</label>
          <input id="fecha" className={fieldBase} type="date" {...register("date")} />
          {errors.date && <p role="alert" className="text-error font-label-sm mt-1">{errors.date.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="hora">Hora</label>
          <select id="hora" className={`${fieldBase} cursor-pointer`} {...register("time")}>
            <option value="" className="bg-surface text-outline-variant">Seleccionar hora</option>
            {timeOptions.map((t) => <option key={t} value={t} className="bg-surface">{t}</option>)}
          </select>
          {errors.time && <p role="alert" className="text-error font-label-sm mt-1">{errors.time.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="comensales">Comensales</label>
          <select id="comensales" className={`${fieldBase} cursor-pointer`} {...register("guests")}>
            <option value="" className="bg-surface text-outline-variant">Seleccionar</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n} className="bg-surface">{n} {n === 1 ? "persona" : "personas"}</option>
            ))}
            <option value="10" className="bg-surface">Grupo (+10)</option>
          </select>
          {errors.guests && <p role="alert" className="text-error font-label-sm mt-1">{errors.guests.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="ocasion">Ocasión</label>
          <select id="ocasion" className={`${fieldBase} cursor-pointer`} {...register("occasion")}>
            <option value="" className="bg-surface text-outline-variant">Seleccionar</option>
            {occasions.map((o) => <option key={o} value={o} className="bg-surface">{o}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="nombre">Nombre completo</label>
          <input id="nombre" className={fieldBase} type="text" placeholder="Su nombre" {...register("name")} />
          {errors.name && <p role="alert" className="text-error font-label-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input id="email" className={fieldBase} type="email" placeholder="su@email.com" {...register("email")} />
          {errors.email && <p role="alert" className="text-error font-label-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="telefono">Teléfono</label>
          <input id="telefono" className={fieldBase} type="tel" placeholder="+51 900 000 000" {...register("phone")} />
          {errors.phone && <p role="alert" className="text-error font-label-sm mt-1">{errors.phone.message}</p>}
        </div>
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="preferencias">Preferencias o alergias</label>
          <textarea id="preferencias" className={`${fieldBase} resize-none`} placeholder="Alergias, peticiones especiales, ocasión..." rows={3} {...register("preferences")} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 pt-6">
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={`flex-1 font-label-sm text-label-sm uppercase tracking-widest py-5 transition-all duration-500 flex items-center justify-center gap-3 ${
            status === "success"
              ? "bg-green-600 text-white"
              : status === "loading"
              ? "bg-primary/40 text-on-primary-container"
              : "bg-primary text-on-primary hover:bg-primary-container"
          }`}
        >
          {status === "success" ? (
            "✓ RESERVA CONFIRMADA"
          ) : status === "loading" ? (
            <>
              <span className="inline-block w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
              Procesando...
            </>
          ) : status === "error" ? (
            "✗ Error. Inténtalo de nuevo"
          ) : (
            "Confirmar reserva"
          )}
        </button>
        <a
          href="https://wa.me/51900000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 border border-primary text-primary font-label-sm text-label-sm uppercase tracking-widest py-5 hover:bg-primary hover:text-on-primary transition-all"
        >
          <span className="material-symbols-outlined text-[18px]" data-icon="chat">chat</span>
          Reservar vía WhatsApp
        </a>
      </div>
    </form>
  );
}