"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";

const eventTypes = [
  {
    title: "Cenas privadas",
    desc: "Espacios íntimos para encuentros memorables de 12 a 50 comensales. Servicio personalizado y menú a medida.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLu3wJTukypmLXyutSt_ykoNZW9MFrot0P9dKwxU4GRS3Ccd4TqNhe_uhKan6X_T83zQzwFAJyMaIy-yDCfJx-E2YvFUiXIB4al5wx8n5UT4p4upKPkzPElFCEii9uAtG5Cgc2mhWYBAXHPO8H531FvFD_Ov1uuomm2CBOnH5DiBDdLzdEhf7LMQy2VF51D2prQTuZfbEybqKcCl7U7pwfQ-ohU1F0B-4Yv-_RqMYHF9fdl9XOh-v_K9-UEC",
  },
  {
    title: "Eventos corporativos",
    desc: "Presentaciones, lanzamientos y networking empresarial con servicio audiovisual discreto y menús ejecutivos.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLvNGFAhN-uyQfpDPNNVfLJRVz5r1mTlj1uJWMB_8LB3QRcGJoI43LL6lew6APzJ0Mj-yfzVLaL63GclhOwjywdZ1IoIcxB8oQuwZujN_W_OrGabsqytWoSLx11EAiE2WHECFKn_Ox5AHOLUZK2y4dQ00D4szADUB4TxnVcfs8SGc7BcxOrFqQ5LUfKBmHEZQMSHlgFkrUOwEfcChVAZWeb7vh_keNiYZdnIBgwZw_TMUBik18A-Z7hHgbhC",
  },
  {
    title: "Buyout completo",
    desc: "Exclusividad absoluta del restaurante. El salón entero se transforma para su celebración más íntima o espectacular.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLsW8JsPFu8d8dKSIJf7iOqaxG32bL4DQbYV71JMGNrTYuXWGvc_iFUpn6xLJNW4ao8h9Udj9D48zJ8ESJeQr1dfh0Hl05cAOFYNxHsPD64pjkThxGMpOqLOpA2donbh1PyXpcjkPkPvZhhkkhJZZJtAeZKEJb7CTGWZYeRDZFubHT6125sM-e1gXA3Os86tq6y3uQMIiYtMWiueedw2pV0W6Br0iMheDFr2nnhh7tlvhaVlwzaG8zrtR0yg",
  },
  {
    title: "Experiencias a medida",
    desc: "Talleres sensoriales, catas a ciegas, maridajes exclusivos y recorridos por nuestra bodega privada.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLsFnllbFSUH9xqiu2d18w1KOpgwRHgtdpT6ciH8mrJP55gyMGc_sZBSLfv8S3UOQO8daNi9xOrlCGQg9uGOeVWNU8JPiuNnrZq7NKRuD-UQv77mylpOC3VfWxwVNWFvidudsUxSnvJJ3_ah8z94AhxDzBFQEztVzg4SySl4uVK5EWb3oYCzxNtjYJqxfMebWDeME1hXl6iBNbz46_5qn0B281odYElRPIbG3FQljNeZ5Gr-eUODonZtSmqI",
  },
];

function BentoCard({ event, index }: { event: typeof eventTypes[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add("active"), index * 100); } }),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <article
      ref={ref}
      className="card-reveal group relative overflow-hidden border border-outline/10 hover:border-primary/40 transition-all duration-500 bg-surface-container-low"
    >
      <div className="relative h-[280px] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-all duration-700 brightness-110 group-hover:scale-110"
          data-icon="event"
          data-alt={event.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
    </div>
      <div className="p-8 space-y-4">
        <h3 className="font-headline-md text-headline-md text-primary">{event.title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">{event.desc}</p>
        <Button variant="outline" size="sm" href="/contacto">Solicitar propuesta</Button>
    </div>
  </article>
  );
}

export function EventosEnhanced() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden" id="eventos">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs_lHAB4muz6cDOo9lvynizkDTH1CgalcFeyKmsqkdiaR8WZgqobcLNrItKD7zq4_Mui0cwS3iRKZtIs7MRrzb9nLGR5WomfbNdAm8NDd1FWF42yf8GDEStVpaqh6X7ZUlT62bjBsuxoj3eAekczOCVQVrpVVdH6Kjbf9bm044sb4rcxdG0vo6rvTK1Od3xEPa1HKr3CgHdqhKux-EDAN3jYpVCEAJNXEML8R_265RYfhU0UjaB7HxHKu0W8oIQ7qgXB5xzt_11UQl"
          alt="Eventos privados"
          className="absolute inset-0 w-full h-full object-cover"
          data-icon="celebration"
          data-alt="Event venue interior"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 text-center px-margin-mobile">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Exclusividad & Gastronomía</span>
          <h1 className="font-display-lg text-display-lg text-on-surface mt-6 gold-gradient-text">Eventos privados</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-8 leading-relaxed">
            Transformamos sus momentos más significativos en experiencias gastronómicas únicas. Cada evento es una obra de arte efímera, diseñada exclusivamente para usted.
        </p>
      </div>
    </section>

      {/* Bento Grid 2x2 */}
      <section className="py-xxl px-margin-desktop max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventTypes.map((event, i) => (
            <BentoCard key={event.title} event={event} index={i} />
          ))}
      </div>
    </section>

      {/* Quote Divider */}
      <section className="py-xxl bg-surface-container-highest/30">
        <div className="max-w-4xl mx-auto px-margin-mobile text-center reveal-on-scroll">
          <span className="material-symbols-outlined text-primary text-[80px] mb-6 opacity-40" data-icon="format_quote">format_quote</span>
          <blockquote className="font-headline-md text-headline-md text-on-surface italic font-serif leading-relaxed">
            "La elegancia es la única belleza que nunca se marchita, y en Provenance, cada evento es una obra de arte efímera."
        </blockquote>
          <cite className="block mt-6 font-label-sm text-label-sm text-primary uppercase tracking-[0.3em] not-italic">— Dirección Creativa</cite>
      </div>
    </section>

      {/* CTA Section */}
      <section className="py-xxl px-margin-desktop bg-background-dark text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Hablemos de su próximo evento</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-8 leading-relaxed">
            Cada detalle importa. Le acompañamos en el diseño de una experiencia completamente personalizada.
        </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a className="font-body-lg text-body-lg text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors" href="mailto:eventos@provenance.com">
              eventos@provenance.com
          </a>
            <span className="hidden md:inline text-outline-variant">|</span>
            <a className="font-body-lg text-body-lg text-primary border-b border-primary pb-1 hover:text-primary-fixed transition-colors" href="tel:+34912345678">
              +34 912 345 678
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
