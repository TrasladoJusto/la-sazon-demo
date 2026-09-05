"use client";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-xxl w-full max-w-screen-2xl mx-auto">
        {/* Column 1: Brand */}
        <div className="space-y-6">
          <div className="font-headline-md text-headline-md text-primary-fixed uppercase tracking-widest">PROVENANCE</div>
          <p className="font-body-md text-body-md text-on-surface-variant pr-8">La excelencia gastronómica nacida de la tierra y la memoria.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary-fixed cursor-pointer" data-icon="public">public</span>
            <span className="material-symbols-outlined text-primary-fixed cursor-pointer" data-icon="share">share</span>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="space-y-4">
          <p className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest">Navegación</p>
          <ul className="space-y-2">
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#experiencia">Experiencia</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#menu">Menú</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#chef">Chef</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#galeria">Galería</a></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="space-y-4">
          <p className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest">Legal</p>
          <ul className="space-y-2">
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#">Aviso Legal</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#">Privacidad</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#">Cookies</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md" href="#">Contacto</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-4">
          <p className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest">Newsletter</p>
          <p className="font-body-md text-body-md text-on-surface-variant">Suscríbete para novedades exclusivas.</p>
          <div className="flex border-b border-outline-variant">
            <input className="bg-transparent border-none focus:ring-0 text-on-surface w-full py-2 placeholder:text-outline-variant" placeholder="Tu email" type="email" />
            <button className="material-symbols-outlined text-primary-fixed" data-icon="arrow_forward">arrow_forward</button>
          </div>
        </div>
      </div>

      <div className="px-margin-desktop py-8 border-t border-outline-variant/10 text-center">
        <p className="font-label-sm text-label-sm text-on-surface-variant">© 2025 PROVENANCE RESTAURANT. TODOS LOS DERECHOS RESERVADOS.<span className="sr-only"> All rights reserved.</span></p>
      </div>
    </footer>
  );
}
