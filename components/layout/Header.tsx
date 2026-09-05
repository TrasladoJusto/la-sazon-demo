"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 100);
      if (y > lastScroll && y > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(y);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const navLinks = [
    { label: "Experiencia", href: "/experiencia" },
    { label: "Carta", href: "/menu" },
    { label: "Chef", href: "/chef" },
    { label: "Galería", href: "/galeria" },
    { label: "Eventos", href: "/eventos" },
    { label: "Reservas", href: "/reservar" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 glass-nav border-b border-outline/10 transition-all duration-500 hide-on-scroll ${hidden ? "hidden-up" : ""} ${scrolled ? "bg-background-dark/95 header-shrink" : "bg-background/80 header-full"}`}
    >
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto h-full">
        {/* Brand Logo */}
        <Link className="flex items-center transition-transform active:scale-95" href="/">
          <span className="font-headline-md text-headline-md text-primary tracking-widest uppercase">PROVENANCE</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className={`font-label-md text-label-md uppercase tracking-widest transition-colors duration-300 nav-link-hover ${
                link.label === "Reservas"
                  ? "text-primary border-b border-primary pb-1"
                  : "text-on-surface hover:text-primary"
              }`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Trailing Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
            <span className="hover:text-primary cursor-pointer transition-colors">DE</span>
            <span className="text-outline-variant">|</span>
            <span className="text-primary cursor-pointer">EN</span>
            <span className="text-outline-variant">|</span>
            <span className="hover:text-primary cursor-pointer transition-colors">FR</span>
            <span className="text-outline-variant">|</span>
            <span className="hover:text-primary cursor-pointer transition-colors">ES</span>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80 transition-opacity" data-icon="language">language</span>
            <a className="cursor-pointer transition-transform active:scale-95 text-on-surface-variant hover:text-primary" href="https://wa.me/34912345678" aria-label="WhatsApp">
              <span className="material-symbols-outlined" data-icon="chat">chat</span>
            </a>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-80 transition-opacity" data-icon="shopping_bag">shopping_bag</span>
          </div>
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-on-surface p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Abrir menú">
            <span className="material-symbols-outlined" data-icon={mobileOpen ? "close" : "menu"}>{mobileOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-background-dark/98 backdrop-blur-xl z-40 animate-fade-in">
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
            <div className="custom-divider w-32 my-4" />
            <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
              <span className="hover:text-primary cursor-pointer transition-colors">DE</span>
              <span className="text-outline-variant">|</span>
              <span className="text-primary cursor-pointer">EN</span>
              <span className="text-outline-variant">|</span>
              <span className="hover:text-primary cursor-pointer transition-colors">FR</span>
              <span className="text-outline-variant">|</span>
              <span className="hover:text-primary cursor-pointer transition-colors">ES</span>
            </div>
            <a className="flex items-center gap-2 text-label-md text-label-md text-primary mt-4" href="https://wa.me/34912345678">
              <span className="material-symbols-outlined" data-icon="chat">chat</span>
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
