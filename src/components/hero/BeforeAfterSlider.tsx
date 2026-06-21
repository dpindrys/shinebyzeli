"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type PointerEvent } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  initialPosition?: number;
  aspectRatio?: string;
  className?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  initialPosition = 15,
  aspectRatio = "4 / 3",
  className,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const afterLabelRef = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState(initialPosition);
  const [hideAfterLabel, setHideAfterLabel] = useState(false);
  const isDragging = useRef(false);

  const updateLabelVisibility = useCallback(() => {
    const container = containerRef.current;
    const afterLabel = afterLabelRef.current;
    if (!container || !afterLabel) return;

    const clipEdge = (position / 100) * container.offsetWidth;
    setHideAfterLabel(clipEdge >= afterLabel.offsetLeft - 2);
  }, [position]);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    updatePosition(event.clientX);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  useLayoutEffect(() => {
    updateLabelVisibility();
  }, [updateLabelVisibility]);

  useEffect(() => {
    window.addEventListener("resize", updateLabelVisibility);
    return () => window.removeEventListener("resize", updateLabelVisibility);
  }, [updateLabelVisibility]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full touch-none select-none overflow-hidden rounded-xl",
        className,
      )}
      style={{ aspectRatio }}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
    >
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, 50vw"
        draggable={false}
      />

      <span
        ref={afterLabelRef}
        className={cn(
          "pointer-events-none absolute right-3 bottom-3 z-[5] text-[0.65rem] font-semibold tracking-[0.14em] text-white uppercase drop-shadow-[0_1px_3px_rgb(0_0_0_/_0.55)] transition-opacity duration-150 sm:text-xs",
          hideAfterLabel && "opacity-0",
        )}
      >
        After
      </span>

      <div
        className="absolute inset-0 z-[6] overflow-hidden rounded-xl"
        style={{
          clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
        }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
          draggable={false}
        />

        <span className="pointer-events-none absolute bottom-3 left-3 z-[7] text-[0.65rem] font-semibold tracking-[0.14em] text-white uppercase drop-shadow-[0_1px_3px_rgb(0_0_0_/_0.55)] sm:text-xs">
          Before
        </span>
      </div>

      <div
        className="absolute inset-y-0 z-10 flex w-8 -translate-x-1/2 cursor-pointer items-center justify-center"
        style={{ left: `${position}%` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="pointer-events-none h-full w-1 bg-white" />

        <div className="pointer-events-none absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white shadow-[0_2px_8px_rgb(0_0_0_/_0.25)]">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-neutral-600"
            aria-hidden
          >
            <path d="M7 5 3 10l4 5" />
            <path d="M13 5l4 5-4 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
