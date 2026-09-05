export function GallerySection() {
  return (
    <section className="py-xxl bg-surface" id="galeria">
      <div className="px-margin-desktop max-w-screen-2xl mx-auto mb-16 text-center">
        <h2 className="reveal font-headline-lg text-headline-lg text-primary mb-8">Galería</h2>
        <div className="flex justify-center gap-8 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant reveal">
          <span className="text-primary border-b border-primary cursor-pointer">Todos</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Sala</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Platos</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Bodega</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-margin-desktop max-w-screen-2xl mx-auto h-[900px]">
        <div className="col-span-2 row-span-2 masonry-item overflow-hidden relative group">
          <img className="w-full h-full object-cover" src="/images/interior.jpg" alt="Interior del restaurante" loading="lazy" />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[48px]" aria-hidden="true">fullscreen</span>
          </div>
        </div>
        <div className="masonry-item overflow-hidden relative group">
          <img className="w-full h-full object-cover" src="/images/dish-truffles.jpg" alt="Trufas frescas" loading="lazy" />
        </div>
        <div className="masonry-item overflow-hidden relative group">
          <img className="w-full h-full object-cover" src="/images/dish-wagyu.jpg" alt="Wagyu premium" loading="lazy" />
        </div>
        <div className="row-span-2 masonry-item overflow-hidden relative group">
          <img className="w-full h-full object-cover" src="/images/wine-cellar.jpg" alt="Bodega" loading="lazy" />
        </div>
        <div className="masonry-item overflow-hidden relative group">
          <img className="w-full h-full object-cover" src="/images/dish-dessert.jpg" alt="Postre de chocolate" loading="lazy" />
        </div>
        <div className="masonry-item overflow-hidden relative group">
          <img className="w-full h-full object-cover" src="/images/chef-action.jpg" alt="Chef en acción" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
