"use client";

import { cn } from "@/lib/cn";
import { gentleFloatVariants, motionTokens } from "@/lib/motion";
import { motion } from "framer-motion";

export type IsometricPlaceholderProps = {
  className?: string;
  variant?: "room" | "cube" | "stack" | "scene";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
};

const sizeStyles = {
  sm: "h-32 w-32",
  md: "h-48 w-48",
  lg: "h-64 w-64",
};

function RoomPlaceholder({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      {/* Floor */}
      <path
        d="M20 120 L100 160 L180 120 L100 80 Z"
        fill="rgb(91 159 212 / 0.08)"
        stroke="rgb(91 159 212 / 0.2)"
        strokeWidth="1"
      />
      {/* Left wall */}
      <path
        d="M20 120 L20 40 L100 80 L100 160 Z"
        fill="rgb(91 159 212 / 0.12)"
        stroke="rgb(91 159 212 / 0.25)"
        strokeWidth="1"
      />
      {/* Right wall */}
      <path
        d="M100 80 L180 40 L180 120 L100 160 Z"
        fill="rgb(91 159 212 / 0.06)"
        stroke="rgb(91 159 212 / 0.2)"
        strokeWidth="1"
      />
      {/* Window placeholder */}
      <rect
        x="130"
        y="55"
        width="30"
        height="25"
        rx="2"
        fill="rgb(91 159 212 / 0.15)"
        stroke="rgb(91 159 212 / 0.3)"
        strokeWidth="1"
      />
      {/* Furniture block */}
      <path
        d="M35 115 L55 105 L55 85 L35 95 Z"
        fill="rgb(168 162 158 / 0.2)"
        stroke="rgb(168 162 158 / 0.35)"
        strokeWidth="1"
      />
      <path
        d="M35 95 L55 85 L75 95 L55 105 Z"
        fill="rgb(168 162 158 / 0.15)"
        stroke="rgb(168 162 158 / 0.35)"
        strokeWidth="1"
      />
    </svg>
  );
}

function CubePlaceholder({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <path
        d="M60 20 L100 45 L100 85 L60 110 L20 85 L20 45 Z"
        fill="rgb(91 159 212 / 0.08)"
        stroke="rgb(91 159 212 / 0.25)"
        strokeWidth="1.5"
      />
      <path
        d="M60 20 L60 60 L100 85 L100 45 Z"
        fill="rgb(91 159 212 / 0.15)"
        stroke="rgb(91 159 212 / 0.3)"
        strokeWidth="1.5"
      />
      <path
        d="M20 45 L60 20 L60 60 L20 85 Z"
        fill="rgb(91 159 212 / 0.1)"
        stroke="rgb(91 159 212 / 0.25)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function StackPlaceholder({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(0, ${i * -18})`}>
          <path
            d={`M20 ${90 - i * 18} L70 ${65 - i * 18} L120 ${90 - i * 18} L70 ${115 - i * 18} Z`}
            fill={`rgb(91 159 212 / ${0.06 + i * 0.04})`}
            stroke="rgb(91 159 212 / 0.25)"
            strokeWidth="1"
          />
        </g>
      ))}
    </svg>
  );
}

function ScenePlaceholder({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <path
        d="M10 130 L120 170 L230 130 L120 90 Z"
        fill="rgb(91 159 212 / 0.06)"
        stroke="rgb(91 159 212 / 0.15)"
        strokeWidth="1"
      />
      <path
        d="M10 130 L10 50 L120 90 L120 170 Z"
        fill="rgb(91 159 212 / 0.1)"
        stroke="rgb(91 159 212 / 0.2)"
        strokeWidth="1"
      />
      <path
        d="M120 90 L230 50 L230 130 L120 170 Z"
        fill="rgb(91 159 212 / 0.04)"
        stroke="rgb(91 159 212 / 0.15)"
        strokeWidth="1"
      />
      <rect
        x="40"
        y="70"
        width="35"
        height="45"
        rx="3"
        fill="rgb(168 162 158 / 0.12)"
        stroke="rgb(168 162 158 / 0.25)"
        strokeWidth="1"
      />
      <rect
        x="150"
        y="65"
        width="40"
        height="30"
        rx="3"
        fill="rgb(91 159 212 / 0.1)"
        stroke="rgb(91 159 212 / 0.2)"
        strokeWidth="1"
      />
      <circle
        cx="190"
        cy="55"
        r="8"
        fill="rgb(91 159 212 / 0.15)"
        stroke="rgb(91 159 212 / 0.3)"
        strokeWidth="1"
      />
    </svg>
  );
}

const variantComponents = {
  room: RoomPlaceholder,
  cube: CubePlaceholder,
  stack: StackPlaceholder,
  scene: ScenePlaceholder,
};

export function IsometricPlaceholder({
  className,
  variant = "room",
  size = "md",
  animated = true,
}: IsometricPlaceholderProps) {
  const Component = variantComponents[variant];

  const content = (
    <div
      className={cn(
        "relative flex items-center justify-center",
        sizeStyles[size],
        className,
      )}
    >
      <div className="absolute inset-0 rounded-2xl bg-accent-50/30 blur-xl" />
      <Component className="relative z-10" />
    </div>
  );

  if (!animated) return content;

  return (
    <motion.div
      variants={gentleFloatVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: motionTokens.duration.ambient,
        repeat: Infinity,
        ease: motionTokens.easing.gentle,
      }}
    >
      {content}
    </motion.div>
  );
}
