"use client";
import { SectionReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

const dishes = [
  { name: "Vieira Imperial", desc: "Lámina de oro de 24k, espuma de mar y esencia de trufa blanca de temporada.", price: "34€", src: "/images/dish-fine-dining.jpg", tag: "Degustación" },
  { name: "Wagyu A5", desc: "Corte seleccionado, reducción de Oporto y raíces de invierno glaseadas.", price: "68€", src: "/images/dish-wagyu.jpg", tag: "Carta" },
  { name: "Jardín de Invierno", desc: "Verduras de nuestra huerta, emulsión de clorofila y tierra de setas.", price: "28€", src: "/images/dish-vegetarian.jpg", tag: "Vegetariano" },
  { name: "Texturas de Cacao", desc: "Crujiente de 70%, ganache ahumada y sorbete de frutos rojos.", price: "18€", src: "/images/dish-dessert.jpg", tag: "Postre" },
  { name: "Trufa del Piamonte", desc: "Suplemento de trufa fresca laminada en mesa sobre platos seleccionados.", price: "Mkt", src: "/images/dish-truffles.jpg", tag: "Temporada" },
];

export function MenuCarousel() {
  return (
    <section className="py-xxl bg-surface-container-lowest overflow-hidden" id="menu">
      <div className="px-margin-desktop max-w-screen-2xl mx-auto mb-16">
        <h2 className="reveal font-headline-lg text-headline-lg text-on-surface">Nuestra carta</h2>
      </div>
      <div className="flex overflow-x-auto no-scrollbar gap-gutter px-margin-desktop pb-12 cursor-grab active:cursor-grabbing" id="menu-scroll">
        {dishes.map((dish, index) => (
          <div key={index} className="flex-none w-[350px] luxury-card bg-surface p-4 reveal card-container card-interactive" data-category={dish.tag.toLowerCase()}>
            <div className="h-[400px] overflow-hidden mb-6">
              <img src={dish.src} alt={dish.name} className="w-full h-full object-cover card-zoom-image" data-icon="restaurant" data-alt={dish.name} />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="font-headline-md text-headline-md text-primary">{dish.name}</h3>
                <span className="font-mono text-label-sm text-primary">{dish.price}</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">{dish.desc}</p>
              <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-tighter border border-outline-variant text-outline-variant font-label-sm">{dish.tag}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="outline" size="md" href="#">Ver carta completa</Button>
      </div>
    </section>
  );
}
