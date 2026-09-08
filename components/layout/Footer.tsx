export function Footer() {
  const navColumns = [
    {
      title: "Restaurante",
      links: [
        { label: "Inicio", href: "/" },
        { label: "Experiencia", href: "/#experiencia" },
        { label: "La Carta", href: "/menu" },
        { label: "El Chef", href: "/#chef" },
      ],
    },
    {
      title: "La Sazón",
      links: [
        { label: "Galería", href: "/#galeria" },
        { label: "Eventos", href: "/#eventos" },
        { label: "Reservar Mesa", href: "/reservar" },
        { label: "Contacto", href: "/contacto" },
      ],
    },
  ];

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="px-margin-mobile md:px-margin-desktop py-xxl max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-xl">
          {/* Marca */}
          <div className="space-y-6">
            <div className="font-headline-md text-headline-md text-primary tracking-[0.2em]">La Sazón</div>
            <p className="font-body-md text-on-surface-variant max-w-xs leading-relaxed">
              Alta cocina de origen. Calle Ejemplo, 123. Lima, Perú.
            </p>
            <div className="flex gap-md">
              <a className="w-10 h-10 border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all" href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">public</span>
              </a>
              <a className="w-10 h-10 border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all" href="https://facebook.com/example" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">groups</span>
              </a>
              <a className="w-10 h-10 border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all" href="https://wa.me/51900000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">chat</span>
              </a>
            </div>
          </div>

          {/* Columnas de navegación */}
          {navColumns.map((col) => (
            <div key={col.title} className="space-y-4">
              <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest">{col.title}</p>
              <div className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <a key={link.href} className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Contacto */}
          <div className="space-y-4">
            <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Contacto</p>
            <div className="flex flex-col gap-3 font-body-md text-on-surface-variant">
              <a href="tel:+51900000000" className="hover:text-primary transition-colors">+51 900 000 000</a>
              <a href="mailto:reservas@la-sazon-demo.com" className="hover:text-primary transition-colors">reservas@la-sazon-demo.com</a>
              <a href="mailto:eventos@la-sazon-demo.com" className="hover:text-primary transition-colors">eventos@la-sazon-demo.com</a>
              <p className="text-on-surface-variant/70">Mar–Sáb 13:30–15:30 · 20:30–23:00</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-md border-t border-outline-variant/10 pt-xl mt-xl">
          <p className="font-label-sm text-label-sm text-on-surface-variant">&copy; {new Date().getFullYear()} La Sazón. Todos los derechos reservados.</p>
          <div className="flex gap-lg">
            <span className="font-label-sm text-label-sm text-on-surface-variant/60 uppercase tracking-wider">Proyecto demo · Sitio ficticio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}