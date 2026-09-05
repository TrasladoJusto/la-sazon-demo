import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { MenuCarousel } from "@/components/sections/MenuCarousel";
import { ChefSection } from "@/components/sections/ChefSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { EventsSection } from "@/components/sections/EventsSection";
import { ReservationsSection } from "@/components/sections/ReservationsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-0">
        <Hero />
        <ExperienceSection />
        <MenuCarousel />
        <ChefSection />
        <GallerySection />
        <EventsSection />
        <ReservationsSection />
        <LocationSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
