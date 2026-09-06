import Image from "next/image";

const dishes = [
  { name: "Vieira de Origen", desc: "Lámina de oro de 24k, espuma de mar y esencia de trufa blanca.", price: "34€", src: "/images/dish-fine-dining.jpg", tag: "Degustación", ratio: "aspect-[3/4]" },
  { name: "Wagyu A5 Kobe", desc: "Reducción de Oporto y raíces de invierno glaseadas. Excelencia japonesa.", price: "68€", src: "/images/dish-wagyu.jpg", tag: "Especialidad", ratio: "aspect-[3/4]" },
  { name: "Huerto de Invierno", desc: "Verduras de temporada, emulsión de clorofila y tierra de setas ahumadas.", price: "28€", src: "/images/dish-vegetarian.jpg", tag: "Vegetariano", ratio: "aspect-[3/4]" },
  { name: "Texturas de Cacao", desc: "Ganache de cacao 70%, crujiente de avellana y sorbete de frutos silvestres.", price: "18€", src: "/images/dish-dessert.jpg", tag: "Postre", ratio: "aspect-[3/4]" },
  { name: "Trufa del Piamonte", desc: "Laminado de trufa fresca sobre pasta artesanal. Aroma inigualable.", price: "Mkt", src: "/images/dish-truffles.jpg", tag: "Temporada", ratio: "aspect-[3/4]" },
];

export function MenuCarousel() {
  return (
    <section className="py-xxl bg-surface-container-low overflow-hidden relative" id="menu">
      {/* Decorative text behind */}
      <div className="absolute top-10 right-[-10%] text-[150px] font-display-lg text-primary/5 pointer-events-none select-none uppercase tracking-tighter">
        Aura Menu
      </div>

      <div className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto mb-16 reveal">
        <p className="font-label-sm text-label-sm text-primary uppercase tracking-[0.4em] mb-4">Selección de hoy</p>
        <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface">Sabores del Origen</h2>
      </div>

      <div className="flex gap-8 overflow-x-auto pb-12 px-margin-mobile md:px-margin-desktop no-scrollbar snap-x snap-mandatory">
        {dishes.map((dish, i) => (
          <div key={i} className="min-w-[280px] md:min-w-[400px] snap-center group reveal luxury-card p-0 border-none bg-transparent">
            <div className="relative aspect-[3/4] overflow-hidden mb-6">
              <Image
                fill
                sizes="(max-width: 768px) 280px, 400px"
                src={dish.src}
                alt={dish.name}
                className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-background-dark/80 backdrop-blur-md px-4 py-1 border border-primary/20">
                <span className="font-label-sm text-[10px] text-primary uppercase tracking-widest">{dish.tag}</span>
              </div>
            </div>
            <div className="space-y-3 px-1">
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">{dish.name}</h3>
                <span className="font-mono text-primary text-xl font-medium">{dish.price}</span>
              </div>
              <p className="font-body-md text-on-surface-variant line-clamp-2">{dish.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 reveal">
        <a
          className="inline-block border border-primary/20 px-16 py-5 text-on-surface font-label-md text-label-md uppercase tracking-[0.2em] hover:bg-primary hover:text-background-dark hover:border-primary transition-all duration-500"
          href="/menu"
        >
          Explorar Menú Completo
        </a>
      </div>
    </section>
  );
}