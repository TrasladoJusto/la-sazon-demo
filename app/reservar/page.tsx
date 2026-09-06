import { redirect } from "next/navigation";

export const metadata = {
  title: "Reservar Mesa | AURA",
  description: "Reserve su mesa en AURA. Le responderemos en 15 minutos.",
};

export default function ReservarPage() {
  redirect("/#reservas");
}