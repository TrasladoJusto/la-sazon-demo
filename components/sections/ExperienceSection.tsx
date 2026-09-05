export function ExperienceSection() {
  return (
    <section className="py-xxl px-margin-desktop max-w-screen-2xl mx-auto" id="experiencia">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xxl items-center">
        <div className="reveal relative h-[600px] overflow-hidden group">
          <div className="absolute inset-0 bg-background-dark/20 z-10" />
          <img
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            src="/images/chef-action.jpg"
            alt="Cocina en acción"
            loading="lazy"
          />
        </div>
        <div className="reveal space-y-8 px-lg">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Concepto</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Nuestra provenancia</h2>
          <div className="w-20 h-[1px] bg-primary" />
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
            Entendemos la cocina como un diálogo honesto con la tierra. Cada ingrediente que llega a PROVENANCE posee una historia propia, una trazabilidad impecable y un carácter forjado por su origen.
            <br /><br />
            Nuestra filosofía se basa en el respeto absoluto al producto de temporada, elevándolo mediante técnicas clásicas y una visión contemporánea que honra el terroir madrileño y sus alrededores.
          </p>
          <a className="inline-block font-label-sm text-label-sm text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors uppercase tracking-widest" href="#menu">DESCUBRIR EL MENÚ</a>
        </div>
      </div>
    </section>
  );
}
