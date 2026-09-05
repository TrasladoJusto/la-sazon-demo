export function GallerySection() {
  return (
    <section className="py-xxl bg-surface-container-lowest" id="galeria">
      <div className="px-margin-desktop max-w-screen-2xl mx-auto mb-16 text-center reveal">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Galería</h2>
        <div className="h-px w-24 bg-primary mt-sm mx-auto" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md px-margin-desktop max-w-screen-2xl mx-auto">
        <div className="reveal">
          <img className="w-full aspect-[3/4] object-cover card-interactive" src="/images/interior.jpg" alt="Interior del restaurante" loading="lazy" />
        </div>
        <div className="reveal">
          <img className="w-full aspect-[1/1] object-cover card-interactive mt-10" src="/images/dish-truffles.jpg" alt="Trufas frescas" loading="lazy" />
        </div>
        <div className="reveal">
          <img className="w-full aspect-[4/5] object-cover card-interactive" src="/images/dish-wagyu.jpg" alt="Wagyu premium" loading="lazy" />
        </div>
        <div className="reveal">
          <img className="w-full aspect-[3/2] object-cover card-interactive mt-10" src="/images/wine-cellar.jpg" alt="Bodega" loading="lazy" />
        </div>
        <div className="reveal">
          <img className="w-full aspect-[4/5] object-cover card-interactive" src="/images/dish-dessert.jpg" alt="Postre de chocolate" loading="lazy" />
        </div>
        <div className="reveal">
          <img className="w-full aspect-[1/1] object-cover card-interactive mt-10" src="/images/chef-action.jpg" alt="Chef en acción" loading="lazy" />
        </div>
        <div className="reveal">
          <img className="w-full aspect-[3/4] object-cover card-interactive" src="/images/dish-fine-dining.jpg" alt="Plato de autor" loading="lazy" />
        </div>
        <div className="reveal">
          <img className="w-full aspect-[3/2] object-cover card-interactive mt-10" src="/images/wine-bottle.jpg" alt="Selección de vinos" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
