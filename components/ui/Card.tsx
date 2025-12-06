import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "feature";
  hover?: boolean;
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", hover = true, className, children, ...props }, ref) => {
    const baseStyles = "rounded-[20px] transition-all duration-300";
    
    const variants = {
      default:
        "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 p-8",
      feature:
        "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 p-6",
    };

    const hoverStyles = hover
      ? "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1"
      : "";

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
