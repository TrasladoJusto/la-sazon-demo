import { redirect } from "next/navigation";

export const metadata = {
  title: "Galería | La Sazón",
  description: "Un recorrido visual por nuestra herencia culinaria. Sala, platos, detalles, bodega y ambiente.",
};

export default function GaleriaPage() {
  redirect("/#galeria");
}