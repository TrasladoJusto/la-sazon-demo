import { redirect } from "next/navigation";

export const metadata = {
  title: "Nuestra Carta | AURA",
  description: "Una odisea culinaria donde el origen dicta el destino. Degustación, Carta y Maridaje.",
};

export default function MenuPage() {
  redirect("/#menu");
}