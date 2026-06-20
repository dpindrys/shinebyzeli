import {
  AirbnbIcon,
  LanguagesIcon,
  OwnerOperatedIcon,
} from "@/components/hero/HeroHighlightIcons";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type HighlightItem = {
  icon: ReactNode;
  label: string;
};

const HIGHLIGHTS: HighlightItem[] = [
  {
    icon: <OwnerOperatedIcon />,
    label: "Owner Operated",
  },
  {
    icon: <LanguagesIcon />,
    label: "English & Portuguese",
  },
  {
    icon: <AirbnbIcon />,
    label: "Airbnb Specialists",
  },
];

export type HeroHighlightsProps = {
  className?: string;
};

export function HeroHighlights({ className }: HeroHighlightsProps) {
  return (
    <ul className={cn("space-y-3", className)}>
      {HIGHLIGHTS.map((item) => (
        <li key={item.label} className="flex h-[44px] items-center gap-3">
          {item.icon}
          <span className="text-body-sm font-medium text-neutral-700">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
