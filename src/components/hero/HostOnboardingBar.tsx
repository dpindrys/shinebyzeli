"use client";

import { cn } from "@/lib/cn";
import handshakeIcon from "../../../assets/handshake.png";
import Image from "next/image";
import type { ReactNode } from "react";

type OnboardingItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const ONBOARDING_ITEMS: OnboardingItem[] = [
  {
    icon: <HomeIcon className="h-7 w-7" />,
    title: "3 Host Openings Available",
    description:
      "We're accepting a limited number of new Boston-area hosts for recurring turnover service.",
  },
  {
    icon: (
      <Image
        src={handshakeIcon}
        alt=""
        className="h-7 w-7 object-contain"
        aria-hidden
      />
    ),
    title: "Building your service plan",
    description:
      "We'll learn about your property and turnover needs to create a service plan that works for you.",
  },
  {
    icon: <PhoneIcon className="h-7 w-7" />,
    title: "Ready to Get Started?",
    description:
      "Schedule a no-obligation call to discuss your property and hosting needs to see if we're a match.",
  },
];

export type HostOnboardingBarProps = {
  className?: string;
};

export function HostOnboardingBar({ className }: HostOnboardingBarProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-neutral-200/60 bg-white px-5 py-5 shadow-[0_4px_20px_-4px_rgb(28_25_23_/_0.1),0_2px_8px_-2px_rgb(28_25_23_/_0.06)] sm:px-6",
        className,
      )}
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
        {ONBOARDING_ITEMS.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent-50 text-accent-600">
              {item.icon}
            </div>
            <h3 className="text-body-sm font-semibold text-accent-800">
              {item.title}
            </h3>
            <p className="mt-1.5 text-body-sm leading-relaxed text-neutral-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
