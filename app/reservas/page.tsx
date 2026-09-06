import { redirect } from "next/navigation";

export const metadata = {
  title: "Reservas | AURA",
  description: "Reserve su mesa en AURA.",
};

export default function ReservasPage() {
  redirect("/#reservas");
}