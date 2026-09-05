"use client";
import { useEffect, useRef, useState } from "react";
import { Tabs } from "@/components/ui/Tabs";
import { Button } from "@/components/ui/Button";

interface Dish {
  name: string;
  desc: string;
  price: string;
  src: string;
  tag: "Carta" | "Degustación" | "Maridaje" | "Temporada" | "Signature" | "Limited";
  category: "degustacion" | "carta" | "maridaje";
}

const dishes: Dish[] = [
  { name: "Esencia de Bosque", desc: "Hongos silvestres, trufa negra y reducción de vino tinto envejecido.", price: "€42", src: "https://lh3.googleusercontent.com/aida/AP1WRLu2jOthCv042ojaDOMYxVsHKunML0F2V2Ut6KxpH_7ghnRLiKN5l9pxAp11EvqlN8-7q-6zlkDj6CtJprsyPlVLrLYME-4DE5uCxOOT_1WDLSYxRmrRvGdrigB5FnMYS86pjYVktrohUkz9XuZWdBRD3K6UIhheP_NUwjPJzhTEmxLfbp9Gp2LEj9OmbFkG04IEOa2kB-QRD7wuQClCV72_5t7XNIXIaukswjTA1q0jUnHHiJYIiLP4qs0", tag: "Signature", category: "degustacion" },
  { name: "Marea Abisal", desc: "Bogavante azul a la brasa, beurre blanc de erizo de mar y caviar beluga.", price: "€58", src: "https://lh3.googleusercontent.com/aida/AP1WRLuNA-b1V1tgTHAP2MHTs5eFjfXvrQfmch9hsf4vnH-fusQvoxZ6atwc470H8U6IGf5uaJTTD6FQRvV_PqrA_r9gGAyfEx7xOsXmPUDgMAPfnpjvE76O-JFgME-RZfAsUxovAv616K_kZv1p_8B5nSm3qPgnxU1fSYxefX2-tSA5u3PkE_glDqUkmhcYUTAsri3oLIGZEuuFca-N36PI4ubFzwdJ4kX_ZQxTTF0sRvjF-msrWTqqNhVh5LDY", tag: "Seasonal", category: "carta" },
  { name: "Diamante Negro", desc: "Wagyu A5 sellado, reducción de Oporto y raíces de temporada glaseadas.", price: "€48", src: "https://lh3.googleusercontent.com/aida/AP1WRLtNbuK4Pd92lHev0OljpkR3ZoSHHX5n3c07j6AD4M_hkLlkRNHg26EoN_3mYAUolMLb3CQ5ny8Sgo-UFZzDN_WiqA9TUjttPe-Dqqn4VCHig2al3w5LGR9YHiuNDf6llrJpdPEhb79IjI871gxS3nZzSFEERrj8PNWdzli1y3Ecq4_TYGqFoESV66UycxFOPFkb-N4_uU6EJE2YwgVisq1saGmnqf0Yxnd8ZHFZiWf26F2_Cygk-_xofnAJ", tag: "Signature", category: "carta" },
  { name: "Herencia Ganadera", desc: "Solomillo de res madurada 45 días, tuétano grillado y demi-glace de verduras.", price: "€75", src: "https://lh3.googleusercontent.com/aida/AP1WRLtqRjW9lswyMXtVuw4y6aGP1qqchuzr20hSIiv-iIIF23noN1aTM-PLZTOuCU72CDKS1Tgl9otB4WrCVSymxv_EWv9g6rm5rmtRINVBeGPkxOzrq2qQujZj31oXLMRUSnVaipsMewnJlSzU5_VQmeVjJ_iSwqBWFxJUc85rN7AdVYPKUoWI16u13DEj7uMJUfrggm568NgDLZ0-N0EXQgGtTyRyqBqc5vZtgFUGQiDaedpKscJ03XSb4hiD", tag: "Limited", category: "carta" },
  { name: "Texturas de Cacao", desc: "Crujiente de chocolate 70%, ganache ahumada y sorbete de frutos rojos.", price: "€22", src: "https://lh3.googleusercontent.com/aida/AP1WRLtykP61G7OtulBwNyHBq_dhcVzOD233AfNaJAMawnj228ZvW2my61v2Uz-vqmsdyuKtXldv7VPe-CTfUyW8qiNV3Z_8jF_6W92gknA4PsNkguekKLa0lGT7oEy6X_ObCv7qFnLZYhaEnmEDifLYV6_s9McXgGfLbDHSPy8yD2Sizgg2Tz85J2RrdZrGDffWnpfoUJFCXbrXxo4UR4dtqUZVIBoQG2hMPCaem8-Kggy9K__F9rlAKCH5vCLn", tag: "Carta", category: "carta" },
  { name: "Maridaje de Autor", desc: "Selección de 4 vinos de la casa armonizados con cada estación del menú degustación.", price: "€85", src: "https://lh3.googleusercontent.com/aida/AP1WRLsFnllbFSUH9xqiu2d18w1KOpgwRHgtdpT6ciH8mrJP55gyMGc_sZBSLfv8S3UOQO8daNi9xOrlCGQg9uGOeVWNU8JPiuNnrZq7NKRuD-UQv77mylpOC3VfWxwVNWFvidudsUxSnvJJ3_ah8z94AhxDzBFQEztVzg4SySl4uVK5EWb3oYCzxNtjYJqxfMebWDeME1hXl6iBNbz46_5qn0B281odYElRPIbG3FQljNeZ5Gr-eUODonZtSmqI", tag: "Maridaje", category: "maridaje" },
  { name: "Atardecer en la Mancha", desc: "Queso manchego curado, membrillo artesanal y vino dulce de la tierra.", price: "€32", src: "https://lh3.googleusercontent.com/aida/AP1WRLu3wJTukypmLXyutSt_ykoNZW9MFrot0P9dKwxU4GRS3Ccd4TqNhe_uhKan6X_T83zQzwFAJyMaIy-yDCfJx-E2YvFUiXIB4al5wx8n5UT4p4upKPkzPElFCEii9uAtG5Cgc2mhWYBAXHPO8H531FvFD_Ov1uuomm2CBOnH5DiBDdLzdEhf7LMQy2VF51D2prQTuZfbEybqKcCl7U7pwfQ-ohU1F0B-4Yv-_RqMYHF9fdl9XOh-v_K9-UEC", tag: "Temporada", category: "degustacion" },
  { name: "Esencia Líquida", desc: "Coctel de autor con ginebra premium, cítricos mediterráneos y notas herbales.", price: "€24", src: "https://lh3.googleusercontent.com/aida/AP1WRLvNGFAhN-uyQfpDPNNVfLJRVz5r1mTlj1uJWMB_8LB3QRcGJoI43LL6lew6APzJ0Mj-yfzVLaL63GclhOwjywdZ1IoIcxB8oQuwZujN_W_OrGabsqytWoSLx11EAiE2WHECFKn_Ox5AHOLUZK2y4dQ00D4szADUB4TxnVcfs8SGc7BcxOrFqQ5LUfKBmHEZQMSHlgFkrUOwEfcChVAZWeb7vh_keNiYZdnIBgwZw_TMUBik18A-Z7hHgbhC", tag: "Maridaje", category: "maridaje" },
];

function DishCard({ dish, index }: { dish: Dish; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("active"), index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const badgeColor = {
    Signature: "bg-primary text-on-primary",
    Seasonal: "bg-primary-container text-on-primary-container",
    Limited: "bg-surface-container-high text-primary",
    Carta: "bg-surface-container text-on-surface-variant",
    Degustación: "bg-primary/20 text-primary",
    Maridaje: "bg-primary/20 text-primary",
    Temporada: "bg-surface-container-highest text-primary/80",
  }[dish.tag] || "bg-surface-container text-on-surface-variant";

  return (
    <div
      ref={ref}
      className="card-reveal group relative overflow-hidden border-gold-faded"
      data-category={dish.category}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={dish.src}
          alt={dish.name}
          className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 card-zoom-image transition-all duration-700"
          data-icon="restaurant"
          data-alt={dish.name}
        />
        <div className="menu-card-overlay" />
        <div className={`absolute top-4 left-4 ${badgeColor} px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest`}>
          {dish.tag}
       </div>
        <span className="material-symbols-outlined absolute top-4 right-4 text-on-primary opacity-0 group-hover:opacity-100 transition-opacity" data-icon="add_circle">add_circle</span>
     </div>
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-headline-md text-headline-md text-on-surface">{dish.name}</h3>
          <span className="font-mono text-label-md text-primary whitespace-nowrap">{dish.price}</span>
       </div>
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">{dish.desc}</p>
     </div>
   </div>
  );
}

function CTACard() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="card-reveal bg-primary p-12 flex flex-col items-center justify-center text-center text-on-primary-container min-h-[400px]"
    >
      <span className="material-symbols-outlined text-[64px] mb-6" data-icon="restaurant_menu">restaurant_menu</span>
      <h3 className="font-headline-lg text-headline-lg uppercase tracking-widest mb-4">¿Busca una experiencia privada?</h3>
      <p className="font-body-md text-body-md mb-8 max-w-xs">Reservamos el salón exclusivamente para usted y sus invitados</p>
      <Button variant="outline" size="md" href="/reservar" className="border-on-primary-container text-on-primary-container hover:bg-on-primary-container hover:text-primary">
        Reservar ahora
     </Button>
   </div>
  );
}

function DishGrid({ category }: { category: "degustacion" | "carta" | "maridaje" }) {
  const filtered = dishes.filter((d) => d.category === category);
  if (category === "carta") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((d, i) => <DishCard key={d.name} dish={d} index={i} />)}
        <CTACard />
     </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filtered.map((d, i) => <DishCard key={d.name} dish={d} index={i} />)}
   </div>
  );
}

export function FullMenu() {
  return (
    <Tabs
      tabs={[
        { id: "degustacion", label: "Degustación" },
        { id: "carta", label: "Carta" },
        { id: "maridaje", label: "Maridaje" },
      ]}
      defaultTab="degustacion"
    >
      <DishGrid category="degustacion" />
      <DishGrid category="carta" />
      <DishGrid category="maridaje" />
   </Tabs>
  );
}
