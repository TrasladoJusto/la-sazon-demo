"use client";
import Link from "next/link";

export function ExperienceSection() {
  return (
    <section className="py-xl md:py-xxl px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto bg-surface" id="experiencia">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image with decorative elements */}
        <div className="relative h-[350px] md:h-[550px] overflow-hidden group">
          <div className="absolute -inset-3 border border-primary/15 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
          <img
            src="/images/chef-action.jpg"
            alt="Cocina de PROVENANCE"
            className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent" />
          {/* Floating badge */}
          <div className="absolute bottom-6 left-6 bg-surface-container/90 backdrop-blur-sm px-4 py-2 border border-primary/20">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Desde 2009</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Concepto</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Nuestra provenancia</h2>
          <div className="w-16 h-[1px] bg-primary" />
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Entendemos la cocina como un diálogo honesto con la tierra. Cada ingrediente que llega a PROVENANCE posee una historia propia, una trazabilidad impecable y un carácter forjado por su origen.
          </p>
          <p className="font-body-md text-on-surface-variant/70 leading-relaxed">
            Nuestra filosofía se basa en el respeto absoluto al producto de temporada, elevándolo mediante técnicas clásicas y una visión contemporánea que honra el terroir madrileño.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link href="/experiencia" className="inline-flex items-center justify-center bg-primary-container text-on-primary-container px-6 py-3 font-label-sm text-label-sm uppercase tracking-[0.15em] hover:bg-primary transition-all duration-300 shadow-[0_4px_14px_0_rgba(200,169,94,0.3)] hover:shadow-[0_6px_20px_0_rgba(200,169,94,0.4)]">
              Descubrir
            </Link>
            <Link href="/experiencia" className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors uppercase tracking-widest self-center">
              Nuestra filosofía
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
