import Image from "next/image";

const events = [
  {
    icon: "group",
    image: "/images/event-chefs-table.jpg",
    title: "Cenas privadas",
    desc: "Espacios íntimos para reuniones de 12 a 50 comensales. Menú a medida y servicio exclusivo de nuestro equipo.",
    capacity: "12–50 personas",
    includes: "Menú personalizado · Sommelier",
  },
  {
    icon: "business",
    image: "/images/event-corporate.jpg",
    title: "Eventos corporativos",
    desc: "Presentaciones, lanzamientos y networking con servicio audiovisual discreto y menús ejecutivos en dos pases.",
    capacity: "10–80 personas",
    includes: "Audiovisual · Menú ejecutivo",
  },
  {
    icon: "celebration",
    image: "/images/event-dinner.jpg",
    title: "Buyout completo",
    desc: "Exclusividad absoluta del restaurante. El salón entero se transforma para su celebración más íntima o espectacular.",
    capacity: "Aforo completo (120)",
    includes: "Espacio exclusivo · Staff completo",
  },
  {
    icon: "wine_bar",
    image: "/images/event-wine.jpg",
    title: "Maridaje premium",
    desc: "Talleres sensoriales con nuestro sommelier: catas a ciegas, maridajes moleculares y recorrido por la bodega privada.",
    capacity: "4–12 personas",
    includes: "4 vinos · Bodega privada",
  },
];

export function EventsSection() {
  return (
    <section className="py-xxl px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto" id="eventos">
      <div className="text-center mb-16 reveal">
        <p className="font-label-sm text-label-sm text-primary uppercase tracking-[0.4em] mb-4">Eventos Privados</p>
        <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface">Momentos Inolvidables</h2>
        <div className="w-20 h-[1px] bg-primary mx-auto mt-6" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {events.map((event, i) => (
          <div key={event.title} className="reveal luxury-card group p-0 bg-surface-container-low/40 overflow-hidden flex flex-col">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                src={event.image}
                alt={event.title}
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/70 via-transparent to-transparent" />
            </div>
            <div className="p-6 flex flex-col gap-4 flex-1">
              <span className="material-symbols-outlined text-primary text-[32px]" aria-hidden="true">{event.icon}</span>
              <h3 className="font-headline-md text-headline-md text-primary">{event.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{event.desc}</p>
              <div className="mt-auto space-y-2 border-t border-outline-variant/10 pt-4">
                <p className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">group</span>
                  {event.capacity}
                </p>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">check</span>
                  {event.includes}
                </p>
                <a href="/contacto" className="inline-block mt-3 font-label-sm text-label-sm text-primary uppercase tracking-widest hover:text-primary-fixed transition-colors border-b border-primary/30 hover:border-primary pb-1">
                  Solicitar propuesta
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}