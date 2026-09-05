"use client";
import Link from "next/link";

export function ChefSection() {
  return (
    <section className="py-xl md:py-xxl px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto bg-surface" id="chef">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Content */}
        <div className="space-y-6 order-2 md:order-1">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">El Visionario</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Adrián Castillo</h2>
          <div className="w-16 h-[1px] bg-primary" />
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Formado en las cocinas más prestigiosas del mundo, Adrián Castillo regresa a sus raíces para liderar PROVENANCE. Su cocina es un ejercicio de contención y elegancia, donde el exceso se sacrifica en favor de la pureza del sabor.
          </p>
          <blockquote className="border-l-2 border-primary pl-6 py-2">
            <p className="font-headline-md italic text-primary/90 font-serif leading-relaxed">
              "La cocina es memoria hecha sabor. No buscamos solo alimentar, buscamos evocar un momento detenido en el tiempo."
            </p>
            <cite className="font-label-sm text-label-sm text-on-surface-variant/60 not-italic block mt-3">— Adrián Castillo</cite>
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link href="/chef" className="inline-flex items-center justify-center bg-primary-container text-on-primary-container px-6 py-3 font-label-sm text-label-sm uppercase tracking-[0.15em] hover:bg-primary transition-all duration-300 shadow-[0_4px_14px_0_rgba(200,169,94,0.3)] hover:shadow-[0_6px_20px_0_rgba(200,169,94,0.4)]">
              Conocer su trayectoria
            </Link>
            <Link href="/menu" className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors uppercase tracking-widest self-center">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">restaurant_menu</span>
              Ver su menú
            </Link>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative h-[400px] md:h-[600px] overflow-hidden group order-1 md:order-2">
          <div className="absolute -inset-3 border border-primary/15 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
          <img
            src="/images/chef-portrait.jpg"
            alt="Chef Adrián Castillo"
            className="relative w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
