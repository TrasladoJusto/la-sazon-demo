"use client";
import Link from "next/link";
import { SectionReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function ChefSection() {
  return (
    <section className="py-xxl px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto" id="chef">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl md:gap-xxl items-center">
        <div className="reveal order-2 md:order-1 space-y-6 md:space-y-8 px-0 md:px-lg">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">El Visionario</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Adrián Castillo</h2>
          <div className="w-20 h-[1px] bg-primary"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Formado en las cocinas más prestigiosas del mundo, Adrián Castillo regresa a sus raíces para liderar PROVENANCE. Su cocina es un ejercicio de contención y elegancia, donde el exceso se sacrifica en favor de la pureza del sabor.
         </p>
          <p className="font-headline-md italic text-primary font-serif border-l-2 border-primary pl-6">
            "La cocina es memoria hecha sabor. No buscamos solo alimentar, buscamos evocar un momento detenido en el tiempo."
         </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button variant="primary" size="md" href="/chef">CONOCER SU TRAYECTORIA</Button>
            <Link href="/menu" className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors uppercase tracking-widest self-center">
              <span className="material-symbols-outlined text-[18px]" data-icon="restaurant_menu">restaurant_menu</span>
              Ver su menú
           </Link>
         </div>
       </div>
        <div className="reveal order-1 md:order-2 relative h-[400px] md:h-[700px] overflow-hidden group">
          <div className="absolute -inset-4 border border-primary/20 translate-x-2 translate-y-2 z-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
          <img
            className="relative w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 z-10"
            src="/images/chef-portrait.jpg"
            alt="Chef Adrián Castillo"
            data-icon="person"
            data-alt="Chef Adrián Castillo portrait"
            loading="lazy"
          />
       </div>
     </div>
   </section>
  );
}
