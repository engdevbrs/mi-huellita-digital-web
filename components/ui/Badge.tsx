import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "orange" | "green" | "yellow" | "pink";
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", className, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center px-4 py-2 rounded-full font-medium text-sm";

    const variants = {
      default: "bg-blue-100 text-primary-dark",
      orange: "bg-orange-100 text-warning",
      green: "bg-green-100 text-secondary",
      yellow: "bg-yellow-100 text-warning",
      pink: "bg-blue-100 text-primary-dark",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
