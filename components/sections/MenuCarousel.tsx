"use client";
import Link from "next/link";

const dishes = [
  { name: "Vieira Imperial", desc: "Lámina de oro de 24k, espuma de mar y esencia de trufa blanca de temporada.", price: "34€", src: "/images/dish-fine-dining.jpg", tag: "Degustación" },
  { name: "Wagyu A5", desc: "Corte seleccionado, reducción de Oporto y raíces de invierno glaseadas.", price: "68€", src: "/images/dish-wagyu.jpg", tag: "Carta" },
  { name: "Jardín de Invierno", desc: "Verduras de nuestra huerta, emulsión de clorofila y tierra de setas.", price: "28€", src: "/images/dish-vegetarian.jpg", tag: "Vegetariano" },
  { name: "Texturas de Cacao", desc: "Crujiente de 70%, ganache ahumada y sorbete de frutos rojos.", price: "18€", src: "/images/dish-dessert.jpg", tag: "Postre" },
  { name: "Trufa del Piamonte", desc: "Suplemento de trufa fresca laminada en mesa sobre platos seleccionados.", price: "Mkt", src: "/images/dish-truffles.jpg", tag: "Temporada" },
];

export function MenuCarousel() {
  return (
    <section className="py-xl md:py-xxl bg-surface-container-lowest" id="carta">
      <div className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Creaciones de Autor</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-3">Nuestra carta</h2>
          </div>
          <Link href="/menu" className="font-label-sm text-label-sm text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors uppercase tracking-widest">
            Ver carta completa →
          </Link>
        </div>
      </div>

      <div className="flex overflow-x-auto no-scrollbar gap-4 md:gap-6 px-margin-mobile md:px-margin-desktop pb-6 cursor-grab active:cursor-grabbing" id="menu-scroll">
        {dishes.map((dish, i) => (
          <div key={i} className="flex-none w-[260px] md:w-[300px] lg:w-[340px] bg-surface border border-primary/10 hover:border-primary/30 transition-all duration-500 group">
            <div className="h-[280px] md:h-[350px] overflow-hidden">
              <img src={dish.src} alt={dish.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            </div>
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-start gap-2 mb-2">
                <h3 className="font-headline-md text-headline-md text-primary">{dish.name}</h3>
                <span className="font-mono text-label-sm text-primary whitespace-nowrap">{dish.price}</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">{dish.desc}</p>
              <span className="inline-block px-2 py-1 text-[10px] uppercase tracking-wider border border-outline-variant/50 text-outline-variant font-label-sm">{dish.tag}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6 md:mt-8 px-margin-mobile md:px-margin-desktop">
        <Link href="/menu" className="inline-flex items-center justify-center border border-outline-variant hover:border-primary hover:bg-primary/5 text-on-surface px-6 py-3 font-label-sm text-label-sm uppercase tracking-[0.15em] transition-all duration-300">
          Ver carta completa
        </Link>
      </div>
    </section>
  );
}
