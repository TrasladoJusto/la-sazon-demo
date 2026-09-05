"use client";
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
import Link from "next/link";

/* ── Full-Screen Quote Interstitial ── */
function QuoteInterstitial() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/60 to-background-dark/80 z-0" />
      <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
        <span className="material-symbols-outlined text-primary/30 text-[80px] md:text-[120px] block mb-6" aria-hidden="true">format_quote</span>
        <blockquote className="font-headline-lg text-headline-lg md:text-display-sm text-on-surface italic leading-relaxed mb-8">
          No buscamos solo alimentar, buscamos evocar un momento detenido en el tiempo.
        </blockquote>
        <div className="w-16 h-[1px] bg-primary mx-auto mb-6" />
        <cite className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em] not-italic">Adrián Castillo, Chef Ejecutivo</cite>
      </div>
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
      </div>
    </section>
  );
}

/* ── Stats Bar ── */
function StatsBar() {
  const stats = [
    { value: "3", label: "Estrellas Michelin", icon: "star" },
    { value: "15", label: "Años de Experiencia", icon: "schedule" },
    { value: "40+", label: "Productores Locales", icon: "agriculture" },
    { value: "12", label: "Pasos Degustación", icon: "restaurant" },
  ];
  return (
    <section className="py-xl md:py-xxl bg-surface-container border-y border-primary/10">
      <div className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <div key={i} className="text-center group">
              <span className="material-symbols-outlined text-primary/40 text-[28px] mb-3 block group-hover:text-primary transition-colors duration-500" aria-hidden="true">{s.icon}</span>
              <p className="font-display-lg text-display-lg text-primary leading-none mb-2">{s.value}</p>
              <div className="w-8 h-[1px] bg-primary/30 mx-auto mb-3" />
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Wine Pairing CTA ── */
function WinePairingCTA() {
  return (
    <section className="py-xl md:py-xxl bg-surface-container-lowest relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="/images/wine-cellar.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Bodega</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-3 mb-6">Maridaje de Autor</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
            Nuestro sommelier selecciona cuidadosamente cada vino para acompañar las estaciones del menú degustación. Una sinfonia de sabores que eleva cada bocado a una experiencia completa.
          </p>
          <Link href="/menu" className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors uppercase tracking-widest">
            Explorar carta de vinos
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
          </Link>
        </div>
        <div className="relative h-[300px] md:h-[400px] overflow-hidden group">
          <img src="/images/wine-bottle.jpg" alt="Selección de vinos premium" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ── Instagram CTA ── */
function InstagramCTA() {
  return (
    <section className="py-xl bg-surface border-t border-primary/10">
      <div className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto text-center">
        <span className="material-symbols-outlined text-primary text-[32px] mb-4 block" aria-hidden="true">photo_camera</span>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-3">@provenance.madrid</h3>
        <p className="font-body-md text-on-surface-variant mb-6">Síguenos para descubrir nuestra cocina en imágenes</p>
        <a href="https://instagram.com/provenance.madrid" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary border border-primary px-6 py-3 hover:bg-primary/10 transition-all duration-300 uppercase tracking-widest">
          Seguir en Instagram
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">open_in_new</span>
        </a>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-0">
        <Hero />
        <ExperienceSection />
        <MenuCarousel />
        <QuoteInterstitial />
        <StatsBar />
        <ChefSection />
        <WinePairingCTA />
        <GallerySection />
        <EventsSection />
        <TestimonialsSection />
        <ReservationsSection />
        <LocationSection />
        <InstagramCTA />
      </main>
      <Footer />
    </>
  );
}
