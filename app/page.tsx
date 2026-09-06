import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ChefSection } from "@/components/sections/ChefSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ExperienceSection />
        <GallerySection />
        <ChefSection />
        <EventsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}