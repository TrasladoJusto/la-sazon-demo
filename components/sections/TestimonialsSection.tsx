"use client";
import { useState, useRef, useEffect } from "react";

const testimonials = [
  { text: "Una ejecución técnica impecable que eleva los ingredientes locales a una categoría artística. Una parada obligatoria para el paladar más exigente.", source: "Guía Michelin", year: "2024", stars: 5 },
  { text: "El equilibrio perfecto entre la herencia culinaria y la innovación vanguardista. Cada plato cuenta una historia de procedencia y pasión.", source: "Gault & Millau", year: "2024", stars: 5 },
  { text: "No es solo una cena, es una coreografía de sabores y hospitalidad que se queda grabada en la memoria mucho después del último bocado.", source: "Cliente distinguido", year: "2024", stars: 5 },
  { text: "Una de las experiencias gastronómicas más memorables que hemos vivido. El maridaje fue una revelación.", source: "The Fork", year: "2024", stars: 5 },
];

export function TestimonialsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const scrollTo = (index: number) => {
    if (sliderRef.current) {
      const card = sliderRef.current.children[index] as HTMLElement;
      if (card) {
        sliderRef.current.scrollTo({ left: card.offsetLeft - 32, behavior: "smooth" });
        setCurrent(index);
      }
    }
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % testimonials.length;
        scrollTo(next);
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-xl md:py-xxl bg-surface-container-lowest overflow-hidden" id="testimonios">
      <div className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto mb-8 md:mb-12">
        <div className="text-center">
          <span className="material-symbols-outlined text-primary/30 text-[48px] md:text-[64px] mb-4 block" aria-hidden="true">format_quote</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Lo que dicen de nosotros</h2>
        </div>
      </div>

      <div
        className="relative group"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-margin-mobile md:px-margin-desktop pb-4"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex-none w-[85vw] md:w-[600px] lg:w-[700px] snap-center bg-surface border border-primary/10 p-6 md:p-10 flex flex-col justify-between hover:border-primary/25 transition-all duration-500"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">star</span>
                  ))}
                </div>
                <blockquote className="font-headline-md italic text-on-surface leading-relaxed mb-8">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
              </div>
              <div className="border-t border-outline/10 pt-6">
                <p className="font-label-md text-primary uppercase tracking-widest mb-1">{t.source}</p>
                <p className="font-label-sm text-on-surface-variant/60">{t.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-surface-container/80 backdrop-blur-sm border border-primary/20 text-primary p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10"
          onClick={() => scrollTo(Math.max(0, current - 1))}
          disabled={current === 0}
          aria-label="Testimonio anterior"
        >
          <span className="material-symbols-outlined text-[24px]" aria-hidden="true">chevron_left</span>
        </button>
        <button
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-surface-container/80 backdrop-blur-sm border border-primary/20 text-primary p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10"
          onClick={() => scrollTo(Math.min(testimonials.length - 1, current + 1))}
          disabled={current === testimonials.length - 1}
          aria-label="Siguiente testimonio"
        >
          <span className="material-symbols-outlined text-[24px]" aria-hidden="true">chevron_right</span>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${index === current ? "bg-primary w-8" : "bg-primary/20 w-2 hover:bg-primary/40"}`}
            onClick={() => { scrollTo(index); setIsAutoPlaying(false); }}
            aria-label={`Testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
