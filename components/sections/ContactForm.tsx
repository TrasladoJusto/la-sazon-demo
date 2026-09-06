"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactSchema } from "@/lib/validation";

type ContactInput = z.infer<typeof contactSchema>;

const fieldClass =
  "w-full bg-surface-container-high/50 border border-outline-variant/20 p-4 text-on-surface placeholder:text-on-surface-variant/30 transition-all duration-300 focus:border-primary focus:bg-surface-container-high/80 outline-none";
const labelClass = "font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2 block";
const errorClass = "text-error font-label-sm mt-1";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Error al enviar.");
      }
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass} htmlFor="c-nombre">Nombre</label>
          <input id="c-nombre" type="text" placeholder="Su nombre" className={fieldClass} {...register("name")} />
          {errors.name && <p role="alert" className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="c-email">Email</label>
          <input id="c-email" type="email" placeholder="su@email.com" className={fieldClass} {...register("email")} />
          {errors.email && <p role="alert" className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="c-asunto">Asunto</label>
        <input id="c-asunto" type="text" placeholder="¿En qué podemos ayudarle?" className={fieldClass} {...register("subject")} />
      </div>
      <div>
        <label className={labelClass} htmlFor="c-mensaje">Mensaje</label>
        <textarea id="c-mensaje" rows={5} placeholder="Cuéntenos sobre su consulta..." className={`${fieldClass} resize-none`} {...register("message")} />
        {errors.message && <p role="alert" className={errorClass}>{errors.message.message}</p>}
      </div>
      <div className="flex items-center gap-6">
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={`flex-1 md:flex-none md:px-16 py-5 font-label-md text-label-md uppercase tracking-[0.2em] font-bold transition-all duration-500 flex items-center justify-center gap-3 ${
            status === "success"
              ? "bg-green-600 text-white"
              : status === "loading"
              ? "bg-primary/40 text-on-primary-container"
              : "bg-primary hover:bg-primary-container text-background-dark"
          }`}
        >
          {status === "success" ? (
            "✓ Mensaje Enviado"
          ) : status === "loading" ? (
            <>
              <span className="inline-block w-5 h-5 border-2 border-background-dark/30 border-t-background-dark rounded-full animate-spin" />
              Enviando...
            </>
          ) : status === "error" ? (
            "✗ Error. Inténtalo de nuevo"
          ) : (
            "Enviar mensaje"
          )}
        </button>
        <p className="font-label-sm text-label-sm text-on-surface-variant/60 uppercase tracking-widest hidden md:block">
          Respuesta en menos de 24h
        </p>
      </div>
    </form>
  );
}