import { redirect } from "next/navigation";

export const metadata = {
  title: "Experiencia | AURA",
  description: "Una experiencia gastronómica completa: producto de origen, técnica clásica y bodega de 4.000 etiquetas.",
};

export default function ExperienciaPage() {
  redirect("/#experiencia");
}