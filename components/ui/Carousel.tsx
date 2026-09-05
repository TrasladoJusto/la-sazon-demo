"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface CarouselProps {
  children: ReactNode[];
  itemWidth?: string;
  gap?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  id?: string;
}

export function Carousel({
  children,
  itemWidth = "350px",
  gap = 24,
  showArrows = true,
  showDots = true,
  className = "",
  id = "carousel",
}: CarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateState = () => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    const cardWidth = ref.current.firstElementChild?.clientWidth ?? 350;
    setCurrent(Math.round(scrollLeft / (cardWidth + gap)));
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", updateState);
    updateState();
    return () => el.removeEventListener("scroll", updateState);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    const cardWidth = ref.current.firstElementChild?.clientWidth ?? 350;
    const offset = (cardWidth + gap) * (dir === "left" ? -1 : 1);
    ref.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    if (!ref.current) return;
    const cardWidth = ref.current.firstElementChild?.clientWidth ?? 350;
    ref.current.scrollTo({ left: index * (cardWidth + gap), behavior: "smooth" });
    setCurrent(index);
  };

  return (
    <div className={`relative group ${className}`}>
      <div
        ref={ref}
        id={id}
        className="flex overflow-x-auto custom-scrollbar snap-x snap-mandatory"
        style={{ gap: `${gap}px`, scrollPaddingLeft: 0 }}
      >
        {children.map((child, i) => (
          <div
            key={i}
            className="snap-start flex-none"
            style={{ width: itemWidth }}
          >
            {child}
        </div>
        ))}
    </div>

      {showArrows && (
        <>
          <button
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full opacity-0 group-hover:translate-x-2 md:group-hover:-translate-x-12 group-hover:opacity-100 transition-all duration-500 z-10 text-primary p-2 bg-background-dark/60 backdrop-blur-sm rounded-full ${!canScrollLeft && "hidden"}`}
            onClick={() => scroll("left")}
            aria-label="Anterior"
          >
            <span className="material-symbols-outlined text-[40px]" data-icon="chevron_left">chevron_left</span>
        </button>
          <button
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-full opacity-0 group-hover:-translate-x-2 md:group-hover:translate-x-12 group-hover:opacity-100 transition-all duration-500 z-10 text-primary p-2 bg-background-dark/60 backdrop-blur-sm rounded-full ${!canScrollRight && "hidden"}`}
            onClick={() => scroll("right")}
            aria-label="Siguiente"
          >
            <span className="material-symbols-outlined text-[40px]" data-icon="chevron_right">chevron_right</span>
        </button>
        </>
      )}

      {showDots && children.length > 1 && (
        <div className="flex justify-center gap-3 mt-8">
          {children.map((_, i) => (
            <button
              key={i}
              className={`h-[2px] transition-all duration-300 ${
                i === current ? "w-12 bg-primary" : "w-12 bg-outline-variant/30 hover:bg-primary/50"
              }`}
              onClick={() => scrollToIndex(i)}
              data-index={i}
              aria-label={`Ir a item ${i + 1}`}
            />
          ))}
      </div>
     )}
  </div>
  );
}
