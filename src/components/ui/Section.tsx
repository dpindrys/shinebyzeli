import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

const spacingStyles = {
  none: "",
  sm: "py-section-sm",
  md: "py-section-md",
  lg: "py-section-lg",
  xl: "py-section-xl",
} as const;

export type SectionProps = HTMLAttributes<HTMLElement> & {
  spacing?: keyof typeof spacingStyles;
  as?: "section" | "div" | "article";
};

export function Section({
  spacing = "lg",
  as: Component = "section",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn("relative w-full", spacingStyles[spacing], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
