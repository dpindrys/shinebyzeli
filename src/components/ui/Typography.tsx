import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";
import { createElement } from "react";

const variantStyles = {
  display2xl: "text-display-2xl text-neutral-900",
  displayXl: "text-display-xl text-neutral-900",
  displayLg: "text-display-lg text-neutral-900",
  displayMd: "text-display-md text-neutral-900",
  displaySm: "text-display-sm text-neutral-900",
  bodyXl: "text-body-xl text-neutral-600",
  bodyLg: "text-body-lg text-neutral-600",
  bodyMd: "text-body-md text-neutral-600",
  bodySm: "text-body-sm text-neutral-500",
  bodyXs: "text-body-xs text-neutral-500",
  label: "text-label text-neutral-500",
  accent: "text-body-md text-accent-600 font-medium",
} as const;

type TypographyVariant = keyof typeof variantStyles;

type TypographyProps<T extends keyof HTMLElementTagNameMap> =
  HTMLAttributes<HTMLElement> & {
    as?: T;
    variant?: TypographyVariant;
  };

function Typography<T extends keyof HTMLElementTagNameMap = "p">({
  as = "p" as T,
  variant = "bodyMd",
  className,
  children,
  ...props
}: TypographyProps<T>) {
  return createElement(
    as,
    {
      className: cn(variantStyles[variant], className),
      ...props,
    },
    children,
  );
}

export const Display = {
  Xxl: (props: Omit<TypographyProps<"h1">, "variant">) => (
    <Typography as="h1" variant="display2xl" {...props} />
  ),
  Xl: (props: Omit<TypographyProps<"h1">, "variant">) => (
    <Typography as="h1" variant="displayXl" {...props} />
  ),
  Lg: (props: Omit<TypographyProps<"h2">, "variant">) => (
    <Typography as="h2" variant="displayLg" {...props} />
  ),
  Md: (props: Omit<TypographyProps<"h3">, "variant">) => (
    <Typography as="h3" variant="displayMd" {...props} />
  ),
  Sm: (props: Omit<TypographyProps<"h4">, "variant">) => (
    <Typography as="h4" variant="displaySm" {...props} />
  ),
};

export const Text = {
  Xl: (props: Omit<TypographyProps<"p">, "variant">) => (
    <Typography as="p" variant="bodyXl" {...props} />
  ),
  Lg: (props: Omit<TypographyProps<"p">, "variant">) => (
    <Typography as="p" variant="bodyLg" {...props} />
  ),
  Md: (props: Omit<TypographyProps<"p">, "variant">) => (
    <Typography as="p" variant="bodyMd" {...props} />
  ),
  Sm: (props: Omit<TypographyProps<"p">, "variant">) => (
    <Typography as="p" variant="bodySm" {...props} />
  ),
  Xs: (props: Omit<TypographyProps<"p">, "variant">) => (
    <Typography as="p" variant="bodyXs" {...props} />
  ),
  Label: (props: Omit<TypographyProps<"span">, "variant">) => (
    <Typography as="span" variant="label" {...props} />
  ),
  Accent: (props: Omit<TypographyProps<"span">, "variant">) => (
    <Typography as="span" variant="accent" {...props} />
  ),
};

export { Typography, variantStyles as typographyVariants };
export type { TypographyVariant };
