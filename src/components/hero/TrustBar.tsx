"use client";

import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type TrustItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

function PersonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" />
    </svg>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M12 21c-4-4-7-8-7-13a7 7 0 0 1 14 0c0 5-3 9-7 13z" />
      <path d="M12 21V8" />
    </svg>
  );
}

function PawIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <ellipse cx="8" cy="7" rx="2" ry="2.5" />
      <ellipse cx="16" cy="7" rx="2" ry="2.5" />
      <ellipse cx="5" cy="12" rx="1.8" ry="2.2" />
      <ellipse cx="19" cy="12" rx="1.8" ry="2.2" />
      <path d="M12 11c-2.5 0-4.5 2.5-4.5 5.5 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5c0-3-2-5.5-4.5-5.5z" />
    </svg>
  );
}

function BadgeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="9" r="5" />
      <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" />
    </svg>
  );
}

const TRUST_ITEMS: TrustItem[] = [
  {
    icon: <PersonIcon className="h-7 w-7" />,
    title: "Consistent Personal Touch",
    description: "Dedicated owner-operated service. Secure and caring.",
  },
  {
    icon: <LeafIcon className="h-7 w-7" />,
    title: "Eco-Friendly & Certified Products",
    description: "Safe, premium non-toxic cleaning options.",
  },
  {
    icon: <PawIcon className="h-7 w-7" />,
    title: "Pet & Kid Safe Methods",
    description: "Caring, pet-safe and non-toxic cleaning methods.",
  },
  {
    icon: <BadgeIcon className="h-7 w-7" />,
    title: "Satisfaction Guaranteed",
    description: "Assured. Re-clean guarantee or money-back.",
  },
];

export type TrustBarProps = {
  className?: string;
  visible?: boolean;
  align?: "center" | "left";
  fullWidth?: boolean;
};

export function TrustBar({
  className,
  visible = true,
  align = "center",
  fullWidth = false,
}: TrustBarProps) {
  const isLeft = align === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: motionTokens.duration.slow,
        ease: motionTokens.easing.smooth,
      }}
      className={cn(
        "rounded-2xl border border-neutral-200/60 bg-white px-5 py-5 shadow-[0_4px_20px_-4px_rgb(28_25_23_/_0.1),0_2px_8px_-2px_rgb(28_25_23_/_0.06)] sm:px-6",
        className,
      )}
    >
      <div
        className={cn(
          "grid gap-x-4 gap-y-6 sm:gap-x-6",
          fullWidth
            ? "grid-cols-2 lg:grid-cols-4"
            : "grid-cols-2",
        )}
      >
        {TRUST_ITEMS.map((item) => (
          <div
            key={item.title}
            className={cn(
              "flex flex-col",
              isLeft && !fullWidth
                ? "items-start text-left"
                : "items-center text-center",
            )}
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
    </motion.div>
  );
}
