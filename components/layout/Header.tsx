"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Las páginas internas siempre arrancan con el header sólido (no tienen hero a pantalla completa)
  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Lock scroll cuando el menú móvil está abierto; siempre se libera al cambio de ruta
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const pageLinks = [
    { label: "Menú", href: "/menu" },
    { label: "Contacto", href: "/contacto" },
  ];

  const isPageActive = (href: string) => pathname === href;
  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-in-out ${
        scrolled ? "py-4 bg-background-dark/90 backdrop-blur-xl border-b border-outline-variant/10 shadow-2xl" : "py-8 bg-transparent"
      } ${mobileOpen ? "bg-background-dark/100" : ""}`}
    >
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto relative z-[110]">
        <a
          href="/"
          onClick={closeMobile}
          className="font-headline-md text-headline-md tracking-[0.3em] text-primary cursor-pointer hover:opacity-80 transition-opacity"
        >
          La Sazón
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-7 xl:gap-9 items-center">
          {pageLinks.map((link) => (
            <a
              key={link.href}
              className={`font-label-sm text-label-sm uppercase tracking-[0.2em] transition-all duration-300 relative group ${
                isPageActive(link.href) ? "text-primary" : "text-on-surface/80 hover:text-primary"
              }`}
              href={link.href}
              aria-current={isPageActive(link.href) ? "page" : undefined}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300 ${
                  isPageActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
          <a
            className="bg-primary hover:bg-primary-container text-background-dark px-8 py-3 font-label-sm text-label-sm uppercase tracking-[0.2em] font-bold transition-all duration-500 shadow-lg shadow-primary/10"
            href="/reservar"
          >
            Reservar
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-end gap-1.5 w-10 h-10 group"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          <div className={`h-[1px] bg-primary transition-all duration-500 ${mobileOpen ? "w-8 rotate-45 translate-y-2" : "w-8"}`} />
          <div className={`h-[1px] bg-primary transition-all duration-500 ${mobileOpen ? "opacity-0" : "w-5"}`} />
          <div className={`h-[1px] bg-primary transition-all duration-500 ${mobileOpen ? "w-8 -rotate-45 -translate-y-1" : "w-3 group-hover:w-8"}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay — portal al body: fixed se ancla al viewport aunque el header tenga backdrop-blur */}
      {mounted &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menú móvil"
            className={`fixed inset-0 bg-background-dark transition-all duration-700 ease-in-out z-[95] flex flex-col justify-center px-margin-mobile overflow-hidden ${
              mobileOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
            }`}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
              <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div className="flex flex-col gap-6 relative z-[91]">
              {pageLinks.map((link, i) => (
                <a
                  key={link.href}
                  className={`font-display-lg-mobile text-[36px] uppercase tracking-widest transition-all duration-500 transform ${
                    isPageActive(link.href) ? "text-primary" : "text-on-surface hover:text-primary"
                  } ${
                    mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 300}ms` }}
                  href={link.href}
                  onClick={closeMobile}
                >
                  {link.label}
                </a>
              ))}
              <div
                className={`pt-7 border-t border-outline-variant/10 transition-all duration-700 delay-700 ${
                  mobileOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <a
                  className="inline-block bg-primary text-background-dark px-12 py-5 font-label-md text-label-md uppercase tracking-[0.2em] font-bold shadow-2xl shadow-primary/20 active:scale-95 transition-all"
                  href="/reservar"
                  onClick={closeMobile}
                >
                  Reservar Mesa
                </a>
                <div className="mt-12 flex gap-6">
                  <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary font-label-sm uppercase tracking-widest transition-colors">Instagram</a>
                  <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary font-label-sm uppercase tracking-widest transition-colors">Facebook</a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}