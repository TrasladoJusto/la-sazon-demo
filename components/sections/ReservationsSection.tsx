"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";

const reservationSchema = z.object({
  name: z.string().min(3, "Nombre mínimo de 3 caracteres.").max(60),
  email: z.string().email("Correo electrónico no válido."),
  date: z.string().min(1, "Selecciona una fecha."),
  guests: z.enum(["2", "4", "6", "10"], { message: "Selecciona el número de comensales." }),
});

type ReservationForm = z.infer<typeof reservationSchema>;

const inputBase =
  "w-full bg-surface-container-high/50 border border-outline-variant/20 p-4 text-on-surface placeholder:text-on-surface-variant/30 transition-all duration-300 focus:border-primary focus:bg-surface-container-high/80 outline-none";

export function ReservationsSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<ReservationForm>({
    resolver: zodResolver(reservationSchema),
    defaultValues: { name: "", email: "", date: "", guests: "2" },
  });

  const onSubmit = async (data: ReservationForm) => {
    setStatus("loading");
    // Simulate API call — swap for POST /api/reservations in production
    await new Promise((resolve) => setTimeout(resolve, 1500));
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error en la solicitud.");
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="reservas" className="relative min-h-screen flex items-center justify-center py-xxl overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          fill
          sizes="100vw"
          src="/images/restaurant-interior.jpg"
          alt=""
          aria-hidden="true"
          className="object-cover brightness-[0.2] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-transparent to-background-dark/80" />
      </div>

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop w-full max-w-4xl mx-auto">
        <div className="reveal glass-morphism backdrop-blur-2xl p-8 md:p-16 border border-white/5 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-headline-lg text-display-lg-mobile md:text-display-lg text-on-surface">Reservar una Mesa</h2>
            <p className="text-secondary font-body-lg max-w-xl mx-auto italic">
              Asegure su lugar en nuestra mesa. Recomendamos realizar su reserva con al menos dos semanas de antelación.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6" noValidate>
            <div className="space-y-2">
              <label htmlFor="name" className="font-label-sm text-label-sm text-primary uppercase tracking-widest ml-1">Nombre Completo</label>
              <input id="name" type="text" placeholder="Ej. Julian Casablancas" className={inputBase} {...register("name")} />
              {errors.name && <p role="alert" className="text-error font-label-sm ml-1">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="font-label-sm text-label-sm text-primary uppercase tracking-widest ml-1">Correo Electrónico</label>
              <input id="email" type="email" placeholder="julian@example.com" className={inputBase} {...register("email")} />
              {errors.email && <p role="alert" className="text-error font-label-sm ml-1">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="date" className="font-label-sm text-label-sm text-primary uppercase tracking-widest ml-1">Fecha</label>
              <input id="date" type="date" className={inputBase} {...register("date")} />
              {errors.date && <p role="alert" className="text-error font-label-sm ml-1">{errors.date.message}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="guests" className="font-label-sm text-label-sm text-primary uppercase tracking-widest ml-1">Comensales</label>
              <Controller
                control={control}
                name="guests"
                render={({ field }) => (
                  <select id="guests" className={`${inputBase} appearance-none cursor-pointer`} {...field}>
                    <option value="2">2 Personas</option>
                    <option value="4">4 Personas</option>
                    <option value="6">6 Personas</option>
                    <option value="10">Grupo (+10)</option>
                  </select>
                )}
              />
              {errors.guests && <p role="alert" className="text-error font-label-sm ml-1">{errors.guests.message}</p>}
            </div>
            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary hover:bg-primary-container disabled:opacity-60 disabled:cursor-not-allowed text-background-dark font-label-md py-4 transition-all uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-3"
              >
                {status === "loading" ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-background-dark/30 border-t-background-dark rounded-full animate-spin" />
                    Procesando...
                  </>
                ) : status === "success" ? (
                  "✓ Solicitud Enviada"
                ) : status === "error" ? (
                  "✗ Error. Inténtalo de nuevo"
                ) : (
                  "Confirmar Disponibilidad"
                )}
              </button>
            </div>
          </form>

          <p className="text-center text-on-surface-variant font-label-sm opacity-60">
            Para eventos privados de más de 12 personas, por favor contáctenos directamente.
          </p>
        </div>
      </div>
    </section>
  );
}