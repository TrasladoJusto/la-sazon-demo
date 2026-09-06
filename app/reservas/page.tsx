import { redirect } from "next/navigation";

export const metadata = {
  title: "Reservas | AURA",
};

export default function ReservasPage() {
  redirect("/reservar");
}
