import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos requeridos: name, email, message" },
        { status: 400 }
      );
    }

    console.log("New contact message:", { name, email, subject, message });

    // Simulate sending email via Resend
    // await resend.emails.send({...});

    return NextResponse.json(
      { success: true, message: "Mensaje enviado. Te responderemos a la brevedad." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }
}
