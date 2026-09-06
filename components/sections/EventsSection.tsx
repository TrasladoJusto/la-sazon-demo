import Image from "next/image";

const events = [
  { icon: "group", image: "/images/event-chefs-table.jpg", title: "Cenas Privadas", desc: "Experiencia íntima para 2-12 comensales. Cena bajo las estrellas con menús personalizados." },
  { icon: "business", image: "/images/event-corporate.jpg", title: "Corporativos", desc: "Eventos ejecutivos con menú temático. Networking gourmet con hosting profesional." },
  { icon: "celebration", image: "/images/event-dinner.jpg", title: "Buyout Completo", desc: "Espacio privado ilimitado para celebraciones únicas. Exclusividad de pared a pared." },
  { icon: "wine_bar", image: "/images/event-wine.jpg", title: "Maridaje Premium", desc: "Talleres sensoriales con sommelier. Catas selectas con maridaje molecular." },
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
          <div key={i} className="reveal luxury-card group p-8 text-center space-y-6 bg-surface-container-low/40">
            <div className="relative aspect-[3/4] overflow-hidden mb-4">
              <Image
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                src={event.image}
                alt={event.title}
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent" />
            </div>
            <span className="material-symbols-outlined text-primary text-[40px]" aria-hidden="true">{event.icon}</span>
            <h3 className="font-headline-md text-headline-md text-primary">{event.title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{event.desc}</p>
            <a href="/contacto" className="inline-block font-label-sm text-label-sm text-primary uppercase tracking-widest hover:text-primary-fixed transition-colors border-b border-primary/30 hover:border-primary pb-1">
              Solicitar
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}