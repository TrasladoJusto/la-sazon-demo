"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Experiencia", href: "#experiencia" },
  { name: "Menú", href: "#menu" },
  { name: "Chef", href: "#chef" },
  { name: "Galería", href: "#galeria" },
  { name: "Eventos", href: "#eventos" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", isScrolled ? "bg-background/95 backdrop-blur-md border-b border-outline-variant/20" : "bg-transparent")} role="banner">
      <nav className="flex justify-between items-center w-full px-margin-desktop max-w-[1280px] mx-auto h-20" aria-label="Main navigation">
        <Link href="/" className="font-headline-md text-headline-md text-primary tracking-tight">PROVENANCE</Link>
        <ul className="hidden lg:flex items-center gap-lg">
          {navigation.map((item) => (
            <li key={item.name}><a href={item.href} className="font-label-md text-label-md uppercase tracking-widest text-on-surface hover:text-primary transition-colors duration-300">{item.name}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-md">
          <span className="material-symbols-outlined text-primary cursor-pointer" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>language</span>
          <span className="material-symbols-outlined text-primary cursor-pointer" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>chat</span>
          <button className="md:hidden p-2 text-on-surface" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="lg:hidden py-6 border-t border-outline-variant/20 animate-slide-down">
          <div className="flex flex-col gap-4 px-margin-desktop">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>{item.name}</a>
            ))}
            <div className="flex gap-3 pt-4 border-t border-outline-variant/20">
              <Button variant="ghost" size="md" asChild><a href="/reservas">Reservar</a></Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
