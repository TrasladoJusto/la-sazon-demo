import { redirect } from "next/navigation";

export const metadata = {
  title: "Eventos Privados | AURA",
  description: "Cenas privadas, eventos corporativos, buyout completo y experiencia a medida en AURA.",
};

export default function EventosPage() {
  redirect("/#eventos");
}