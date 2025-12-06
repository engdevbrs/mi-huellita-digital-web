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
      default: "bg-[#FFB6C1] text-[#FF1493]",
      orange: "bg-[#FFB6C1] text-[#FF1493]",
      green: "bg-[#dcfce7] text-[#166534]",
      yellow: "bg-[#fef3c7] text-[#92400e]",
      pink: "bg-[#FFB6C1] text-[#FF1493]",
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
