"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import { useCallback, useRef, useState, type PointerEvent } from "react";

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
  const [position, setPosition] = useState(initialPosition);
  const isDragging = useRef(false);

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

      <div
        className="absolute inset-0 overflow-hidden rounded-xl"
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
