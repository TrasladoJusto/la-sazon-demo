import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const issues = result.error.issues.map((issue) => ({
        path: issue.path[0] ?? "form",
        message: issue.message,
      }));
      return NextResponse.json({ error: "Datos inválidos.", issues }, { status: 400 });
    }

    const { name, email, subject, message } = result.data;
    console.log("Nuevo mensaje de contacto:", { name, email, subject: subject || "—", message });

    // Simular envío de email vía Resend
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