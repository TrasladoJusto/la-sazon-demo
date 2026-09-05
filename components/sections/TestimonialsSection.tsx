"use client";
import { useState, useRef } from "react";
import { SectionReveal } from "@/components/animations/ScrollReveal";

const testimonials = [
  { text: "Una ejecución técnica impecable que eleva los ingredientes locales a una categoría artística. Una parada obligatoria para el paladar más exigente.", source: "Guía Michelin", year: "2024" },
  { text: "El equilibrio perfecto entre la herencia culinaria y la innovación vanguardista. Cada plato cuenta una historia de procedencia y pasión.", source: "Gault & Millau", year: "2024" },
  { text: "No es solo una cena, es una coreografía de sabores y hospitalidad que se queda grabada en la memoria mucho después del último bocado.", source: "Cliente distinguido", year: "2024" },
];

export function TestimonialsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const scrollTo = (index: number) => {
    if (sliderRef.current) {
      const width = window.innerWidth < 768 ? sliderRef.current.offsetWidth : sliderRef.current.offsetWidth / 3;
      sliderRef.current.scrollTo({ left: index * width, behavior: "smooth" });
      setCurrent(index);
    }
  };

  return (
    <section className="py-xxl overflow-hidden" id="testimonios">
      <div className="px-margin-desktop max-w-4xl mx-auto text-center reveal">
        <span className="material-symbols-outlined text-primary text-[64px] mb-8" data-icon="format_quote">format_quote</span>
        <div className="relative">
          <div className="flex gap-lg overflow-x-auto hide-scrollbar snap-x snap-mandatory" ref={sliderRef} id="testimonial-slider">
            {testimonials.map((t, index) => (
              <div key={index} className="min-w-full md:min-w-[calc(33.333%-16px)] snap-center testimonial-card bg-surface p-lg md:p-xl flex flex-col justify-between h-full min-h-[400px]">
                <div>
                  <span className="font-display-lg text-primary leading-none block mb-md opacity-60">"</span>
                  <blockquote className="font-headline-md italic text-on-surface-variant leading-relaxed mb-lg">{t.text}</blockquote>
                </div>
                <div className="border-t border-outline/10 pt-md">
                  <p className="font-label-md text-primary uppercase tracking-widest mb-xs">{t.source}</p>
                  <p className="font-label-sm text-on-surface-variant opacity-70">{t.year}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full opacity-0 group-hover:translate-x-2 md:group-hover:-translate-x-12 group-hover:opacity-100 transition-all duration-500 z-10 text-primary p-2" onClick={() => scrollTo(Math.max(0, current - 1))}>
            <span className="material-symbols-outlined text-[40px]">chevron_left</span>
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full opacity-0 group-hover:-translate-x-2 md:group-hover:translate-x-12 group-hover:opacity-100 transition-all duration-500 z-10 text-primary p-2" onClick={() => scrollTo(Math.min(testimonials.length - 1, current + 1))}>
            <span className="material-symbols-outlined text-[40px]">chevron_right</span>
          </button>
        </div>
        {/* Dot Indicators */}
        <div className="flex justify-center gap-4 mt-xl">
          {testimonials.map((_, index) => (
            <button key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current ? "bg-primary w-4" : "bg-primary/20 hover:bg-primary/50"}`} onClick={() => scrollTo(index)} />
          ))}
        </div>
      </div>
    </section>
  );
}
