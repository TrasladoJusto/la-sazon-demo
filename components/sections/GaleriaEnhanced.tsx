"use client";
import { useState, useEffect } from "react";
import { Lightbox, GalleryImage } from "@/components/ui/Lightbox";

const galleryImages: GalleryImage[] = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs_lHAB4muz6cDOo9lvynizkDTH1CgalcFeyKmsqkdiaR8WZgqobcLNrItKD7zq4_Mui0cwS3iRKZtIs7MRrzb9nLGR5WomfbNdAm8NDd1FWF42yf8GDEStVpaqh6X7ZUlT62bjBsuxoj3eAekczOCVQVrpVVdH6Kjbf9bm044sb4rcxdG0vo6rvTK1Od3xEPa1HKr3CgHdqhKux-EDAN3jYpVCEAJNXEML8R_265RYfhU0UjaB7HxHKu0W8oIQ7qgXB5xzt_11UQl", alt: "Luxury restaurant interior at twilight", category: "sala" },
  { src: "https://lh3.googleusercontent.com/aida/AP1WRLuNA-b1V1tgTHAP2MHTs5eFjfXvrQfmch9hsf4vnH-fusQvoxZ6atwc470H8U6IGf5uaJTTD6FQRvV_PqrA_r9gGAyfEx7xOsXmPUDgMAPfnpjvE76O-JFgME-RZfAsUxovAv616K_kZv1p_8B5nSm3qPgnxU1fSYxefX2-tSA5u3PkE_glDqUkmhcYUTAsri3oLIGZEuuFca-N36PI4ubFzwdJ4kX_ZQxTTF0sRvjF-msrWTqqNhVh5LDY", alt: "Fresh black winter truffles macro shot", category: "platos" },
  { src: "https://lh3.googleusercontent.com/aida/AP1WRLtNbuK4Pd92lHev0OljpkR3ZoSHHX5n3c07j6AD4M_hkLlkRNHg26EoN_3mYAUolMLb3CQ5ny8Sgo-UFZzDN_WiqA9TUjttPe-Dqqn4VCHig2al3w5LGR9YHiuNDf6llrJpdPEhb79IjI871gxS3nZzSFEERrj8PNWdzli1y3Ecq4_TYGqFoESV66UycxFOPFkb-N4_uU6EJE2YwgVisq1saGmnqf0Yxnd8ZHFZiWf26F2_Cygk-_xofnAJ", alt: "Premium Wagyu beef course", category: "platos" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOBr4H0Zq0d1JeFOS_Ns2FwFN2pwtCBqvMA-wV6qGl1GL7n5NdolpBTqLIe-VIMRgyAksrKDweIOMCnIRPf56DLkc_wrrSTteHWOJXTI0SEgtT7mDtjFjzEgqHKhCKi5HKFuFKFm76aMHHcAy7rAqN2z0JCJed40dfOhWhZCjl1JWnqJPBck_jO_hvQfgR6veX-gC8RiNB-Gb_kU8S5Ht5x8z1q2vS6zwlf4VtiyE9DVUgqwCeKl8h3ho1_kVDb-KlZQJHYarf9CHX", alt: "Wine cellar with rare bottles", category: "bodega" },
  { src: "https://lh3.googleusercontent.com/aida/AP1WRLtykP61G7OtulBwNyHBq_dhcVzOD233AfNaJAMawnj228ZvW2my61v2Uz-vqmsdyuKtXldv7VPe-CTfUyW8qiNV3Z_8jF_6W92gknA4PsNkguekKLa0lGT7oEy6X_ObCv7qFnLZYhaEnmEDifLYV6_s9McXgGfLbDHSPy8yD2Sizgg2Tz85J2RrdZrGDffWnpfoUJFCXbrXxo4UR4dtqUZVIBoQG2hMPCaem8-Kggy9K__F9rlAKCH5vCLn", alt: "Elegant chocolate dessert with gold leaf", category: "platos" },
  { src: "https://lh3.googleusercontent.com/aida/AP1WRLtqRjW9lswyMXtVuw4y6aGP1qqchuzr20hSIiv-iIIF23noN1aTM-PLZTOuCU72CDKS1Tgl9otB4WrCVSymxv_EWv9g6rm5rmtRINVBeGPkxOzrq2qQujZj31oXLMRUSnVaipsMewnJlSzU5_VQmeVjJ_iSwqBWFxJUc85rN7AdVYPKUoWI16u13DEj7uMJUfrggm568NgDLZ0-N0EXQgGtTyRyqBqc5vZtgFUGQiDaedpKscJ03XSb4hiD", alt: "Minimalist vegetarian dish", category: "platos" },
  { src: "https://lh3.googleusercontent.com/aida/AP1WRLuNAFTNyG07GQ17qKfd-_GnqR3UxPLPLSc1BL-sbkbyuN4-SFo3YAx8FSTz46IOHkHiH6Kv5JDphb1e1ea4AOE9UKF5_qLr2Z-VjgrMCTQDbS_V45E43VVuMHQ4PDB5HtvyjfWk_xPddZ_OiC1gqBd7TLQBSUdrSNXCli6YGtWkngn5SePHNCuIrlWIci07cjwWeBYFhXfmwDWGSufScMVV9J1d_EDn797czBpD4o2mJX34bMqZtfuy_GpJ", alt: "Cinematic kitchen action", category: "detalles" },
  { src: "https://lh3.googleusercontent.com/aida/AP1WRLu2jOthCv042ojaDOMYxVsHKunML0F2V2Ut6KxpH_7ghnRLiKN5l9pxAp11EvqlN8-7q-6zlkDj6CtJprsyPlVLrLYME-4DE5uCxOOT_1WDLSYxRmrRvGdrigB5FnMYS86pjYVktrohUkz9XuZWdBRD3K6UIhheP_NUwjPJzhTEmxLfbp9Gp2LEj9OmbFkG04IEOa2kB-QRD7wuQClCV72_5t7XNIXIaukswjTA1q0jUnHHiJYIiLP4qs0", alt: "Gourmet seafood with gold leaf", category: "platos" },
  { src: "https://lh3.googleusercontent.com/aida/AP1WRLsFnllbFSUH9xqiu2d18w1KOpgwRHgtdpT6ciH8mrJP55gyMGc_sZBSLfv8S3UOQO8daNi9xOrlCGQg9uGOeVWNU8JPiuNnrZq7NKRuD-UQv77mylpOC3VfWxwVNWFvidudsUxSnvJJ3_ah8z94AhxDzBFQEztVzg4SySl4uVK5EWb3oYCzxNtjYJqxfMebWDeME1hXl6iBNbz46_5qn0B281odYElRPIbG3FQljNeZ5Gr-eUODonZtSmqI", alt: "Wine cellar interior atmosphere", category: "ambiente" },
];

const categories = [
  { id: "todos", label: "Todos" },
  { id: "platos", label: "Platos" },
  { id: "sala", label: "Sala" },
  { id: "detalles", label: "Detalles" },
  { id: "bodega", label: "Bodega" },
  { id: "ambiente", label: "Ambiente" },
];

export function GaleriaEnhanced() {
  const [filter, setFilter] = useState("todos");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = filter === "todos"
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  const indices: number[] = [];
  let ci = 0;
  galleryImages.forEach((img, i) => {
    if (filter === "todos" || img.category === filter) {
      indices.push(i);
      ci++;
    }
  });

  const spanPattern = ["masonry-item-large", "", "masonry-item-tall", "", "", "masonry-item-wide", "", "masonry-item-tall", ""];

  return (
    <section className="py-xxl px-margin-desktop max-w-screen-2xl mx-auto" id="galeria">
      <div className="text-center mb-16">
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Crónicas Visuales</span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface mt-6 gold-gradient-text">Galería</h1>
        <div className="w-20 h-[1px] bg-primary mx-auto mt-6" />
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-8 leading-relaxed">
          Un recorrido visual por nuestra herencia culinaria, donde cada imagen cuenta una historia de procedencia y maestría.
      </p>
    </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            data-category={cat.id}
            className={`font-label-sm text-label-sm uppercase tracking-widest px-4 py-2 transition-all duration-300 border-b-2 ${
              filter === cat.id
                ? "text-primary border-primary"
                : "text-on-surface-variant border-transparent hover:text-primary hover:border-primary/50"
            }`}
          >
            {cat.label}
      </button>
        ))}
   </div>

      {/* Masonry Grid */}
      <div className="masonry-grid">
        {filtered.map((img, idx) => {
          const realIdx = galleryImages.indexOf(img);
          const span = spanPattern[idx % spanPattern.length] || "";
          return (
            <button
              key={img.src}
              className={`relative group overflow-hidden cursor-zoom-in bg-surface-container ${span}`}
              onClick={() => setLightboxIdx(realIdx)}
              data-category={img.category}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-icon="photo"
                data-alt={img.alt}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[48px] opacity-0 group-hover:opacity-100 transition-opacity" data-icon="visibility">visibility</span>
         </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-dark/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest">{img.alt}</p>
         </div>
       </button>
          );
        })}
   </div>

      <Lightbox
        images={galleryImages}
        openIndex={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
      />
 </section>
  );
}
