"use client";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Experiencia", href: "#experiencia" },
    { label: "Menú", href: "#menu" },
    { label: "Chef", href: "#chef" },
    { label: "Galería", href: "#galeria" },
    { label: "Eventos", href: "#eventos" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b border-outline-variant/10 transition-all duration-500 ${
        scrolled ? "bg-background-dark/80" : "bg-background-dark/60"
      }`}
    >
      <nav className="flex justify-between items-center px-margin-desktop py-md max-w-[1440px] mx-auto">
        <div
          className="font-headline-md text-headline-md tracking-[0.2em] text-primary cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          PROVENANCE
        </div>
        <div className="hidden md:flex gap-lg items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface hover:text-primary transition-colors duration-300"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            className="bg-primary-container text-on-primary-container px-lg py-sm font-label-sm text-label-sm uppercase tracking-widest hover:brightness-110 transition-all duration-300"
            href="#reservas"
          >
            Reservar
          </a>
        </div>
        <button className="md:hidden text-on-surface p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}>
          <span className="material-symbols-outlined" aria-hidden="true">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background-dark/98 backdrop-blur-xl z-40">
          <div className="flex flex-col items-center gap-6 py-12 px-margin-mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="font-headline-md text-headline-md uppercase tracking-widest text-on-surface hover:text-primary transition-colors"
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="bg-primary-container text-on-primary-container px-lg py-sm font-label-sm text-label-sm uppercase tracking-widest hover:brightness-110 transition-all duration-300"
              href="#reservas"
              onClick={() => setMobileOpen(false)}
            >
              Reservar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
