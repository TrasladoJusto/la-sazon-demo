import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, guests, message } = body;

    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: "Campos requeridos: name, email, date, time" },
        { status: 400 }
      );
    }

    // Log reservation (in production, save to database)
    console.log("New reservation:", { name, email, phone, date, time, guests, message });

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
