import { redirect } from "next/navigation";

export const metadata = {
  title: "Eventos Privados | La Sazón",
  description: "Cenas privadas, eventos corporativos, buyout completo y experiencia a medida en La Sazón.",
};

export default function EventosPage() {
  redirect("/#eventos");
}