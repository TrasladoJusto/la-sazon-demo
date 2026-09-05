"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";

function Stat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="card-reveal text-center px-8">
      <p className="font-display-lg text-display-lg text-primary leading-none">{value}</p>
      <div className="w-px h-16 bg-primary/40 mx-auto my-4" />
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">{label}</p>
   </div>
  );
}

export function ChefEnhanced() {
  return (
    <>
      {/* Hero Portrait */}
      <section className="py-xxl px-margin-desktop max-w-screen-2xl mx-auto" id="chef">
        <div className="text-center mb-16">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">El Visionario</span>
          <h1 className="font-display-lg text-display-lg text-on-surface mt-6 gold-gradient-text">Adrián Castillo</h1>
          <div className="w-20 h-[1px] bg-primary mx-auto mt-6" />
       </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-xxl items-center">
          {/* Portrait with offset border */}
          <div className="reveal-on-scroll md:col-span-3 relative">
            <div className="relative h-[700px] overflow-hidden group">
              <div className="absolute inset-0 border-2 border-primary/20 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVQRwHATfgRwy6EJS4vRL2yOt-FGzLUU9sHZeLXrTLFUUQw9RKWdUQWXwc02u9upQtTmNXbReNekZ1ibomhqnqZL-rEM8JCX9mZ2UBV9BBZzcw5Xq4k0j9weo8QfBeTHpAk9nY02lIrAxjCkr-EyOVyDUIfH368kBDvktgdp3oqRMw1jyRcl7Iu6jJPctPCHaQB4ysWcLws_nuPdQt8dxNbXV3LYg3yGE6T4HnLtg80FnBSaWQAUfEBGuA9296SmbM6mhFZdoHY5LR"
                alt="Chef Adrián Castillo"
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-1000"
                data-icon="person"
                data-alt="Chef Adrián Castillo portrait"
              />
           </div>
         </div>

          {/* Bio */}
          <div className="reveal-on-scroll md:col-span-2 space-y-8">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">El Chef</h2>
            <div className="w-20 h-[1px] bg-primary" />
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Formado en las cocinas más prestigiosas del mundo, <strong className="text-primary">Adrián Castillo</strong> regresa a sus raíces para liderar <em className="text-primary not-italic">PROVENANCE</em>. Su cocina es un ejercicio de contención y elegancia, donde el exceso se sacrifica en favor de la pureza del sabor.
           </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Su filosofía se basa en el respeto absoluto al producto de temporada, elevándolo mediante técnicas clásicas y una visión contemporánea que honra el terroir.
           </p>
            <blockquote className="relative pl-6 border-l-2 border-primary">
              <p className="font-headline-md italic text-primary font-serif leading-relaxed">
                "La cocina es memoria hecha sabor. No buscamos solo alimentar, buscamos evocar un momento detenido en el tiempo."
             </p>
              <cite className="block mt-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest not-italic">— Adrián Castillo</cite>
           </blockquote>
            <Button variant="primary" size="lg" href="/menu">Ver su trayectoria</Button>
         </div>
       </div>
     </section>

      {/* Stats Section */}
      <section className="py-xxl bg-surface-container-lowest">
        <div className="px-margin-desktop max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <Stat value="3" label="Estrellas Michelin" />
            <Stat value="15" label="Años de Maestría" />
            <Stat value="40+" label="Micro-productores" />
         </div>
       </div>
     </section>

      {/* Signature Tasting Menu */}
      <section className="py-xxl px-margin-desktop max-w-screen-2xl mx-auto">
        <div className="max-w-4xl mx-auto bg-surface-container border border-primary/20 p-12 text-center relative overflow-hidden">
          <div className="pv-watermark" aria-hidden="true">12</div>
          <div className="relative z-10">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Menú Degustación Signature</span>
            <h3 className="font-display-lg-mobile md:font-headline-lg text-display-lg-mobile md:text-headline-lg text-on-surface mt-4">Travesía Provenance</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-8 leading-relaxed">
              Doce pasos que recorren nuestra filosofía, nuestros productores y la evolución de nuestra cocina a lo largo del año. Una experiencia inmersiva de aproximadamente tres horas.
           </p>
            <div className="flex items-center justify-center gap-8">
              <div>
                <p className="font-label-sm text-label-sm text-primary/60 uppercase tracking-widest mb-2">12 pasos</p>
                <p className="font-mono text-headline-md text-primary">€185</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-2">por persona</p>
             </div>
              <div className="w-px h-16 bg-primary/30" />
              <div>
                <p className="font-label-sm text-label-sm text-primary/60 uppercase tracking-widest mb-2">Maridaje opcional</p>
                <p className="font-mono text-headline-md text-primary">+€85</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-2">4 vinos</p>
             </div>
           </div>
            <Button variant="primary" size="lg" href="/reservar" className="mt-8">Reservar Travesía</Button>
         </div>
       </div>
     </section>
    </>
  );
}
