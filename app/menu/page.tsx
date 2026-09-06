import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { MenuCarousel } from "@/components/sections/MenuCarousel";
import { FullMenu } from "@/components/sections/FullMenu";

export const metadata = {
  title: "Nuestra Carta | AURA",
  description: "Una odisea culinaria donde el origen dicta el destino. Carta, Menú Degustación y Maridaje de autor.",
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          title="Nuestra Carta"
          subtitle="Una selección que evoluciona con la estación y con el origen. Técnica clásica, producto de proximidad y maridaje de autor."
          image="/images/interior.jpg"
        />
        <MenuCarousel />
        <FullMenu />
        <section className="text-center py-xxl px-margin-mobile bg-surface-container-low">
          <a
            className="inline-block bg-primary px-16 py-5 text-background-dark font-label-md text-label-md uppercase tracking-[0.2em] font-bold hover:bg-primary-container transition-all duration-500"
            href="/reservar"
          >
            Reservar tu experiencia
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}