import Image from "next/image";

const pillars = [
  {
    icon: "eco",
    num: "01",
    title: "Producto de origen",
    desc: "Más de 40 micro-productores de proximidad. Trazabilidad absoluta desde el campo hasta el plato.",
  },
  {
    icon: "kitchen",
    num: "02",
    title: "Técnica clásica",
    desc: "Fundamentos de la academia francesa aplicados con contención y precisión contemporáneas.",
  },
  {
    icon: "local_bar",
    num: "03",
    title: "Bodega de 4.000 etiquetas",
    desc: "Una selección curada por nuestro sommelier para armonizar cada paso del menú degustación.",
  },
];

export function ExperienceSection() {
  return (
    <section className="py-xxl px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto overflow-hidden" id="experiencia">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xxl items-center">
        <div className="reveal relative h-[420px] md:h-[640px] overflow-hidden group order-2 lg:order-1">
          <div className="absolute inset-0 bg-background-dark/20 z-10" />
          <Image
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            src="/images/chef-action.jpg"
            alt="Cocina en acción"
          />
          <div className="absolute bottom-6 left-6 z-20 border-l-2 border-primary pl-4">
            <p className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">Concepto</p>
            <p className="font-headline-md text-headline-md text-on-surface">De la tierra a la mesa</p>
          </div>
        </div>

        <div className="reveal space-y-10 px-lg order-1 lg:order-2">
          <div className="space-y-4">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Concepto</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Nuestra proveniencia</h2>
            <div className="w-20 h-[1px] bg-primary" />
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
            Entendemos la cocina como un diálogo honesto con la tierra. Cada ingrediente que llega a La Sazón conserva una trazabilidad completa: del campo al plato, sin intermediarios que diluyan su identidad.
            <br /><br />
            Nuestra filosofía es un ejercicio de contención: el producto de temporada se eleva mediante técnica clásica, nunca se enmascara. Menos interfieren, más sabor verdadero permanece.
          </p>

          <div className="space-y-6">
            {pillars.map((p) => (
              <div key={p.num} className="flex gap-6 items-start group">
                <div className="shrink-0 w-14 h-14 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">{p.icon}</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-primary/60 uppercase tracking-widest">{p.num}</p>
                  <h3 className="font-headline-md text-headline-md text-on-surface">{p.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-md">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a className="inline-block font-label-sm text-label-sm text-primary tracking-[0.2em] uppercase border-b border-primary/30 hover:border-primary pb-2 transition-all" href="/menu">
            Descubrir la carta
          </a>
        </div>
      </div>
    </section>
  );
}