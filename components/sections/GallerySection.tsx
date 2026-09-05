"use client";
import { SectionReveal } from "@/components/animations/ScrollReveal";

export function GallerySection() {
  return (
    <section className="py-xxl bg-surface" id="galeria">
      <div className="px-margin-desktop max-w-screen-2xl mx-auto mb-16 text-center">
        <h2 className="reveal font-headline-lg text-headline-lg text-primary mb-8">Galería</h2>
        <div className="flex justify-center gap-8 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant reveal">
          <span className="text-primary border-b border-primary cursor-pointer">Todos</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Sala</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Platos</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Bodega</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-margin-desktop max-w-screen-2xl mx-auto h-[900px]">
        <div className="col-span-2 row-span-2 relative group overflow-hidden reveal">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs_lHAB4muz6cDOo9lvynizkDTH1CgalcFeyKmsqkdiaR8WZgqobcLNrItKD7zq4_Mui0cwS3iRKZtIs7MRrzb9nLGR5WomfbNdAm8NDd1FWF42yf8GDEStVpaqh6X7ZUlT62bjBsuxoj3eAekczOCVQVrpVVdH6Kjbf9bm044sb4rcxdG0vo6rvTK1Od3xEPa1HKr3CgHdqhKux-EDAN3jYpVCEAJNXEML8R_265RYfhU0UjaB7HxHKu0W8oIQ7qgXB5xzt_11UQl" alt="Luxury restaurant interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[48px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>fullscreen</span>
          </div>
        </div>
        <div className="relative group overflow-hidden reveal"><img src="https://lh3.googleusercontent.com/aida/AP1WRLuNA-b1V1tgTHAP2MHTs5eFjfXvrQfmch9hsf4vnH-fusQvoxZ6atwc470H8U6IGf5uaJTTD6FQRvV_PqrA_r9gGAyfEx7xOsXmPUDgMAPfnpjvE76O-JFgME-RZfAsUxovAv616K_kZv1p_8B5nSm3qPgnxU1fSYxefX2-tSA5u3PkE_glDqUkmhcYUTAsri3oLIGZEuuFca-N36PI4ubFzwdJ4kX_ZQxTTF0sRvjF-msrWTqqNhVh5LDY" alt="Truffles" className="w-full h-full object-cover" /></div>
        <div className="relative group overflow-hidden reveal"><img src="https://lh3.googleusercontent.com/aida/AP1WRLtNbuK4Pd92lHev0OljpkR3ZoSHHX5n3c07j6AD4M_hkLlkRNHg26EoN_3mYAUolMLb3CQ5ny8Sgo-UFZzDN_WiqA9TUjttPe-Dqqn4VCHig2al3w5LGR9YHiuNDf6llrJpdPEhb79IjI871gxS3nZzSFEERrj8PNWdzli1y3Ecq4_TYGqFoESV66UycxFOPFkb-N4_uU6EJE2YwgVisq1saGmnqf0Yxnd8ZHFZiWf26F2_Cygk-_xofnAJ" alt="Wagyu" className="w-full h-full object-cover" /></div>
        <div className="row-span-2 relative group overflow-hidden reveal"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOBr4H0Zq0d1JeFOS_Ns2FwFN2pwtCBqvMA-wV6qGl1GL7n5NdolpBTqLIe-VIMRgyAksrKDweIOMCnIRPf56DLkc_wrrSTteHWOJXTI0SEgtT7mDtjFjzEgqHKhCKi5HKFuFKFm76aMHHcAy7rAqN2z0JCJed40dfOhWhZCjl1JWnqJPBck_jO_hvQfgR6veX-gC8RiNB-Gb_kU8S5Ht5x8z1q2vS6zwlf4VtiyE9DVUgqwCeKl8h3ho1_kVDb-KlZQJHYarf9CHX" alt="Wine cellar" className="w-full h-full object-cover" /></div>
        <div className="relative group overflow-hidden reveal"><img src="https://lh3.googleusercontent.com/aida/AP1WRLtykP61G7OtulBwNyHBq_dhcVzOD233AfNaJAMawnj228ZvW2my61v2Uz-vqmsdyuKtXldv7VPe-CTfUyW8qiNV3Z_8jF_6W92gknA4PsNkguekKLa0lGT7oEy6X_ObCv7qFnLZYhaEnmEDifLYV6_s9McXgGfLbDHSPy8yD2Sizgg2Tz85J2RrdZrGDffWnpfoUJFCXbrXxo4UR4dtqUZVIBoQG2hMPCaem8-Kggy9K__F9rlAKCH5vCLn" alt="Dessert" className="w-full h-full object-cover" /></div>
        <div className="relative group overflow-hidden reveal"><img src="https://lh3.googleusercontent.com/aida/AP1WRLtqRjW9lswyMXtVuw4y6aGP1qqchuzr20hSIiv-iIIF23noN1aTM-PLZTOuCU72CDKS1Tgl9otB4WrCVSymxv_EWv9g6rm5rmtRINVBeGPkxOzrq2qQujZj31oXLMRUSnVaipsMewnJlSzU5_VQmeVjJ_iSwqBWFxJUc85rN7AdVYPKUoWI16u13DEj7uMJUfrggm568NgDLZ0-N0EXQgGtTyRyqBqc5vZtgFUGQiDaedpKscJ03XSb4hiD" alt="Vegetarian" className="w-full h-full object-cover" /></div>
      </div>
    </section>
  );
}
