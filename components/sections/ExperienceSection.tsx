"use client";
import Link from "next/link";
import { SectionReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function ExperienceSection() {
  return (
    <section className="py-xxl px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto" id="experiencia">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl md:gap-xxl items-center">
        {/* Image with offset decorative border */}
        <div className="reveal relative h-[400px] md:h-[600px] overflow-hidden group order-2 md:order-1">
          <div className="absolute -inset-4 border border-primary/20 translate-x-2 translate-y-2 z-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
          <img
            className="relative w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 z-10"
            src="/images/chef-action.jpg"
            alt="Cinematic kitchen shot"
            data-icon="photo_camera"
            data-alt="Cinematic kitchen shot of a Michelin-star kitchen"
          />
          <div className="absolute inset-0 bg-background-dark/20 z-20"></div>
      </div>
        {/* Content */}
        <div className="reveal space-y-6 md:space-y-8 px-0 md:px-lg order-1 md:order-2">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Concepto</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Nuestra provenancia</h2>
          <div className="w-20 h-[1px] bg-primary"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
            Entendemos la cocina como un diálogo honesto con la tierra. Cada ingrediente que llega a PROVENANCE posee una historia propia, una trazabilidad impecable y un carácter forjado por su origen.
        </p>
          <p className="font-body-md text-body-md text-on-surface-variant/80 max-w-lg leading-relaxed hidden md:block">
            Nuestra filosofía se basa en el respeto absoluto al producto de temporada, elevándolo mediante técnicas clásicas y una visión contemporánea que honra el terroir madrileño.
        </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button variant="primary" size="md" href="/experiencia">CONOCER MÁS</Button>
            <Link
              href="/experiencia"
              className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors uppercase tracking-widest"
            >
              <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
              Nuestra filosofía
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
}
