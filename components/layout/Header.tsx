"use client";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  const navLinks = [
    { label: "Experiencia", href: "#experiencia" },
    { label: "Menú", href: "#menu" },
    { label: "Chef", href: "#chef" },
    { label: "Galería", href: "#galeria" },
    { label: "Eventos", href: "#eventos" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-in-out ${
        scrolled ? "py-4 bg-background-dark/90 backdrop-blur-xl border-b border-outline-variant/10 shadow-2xl" : "py-8 bg-transparent"
      } ${mobileOpen ? "bg-background-dark/100" : ""}`}
    >
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto relative z-[110]">
        <div
          className="font-headline-md text-headline-md tracking-[0.3em] text-primary cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => {
            setMobileOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          AURA
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-12 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-surface/80 hover:text-primary transition-all duration-300 relative group"
              href={link.href}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            className="bg-primary hover:bg-primary-container text-background-dark px-8 py-3 font-label-sm text-label-sm uppercase tracking-[0.2em] font-bold transition-all duration-500 shadow-lg shadow-primary/10"
            href="#reservas"
          >
            Reservar
          </a>
        </div>

        {/* Hamburger Button */}
        <button 
          className="lg:hidden flex flex-col justify-center items-end gap-1.5 w-10 h-10 group" 
          onClick={() => setMobileOpen(!mobileOpen)} 
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <div className={`h-[1px] bg-primary transition-all duration-500 ${mobileOpen ? "w-8 rotate-45 translate-y-2" : "w-8"}`} />
          <div className={`h-[1px] bg-primary transition-all duration-500 ${mobileOpen ? "opacity-0" : "w-5"}`} />
          <div className={`h-[1px] bg-primary transition-all duration-500 ${mobileOpen ? "w-8 -rotate-45 -translate-y-1" : "w-3 group-hover:w-8"}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background-dark transition-all duration-700 ease-in-out z-[90] flex flex-col justify-center px-margin-mobile overflow-hidden ${
          mobileOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[100px]" />
        </div>

        <div className="flex flex-col gap-8 relative z-[91]">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              className={`font-display-lg-mobile text-[40px] uppercase tracking-widest text-on-surface hover:text-primary transition-all duration-500 transform ${
                mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100 + 300}ms` }}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div 
            className={`pt-8 border-t border-outline-variant/10 transition-all duration-700 delay-700 ${
              mobileOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <a
              className="inline-block bg-primary text-background-dark px-12 py-5 font-label-md text-label-md uppercase tracking-[0.2em] font-bold shadow-2xl shadow-primary/20 active:scale-95 transition-all"
              href="#reservas"
              onClick={() => setMobileOpen(false)}
            >
              Reservar Mesa
            </a>
            <div className="mt-12 flex gap-6">
              <span className="text-on-surface-variant font-label-sm uppercase tracking-widest">Instagram</span>
              <span className="text-on-surface-variant font-label-sm uppercase tracking-widest">Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
