"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
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
    { label: "Reservas", href: "#reservas" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md transition-all duration-500 border-b border-outline-variant/20 ${
        scrolled ? "h-16 bg-background-dark/95" : "h-20"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-margin-desktop max-w-screen-2xl mx-auto h-full">
        <div
          className="font-headline-md text-headline-md text-primary tracking-widest uppercase cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          PROVENANCE
        </div>
        <ul className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className={`transition-colors duration-300 font-label-md text-label-md uppercase tracking-widest ${
                  link.label === "Reservas"
                    ? "text-primary font-bold border-b border-primary pb-1"
                    : "text-on-surface hover:text-primary"
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
            <span className="hover:text-primary cursor-pointer transition-colors">DE</span>
            <span className="text-outline-variant">|</span>
            <span className="text-primary cursor-pointer">EN</span>
            <span className="text-outline-variant">|</span>
            <span className="hover:text-primary cursor-pointer transition-colors">FR</span>
            <span className="text-outline-variant">|</span>
            <span className="hover:text-primary cursor-pointer transition-colors">ES</span>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80 transition-opacity" aria-hidden="true">language</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80 transition-opacity" aria-hidden="true">chat</span>
          </div>
          <button className="lg:hidden text-on-surface p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}>
            <span className="material-symbols-outlined" aria-hidden="true">{mobileOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-background-dark/98 backdrop-blur-xl z-40">
          <div className="flex flex-col items-center gap-6 py-12 px-margin-mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className={`font-headline-md text-headline-md uppercase tracking-widest transition-colors ${
                  link.label === "Reservas" ? "text-primary" : "text-on-surface hover:text-primary"
                }`}
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent my-4" />
            <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
              <span className="hover:text-primary cursor-pointer transition-colors">DE</span>
              <span className="text-outline-variant">|</span>
              <span className="text-primary cursor-pointer">EN</span>
              <span className="text-outline-variant">|</span>
              <span className="hover:text-primary cursor-pointer transition-colors">FR</span>
              <span className="text-outline-variant">|</span>
              <span className="hover:text-primary cursor-pointer transition-colors">ES</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
