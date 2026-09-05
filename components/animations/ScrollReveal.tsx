"use client";

import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const fadeIn: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } };
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "fadeInUp" | "fadeIn" | "stagger";
  delay?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({ children, variant = "fadeInUp", delay = 0, className, once = true }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); if (once) observer.unobserve(entry.target); }
      else if (!once) setIsVisible(false);
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once]);
  const variants = { fadeInUp, fadeIn, stagger: staggerContainer };
  return <motion.div ref={ref} className={className} initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={variants[variant]} transition={{ delay }}>{children}</motion.div>;
}

interface ParallaxProps { children: React.ReactNode; speed?: number; className?: string; }
export function Parallax({ children, speed = 0.15, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      if (scrolled + window.innerHeight > elementTop && scrolled < elementTop + elementHeight) {
        setOffset((scrolled + window.innerHeight - elementTop) * speed);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);
  return <div ref={ref} className={cn("relative overflow-hidden", className)}><motion.div style={{ transform: `translateY(${offset}px)` }}>{children}</motion.div></div>;
}

export function SectionReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return <ScrollReveal variant="fadeInUp" className={className}>{children}</ScrollReveal>;
}

export function StaggerSection({ children, className, staggerDelay = 0.1 }: { children: React.ReactNode; className?: string; staggerDelay?: number }) {
  return (
    <ScrollReveal variant="stagger" className={className}>
      <motion.div variants={staggerContainer} transition={{ staggerChildren: staggerDelay }}>{children}</motion.div>
    </ScrollReveal>
  );
}
