"use client";
import { SectionReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute inset-0 z-0">
        <img alt="Cinematic dining room at dusk" className="w-full h-full object-cover brightness-[0.4]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs66A-piga6QO_mfgs_uwoy5ayMSQoXMBDIr4wx-vlUnp7_kb--EP_RDhTdbZr-1ODcByBmNVZlpSjmqthkyLooWGkgoC5CoGpAa__5x0ZKMpqzBS0HpwRxKvSrLHFE1AYSbvSGlB54WdSf9gc5Sc3Mtd-GEmGt2_roZvUYCplj4yyU6CvjnbIINsOGW6Y2KOczYHiVuvY7oeuJGDZ1UBIqO9oyrjI7yVMsAUBylAlJI__suNtTSUYY55Dv5sRdrB6Np9mUds4GxXG" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>
      <div className="relative z-10 text-center px-margin-mobile max-w-4xl mx-auto">
        <SectionReveal>
          <h1 id="hero-title" className="font-playfair text-[80px] md:text-[140px] leading-none gold-gradient-text mb-6">PROVENANCE</h1>
          <p className="font-display-lg text-display-lg-mobile text-secondary tracking-[0.3em] uppercase mb-12">Donde el origen define la excelencia</p>
          <div className="flex flex-col md:flex-row gap-md justify-center">
            <Button variant="primary" size="lg" href="#reservas">Reservar mesa</Button>
            <Button variant="outline" size="lg" href="#experiencia">Ver experiencia</Button>
          </div>
        </SectionReveal>
      </div>
      <a className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" href="#experiencia" aria-label="Scroll down">
        <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>expand_more</span>
      </a>
    </section>
  );
}
