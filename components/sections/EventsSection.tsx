"use client";
import Link from "next/link";

export function EventsSection() {
  return (
    <section className="py-xl md:py-xxl bg-surface-container-lowest" id="eventos">
      <div className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto mb-8 md:mb-12">
        <div className="text-center mb-8">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Experiencias</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-3">Eventos de Autor</h2>
        </div>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto text-center">
          Espacios exclusivos para celebraciones íntimas, cenas corporativas y experiencias gastronómicas personalizadas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto mb-8 md:mb-12">
        {[
          { img: "/images/event-dinner.jpg", icon: "restaurant", title: "Cena Privada", desc: "Hasta 12 comensales en nuestra sala íntima" },
          { img: "/images/chef-action.jpg", icon: "local_fire_department", title: "Chef's Table", desc: "Experiencia exclusiva junto a la cocina" },
          { img: "/images/event-wine.jpg", icon: "wine_bar", title: "Maridaje de Vinos", desc: "Selección de bodegas exclusivas" },
          { img: "/images/event-corporate.jpg", icon: "groups", title: "Evento Corporativo", desc: "Espacios versátiles para eventos empresariales" },
        ].map((event, i) => (
          <div key={i} className="relative group overflow-hidden h-[250px] md:h-[300px]">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={event.img} alt={event.title} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <span className="material-symbols-outlined text-primary text-[28px] mb-2 block" aria-hidden="true">{event.icon}</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">{event.title}</h3>
              <p className="font-body-sm text-on-surface-variant text-sm">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center px-margin-mobile md:px-margin-desktop">
        <Link href="/eventos" className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors uppercase tracking-widest">
          Ver todos los eventos
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}
