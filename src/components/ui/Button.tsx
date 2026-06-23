"use client";

import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

const primaryButtonStyles =
  "cursor-pointer border-2 border-accent-800 bg-accent-500 font-bold !text-white shadow-soft hover:bg-accent-600 hover:!text-white hover:shadow-accent active:bg-accent-700 active:!text-white visited:!text-white focus:!text-white focus-visible:!text-white [&_*]:!text-inherit";

const variantStyles = {
  primary: primaryButtonStyles,
  secondary:
    "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-300",
  outline:
    "border border-neutral-200 bg-white text-neutral-700 hover:border-accent-300 hover:bg-accent-50 active:bg-accent-100",
  ghost:
    "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 active:bg-neutral-200",
  soft: "bg-accent-50 text-accent-700 hover:bg-accent-100 active:bg-accent-200",
} as const;

const sizeStyles = {
  sm: "h-9 px-4 text-body-sm rounded-lg gap-1.5",
  md: "h-11 px-5 text-body-sm rounded-xl gap-2",
  lg: "h-12 px-6 text-body-md rounded-xl gap-2",
} as const;

export type ButtonVariant = keyof typeof variantStyles;
export type ButtonSize = keyof typeof sizeStyles;

export type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", className, children, ...props },
    ref,
  ) {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          duration: motionTokens.duration.fast,
          ease: motionTokens.easing.smooth,
        }}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);

export type ButtonLinkProps = HTMLMotionProps<"a"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
    { variant = "primary", size = "md", className, children, ...props },
    ref,
  ) {
    return (
      <motion.a
        ref={ref}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          duration: motionTokens.duration.fast,
          ease: motionTokens.easing.smooth,
        }}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </motion.a>
    );
  },
);
