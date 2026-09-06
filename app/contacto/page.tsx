import { redirect } from "next/navigation";

export const metadata = {
  title: "Contacto | AURA",
  description: "Visítanos en Calle de la Memoria, 12. Madrid. Escríbenos, llámanos o reserva.",
};

export default function ContactoPage() {
  redirect("/#contacto");
}