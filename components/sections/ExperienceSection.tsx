"use client";
import { SectionReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function ExperienceSection() {
  return (
    <section className="py-xxl px-margin-desktop max-w-screen-2xl mx-auto" id="experiencia">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xxl items-center">
        <div className="reveal relative h-[600px] overflow-hidden group">
          <div className="absolute inset-0 bg-background-dark/20 z-10"></div>
          <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AP1WRLuNAFTNyG07GQ17qKfd-_GnqR3UxPLPLSc1BL-sbkbyuN4-SFo3YAx8FSTz46IOHkHiH6Kv5JDphb1e1ea4AOE9UKF5_qLr2Z-VjgrMCTQDbS_V45E43VVuMHQ4PDB5HtvyjfWk_xPddZ_OiC1gqBd7TLQBSUdrSNXCli6YGtWkngn5SePHNCuIrlWIci07cjwWeBYFhXfmwDWGSufScMVV9J1d_EDn797czBpD4o2mJX34bMqZtfuy_GpJ" alt="Cinematic kitchen shot" />
        </div>
        <div className="reveal space-y-8 px-lg">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">Concepto</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Nuestra provenancia</h2>
          <div className="w-20 h-[1px] bg-primary"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
            Entendemos la cocina como un diálogo honesto con la tierra. Cada ingrediente que llega a PROVENANCE posee una historia propia, una trazabilidad impecable y un carácter forjado por su origen.
            <br /><br />
            Nuestra filosofía se basa en el respeto absoluto al producto de temporada, elevándolo mediante técnicas clásicas y una visión contemporánea que honra el terroir madrileño y sus alrededores.
          </p>
          <Button variant="ghost" size="md" href="#menu">DESCUBRIR EL MENÚ</Button>
        </div>
      </div>
    </section>
  );
}
