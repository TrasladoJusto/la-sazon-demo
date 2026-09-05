"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animFrame: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    const particleCount = 60;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.3 + 0.05,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 169, 94, ${p.alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(200, 169, 94, ${0.05 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        }
      }
      animFrame = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animFrame); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden gold-mesh-bg" aria-labelledby="hero-title">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/interior.jpg"
          alt="Luxury Provenance restaurant interior at twilight"
          className="w-full h-full object-cover opacity-40"
          data-icon="photo_camera"
          data-alt="Luxury Provenance restaurant interior at twilight"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-background-dark/40 to-background-dark/80" />
     </div>

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} aria-hidden="true" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1280px] px-margin-mobile md:px-margin-desktop text-center">
        {/* Tagline */}
        <div className="mb-sm opacity-0 translate-y-4 animate-[fadeInUp_1s_ease-out_forwards]">
          <span className="font-label-md text-label-md uppercase tracking-[0.4em] text-primary/80" data-icon="public" data-alt="brand tagline">
            Donde el origen define la excelencia
         </span>
       </div>
        {/* Main Heading */}
        <h1 id="hero-title" className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-xl gold-gradient-text tracking-tighter opacity-0 translate-y-4 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
          PROVENANCE
       </h1>
        {/* Subtitle */}
        <p className="font-body-lg text-body-lg text-on-surface-variant/80 max-w-2xl mx-auto mb-xl opacity-0 translate-y-4 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
          Alta cocina de origen en el corazón de Madrid. Una experiencia gastronómica donde cada ingrediente cuenta una historia de procedencia y maestría.
       </p>
        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-lg justify-center items-center mt-xl opacity-0 translate-y-4 animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
          <Link href="/reservar" className="inline-flex items-center justify-center font-label-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary-container text-on-primary-container hover:bg-primary px-8 py-4 text-label-md min-h-[56px] shadow-[0_4px_14px_0_rgba(200,169,94,0.3)] hover:shadow-[0_6px_20px_0_rgba(200,169,94,0.4)] w-full sm:w-auto">
            Reservar mesa
         </Link>
          <Link href="/experiencia" className="inline-flex items-center justify-center font-label-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary border border-primary text-primary hover:bg-primary/5 px-8 py-4 text-label-md min-h-[56px] w-full sm:w-auto">
            Ver experiencia
         </Link>
       </div>
     </div>

      {/* Animated Scroll Chevron */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-chevron opacity-60 z-10">
        <span className="material-symbols-outlined text-primary text-[32px] md:text-[40px]" data-icon="keyboard_double_arrow_down" data-alt="scroll down">keyboard_double_arrow_down</span>
     </div>

      {/* Atmospheric Glow Elements */}
      <div className="absolute -left-20 top-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" aria-hidden="true"></div>
      <div className="absolute -right-20 bottom-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" aria-hidden="true"></div>
   </section>
  );
}
