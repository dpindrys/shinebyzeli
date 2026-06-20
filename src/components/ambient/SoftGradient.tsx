import { cn } from "@/lib/cn";

export type SoftGradientProps = {
  className?: string;
  variant?: "ambient" | "glow" | "warm" | "corner" | "mesh";
  position?: "top" | "center" | "bottom" | "full";
};

const variantStyles = {
  ambient: "bg-[var(--gradient-ambient)]",
  glow: "bg-[var(--gradient-glow)]",
  warm: "bg-[var(--gradient-warm)]",
  corner:
    "bg-[radial-gradient(ellipse_60%_50%_at_100%_0%,rgb(91_159_212/0.1),transparent_70%)]",
  mesh: [
    "bg-[radial-gradient(ellipse_50%_40%_at_20%_20%,rgb(91_159_212/0.08),transparent_70%)]",
    "bg-[radial-gradient(ellipse_40%_50%_at_80%_60%,rgb(91_159_212/0.06),transparent_70%)]",
    "bg-[radial-gradient(ellipse_30%_30%_at_50%_90%,rgb(168_162_158/0.06),transparent_70%)]",
  ].join(" "),
} as const;

const positionStyles = {
  top: "top-0 left-0 right-0 h-[60%]",
  center: "inset-0",
  bottom: "bottom-0 left-0 right-0 h-[50%]",
  full: "inset-0",
} as const;

export function SoftGradient({
  className,
  variant = "ambient",
  position = "full",
}: SoftGradientProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute",
        positionStyles[position],
        variantStyles[variant],
        className,
      )}
    />
  );
}

export function GradientOrb({
  className,
  color = "accent",
  size = "lg",
}: {
  className?: string;
  color?: "accent" | "neutral";
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizeStyles = {
    sm: "h-32 w-32",
    md: "h-48 w-48",
    lg: "h-64 w-64",
    xl: "h-96 w-96",
  };

  const colorStyles = {
    accent: "bg-accent-300/20",
    neutral: "bg-neutral-300/15",
  };

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        sizeStyles[size],
        colorStyles[color],
        className,
      )}
    />
  );
}
