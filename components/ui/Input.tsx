"use client";
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return <input ref={ref} className={cn("w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:ring-0", className)} {...props} />;
  }
);
Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return <textarea ref={ref} className={cn("w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:ring-0 placeholder:text-outline-variant resize-none", className)} {...props} />;
  }
);
Textarea.displayName = "Textarea";

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => {
    return <select ref={ref} className={cn("w-full bg-transparent border-b border-outline-variant focus:border-primary transition-colors text-on-surface font-body-md py-2 focus:ring-0", className)} {...props}>{children}</select>;
  }
);
Select.displayName = "Select";
