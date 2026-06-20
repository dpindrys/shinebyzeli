import type { Transition, Variants } from "framer-motion";

/** Animation tokens — durations in seconds, easings as cubic-bezier tuples */
export const motionTokens = {
  duration: {
    instant: 0.1,
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    slower: 0.8,
    ambient: 4,
    float: 6,
  },
  delay: {
    none: 0,
    short: 0.1,
    medium: 0.2,
    long: 0.4,
  },
  easing: {
    default: [0.25, 0.1, 0.25, 1] as const,
    smooth: [0.4, 0, 0.2, 1] as const,
    out: [0, 0, 0.2, 1] as const,
    inOut: [0.4, 0, 0.6, 1] as const,
    gentle: [0.45, 0, 0.55, 1] as const,
    bounce: [0.34, 1.56, 0.64, 1] as const,
  },
  spring: {
    gentle: { type: "spring" as const, stiffness: 120, damping: 20 },
    soft: { type: "spring" as const, stiffness: 80, damping: 18 },
    snappy: { type: "spring" as const, stiffness: 200, damping: 24 },
  },
} as const;

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDownVariants: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0 },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const floatVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-6, 6, -6],
    transition: {
      duration: motionTokens.duration.float,
      repeat: Infinity,
      ease: motionTokens.easing.gentle,
    },
  },
};

export const gentleFloatVariants: Variants = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-4, 4, -4],
    rotate: [-0.5, 0.5, -0.5],
    transition: {
      duration: motionTokens.duration.ambient,
      repeat: Infinity,
      ease: motionTokens.easing.gentle,
    },
  },
};

export const scrollRevealVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.easing.smooth,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.normal,
      ease: motionTokens.easing.smooth,
    },
  },
};

export function createTransition(
  overrides: Partial<Transition> = {},
): Transition {
  return {
    duration: motionTokens.duration.normal,
    ease: motionTokens.easing.smooth,
    ...overrides,
  };
}

export const defaultViewport = {
  once: true,
  margin: "-80px" as const,
  amount: 0.2 as const,
};
