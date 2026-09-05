"use client";
import { SectionReveal } from "@/components/animations/ScrollReveal";

export function TestimonialsSection() {
  return (
    <section className="py-xxl overflow-hidden" id="testimonios">
      <div className="px-margin-desktop max-w-4xl mx-auto text-center reveal">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">Lo que dicen de nosotros</h2>
        <div className="w-12 h-px bg-primary/40 mx-auto mt-4" />
        <div className="relative group mt-xl">
          <div className="flex gap-lg overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth py-4" id="testimonial-slider">
            <div className="min-w-full md:min-w-[calc(33.333%-16px)] snap-center testimonial-card bg-surface p-lg flex flex-col justify-between h-full min-h-[400px]">
              <div>
                <span className="font-display-lg text-primary leading-none block mb-md opacity-60">"</span>
                <blockquote className="font-headline-md italic text-on-surface-variant leading-relaxed mb-lg">
                  Una ejecución técnica impecable que eleva los ingredientes locales a una categoría artística. Una parada obligatoria para el paladar más exigente.
                </blockquote>
              </div>
              <div className="border-t border-outline-variant/10 pt-md">
                <p className="font-label-md text-primary uppercase tracking-widest mb-xs">Guía Michelin</p>
                <p className="font-label-sm text-on-surface-variant opacity-70">Crítica Gastronómica 2024</p>
              </div>
            </div>
            <div className="min-w-full md:min-w-[calc(33.333%-16px)] snap-center testimonial-card bg-surface p-lg flex flex-col justify-between h-full min-h-[400px]">
              <div>
                <span className="font-display-lg text-primary leading-none block mb-md opacity-60">"</span>
                <blockquote className="font-headline-md italic text-on-surface-variant leading-relaxed mb-lg">
                  El equilibrio perfecto entre la herencia culinaria y la innovación vanguardista. Cada plato cuenta una historia de procedencia y pasión.
                </blockquote>
              </div>
              <div className="border-t border-outline-variant/10 pt-md">
                <p className="font-label-md text-primary uppercase tracking-widest mb-xs">Gault &amp; Millau</p>
                <p className="font-label-sm text-on-surface-variant opacity-70">Editorial Premium</p>
              </div>
            </div>
            <div className="min-w-full md:min-w-[calc(33.333%-16px)] snap-center testimonial-card bg-surface p-lg flex flex-col justify-between h-full min-h-[400px]">
              <div>
                <span className="font-display-lg text-primary leading-none block mb-md opacity-60">"</span>
                <blockquote className="font-headline-md italic text-on-surface-variant leading-relaxed mb-lg">
                  No es solo una cena, es una coreografía de sabores y hospitalidad que se queda grabada en la memoria mucho después del último bocado.
                </blockquote>
              </div>
              <div className="border-t border-outline-variant/10 pt-md">
                <p className="font-label-md text-primary uppercase tracking-widest mb-xs">Cliente distinguido</p>
                <p className="font-label-sm text-on-surface-variant opacity-70">Visita Privada</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-sm mt-xl">
          <div className="w-12 h-[2px] bg-primary" />
          <div className="w-12 h-[2px] bg-outline-variant hover:bg-primary transition-colors cursor-pointer" />
          <div className="w-12 h-[2px] bg-outline-variant hover:bg-primary transition-colors cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
