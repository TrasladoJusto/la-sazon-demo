import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10" role="contentinfo">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter px-margin-desktop py-xxl max-w-[1280px] mx-auto">
        <div className="space-y-md">
          <div className="font-headline-md text-headline-md text-primary tracking-widest">PROVENANCE</div>
          <p className="text-on-surface-variant text-body-md max-w-xs">La excelencia gastronómica nacida de la tierra y la memoria.</p>
          <div className="flex gap-4 pt-md">
            <span className="material-symbols-outlined text-primary cursor-pointer" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>public</span>
            <span className="material-symbols-outlined text-primary cursor-pointer" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>share</span>
          </div>
        </div>
        <div>
          <h5 className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-lg">Experiencia</h5>
          <ul className="space-y-sm">
            <li><a href="#experiencia" className="text-on-surface-variant hover:text-primary transition-colors font-label-md">Experiencia</a></li>
            <li><a href="#menu" className="text-on-surface-variant hover:text-primary transition-colors font-label-md">Menú</a></li>
            <li><a href="#chef" className="text-on-surface-variant hover:text-primary transition-colors font-label-md">Chef</a></li>
            <li><a href="#galeria" className="text-on-surface-variant hover:text-primary transition-colors font-label-md">Galería</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-lg">Legal</h5>
          <ul className="space-y-sm">
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-label-md">Privacidad</a></li>
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-label-md">Términos</a></li>
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-label-md">Aviso legal</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-lg">Newsletter</h5>
          <p className="text-on-surface-variant text-body-md mb-md">Suscríbase para recibir noticias sobre nuestros menús de temporada.</p>
          <div className="flex border-b border-outline-variant">
            <input className="bg-transparent border-none focus:ring-0 text-on-surface font-body-md placeholder:text-outline/50 w-full py-sm uppercase tracking-wider" placeholder="EMAIL" type="email" />
            <button className="ml-3 text-primary hover:text-white transition-colors"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>arrow_forward</span></button>
          </div>
        </div>
      </div>
      <div className="px-margin-desktop py-lg border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-md max-w-[1280px] mx-auto">
        <p className="font-label-sm text-on-surface-variant uppercase tracking-widest text-[10px]">© 2025 PROVENANCE. Todos los derechos reservados.</p>
        <span className="font-label-sm text-outline/40 uppercase tracking-widest text-[10px]">Gastronomía de Origen</span>
      </div>
    </footer>
  );
}
