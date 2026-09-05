"use client";
import { SectionReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function ChefSection() {
  return (
    <section className="py-xxl px-margin-desktop max-w-screen-2xl mx-auto" id="chef">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xxl items-center">
        <div className="reveal order-2 md:order-1 space-y-8 px-lg">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em]">El Visionario</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Adrián Castillo</h2>
          <div className="w-20 h-[1px] bg-primary"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Formado en las cocinas más prestigiosas del mundo, Adrián Castillo regresa a sus raíces para liderar PROVENANCE. Su cocina es un ejercicio de contención y elegancia, donde el exceso se sacrifica en favor de la pureza del sabor.
          </p>
          <p className="font-headline-md italic text-primary font-serif">
            "La cocina es memoria hecha sabor. No buscamos solo alimentar, buscamos evocar un momento detenido en el tiempo."
          </p>
        </div>
        <div className="reveal order-1 md:order-2 h-[700px] overflow-hidden">
          <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVQRwHATfgRwy6EJS4vRL2yOt-FGzLUU9sHZeLXrTLFUUQw9RKWdUQWXwc02u9upQtTmNXbReNekZ1ibomhqnqZL-rEM8JCX9mZ2UBV9BBZzcw5Xq4k0j9weo8QfBeTHpAk9nY02lIrAxjCkr-EyOVyDUIfH368kBDvktgdp3oqRMw1jyRcl7Iu6jJPctPCHaQB4ysWcLws_nuPdQt8dxNbXV3LYg3yGE6T4HnLtg80FnBSaWQAUfEBGuA9296SmbM6mhFZdoHY5LR" alt="Chef Adrián Castillo" />
        </div>
      </div>
    </section>
  );
}
