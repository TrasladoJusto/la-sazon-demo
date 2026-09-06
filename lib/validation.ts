import { z } from "zod";

/**
 * Esquemas de validación compartidos entre las API routes y los formularios del cliente.
 */

const phoneRegex = /^[+0-9 ()-]{7,20}$/;

export const reservationSchema = z.object({
  name: z.string().min(3, "Nombre mínimo de 3 caracteres.").max(60, "Nombre demasiado largo."),
  email: z.string().email("Correo electrónico no válido."),
  phone: z.string().regex(phoneRegex, "Teléfono no válido.").optional().or(z.literal("")),
  date: z.string().min(1, "Selecciona una fecha."),
  time: z.string().min(1, "Selecciona una hora.").optional().or(z.literal("")),
  guests: z
    .enum(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], { message: "Selecciona el número de comensales." })
    .or(z.string().min(1, "Selecciona el número de comensales.")),
  occasion: z.string().optional().or(z.literal("")),
  preferences: z.string().optional().or(z.literal("")),
});

export type ReservationInput = z.infer<typeof reservationSchema>;

export const contactSchema = z.object({
  name: z.string().min(3, "Nombre mínimo de 3 caracteres.").max(60, "Nombre demasiado largo."),
  email: z.string().email("Correo electrónico no válido."),
  subject: z.string().optional().or(z.literal("")),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres.").max(1000, "Mensaje demasiado largo."),
});

export type ContactInput = z.infer<typeof contactSchema>;