import { redirect } from "next/navigation";

export const metadata = {
  title: "Reservas | PROVENANCE",
};

export default function ReservasPage() {
  redirect("/reservar");
}
