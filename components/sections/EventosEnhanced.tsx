"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const eventTypes = [
  {
    title: "Cenas privadas",
    desc: "Espacios íntimos para encuentros memorables de 12 a 50 comensales. Servicio personalizado y menú a medida.",
    image: "/images/dish-seafood.jpg",
  },
  {
    title: "Eventos corporativos",
    desc: "Presentaciones, lanzamientos y networking empresarial con servicio audiovisual discreto y menús ejecutivos.",
    image: "/images/dish-cocktail.jpg",
  },
  {
    title: "Buyout completo",
    desc: "Exclusividad absoluta del restaurante. El salón entero se transforma para su celebración más íntima o espectacular.",
    image: "/images/event-dinner.jpg",
  },
  {
    title: "Experiencias a medida",
    desc: "Talleres sensoriales, catas a ciegas, maridajes exclusivos y recorridos por nuestra bodega privada.",
    image: "/images/wine-cellar.jpg",
  },
];

function BentoCard({ event, index }: { event: typeof eventTypes[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add("active"), index * 100); } }),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <article
      ref={ref}
      className="card-reveal group relative overflow-hidden border border-outline/10 hover:border-primary/40 transition-all duration-500 bg-surface-container-low"
    >
      <div className="relative h-[280px] overflow-hidden">
        <Image
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          src={event.image}
          alt={event.title}
          className="object-cover transition-all duration-700 brightness-110 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
    </div>
      <div className="p-8 space-y-4">
        <h3 className="font-headline-md text-headline-md text-primary">{event.title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">{event.desc}</p>
        <Button variant="outline" size="sm" href="/contacto">Solicitar propuesta</Button>
    </div>
  </article>
  );
}

export function EventosEnhanced() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden" id="eventos">
        <Image
          fill
          priority
          sizes="100vw"
          src="/images/interior.jpg"
          alt="Eventos privados"
          className="object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 text-center px-margin-mobile">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Exclusividad & Gastronomía</span>
          <h1 className="font-display-lg text-display-lg text-on-surface mt-6 gold-gradient-text">Eventos privados</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-8 leading-relaxed">
            Transformamos sus momentos más significativos en experiencias gastronómicas únicas. Cada evento es una obra de arte efímera, diseñada exclusivamente para usted.
        </p>
      </div>
    </section>

      {/* Bento Grid 2x2 */}
      <section className="py-xxl px-margin-desktop max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventTypes.map((event, i) => (
            <BentoCard key={event.title} event={event} index={i} />
          ))}
      </div>
    </section>

      {/* Quote Divider */}
      <section className="py-xxl bg-surface-container-highest/30">
        <div className="max-w-4xl mx-auto px-margin-mobile text-center reveal-on-scroll">
          <span className="material-symbols-outlined text-primary text-[80px] mb-6 opacity-40" data-icon="format_quote">format_quote</span>
          <blockquote className="font-headline-md text-headline-md text-on-surface italic font-serif leading-relaxed">
            "La elegancia es la única belleza que nunca se marchita, y en Aura, cada evento es una obra de arte efímera."
        </blockquote>
          <cite className="block mt-6 font-label-sm text-label-sm text-primary uppercase tracking-[0.3em] not-italic">— Dirección Creativa</cite>
      </div>
    </section>

      {/* CTA Section */}
      <section className="py-xxl px-margin-desktop bg-background-dark text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Hablemos de su próximo evento</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-8 leading-relaxed">
            Cada detalle importa. Le acompañamos en el diseño de una experiencia completamente personalizada.
        </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a className="font-body-lg text-body-lg text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors" href="mailto:eventos@la-sazon-demo.com">
              eventos@la-sazon-demo.com
          </a>
            <span className="hidden md:inline text-outline-variant">|</span>
            <a className="font-body-lg text-body-lg text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors" href="tel:+51900000000">
              +51 900 000 000
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
