import { redirect } from "next/navigation";

export const metadata = {
  title: "El Chef | La Sazón",
  description: "Chef Ejemplo - Chef ejecutivo de La Sazón. 3 Estrellas Gastronómicas, 15 años de maestría.",
};

export default function ChefPage() {
  redirect("/#chef");
}