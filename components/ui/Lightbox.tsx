"use client";
import { useEffect, useState } from "react";

export interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

interface LightboxProps {
  images: GalleryImage[];
  openIndex: number | null;
  onClose: () => void;
}

export function Lightbox({ images, openIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(openIndex ?? 0);

  useEffect(() => {
    setCurrent(openIndex ?? 0);
  }, [openIndex]);

  useEffect(() => {
    if (openIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrent((p) => (p > 0 ? p - 1 : images.length - 1));
      if (e.key === "ArrowRight") setCurrent((p) => (p < images.length - 1 ? p + 1 : 0));
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, images.length, onClose]);

  if (openIndex === null) return null;
  const image = images[current];

  return (
    <div className="lightbox-active" onClick={onClose}>
      <button
        className="absolute top-6 right-6 z-10 text-primary hover:text-primary-fixed transition-colors p-2"
        onClick={onClose}
        aria-label="Cerrar lightbox"
      >
        <span className="material-symbols-outlined text-[32px]" data-icon="close">close</span>
     </button>
      <button
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 text-primary hover:text-primary-fixed transition-colors p-2"
        onClick={(e) => { e.stopPropagation(); setCurrent((p) => (p > 0 ? p - 1 : images.length - 1)); }}
        aria-label="Imagen anterior"
      >
        <span className="material-symbols-outlined text-[48px]" data-icon="chevron_left">chevron_left</span>
     </button>
      <button
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 text-primary hover:text-primary-fixed transition-colors p-2"
        onClick={(e) => { e.stopPropagation(); setCurrent((p) => (p < images.length - 1 ? p + 1 : 0)); }}
        aria-label="Siguiente imagen"
      >
        <span className="material-symbols-outlined text-[48px]" data-icon="chevron_right">chevron_right</span>
     </button>
      <figure
        className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[80vh] object-contain shadow-2xl"
        />
        {image.alt && (
          <figcaption className="mt-4 font-label-sm text-label-sm text-on-surface-variant text-center uppercase tracking-widest">
            {image.alt}
         </figcaption>
        )}
        <p className="mt-2 font-mono text-label-sm text-primary/60">
          {current + 1} / {images.length}
       </p>
     </figure>
   </div>
  );
}
