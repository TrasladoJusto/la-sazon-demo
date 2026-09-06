import { NextResponse } from "next/server";
import { z } from "zod";

const reservationSchema = z.object({
  name: z.string().min(3, "Nombre mínimo de 3 caracteres.").max(60),
  email: z.string().email("Correo electrónico no válido."),
  date: z.string().min(1, "Selecciona una fecha."),
  guests: z.enum(["2", "4", "6", "10"], { message: "Selecciona el número de comensales." }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = reservationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validación fallida.", issues: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, date, guests } = parsed.data;

    // Log reservation (in production, save to database)
    console.log("New reservation:", { name, email, date, guests });

    // Simulate sending email via Resend
    // await resend.emails.send({...});

    return NextResponse.json(
      { success: true, message: "Reserva confirmada. Te contactaremos para confirmar los detalles." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Reservation error:", error);
    return NextResponse.json({ error: "Error al procesar la reserva" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ reservations: [] });
}