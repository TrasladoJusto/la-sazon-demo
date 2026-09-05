"use client";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Experiencia", href: "#experiencia" },
    { label: "Menú", href: "#menu" },
    { label: "Chef", href: "#chef" },
    { label: "Galería", href: "#galeria" },
    { label: "Eventos", href: "#eventos" },
    { label: "Reservas", href: "#reservas" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 glass-nav border-b border-outline/10">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-md max-w-[1280px] mx-auto h-20">
        {/* Brand Logo */}
        <Link className="flex items-center transition-transform active:scale-95" href="/">
          <span className="font-headline-md text-headline-md text-primary tracking-widest uppercase">PROVENANCE</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-lg">
          <div className="flex items-center gap-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className={`font-label-md text-label-md uppercase tracking-widest transition-colors duration-300 ${
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
        </div>

        {/* Trailing Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 font-label-sm font-label-sm text-on-surface-variant">
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
            <a className="cursor-pointer transition-transform active:scale-95 text-on-surface-variant hover:text-primary" href="https://wa.me/restaurant">
              <span className="material-symbols-outlined" data-icon="chat">chat</span>
            </a>
          </div>
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-on-surface p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 glass-nav border-b border-outline/10 animate-slide-down">
          <div className="flex flex-col items-center gap-4 py-md">
            {navLinks.map((link) => (
              <a key={link.label} className="font-label-md text-label-md uppercase tracking-widest text-on-surface hover:text-primary transition-colors" href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 font-label-sm font-label-sm text-on-surface-variant">
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
