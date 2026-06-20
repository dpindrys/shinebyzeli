"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Sparkle = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
};

function seededRandom(seed: number): number {
  const value = Math.sin(seed * 9999) * 10000;
  return value - Math.floor(value);
}

function generateSparkles(count: number): Sparkle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: seededRandom(i * 4 + 1) * 100,
    y: seededRandom(i * 4 + 2) * 100,
    size: seededRandom(i * 4 + 3) * 3 + 2,
    delay: seededRandom(i * 4 + 4) * 4,
    duration: seededRandom(i * 4 + 5) * 3 + 3,
  }));
}

const SPARKLES = generateSparkles(24);

export type SparklesProps = {
  className?: string;
  count?: number;
  intensity?: "subtle" | "medium";
};

export function Sparkles({
  className,
  count = 24,
  intensity = "subtle",
}: SparklesProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sparkles = count === 24 ? SPARKLES : generateSparkles(count);
  const maxOpacity = intensity === "subtle" ? 0.6 : 0.9;

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full bg-accent-400"
          style={{
            left: `${sparkle.x.toFixed(2)}%`,
            top: `${sparkle.y.toFixed(2)}%`,
            width: `${sparkle.size.toFixed(2)}px`,
            height: `${sparkle.size.toFixed(2)}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, maxOpacity, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("text-accent-400", className)}
    >
      <path d="M12 0L13.09 8.26L22 12L13.09 15.74L12 24L10.91 15.74L2 12L10.91 8.26L12 0Z" />
    </svg>
  );
}
