const dishes = [
  { name: "Vieira Imperial", desc: "Lámina de oro de 24k, espuma de mar y esencia de trufa blanca de temporada.", price: "34€", src: "/images/dish-fine-dining.jpg", tag: "Degustación" },
  { name: "Wagyu A5", desc: "Corte seleccionado, reducción de Oporto y raíces de invierno glaseadas.", price: "68€", src: "/images/dish-wagyu.jpg", tag: "Carta" },
  { name: "Jardín de Invierno", desc: "Verduras de nuestra huerta, emulsión de clorofila y tierra de setas.", price: "28€", src: "/images/dish-vegetarian.jpg", tag: "Vegetariano" },
  { name: "Texturas de Cacao", desc: "Crujiente de 70%, ganache ahumada y sorbete de frutos rojos.", price: "18€", src: "/images/dish-dessert.jpg", tag: "Postre" },
  { name: "Trufa del Piamonte", desc: "Suplemento de trufa fresca laminada en mesa sobre platos seleccionados.", price: "Mkt", src: "/images/dish-truffles.jpg", tag: "Temporada" },
];

export function MenuCarousel() {
  return (
    <section className="py-xxl bg-surface-container-low overflow-hidden" id="menu">
      <div className="px-margin-desktop max-w-screen-2xl mx-auto mb-xl reveal">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Nuestra carta</h2>
        <div className="h-px w-24 bg-primary mt-sm" />
      </div>
      <div className="flex gap-lg overflow-x-auto custom-scrollbar pb-xl px-margin-desktop">
        {dishes.map((dish, i) => (
          <div key={i} className="min-w-[320px] md:min-w-[380px] card-interactive group reveal">
            <div className="aspect-[4/5] overflow-hidden mb-md">
              <img src={dish.src} alt={dish.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="flex justify-between items-end px-2">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wider">{dish.name}</h3>
                <p className="font-body-md text-label-sm text-secondary">{dish.desc}</p>
              </div>
              <span className="font-mono text-primary text-lg">{dish.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-xl">
        <a className="font-label-sm text-label-sm text-on-surface border border-primary/20 px-12 py-4 hover:border-primary transition-all duration-300 uppercase tracking-widest" href="/menu">Ver carta completa</a>
      </div>
    </section>
  );
}
