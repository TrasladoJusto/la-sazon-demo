"use client";
import { useState } from "react";
import Link from "next/link";

const categories = [
  { id: "todos", label: "Todos" },
  { id: "platos", label: "Platos" },
  { id: "salas", label: "Sala" },
  { id: "bodega", label: "Bodega" },
];

const galleryItems = [
  { id: 1, category: "salas", src: "/images/interior.jpg", alt: "Interior del restaurante", span: "col-span-2 row-span-2" },
  { id: 2, category: "platos", src: "/images/dish-truffles.jpg", alt: "Trufas frescas", span: "" },
  { id: 3, category: "platos", src: "/images/dish-wagyu.jpg", alt: "Wagyu premium", span: "" },
  { id: 4, category: "bodega", src: "/images/wine-cellar.jpg", alt: "Bodega", span: "row-span-2" },
  { id: 5, category: "platos", src: "/images/dish-dessert.jpg", alt: "Postre de chocolate", span: "" },
  { id: 6, category: "salas", src: "/images/chef-action.jpg", alt: "Chef en acción", span: "" },
];

export function GallerySection() {
  const [active, setActive] = useState("todos");

  const filtered = active === "todos" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <section className="py-xl md:py-xxl bg-surface" id="galeria">
      <div className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto mb-8 md:mb-12 text-center">
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Crónicas Visuales</span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mt-3 mb-6">Galería</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
          {categories.map((cat) => (
            <span
              key={cat.id}
              className={`cursor-pointer transition-colors border-b pb-1 ${
                active === cat.id ? "text-primary border-primary" : "hover:text-primary border-transparent"
              }`}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto min-h-[400px] md:min-h-[700px] transition-all duration-500">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`relative group overflow-hidden gallery-item animate-fade-in ${item.span}`}
          >
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={item.src} alt={item.alt} loading="lazy" />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[36px]" aria-hidden="true">search</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 md:mt-10 px-margin-mobile md:px-margin-desktop">
        <Link href="/galeria" className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors uppercase tracking-widest">
          Ver galería completa
          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}
