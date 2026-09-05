"use client";
import { SectionReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

const dishes = [
  { name: "Vieira Imperial", desc: "Lámina de oro de 24k, espuma de mar y esencia de trufa blanca de temporada.", price: "34€", src: "https://lh3.googleusercontent.com/aida/AP1WRLu2jOthCv042ojaDOMYxVsHKunML0F2V2Ut6KxpH_7ghnRLiKN5l9pxAp11EvqlN8-7q-6zlkDj6CtJprsyPlVLrLYME-4DE5uCxOOT_1WDLSYxRmrRvGdrigB5FnMYS86pjYVktrohUkz9XuZWdBRD3K6UIhheP_NUwjPJzhTEmxLfbp9Gp2LEj9OmbFkG04IEOa2kB-QRD7wuQClCV72_5t7XNIXIaukswjTA1q0jUnHHiJYIiLP4qs0", tag: "Degustación" },
  { name: "Wagyu A5", desc: "Corte seleccionado, reducción de Oporto y raíces de invierno glaseadas.", price: "68€", src: "https://lh3.googleusercontent.com/aida/AP1WRLtNbuK4Pd92lHev0OljpkR3ZoSHHX5n3c07j6AD4M_hkLlkRNHg26EoN_3mYAUolMLb3CQ5ny8Sgo-UFZzDN_WiqA9TUjttPe-Dqqn4VCHig2al3w5LGR9YHiuNDf6llrJpdPEhb79IjI871gxS3nZzSFEERrj8PNWdzli1y3Ecq4_TYGqFoESV66UycxFOPFkb-N4_uU6EJE2YwgVisq1saGmnqf0Yxnd8ZHFZiWf26F2_Cygk-_xofnAJ", tag: "Carta" },
  { name: "Jardín de Invierno", desc: "Verduras de nuestra huerta, emulsión de clorofila y tierra de setas.", price: "28€", src: "https://lh3.googleusercontent.com/aida/AP1WRLtqRjW9lswyMXtVuw4y6aGP1qqchuzr20hSIiv-iIIF23noN1aTM-PLZTOuCU72CDKS1Tgl9otB4WrCVSymxv_EWv9g6rm5rmtRINVBeGPkxOzrq2qQujZj31oXLMRUSnVaipsMewnJlSzU5_VQmeVjJ_iSwqBWFxJUc85rN7AdVYPKUoWI16u13DEj7uMJUfrggm568NgDLZ0-N0EXQgGtTyRyqBqc5vZtgFUGQiDaedpKscJ03XSb4hiD", tag: "Vegetariano" },
  { name: "Texturas de Cacao", desc: "Crujiente de 70%, ganache ahumada y sorbete de frutos rojos.", price: "18€", src: "https://lh3.googleusercontent.com/aida/AP1WRLtykP61G7OtulBwNyHBq_dhcVzOD233AfNaJAMawnj228ZvW2my61v2Uz-vqmsdyuKtXldv7VPe-CTfUyW8qiNV3Z_8jF_6W92gknA4PsNkguekKLa0lGT7oEy6X_ObCv7qFnLZYhaEnmEDifLYV6_s9McXgGfLbDHSPy8yD2Sizgg2Tz85J2RrdZrGDffWnpfoUJFCXbrXxo4UR4dtqUZVIBoQG2hMPCaem8-Kggy9K__F9rlAKCH5vCLn", tag: "Postre" },
  { name: "Trufa del Piamonte", desc: "Suplemento de trufa fresca laminada en mesa sobre platos seleccionados.", price: "Mkt", src: "https://lh3.googleusercontent.com/aida/AP1WRLuNA-b1V1tgTHAP2MHTs5eFjfXvrQfmch9hsf4vnH-fusQvoxZ6atwc470H8U6IGf5uaJTTD6FQRvV_PqrA_r9gGAyfEx7xOsXmPUDgMAPfnpjvE76O-JFgME-RZfAsUxovAv616K_kZv1p_8B5nSm3qPgnxU1fSYxefX2-tSA5u3PkE_glDqUkmhcYUTAsri3oLIGZEuuFca-N36PI4ubFzwdJ4kX_ZQxTTF0sRvjF-msrWTqqNhVh5LDY", tag: "Temporada" },
];

export function MenuCarousel() {
  return (
    <section className="py-xxl bg-surface-container-lowest overflow-hidden" id="menu">
      <div className="px-margin-desktop max-w-screen-2xl mx-auto mb-16">
        <h2 className="reveal font-headline-lg text-headline-lg text-on-surface">Nuestra carta</h2>
      </div>
      <div className="flex overflow-x-auto no-scrollbar gap-gutter px-margin-desktop pb-12 cursor-grab active:cursor-grabbing" id="menu-scroll">
        {dishes.map((dish, index) => (
          <div key={index} className="flex-none w-[350px] luxury-card bg-surface p-4 reveal card-container card-interactive" data-category={dish.tag.toLowerCase()}>
            <div className="h-[400px] overflow-hidden mb-6">
              <img src={dish.src} alt={dish.name} className="w-full h-full object-cover card-zoom-image" data-icon="restaurant" data-alt={dish.name} />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="font-headline-md text-headline-md text-primary">{dish.name}</h3>
                <span className="font-mono text-label-sm text-primary">{dish.price}</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">{dish.desc}</p>
              <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-tighter border border-outline-variant text-outline-variant font-label-sm">{dish.tag}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="outline" size="md" href="#">Ver carta completa</Button>
      </div>
    </section>
  );
}
