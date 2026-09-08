import { redirect } from "next/navigation";

export const metadata = {
  title: "Reservas | La Sazón",
  description: "Reserve su mesa en La Sazón.",
};

export default function ReservasPage() {
  redirect("/reservar");
}