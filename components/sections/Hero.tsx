"use client";
import { SectionReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden gold-mesh-bg" aria-labelledby="hero-title">
      <div className="relative z-10 w-full max-w-[1280px] px-margin-mobile md:px-margin-desktop text-center">
        {/* Tagline */}
        <div className="mb-sm opacity-0 translate-y-4 animate-[fadeInUp_1s_ease-out_forwards]">
          <span className="font-label-md text-label-md uppercase tracking-[0.4em] text-primary/80">
            Donde el origen define la excelencia
          </span>
        </div>
        {/* Main Heading */}
        <h1 id="hero-title" className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-xl gold-gradient-text tracking-tighter opacity-0 translate-y-4 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
          PROVENANCE
        </h1>
        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-lg justify-center items-center mt-xl opacity-0 translate-y-4 animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
          <Button variant="primary" size="lg" href="#reservas">Reservar mesa</Button>
          <Button variant="outline" size="lg" href="#experiencia">Ver experiencia</Button>
        </div>
      </div>
      {/* Animated Scroll Chevron */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-chevron opacity-60">
        <span className="material-symbols-outlined text-primary text-[32px]">keyboard_double_arrow_down</span>
      </div>
      {/* Atmospheric Elements */}
      <div className="absolute -left-20 top-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -right-20 bottom-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
