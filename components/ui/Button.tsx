import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none uppercase tracking-wide text-sm";

    const variants = {
      primary:
        "bg-[#FF69B4] hover:bg-[#FF1493] text-white shadow-[0_4px_15px_rgba(255,105,180,0.3)] hover:shadow-[0_6px_20px_rgba(255,105,180,0.4)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-pink-300",
      secondary:
        "bg-[#FFD700] hover:bg-[#FFC700] text-white shadow-[0_4px_15px_rgba(255,215,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,215,0,0.4)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-yellow-300",
      outline:
        "border-2 border-[#1a1a2e] text-[#1a1a2e] bg-transparent hover:bg-[#1a1a2e] hover:text-white hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-gray-300",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            <span className="sr-only">Cargando...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
