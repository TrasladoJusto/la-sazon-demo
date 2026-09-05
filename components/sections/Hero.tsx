export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Cinematic dining room"
          className="w-full h-full object-cover brightness-[0.35]"
          src="/images/interior.jpg"
        />
      </div>
      {/* Mesh Gradient Overlay */}
      <div className="hero-mesh" />

      {/* Content */}
      <div className="relative z-10 text-center px-margin-mobile">
        <h1 className="font-display-lg text-[60px] md:text-[100px] lg:text-[140px] leading-none gold-gradient-text mb-6 hero-stagger">
          PROVENANCE
        </h1>
        <p className="font-headline-md text-headline-md text-secondary tracking-[0.3em] uppercase mb-12 hero-stagger">
          Donde el origen define la excelencia
        </p>
        <div className="flex flex-col md:flex-row gap-md justify-center hero-stagger">
          <a className="bg-primary px-xxl py-md text-background-dark font-label-sm text-label-sm tracking-widest uppercase hover:brightness-110 transition-all duration-500" href="#reservas">
            Reservar mesa
          </a>
          <a className="border border-primary px-xxl py-md text-primary font-label-sm text-label-sm tracking-widest uppercase hover:bg-primary/10 transition-all duration-500" href="#experiencia">
            Ver experiencia
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <span className="material-symbols-outlined text-primary text-4xl" aria-hidden="true">expand_more</span>
      </div>
    </section>
  );
}
