export function ChefSection() {
  return (
    <section className="py-xxl px-margin-desktop max-w-screen-2xl mx-auto" id="chef">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xxl items-center flex-row-reverse">
        <div className="reveal order-2 md:order-1 space-y-8 px-lg">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">El Visionario</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Adrián Castillo</h2>
          <div className="w-20 h-[1px] bg-primary" />
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Formado en las cocinas más prestigiosas del mundo, Adrián Castillo regresa a sus raíces para liderar PROVENANCE. Su cocina es un ejercicio de contención y elegancia, donde el exceso se sacrifica en favor de la pureza del sabor.
          </p>
          <p className="font-headline-md italic text-primary font-serif">
            &ldquo;La cocina es memoria hecha sabor. No buscamos solo alimentar, buscamos evocar un momento detenido en el tiempo.&rdquo;
          </p>
        </div>
        <div className="reveal order-1 md:order-2 h-[700px] overflow-hidden">
          <img
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            src="/images/chef-portrait.jpg"
            alt="Chef Adrián Castillo"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
