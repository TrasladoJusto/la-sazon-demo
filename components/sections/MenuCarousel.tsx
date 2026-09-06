"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

const dishes = [
  { name: "Vieira de Origen", desc: "Lámina de oro de 24k, espuma de mar y esencia de trufa blanca.", price: "34€", src: "/images/dish-fine-dining.jpg", tag: "Degustación" },
  { name: "Wagyu A5 Kobe", desc: "Reducción de Oporto y raíces de invierno glaseadas. Excelencia japonesa.", price: "68€", src: "/images/dish-wagyu.jpg", tag: "Especialidad" },
  { name: "Huerto de Invierno", desc: "Verduras de temporada, emulsión de clorofila y tierra de setas ahumadas.", price: "28€", src: "/images/dish-vegetarian.jpg", tag: "Vegetariano" },
  { name: "Texturas de Cacao", desc: "Ganache de cacao 70%, crujiente de avellana y sorbete de frutos silvestres.", price: "18€", src: "/images/dish-dessert.jpg", tag: "Postre" },
  { name: "Trufa del Piamonte", desc: "Laminado de trufa fresca sobre pasta artesanal. Aroma inigualable.", price: "Mkt", src: "/images/dish-truffles.jpg", tag: "Temporada" },
];

export function MenuCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 10);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const step = card ? card.offsetWidth + 32 : 420;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const step = card ? card.offsetWidth + 32 : 420;
    el.scrollTo({ left: i * step, behavior: "smooth" });
  };

  return (
    <section className="py-xxl bg-surface-container-low overflow-hidden relative" id="menu">
      {/* Decorative text behind */}
      <div className="absolute top-10 right-[-10%] text-[150px] font-display-lg text-primary/5 pointer-events-none select-none uppercase tracking-tighter">
        Aura Menu
      </div>

      <div className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto mb-10 reveal">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-label-sm text-label-sm text-primary uppercase tracking-[0.4em] mb-4">Selección de hoy</p>
            <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface">Sabores del Origen</h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label="Platos anteriores"
              className="w-12 h-12 border border-outline-variant/30 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-outline-variant/30 disabled:hover:text-on-surface transition-all"
            >
              <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
            </button>
            <button
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label="Siguientes platos"
              className="w-12 h-12 border border-outline-variant/30 flex items-center justify-center text-on-surface hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-outline-variant/30 disabled:hover:text-on-surface transition-all"
            >
              <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onScroll={updateArrows}
        className="flex gap-8 overflow-x-auto px-margin-mobile md:px-margin-desktop no-scrollbar snap-x snap-mandatory scroll-smooth"
      >
        {dishes.map((dish, i) => (
          <div
            key={dish.name}
            data-card=""
            className="min-w-[280px] md:min-w-[400px] snap-center group reveal luxury-card p-0 border-none bg-transparent"
          >
            <button
              className="block w-full text-left relative aspect-[3/4] overflow-hidden mb-6 cursor-pointer"
              onClick={() => scrollToIndex(i)}
              aria-label={`Ver ${dish.name}`}
            >
              <Image
                fill
                sizes="(max-width: 768px) 280px, 400px"
                src={dish.src}
                alt={dish.name}
                className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-background-dark/80 backdrop-blur-md px-4 py-1 border border-primary/20">
                <span className="font-label-sm text-[10px] text-primary uppercase tracking-widest">{dish.tag}</span>
              </div>
            </button>
            <div className="space-y-3 px-1">
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">{dish.name}</h3>
                <span className="font-mono text-primary text-xl font-medium">{dish.price}</span>
              </div>
              <p className="font-body-md text-on-surface-variant line-clamp-2">{dish.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 reveal">
        <a
          className="inline-block bg-primary px-16 py-5 text-background-dark font-label-md text-label-md uppercase tracking-[0.2em] font-bold hover:bg-primary-container transition-all duration-500"
          href="#reservas"
        >
          Reservar esta experiencia
        </a>
      </div>
    </section>
  );
}