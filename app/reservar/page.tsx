import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { ReservationsSection } from "@/components/sections/ReservationsSection";

export const metadata = {
  title: "Reservar Mesa | AURA",
  description: "Reserve su mesa en AURA. Le responderemos en 15 minutos.",
};

export default function ReservarPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          title="Reservas"
          subtitle="Asegure su lugar en nuestra mesa. Recomendamos realizar su reserva con al menos dos semanas de antelación."
          image="/images/gallery-table.jpg"
        />
        <ReservationsSection />
      </main>
      <Footer />
    </>
  );
}