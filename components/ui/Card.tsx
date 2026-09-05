"use client";
import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-surface border border-outline-variant/10",
      elevated: "bg-surface shadow-xl",
      outlined: "bg-transparent border border-outline-variant",
    };
    return <div ref={ref} className={cn(variants[variant], className)} {...props}>{children}</div>;
  }
);
Card.displayName = "Card";
