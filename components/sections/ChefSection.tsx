import Image from "next/image";

export function ChefSection() {
  return (
    <section className="py-xxl px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto" id="chef">
      <div className="flex flex-col lg:flex-row gap-xxl items-center">
        <div className="flex-1 reveal space-y-8">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Chef Ejecutivo</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Adrián Castillo</h2>
          <div className="w-20 h-[1px] bg-primary" />
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-xl">
            Con una trayectoria forjada en las cocinas más prestigiosas de Europa, Adrián regresó a sus raíces para fundar AURA. Su enfoque combina la técnica clásica francesa con un respeto casi religioso por el producto local de temporada. Menos es más.
          </p>
          <div className="flex gap-lg">
            <div className="text-center">
              <span className="font-headline-lg text-display-lg text-primary block">3</span>
              <span className="font-label-sm text-label-sm text-secondary uppercase">Estrellas Michelin</span>
            </div>
            <div className="w-px h-16 bg-outline-variant/30" />
            <div className="text-center">
              <span className="font-headline-lg text-display-lg text-primary block">15</span>
              <span className="font-label-sm text-label-sm text-secondary uppercase">Años de Maestría</span>
            </div>
          </div>
        </div>
        <div className="flex-1 reveal w-full">
          <div className="relative group max-w-lg mx-auto">
            <div className="absolute -inset-4 border border-primary/20 transition-all duration-700 group-hover:inset-0" />
            <div className="relative aspect-[3/4]">
              <Image
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="grayscale hover:grayscale-0 transition-all duration-1000 object-cover"
                src="/images/chef-portrait.jpg"
                alt="Chef Adrián Castillo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}