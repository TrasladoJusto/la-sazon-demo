"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Una celebración del origen convertido en arte comestible. Cada ingrediente es elegido con una meticulosidad casi religiosa, y cada plato se sirve como una obra que trasciende el tiempo.",
    author: "Crítica Gastronómica 2024",
  },
  {
    quote:
      "La mejor mesa de Lima. El maridaje molecular es impresionante y el servicio anticipa cada deseo antes de que lo expreses.",
    author: "Revista de Cocina 2025",
  },
  {
    quote:
      "Una experiencia sensorial completa: luz, música, aroma y sabor en perfecta armonía. Volveré una y otra vez.",
    author: "Guía Local 2026",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[active];

  return (
    <section className="py-xxl overflow-hidden">
      <div className="px-margin-desktop max-w-4xl mx-auto text-center">
        <span className="material-symbols-outlined text-primary text-[64px] mb-8 block" aria-hidden="true">format_quote</span>
        <div className="relative min-h-[180px] md:min-h-[140px]">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.author}
              className={`absolute inset-0 transition-all duration-700 ${
                i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
              aria-hidden={i !== active}
            >
              <p className="font-display-lg-mobile text-display-lg-mobile text-on-surface leading-snug italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em] mt-10">&mdash; {t.author}</p>
            </blockquote>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-16" role="tablist" aria-label="Testimonios">
          {testimonials.map((t, i) => (
            <button
              key={t.author}
              role="tab"
              aria-selected={active === i}
              aria-label={`Testimonio ${i + 1}`}
              onClick={() => setActive(i)}
              className={`w-12 h-[2px] transition-all duration-300 ${
                active === i ? "bg-primary scale-y-150" : "bg-outline-variant hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}