"use client";
import { useState, useEffect } from "react";
import { Lightbox, GalleryImage } from "@/components/ui/Lightbox";

const galleryImages: GalleryImage[] = [
  { src: "/images/interior.jpg", alt: "Luxury restaurant interior at twilight", category: "sala" },
  { src: "/images/dish-truffles.jpg", alt: "Fresh black winter truffles macro shot", category: "platos" },
  { src: "/images/dish-wagyu.jpg", alt: "Premium Wagyu beef course", category: "platos" },
  { src: "/images/wine-cellar.jpg", alt: "Wine cellar with rare bottles", category: "bodega" },
  { src: "/images/dish-dessert.jpg", alt: "Elegant chocolate dessert with gold leaf", category: "platos" },
  { src: "/images/dish-vegetarian.jpg", alt: "Minimalist vegetarian dish", category: "platos" },
  { src: "/images/chef-action.jpg", alt: "Cinematic kitchen action", category: "detalles" },
  { src: "/images/dish-fine-dining.jpg", alt: "Gourmet seafood with gold leaf", category: "platos" },
  { src: "/images/wine-cellar.jpg", alt: "Wine cellar interior atmosphere", category: "ambiente" },
];

const categories = [
  { id: "todos", label: "Todos" },
  { id: "platos", label: "Platos" },
  { id: "sala", label: "Sala" },
  { id: "detalles", label: "Detalles" },
  { id: "bodega", label: "Bodega" },
  { id: "ambiente", label: "Ambiente" },
];

export function GaleriaEnhanced() {
  const [filter, setFilter] = useState("todos");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = filter === "todos"
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  const indices: number[] = [];
  let ci = 0;
  galleryImages.forEach((img, i) => {
    if (filter === "todos" || img.category === filter) {
      indices.push(i);
      ci++;
    }
  });

  const spanPattern = ["masonry-item-large", "", "masonry-item-tall", "", "", "masonry-item-wide", "", "masonry-item-tall", ""];

  return (
    <section className="py-xxl px-margin-desktop max-w-screen-2xl mx-auto" id="galeria">
      <div className="text-center mb-16">
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Crónicas Visuales</span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface mt-6 gold-gradient-text">Galería</h1>
        <div className="w-20 h-[1px] bg-primary mx-auto mt-6" />
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-8 leading-relaxed">
          Un recorrido visual por nuestra herencia culinaria, donde cada imagen cuenta una historia de procedencia y maestría.
      </p>
    </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            data-category={cat.id}
            className={`font-label-sm text-label-sm uppercase tracking-widest px-4 py-2 transition-all duration-300 border-b-2 ${
              filter === cat.id
                ? "text-primary border-primary"
                : "text-on-surface-variant border-transparent hover:text-primary hover:border-primary/50"
            }`}
          >
            {cat.label}
      </button>
        ))}
   </div>

      {/* Masonry Grid */}
      <div className="masonry-grid">
        {filtered.map((img, idx) => {
          const realIdx = galleryImages.indexOf(img);
          const span = spanPattern[idx % spanPattern.length] || "";
          return (
            <button
              key={realIdx}
              className={`relative group overflow-hidden cursor-zoom-in bg-surface-container ${span}`}
              onClick={() => setLightboxIdx(realIdx)}
              data-category={img.category}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-icon="photo"
                data-alt={img.alt}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[48px] opacity-0 group-hover:opacity-100 transition-opacity" data-icon="visibility">visibility</span>
         </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-dark/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">{img.alt}</p>
         </div>
       </button>
          );
        })}
   </div>

      <Lightbox
        images={galleryImages}
        openIndex={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
      />
 </section>
  );
}
