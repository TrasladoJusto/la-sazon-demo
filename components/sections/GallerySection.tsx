import Image from "next/image";

export function GallerySection() {
  const images = [
    { src: "/images/dish-fine-dining.jpg", alt: "Degustación de temporada: Raíces y Tierra", ratio: "aspect-[3/4]" },
    { src: "/images/interior.jpg", alt: "Interiorismo minimalista de La Sazón", ratio: "aspect-[1/1]" },
    { src: "/images/wine-cellar.jpg", alt: "Selección de vinos de autor", ratio: "aspect-[4/5]" },
    { src: "/images/chef-action.jpg", alt: "El equipo en la cocina", ratio: "aspect-[3/4]" },
    { src: "/images/dish-dessert.jpg", alt: "Postre: Interpretación del bosque", ratio: "aspect-[1/1]" },
    { src: "/images/gallery-table.jpg", alt: "Detalle de la mesa privada", ratio: "aspect-[4/5]" },
    { src: "/images/dish-truffles.jpg", alt: "Maridaje con esencia de campo", ratio: "aspect-[3/4]" },
    { src: "/images/event-dinner.jpg", alt: "Ambiente íntimo al anochecer", ratio: "aspect-[1/1]" },
  ];

  return (
    <section className="py-xxl bg-background" id="galeria">
      <div className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="font-label-sm text-label-sm text-primary uppercase tracking-[0.4em] mb-4">Galería</p>
          <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface">Nuestra Esencia</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={`${img.src}-${i}`} className={`relative overflow-hidden card-interactive ${img.ratio}`}>
              <Image
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                src={img.src}
                alt={img.alt}
                className="object-cover transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background-dark/20 opacity-0 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}