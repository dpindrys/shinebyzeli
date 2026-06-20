"use client";

import { cn } from "@/lib/cn";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

const variantStyles = {
  default:
    "bg-white border border-neutral-200/80 shadow-soft hover:shadow-md hover:border-neutral-300/80",
  elevated: "bg-white shadow-md hover:shadow-lg",
  soft: "bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-soft",
  accent:
    "bg-accent-50/50 border border-accent-100/80 hover:bg-accent-50 hover:shadow-accent",
  ghost: "bg-transparent hover:bg-neutral-50",
  glass:
    "bg-white/70 backdrop-blur-md border border-white/60 shadow-soft hover:bg-white/80",
} as const;

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
} as const;

const radiusStyles = {
  md: "rounded-xl",
  lg: "rounded-2xl",
  xl: "rounded-3xl",
} as const;

export type CardVariant = keyof typeof variantStyles;
export type CardPadding = keyof typeof paddingStyles;
export type CardRadius = keyof typeof radiusStyles;

export type CardProps = HTMLMotionProps<"div"> & {
  variant?: CardVariant;
  padding?: CardPadding;
  radius?: CardRadius;
  interactive?: boolean;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    variant = "default",
    padding = "md",
    radius = "lg",
    interactive = false,
    className,
    children,
    ...props
  },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      whileHover={interactive ? { y: -2 } : undefined}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "relative overflow-hidden transition-shadow duration-300",
        variantStyles[variant],
        paddingStyles[padding],
        radiusStyles[radius],
        interactive && "cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
});

export function CardGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent-200/30 blur-2xl",
        className,
      )}
    />
  );
}
