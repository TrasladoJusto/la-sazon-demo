"use client";
import Link from "next/link";

export function GallerySection() {
  return (
    <section className="py-xl md:py-xxl bg-surface" id="galeria">
      <div className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto mb-8 md:mb-12 text-center">
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Crónicas Visuales</span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mt-3 mb-6">Galería</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
          <span className="text-primary border-b border-primary cursor-pointer gallery-filter-btn" data-category="todos">Todos</span>
          <span className="hover:text-primary cursor-pointer transition-colors gallery-filter-btn" data-category="platos">Platos</span>
          <span className="hover:text-primary cursor-pointer transition-colors gallery-filter-btn" data-category="salas">Sala</span>
          <span className="hover:text-primary cursor-pointer transition-colors gallery-filter-btn" data-category="bodega">Bodega</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto h-[400px] md:h-[700px]">
        <div className="col-span-2 row-span-2 relative group overflow-hidden gallery-item" data-category="salas">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/interior.jpg" alt="Interior del restaurante" loading="lazy" />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[48px]" aria-hidden="true">fullscreen</span>
          </div>
        </div>
        <div className="relative group overflow-hidden gallery-item" data-category="platos">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/dish-truffles.jpg" alt="Trufas frescas" loading="lazy" />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[36px]" aria-hidden="true">search</span>
          </div>
        </div>
        <div className="relative group overflow-hidden gallery-item" data-category="platos">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/dish-wagyu.jpg" alt="Wagyu premium" loading="lazy" />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[36px]" aria-hidden="true">search</span>
          </div>
        </div>
        <div className="row-span-2 relative group overflow-hidden gallery-item" data-category="bodega">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/wine-cellar.jpg" alt="Bodega" loading="lazy" />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[36px]" aria-hidden="true">search</span>
          </div>
        </div>
        <div className="relative group overflow-hidden gallery-item" data-category="platos">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/dish-dessert.jpg" alt="Postre de chocolate" loading="lazy" />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[36px]" aria-hidden="true">search</span>
          </div>
        </div>
        <div className="relative group overflow-hidden gallery-item" data-category="salas">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/chef-action.jpg" alt="Chef en acción" loading="lazy" />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[36px]" aria-hidden="true">search</span>
          </div>
        </div>
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
