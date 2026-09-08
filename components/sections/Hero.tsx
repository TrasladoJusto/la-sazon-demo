import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image con next/image (LCP optimizado) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          fill
          priority
          sizes="100vw"
          alt="Comedor de La Sazón"
          src="/images/interior.jpg"
          className="object-cover brightness-[0.25] scale-105 hero-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-transparent to-background-dark/80" />
      </div>

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 z-[1] opacity-30 hero-mesh" />

      {/* Grain Overlay */}
      <div className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-16 max-w-screen-xl mx-auto">
        {/* Overline */}
        <p className="hero-stagger font-label-sm text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-primary/70 mb-6 md:mb-8">
          Lima · Perú — Alta Cocina
        </p>

        {/* Main Title */}
        <h1 className="hero-stagger font-display-lg text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[120px] xl:text-[160px] leading-[0.85] gold-gradient-text mb-6 md:mb-8">
          La Sazón
        </h1>

        {/* Subtitle */}
        <p className="hero-stagger font-headline-md text-headline-md md:text-[28px] text-secondary/90 tracking-[0.3em] md:tracking-[0.4em] uppercase mb-10 md:mb-16 px-4">
          La esencia del origen
        </p>

        {/* CTA Buttons */}
        <div className="hero-stagger flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
          <a
            className="w-full sm:w-auto bg-primary px-10 md:px-12 py-4 md:py-5 text-background-dark font-label-sm md:font-label-md text-[11px] md:text-[14px] tracking-[0.2em] uppercase font-bold hover:bg-primary-container hover:scale-105 active:scale-95 transition-all duration-500 shadow-2xl shadow-primary/20 text-center"
            href="/reservar"
          >
            Reservar mesa
          </a>
          <a
            className="w-full sm:w-auto border border-primary/40 px-10 md:px-12 py-4 md:py-5 text-on-surface font-label-sm md:font-label-md text-[11px] md:text-[14px] tracking-[0.2em] uppercase hover:bg-primary/5 active:bg-primary/10 transition-all duration-500 backdrop-blur-sm text-center"
            href="/#experiencia"
          >
            Ver experiencia
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 opacity-60 hero-stagger">
        <div className="flex flex-col items-center gap-2">
          <span className="font-label-sm text-[9px] uppercase tracking-[0.3em] text-primary/50 hidden md:block">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
