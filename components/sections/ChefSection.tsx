import Image from "next/image";

export function ChefSection() {
  return (
    <section className="py-xxl px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto" id="chef">
      <div className="flex flex-col lg:flex-row gap-xxl items-center">
        <div className="flex-1 reveal space-y-8">
          <div className="space-y-4">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Chef Ejecutivo</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Adrián Castillo</h2>
            <div className="w-20 h-[1px] bg-primary" />
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-xl">
            Formado en las cocinas más prestigiosas de Francia y con una década y media de trayectoria a sus espaldas, Adrián regresó a sus raíces para fundar AURA. Su cocina es un ejercicio de contención: el exceso se sacrifica en favor de la pureza del sabor.
          </p>
          <blockquote className="pl-5 border-l-2 border-primary">
            <p className="font-headline-md italic text-primary/90 font-serif leading-relaxed">
              &ldquo;La cocina es memoria hecha sabor. No buscamos solo alimentar: buscamos evocar.&rdquo;
            </p>
          </blockquote>
          <div className="grid grid-cols-3 gap-6 max-w-xl">
            <div className="text-center">
              <span className="font-headline-lg text-display-lg text-primary block">3</span>
              <span className="font-label-sm text-label-sm text-secondary uppercase">Estrellas Michelin</span>
            </div>
            <div className="text-center border-x border-outline-variant/20">
              <span className="font-headline-lg text-display-lg text-primary block">15</span>
              <span className="font-label-sm text-label-sm text-secondary uppercase">Años de Maestría</span>
            </div>
            <div className="text-center">
              <span className="font-headline-lg text-display-lg text-primary block">40+</span>
              <span className="font-label-sm text-label-sm text-secondary uppercase">Productores</span>
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
            <div className="absolute bottom-0 left-0 right-0 bg-background-dark/70 backdrop-blur px-5 py-4 border-t border-primary/10">
              <p className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">Adrián Castillo · Chef Ejecutivo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}