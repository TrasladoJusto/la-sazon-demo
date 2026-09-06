import { redirect } from "next/navigation";

export const metadata = {
  title: "El Chef | AURA",
  description: "Adrián Castillo - Chef ejecutivo de AURA. 3 Estrellas Michelin, 15 años de maestría.",
};

export default function ChefPage() {
  redirect("/#chef");
}