"use client";
import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  hover?: boolean;
}
export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, variant = "default", hover = false, children, ...props }, ref) => {
  const variants = {
    default: "bg-surface-container border border-outline-variant",
    elevated: "bg-surface-container shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
    outlined: "bg-transparent border border-outline",
  };
  return <div ref={ref} className={cn("rounded-none transition-all duration-300", variants[variant], hover && "hover:border-primary hover:shadow-[0_8px_30px_rgba(200,169,94,0.15)]", className)} {...props}>{children}</div>;
});
Card.displayName = "Card";
