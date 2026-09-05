const events = [
  { icon: "/images/high_end_minimal_gold_line_art_illustration_on_a_dark_background_for_a_luxury_1.png", title: "Cenas privadas", desc: "Espacios íntimos para encuentros memorables de 2 a 12 personas." },
  { icon: "/images/high_end_minimal_gold_line_art_illustration_on_a_dark_background_for_a_luxury_2.png", title: "Corporativos", desc: "Soluciones de alta gama para presentaciones y networking empresarial." },
  { icon: "/images/high_end_minimal_gold_line_art_illustration_on_a_dark_background_for_a_luxury_3.png", title: "Buyout completo", desc: "Exclusividad absoluta del restaurante para grandes celebraciones." },
  { icon: "/images/high_end_minimal_gold_line_art_illustration_on_a_dark_background_for_a_luxury_4.png", title: "Experiencias", desc: "Maridajes exclusivos y talleres sensoriales a medida." },
];

export function EventsSection() {
  return (
    <section className="py-xxl px-margin-desktop max-w-screen-2xl mx-auto" id="eventos">
      <div className="text-center mb-16 reveal">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Eventos privados</h2>
        <div className="w-20 h-[1px] bg-primary mx-auto mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {events.map((event, i) => (
          <div key={i} className="reveal luxury-card p-8 text-center space-y-6">
            <img className="w-16 h-16 mx-auto opacity-80" src={event.icon} alt={event.title} loading="lazy" />
            <h3 className="font-headline-md text-headline-md text-primary">{event.title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{event.desc}</p>
            <button className="font-label-sm text-label-sm text-primary uppercase tracking-widest hover:text-primary-fixed transition-colors">Solicitar</button>
          </div>
        ))}
      </div>
    </section>
  );
}
