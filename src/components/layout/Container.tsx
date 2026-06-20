import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

const sizeStyles = {
  sm: "max-w-3xl px-5 sm:px-6",
  md: "max-w-5xl px-5 sm:px-8",
  lg: "max-w-6xl px-5 sm:px-8 lg:px-10",
  xl: "max-w-7xl px-5 sm:px-8 lg:px-12",
  full: "max-w-[1400px] px-5 sm:px-8 lg:px-12",
} as const;

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: keyof typeof sizeStyles;
};

export function Container({
  size = "xl",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full", sizeStyles[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
