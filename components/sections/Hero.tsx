import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image con next/image (LCP optimizado) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          fill
          priority
          sizes="100vw"
          alt="Comedor de AURA"
          src="/images/interior.jpg"
          className="object-cover brightness-[0.25] scale-105"
          style={{ animation: "slow-zoom 20s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-transparent to-background-dark/80" />
      </div>

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 z-[1] opacity-30 animate-mesh" style={{
        background: "radial-gradient(circle at 20% 30%, var(--primary) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--secondary) 0%, transparent 40%)",
        filter: "blur(80px)"
      }} />

      {/* Content */}
      <div className="relative z-10 text-center px-margin-mobile max-w-screen-xl">
        <h1 className="font-display-lg text-display-lg-mobile md:text-[100px] lg:text-[160px] leading-[0.9] gold-gradient-text mb-8 animate-fade-up">
          AURA
        </h1>
        <p className="font-headline-md text-headline-md text-secondary/90 tracking-[0.4em] uppercase mb-16 animate-fade-up [animation-delay:400ms] opacity-0 fill-mode-forwards">
          La esencia del origen
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up [animation-delay:800ms] opacity-0 fill-mode-forwards">
          <a
            className="bg-primary px-12 py-5 text-background-dark font-label-md text-label-md tracking-[0.2em] uppercase font-bold hover:bg-primary-container hover:scale-105 transition-all duration-500 shadow-2xl shadow-primary/20"
            href="#reservas"
          >
            Reservar mesa
          </a>
          <a
            className="border border-primary/40 px-12 py-5 text-on-surface font-label-md text-label-md tracking-[0.2em] uppercase hover:bg-primary/5 transition-all duration-500 backdrop-blur-sm"
            href="#experiencia"
          >
            Ver experiencia
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-10 opacity-60">
        <span className="material-symbols-outlined text-primary text-5xl font-light" aria-hidden="true">expand_more</span>
      </div>
    </section>
  );
}