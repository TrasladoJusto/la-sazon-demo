export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="flex flex-col gap-xl px-margin-desktop py-xxl max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-xl">
          <div className="font-headline-md text-headline-md text-primary tracking-[0.2em]">PROVENANCE</div>
          <div className="flex gap-lg flex-wrap">
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors uppercase tracking-wider" href="#">Política de Privacidad</a>
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors uppercase tracking-wider" href="#">Términos</a>
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors uppercase tracking-wider" href="#">Accesibilidad</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-md border-t border-outline-variant/10 pt-xl">
          <p className="font-label-sm text-label-sm text-on-surface-variant">© 2025 PROVENANCE RESTAURANT. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-md">
            <a className="w-10 h-10 border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all" href="#" aria-label="Instagram">
              <span className="material-symbols-outlined text-lg" aria-hidden="true">public</span>
            </a>
            <a className="w-10 h-10 border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all" href="#" aria-label="Compartir">
              <span className="material-symbols-outlined text-lg" aria-hidden="true">share</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
