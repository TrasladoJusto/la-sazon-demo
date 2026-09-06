export function TestimonialsSection() {
  return (
    <section className="py-xxl overflow-hidden">
      <div className="px-margin-desktop max-w-4xl mx-auto text-center reveal">
        <span className="material-symbols-outlined text-primary text-[64px] mb-8" aria-hidden="true">format_quote</span>
        <div className="relative">
          <div className="space-y-8">
            <p className="font-display-lg-mobile text-display-lg-mobile text-on-surface leading-snug italic">
              &ldquo;Una celebración del origen convertido en arte comestible. Cada ingrediente es elegido con una meticuliosidad casi religiosa, y cada plato se sirve como una obra que trasciende el tiempo.&rdquo;
            </p>
            <p className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">&mdash; Guía Michelin 2024</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-12">
          <div className="w-12 h-[2px] bg-primary" />
          <div className="w-12 h-[2px] bg-outline-variant hover:bg-primary transition-colors cursor-pointer" />
          <div className="w-12 h-[2px] bg-outline-variant hover:bg-primary transition-colors cursor-pointer" />
        </div>
      </div>
    </section>
  );
}