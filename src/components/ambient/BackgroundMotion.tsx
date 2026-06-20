"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";

export type BackgroundMotionProps = {
  className?: string;
  intensity?: "subtle" | "medium";
};

export function BackgroundMotion({
  className,
  intensity = "subtle",
}: BackgroundMotionProps) {
  const opacity = intensity === "subtle" ? 0.4 : 0.6;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <motion.div
        className="absolute -left-[10%] -top-[20%] h-[60%] w-[50%] rounded-full bg-accent-200/30 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ opacity }}
      />
      <motion.div
        className="absolute -bottom-[10%] -right-[5%] h-[50%] w-[45%] rounded-full bg-accent-100/40 blur-3xl"
        animate={{
          x: [0, -25, 0],
          y: [0, -15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{ opacity: opacity * 0.8 }}
      />
      <motion.div
        className="absolute left-[30%] top-[40%] h-[35%] w-[30%] rounded-full bg-neutral-200/25 blur-3xl"
        animate={{
          x: [0, 15, -10, 0],
          y: [0, -20, 10, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        style={{ opacity: opacity * 0.6 }}
      />
    </div>
  );
}

export function GridPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.35]",
        className,
      )}
      style={{
        backgroundImage: `
          linear-gradient(rgb(91 159 212 / 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgb(91 159 212 / 0.04) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 80%)",
      }}
    />
  );
}
