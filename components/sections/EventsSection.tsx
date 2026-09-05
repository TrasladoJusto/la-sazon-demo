"use client";
import Link from "next/link";
import { SectionReveal } from "@/components/animations/ScrollReveal";

export function EventsSection() {
  return (
    <section className="py-xxl px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto" id="eventos">
      <div className="text-center mb-12 md:mb-16">
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Experiencias</span>
        <h2 className="reveal font-headline-lg text-headline-lg text-on-surface mt-3 mb-6">Eventos de Autor</h2>
        <div className="w-20 h-[1px] bg-primary mx-auto mb-8" />
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Espacios exclusivos para celebraciones íntimas, cenas corporativas y experiencias gastronómicas personalizadas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
        {/* Event Card 1 */}
        <div className="relative group overflow-hidden reveal h-[300px] md:h-[400px]">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="/images/wine-cellar.jpg"
            alt="Cena Privada"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <span className="material-symbols-outlined text-primary text-[32px] mb-3" data-icon="restaurant">restaurant</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Cena Privada</h3>
            <p className="font-body-md text-on-surface-variant text-sm">Hasta 12 comensales en nuestra sala íntima</p>
          </div>
        </div>

        {/* Event Card 2 */}
        <div className="relative group overflow-hidden reveal h-[300px] md:h-[400px]">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="/images/interior.jpg"
            alt="Chef's Table"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <span className="material-symbols-outlined text-primary text-[32px] mb-3" data-icon="local_fire_department">local_fire_department</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Chef's Table</h3>
            <p className="font-body-md text-on-surface-variant text-sm">Experiencia exclusiva junto a la cocina</p>
          </div>
        </div>

        {/* Event Card 3 */}
        <div className="relative group overflow-hidden reveal h-[300px] md:h-[400px]">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="/images/chef-portrait.jpg"
            alt="Maridaje de Vinos"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <span className="material-symbols-outlined text-primary text-[32px] mb-3" data-icon="wine_bar">wine_bar</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Maridaje de Vinos</h3>
            <p className="font-body-md text-on-surface-variant text-sm">Selección de bodegas exclusivas</p>
          </div>
        </div>

        {/* Event Card 4 */}
        <div className="relative group overflow-hidden reveal h-[300px] md:h-[400px]">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="/images/wine-cellar.jpg"
            alt="Evento Corporativo"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <span className="material-symbols-outlined text-primary text-[32px] mb-3" data-icon="groups">groups</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Evento Corporativo</h3>
            <p className="font-body-md text-on-surface-variant text-sm">Espacios versátiles para eventos empresariales</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/eventos"
          className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors uppercase tracking-widest"
        >
          Ver todos los eventos
          <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}
