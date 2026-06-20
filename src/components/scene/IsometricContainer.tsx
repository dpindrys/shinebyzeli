"use client";

import { cn } from "@/lib/cn";
import { Floating } from "@/components/motion";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export type IsometricContainerProps = HTMLMotionProps<"div"> & {
  aspectRatio?: "square" | "wide" | "tall" | "scene";
  floating?: boolean;
  glow?: boolean;
  children: ReactNode;
};

const aspectStyles = {
  square: "aspect-square max-w-md",
  wide: "aspect-[16/10] max-w-2xl",
  tall: "aspect-[3/4] max-w-sm",
  scene: "aspect-[4/3] max-w-3xl",
};

export function IsometricContainer({
  aspectRatio = "scene",
  floating = true,
  glow = true,
  className,
  children,
  ...props
}: IsometricContainerProps) {
  const container = (
    <motion.div
      className={cn(
        "relative mx-auto w-full",
        aspectStyles[aspectRatio],
        className,
      )}
      {...props}
    >
      {glow && (
        <div
          aria-hidden
          className="absolute inset-0 rounded-3xl bg-gradient-to-b from-accent-100/40 to-transparent blur-2xl"
        />
      )}
      <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-neutral-200/60 bg-white/50 p-6 shadow-soft backdrop-blur-sm">
        <div className="relative h-full w-full">{children}</div>
      </div>
    </motion.div>
  );

  if (floating) {
    return <Floating intensity="subtle">{container}</Floating>;
  }

  return container;
}

export type IsometricStageProps = {
  className?: string;
  perspective?: boolean;
  children: ReactNode;
};

export function IsometricStage({
  className,
  perspective = true,
  children,
}: IsometricStageProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        perspective && "[perspective:1000px]",
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full",
          perspective && "[transform-style:preserve-3d] [transform:rotateX(12deg)_rotateY(-8deg)]",
        )}
      >
        {children}
      </div>
    </div>
  );
}
