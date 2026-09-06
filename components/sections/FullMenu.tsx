"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Tabs } from "@/components/ui/Tabs";
import { Button } from "@/components/ui/Button";

interface Dish {
  name: string;
  desc: string;
  price: string;
  src: string;
  tag: "Carta" | "Degustación" | "Maridaje" | "Temporada" | "Signature" | "Limited";
  category: "degustacion" | "carta" | "maridaje";
}

const dishes: Dish[] = [
  { name: "Esencia de Bosque", desc: "Hongos silvestres, trufa negra y reducción de vino tinto envejecido.", price: "€42", src: "/images/dish-fine-dining.jpg", tag: "Signature", category: "degustacion" },
  { name: "Marea Abisal", desc: "Bogavante azul a la brasa, beurre blanc de erizo de mar y caviar beluga.", price: "€58", src: "/images/dish-truffles.jpg", tag: "Temporada", category: "carta" },
  { name: "Diamante Negro", desc: "Wagyu A5 sellado, reducción de Oporto y raíces de temporada glaseadas.", price: "€48", src: "/images/dish-wagyu.jpg", tag: "Signature", category: "carta" },
  { name: "Herencia Ganadera", desc: "Solomillo de res madurada 45 días, tuétano grillado y demi-glace de verduras.", price: "€75", src: "/images/dish-vegetarian.jpg", tag: "Limited", category: "carta" },
  { name: "Texturas de Cacao", desc: "Crujiente de chocolate 70%, ganache ahumada y sorbete de frutos rojos.", price: "€22", src: "/images/dish-dessert.jpg", tag: "Carta", category: "carta" },
  { name: "Maridaje de Autor", desc: "Selección de 4 vinos de la casa armonizados con cada estación del menú degustación.", price: "€85", src: "/images/wine-cellar.jpg", tag: "Maridaje", category: "maridaje" },
  { name: "Atardecer en la Mancha", desc: "Queso manchego curado, membrillo artesanal y vino dulce de la tierra.", price: "€32", src: "/images/dish-seafood.jpg", tag: "Temporada", category: "degustacion" },
  { name: "Esencia Líquida", desc: "Coctel de autor con ginebra premium, cítricos mediterráneos y notas herbales.", price: "€24", src: "/images/dish-cocktail.jpg", tag: "Maridaje", category: "maridaje" },
];

function DishCard({ dish, index }: { dish: Dish; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("active"), index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const badgeColor = {
    Signature: "bg-primary text-on-primary",
    Seasonal: "bg-primary-container text-on-primary-container",
    Limited: "bg-surface-container-high text-primary",
    Carta: "bg-surface-container text-on-surface-variant",
    Degustación: "bg-primary/20 text-primary",
    Maridaje: "bg-primary/20 text-primary",
    Temporada: "bg-surface-container-highest text-primary/80",
  }[dish.tag] || "bg-surface-container text-on-surface-variant";

  return (
    <div
      ref={ref}
      className="card-reveal group relative overflow-hidden border-gold-faded"
      data-category={dish.category}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={dish.src}
          alt={dish.name}
          className="object-cover grayscale-[30%] group-hover:grayscale-0 card-zoom-image transition-all duration-700"
          loading={index < 3 ? "eager" : "lazy"}
        />
        <div className="menu-card-overlay" />
        <div className={`absolute top-4 left-4 ${badgeColor} px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest`}>
          {dish.tag}
       </div>
        <span className="material-symbols-outlined absolute top-4 right-4 text-on-primary opacity-0 group-hover:opacity-100 transition-opacity" data-icon="add_circle">add_circle</span>
     </div>
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-headline-md text-headline-md text-on-surface">{dish.name}</h3>
          <span className="font-mono text-label-md text-primary whitespace-nowrap">{dish.price}</span>
       </div>
        <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">{dish.desc}</p>
     </div>
   </div>
  );
}

function CTACard() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="card-reveal bg-primary p-12 flex flex-col items-center justify-center text-center text-on-primary-container min-h-[400px]"
    >
      <span className="material-symbols-outlined text-[64px] mb-6" data-icon="restaurant_menu">restaurant_menu</span>
      <h3 className="font-headline-lg text-headline-lg uppercase tracking-widest mb-4">¿Busca una experiencia privada?</h3>
      <p className="font-body-md text-body-md mb-8 max-w-xs">Reservamos el salón exclusivamente para usted y sus invitados</p>
      <Button variant="outline" size="md" href="/reservar" className="border-on-primary-container text-on-primary-container hover:bg-on-primary-container hover:text-primary">
        Reservar ahora
     </Button>
   </div>
  );
}

function DishGrid({ category }: { category: "degustacion" | "carta" | "maridaje" }) {
  const filtered = dishes.filter((d) => d.category === category);
  if (category === "carta") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((d, i) => <DishCard key={d.name} dish={d} index={i} />)}
        <CTACard />
     </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filtered.map((d, i) => <DishCard key={d.name} dish={d} index={i} />)}
   </div>
  );
}

export function FullMenu() {
  return (
    <Tabs
      tabs={[
        { id: "degustacion", label: "Degustación" },
        { id: "carta", label: "Carta" },
        { id: "maridaje", label: "Maridaje" },
      ]}
      defaultTab="degustacion"
    >
      <DishGrid category="degustacion" />
      <DishGrid category="carta" />
      <DishGrid category="maridaje" />
   </Tabs>
  );
}
