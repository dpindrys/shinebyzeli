"use client";

import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { IsometricContainer } from "./IsometricContainer";

export type RoomScene = {
  id: string;
  content: ReactNode;
};

export type RoomTransformationSceneProps = {
  scenes: RoomScene[];
  className?: string;
  activeIndex?: number;
  scrollDriven?: boolean;
  showProgress?: boolean;
};

export function RoomTransformationScene({
  scenes,
  className,
  activeIndex = 0,
  scrollDriven = false,
  showProgress = true,
}: RoomTransformationSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const [scrollIndex, setScrollIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!scrollDriven) return;
    const clamped = Math.max(0, Math.min(1, progress));
    setScrollIndex(
      Math.min(scenes.length - 1, Math.floor(clamped * scenes.length)),
    );
  });

  const resolvedIndex = scrollDriven ? scrollIndex : activeIndex;
  const currentScene = scenes[resolvedIndex] ?? scenes[0];

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <IsometricContainer aspectRatio="scene" floating glow>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{
              duration: motionTokens.duration.slow,
              ease: motionTokens.easing.smooth,
            }}
            className="flex h-full w-full items-center justify-center"
          >
            {currentScene.content}
          </motion.div>
        </AnimatePresence>
      </IsometricContainer>

      {showProgress && scenes.length > 1 && (
        <SceneProgress
          total={scenes.length}
          activeIndex={resolvedIndex}
          className="mt-8"
        />
      )}
    </div>
  );
}

function SceneProgress({
  total,
  activeIndex,
  className,
}: {
  total: number;
  activeIndex: number;
  className?: string;
}) {
  return (
    <div
      className={cn("flex items-center justify-center gap-2", className)}
      aria-hidden
    >
      {Array.from({ length: total }, (_, i) => (
        <motion.div
          key={i}
          className={cn(
            "h-1.5 rounded-full",
            i === activeIndex ? "bg-accent-500" : "bg-neutral-200",
          )}
          animate={{
            width: i === activeIndex ? 32 : 6,
          }}
          transition={{ duration: motionTokens.duration.fast }}
        />
      ))}
    </div>
  );
}

export type RoomSceneSlotProps = {
  className?: string;
  children: ReactNode;
};

export function RoomSceneSlot({ className, children }: RoomSceneSlotProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

export type RoomComparisonProps = {
  before: ReactNode;
  after: ReactNode;
  className?: string;
  splitRatio?: number;
};

export function RoomComparison({
  before,
  after,
  className,
  splitRatio = 50,
}: RoomComparisonProps) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-2xl",
        className,
      )}
    >
      <div className="absolute inset-0">{before}</div>
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: `inset(0 ${100 - splitRatio}% 0 0)` }}
        viewport={{ once: true }}
        transition={{
          duration: motionTokens.duration.slower,
          ease: motionTokens.easing.smooth,
        }}
      >
        {after}
      </motion.div>
      <div
        aria-hidden
        className="absolute bottom-0 top-0 w-0.5 bg-accent-400/60"
        style={{ left: `${splitRatio}%` }}
      />
    </div>
  );
}
