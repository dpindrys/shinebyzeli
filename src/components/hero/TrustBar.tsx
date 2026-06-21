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

function ChecklistIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12l2 2 4-4" />
      <path d="M9 17h6" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const TRUST_ITEMS: TrustItem[] = [
  {
    icon: <PhoneIcon className="h-7 w-7" />,
    title: "Direct Communication",
    description:
      "Stay in the loop and work directly with Zeli and her team.",
  },
  {
    icon: <ChecklistIcon className="h-7 w-7" />,
    title: "Transparent Turnovers",
    description: "Know what's completed before every check-in.",
  },
  {
    icon: <UsersIcon className="h-7 w-7" />,
    title: "Quality Over Quantity",
    description:
      "We set a high bar, and we limit the amount of clients we serve to meet it.",
  },
  {
    icon: <ShieldCheckIcon className="h-7 w-7" />,
    title: "Guest-Ready Guarantee",
    description: "If something isn't right, we'll make it right.",
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
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2",
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
