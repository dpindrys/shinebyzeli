"use client";

import { cn } from "@/lib/cn";
import {
  fadeInUpVariants,
  motionTokens,
  scrollRevealVariants,
} from "@/lib/motion";
import {
  motion,
  useInView,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

export type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "none";
  children: ReactNode;
};

const directionVariants: Record<string, Variants> = {
  up: fadeInUpVariants,
  down: {
    hidden: { opacity: 0, y: -16 },
    visible: { opacity: 1, y: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export function FadeIn({
  delay = 0,
  duration = motionTokens.duration.normal,
  direction = "up",
  className,
  children,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={directionVariants[direction]}
      transition={{
        duration,
        delay,
        ease: motionTokens.easing.smooth,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export type ScrollRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  amount?: number;
  once?: boolean;
  children: ReactNode;
};

export function ScrollReveal({
  delay = 0,
  amount = 0.2,
  once = true,
  className,
  children,
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scrollRevealVariants}
      transition={{
        duration: motionTokens.duration.slow,
        delay,
        ease: motionTokens.easing.smooth,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export type FloatingProps = HTMLMotionProps<"div"> & {
  intensity?: "subtle" | "medium";
  children: ReactNode;
};

export function Floating({
  intensity = "subtle",
  className,
  children,
  ...props
}: FloatingProps) {
  const amplitude = intensity === "subtle" ? 4 : 8;

  return (
    <motion.div
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{
        duration: motionTokens.duration.float,
        repeat: Infinity,
        ease: motionTokens.easing.gentle,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export type StaggerRevealProps = HTMLMotionProps<"div"> & {
  staggerDelay?: number;
  children: ReactNode;
};

export function StaggerReveal({
  staggerDelay = 0.12,
  className,
  children,
  ...props
}: StaggerRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: staggerDelay, delayChildren: 0.08 },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  className,
  children,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: motionTokens.duration.normal,
            ease: motionTokens.easing.smooth,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionPresenceWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: motionTokens.duration.normal }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
