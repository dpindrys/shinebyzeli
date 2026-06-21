"use client";

import { FadeIn } from "@/components/motion";
import Image from "next/image";

function HeartOutlineIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M12 20.5c-4.5-3.8-8-7.8-8-11.5 0-3 2.5-5.5 5.5-5.5 1.7 0 3.3.8 4.3 2.1 1-1.3 2.6-2.1 4.3-2.1 3 0 5.5 2.5 5.5 5.5 0 3.7-3.5 7.7-8 11.5z" />
    </svg>
  );
}

export type MeetZeliCardProps = {
  className?: string;
};

export function MeetZeliCard({ className }: MeetZeliCardProps) {
  return (
    <FadeIn direction="up" delay={0.15} className={className}>
      <div className="flex flex-col rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-soft sm:p-8">
        <h2 className="font-sans text-3xl font-semibold tracking-tight text-accent-800 sm:text-4xl">
          Meet Zeli
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="text-body-md leading-relaxed text-neutral-600">
              Hi! I&apos;m Zeli. I take pride in creating clean, comfortable
              spaces where you can relax and enjoy life. I treat every home with
              the same care and respect as if it were my own. Your satisfaction
              is my top priority.
            </p>

            <p className="mt-6 flex items-center gap-2 font-serif text-3xl italic text-accent-600">
              Zeli
              <HeartOutlineIcon className="h-5 w-5 text-accent-700" />
            </p>

            <div className="mt-8 flex items-center gap-2.5">
              <span className="text-xl leading-none" aria-hidden>
                🇧🇷
              </span>
              <span className="text-body-sm font-medium text-neutral-600">
                English &amp; Portuguese Speaking
              </span>
            </div>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-[240px] shrink-0 overflow-hidden rounded-2xl lg:mx-0 lg:w-[220px]">
            <Image
              src="/photos/zeli.png"
              alt="Zeli, owner of Shine by Zeli"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 60vw, 240px"
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
