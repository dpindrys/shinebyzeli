"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

export const SEQUENCE_FRAMES = Array.from(
  { length: 8 },
  (_, i) => `/sequence/zeli${i + 1}.png`,
);

function useFrameState(scrollYProgress: MotionValue<number>) {
  const floatIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, SEQUENCE_FRAMES.length - 1],
  );

  const [frameState, setFrameState] = useState({
    current: 0,
    next: 1,
    blend: 0,
  });

  useMotionValueEvent(floatIndex, "change", (value) => {
    const clamped = Math.max(0, Math.min(SEQUENCE_FRAMES.length - 1, value));
    const current = Math.floor(clamped);
    const next = Math.min(current + 1, SEQUENCE_FRAMES.length - 1);
    const blend = clamped - current;

    setFrameState({ current, next, blend });
  });

  return frameState;
}

export type ImageSequenceViewerProps = {
  scrollYProgress: MotionValue<number>;
  className?: string;
};

export function ImageSequenceViewer({
  scrollYProgress,
  className,
}: ImageSequenceViewerProps) {
  const frameState = useFrameState(scrollYProgress);

  useEffect(() => {
    SEQUENCE_FRAMES.slice(1).forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <div className={cn("relative aspect-[4/3] w-full", className)}>
      <motion.div
        className="absolute inset-0"
        style={{ opacity: 1 - frameState.blend }}
      >
        <Image
          src={SEQUENCE_FRAMES[frameState.current]}
          alt=""
          fill
          priority={frameState.current === 0}
          className="object-contain"
          sizes="(max-width: 1024px) 50vw, 560px"
        />
      </motion.div>
      {frameState.current !== frameState.next && (
        <motion.div
          className="absolute inset-0"
          style={{ opacity: frameState.blend }}
        >
          <Image
            src={SEQUENCE_FRAMES[frameState.next]}
            alt=""
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 50vw, 560px"
          />
        </motion.div>
      )}
    </div>
  );
}

export type ScrollImageSequenceProps = {
  className?: string;
  scrollHeight?: string;
};

export function ScrollImageSequence({
  className,
  scrollHeight = "400vh",
}: ScrollImageSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ height: scrollHeight }}
    >
      <div className="sticky top-0 flex h-svh items-center justify-center px-4 sm:px-8">
        <ImageSequenceViewer
          scrollYProgress={scrollYProgress}
          className="max-w-5xl"
        />
      </div>
    </div>
  );
}
