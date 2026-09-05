"use client";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-background-dark border-t border-primary/30 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-xxl w-full max-w-screen-2xl mx-auto">
        {/* Column 1: Brand */}
        <div className="space-y-6">
          <div className="font-headline-md text-headline-md text-primary-fixed uppercase tracking-widest">PROVENANCE</div>
          <p className="font-body-md text-body-md text-on-surface-variant pr-8">
            Alta gastronomía inspirada en el origen, la tierra y la excelencia artesanal. Una oda a la tierra y al tiempo.
          </p>
          {/* SVG Social Icons */}
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-primary-fixed hover:text-primary transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-primary-fixed hover:text-primary transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-primary-fixed hover:text-primary transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
              </svg>
            </a>
            <span className="material-symbols-outlined text-primary-fixed cursor-pointer hover:text-primary transition-colors" data-icon="share">share</span>
          </div>
        </div>

        {/* Column 2: Navigation - Experiencia */}
        <div className="space-y-4">
          <p className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest">Experiencia</p>
          <ul className="space-y-2">
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md nav-link-hover" href="/experiencia">Nuestra Historia</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md nav-link-hover" href="/chef">El Chef</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md nav-link-hover" href="/galeria">Bodega</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md nav-link-hover" href="/galeria">Galería</a></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="space-y-4">
          <p className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest">Legal</p>
          <ul className="space-y-2">
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md nav-link-hover" href="#">Aviso Legal</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md nav-link-hover" href="#">Privacidad</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md nav-link-hover" href="#">Cookies</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md nav-link-hover" href="/contacto">Contacto</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md nav-link-hover" href="#">Accesibilidad</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-4">
          <p className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest">Newsletter</p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Reciba nuestro menú de temporada y eventos exclusivos directamente en su correo.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-3">
            <div className="flex border-b border-outline-variant focus-within:border-primary transition-colors">
              <input
                className="bg-transparent border-none focus:ring-0 text-on-surface w-full py-2 placeholder:text-outline-variant outline-none"
                placeholder="Su email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="text-primary-fixed hover:text-primary transition-colors" aria-label="Suscribirse">
                <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
            {subscribed && (
              <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest animate-fade-in">
                ✓ Suscrito correctamente
              </p>
            )}
          </form>
          <div className="pt-4 space-y-2">
            <p className="font-label-sm text-label-sm text-primary-fixed/60 uppercase tracking-widest">Contacto</p>
            <a className="block font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="tel:+34912345678">+34 912 345 678</a>
            <a className="block font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="mailto:reservas@provenance.com">reservas@provenance.com</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-margin-desktop py-8 border-t border-outline-variant/10 text-center">
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          © 2025 PROVENANCE RESTAURANT. TODOS LOS DERECHOS RESERVADOS.
          <span className="sr-only"> All rights reserved.</span>
          <span className="mx-2 text-primary">·</span>
          <span className="text-primary-fixed/60">Crafted for Excellence</span>
        </p>
      </div>
    </footer>
  );
}
