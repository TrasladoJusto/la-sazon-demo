import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { LocationSection } from "@/components/sections/LocationSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const metadata = {
  title: "Contacto | La Sazón",
  description: "Visítanos en Calle Ejemplo, 123, Lima. Escríbenos, llámanos o reserva tu experiencia.",
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          title="Contacto"
          subtitle="Estamos en el corazón de Lima. Escríbanos, llámenos o solicite una propuesta para su evento privado."
          image="/images/restaurant-interior.jpg"
        />
        <LocationSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}