"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function Button({ variant = "primary", size = "md", href, children, className, disabled, onClick, type = "button" }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-label-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-primary-container text-on-primary-container hover:bg-primary transition-all duration-300 shadow-[0_4px_14px_0_rgba(200,169,94,0.3)] hover:shadow-[0_6px_20px_0_rgba(200,169,94,0.4)]",
    secondary: "bg-secondary text-on-secondary hover:bg-secondary-container/80",
    ghost: "bg-transparent text-on-surface hover:bg-surface-container",
    outline: "border border-outline-variant hover:border-primary hover:bg-primary/5 text-on-surface",
  };
  const sizes = {
    sm: "px-4 py-2 text-label-sm min-h-[40px]",
    md: "px-6 py-3 text-label-md min-h-[48px]",
    lg: "px-8 py-4 text-label-md min-h-[56px]",
  };
  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={combinedClassName} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
