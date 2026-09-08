"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const features = [
  {
    num: "01",
    title: "Curaduría",
    subtitle: "Ingredientes de Estación",
    desc: "Cada producto es seleccionado personally por nuestro chef de entre más de 40 micro-productores locales, garantizando trazabilidad absoluta y frescura inigualable.",
    icon: "spa",
  },
  {
    num: "02",
    title: "El Archivo",
    subtitle: "Crónicas de una Evolución Culinaria",
    desc: "Una bodega privada con más de 4.000 etiquetas de los cinco continentes, custodiada por nuestro sommelier y diseñada para armonizar cada viaje gastronómico.",
    icon: "wine_bar",
  },
  {
    num: "03",
    title: "El Arte",
    subtitle: "Técnica Vanguardista",
    desc: "Donde la técnica clásica se encuentra con la innovación. Cada plato es una composición que respeta la esencia del ingrediente y lo eleva mediante métodos contemporáneos.",
    icon: "auto_awesome",
  },
  {
    num: "04",
    title: "Atmósfera",
    subtitle: "Una Experiencia Sensorial Completa",
    desc: "Iluminación cuidadosamente diseñada, música curada por prestigiosos sound designers, y un servicio que anticipa cada deseo antes de ser expresado.",
    icon: "light_mode",
  },
];

export function ExperienciaEnhanced() {
  return (
    <>
      {/* Hero Split-Screen */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 min-h-[90vh]" id="experiencia">
        <div className="reveal-on-scroll relative h-[400px] md:h-auto overflow-hidden">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            src="/images/chef-action.jpg"
            alt="Cocina cinemática en acción"
            className="object-cover transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-background-dark/20" />
       </div>
        <div className="reveal-on-scroll flex items-center px-margin-mobile md:px-xxl py-xxl bg-surface">
          <div className="space-y-8 max-w-xl">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Experiencia Gastronómica</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Nuestra <em className="text-primary not-italic">provenancia</em>
           </h2>
            <div className="w-20 h-[1px] bg-primary" />
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              En <strong className="text-primary">La Sazón</strong>, cada ingrediente cuenta una historia de origen, territorio y respeto. Entendemos el terroir no solo como un origen geográfico, sino como una filosofía que guía cada decisión en nuestra cocina.
           </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Nuestra cocina es un ejercicio de contención y elegancia, donde el exceso se sacrifica en favor de la pureza del sabor y la trazabilidad impecable del producto.
           </p>
            <Button variant="primary" size="lg" href="/menu">DESCUBRIR EL MENÚ</Button>
         </div>
       </div>
     </section>

      {/* Numbered Bento Grid */}
      <section className="py-xxl px-margin-desktop max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Los cuatro pilares</span>
          <h3 className="font-headline-lg text-headline-lg text-on-surface mt-4">Una filosofía completa</h3>
          <div className="w-20 h-[1px] bg-primary mx-auto mt-6" />
       </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={f.num} feature={f} index={i} />
          ))}
       </div>
     </section>

      {/* Decorative giant P */}
      <section className="relative py-xxl overflow-hidden">
        <div className="pv-watermark text-center" aria-hidden="true">P</div>
     </section>
    </>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
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
      className="card-reveal relative p-8 md:p-12 border border-primary/10 hover:border-primary/40 transition-all duration-500 bg-surface-container-low group"
    >
      <div className="flex items-start gap-6">
        <span className="font-display-lg text-[64px] md:text-[80px] text-primary/40 leading-none group-hover:text-primary transition-colors">
          {feature.num}
       </span>
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[32px]" data-icon={feature.icon}>{feature.icon}</span>
            <h4 className="font-headline-md text-headline-md text-on-surface">{feature.title}</h4>
         </div>
          <p className="font-label-sm text-label-sm text-primary/70 uppercase tracking-widest">{feature.subtitle}</p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{feature.desc}</p>
       </div>
     </div>
      <div className="absolute bottom-0 left-0 h-[2px] bg-primary w-8 group-hover:w-12 transition-all duration-500" />
   </article>
  );
}
