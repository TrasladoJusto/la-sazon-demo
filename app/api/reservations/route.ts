import { NextResponse } from "next/server";
import { reservationSchema, type ReservationInput } from "@/lib/validation";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = reservationSchema.safeParse(body);

    if (!result.success) {
      const issues = result.error.issues.map((issue) => ({
        path: issue.path[0] ?? "form",
        message: issue.message,
      }));
      return NextResponse.json({ error: "Datos inválidos.", issues }, { status: 400 });
    }

    const reservation: ReservationInput = result.data;
    console.log("Nueva reserva:", {
      cliente: reservation.name,
      email: reservation.email,
      telefono: reservation.phone || "—",
      fecha: reservation.date,
      hora: reservation.time || "—",
      comensales: reservation.guests,
      ocasion: reservation.occasion || "—",
      preferencias: reservation.preferences || "—",
    });

    // Simulación de envío (Resend/Email API en producción)
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