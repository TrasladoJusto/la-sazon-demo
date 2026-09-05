export function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-margin-mobile overflow-hidden">
      <div className="relative z-10 space-y-8 reveal">
        <h1 className="font-display-lg text-display-lg text-primary uppercase tracking-[0.2em] md:text-[80px]">PROVENANCE</h1>
        <p className="font-label-md text-label-md text-on-surface tracking-[0.4em] uppercase opacity-80">Donde el origen define la excelencia</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
          <a className="bg-primary-container text-on-primary-container px-10 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary transition-all duration-300" href="#reservas">Reservar mesa</a>
          <a className="border border-primary text-primary px-10 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary/10 transition-all duration-300" href="#experiencia">Ver experiencia</a>
        </div>
      </div>
      <a className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary animate-bounce cursor-pointer" href="#experiencia">
        <span className="material-symbols-outlined text-[40px]" aria-hidden="true">expand_more</span>
      </a>
    </section>
  );
}
