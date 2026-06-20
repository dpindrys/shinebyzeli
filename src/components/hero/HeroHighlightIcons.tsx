import { cn } from "@/lib/cn";
import Image from "next/image";

const ICONS = {
  owner: {
    src: "/icons/highlights/owner-operated.png",
    width: 114,
    height: 110,
  },
  languages: {
    src: "/icons/highlights/languages.png",
    width: 108,
    height: 112,
  },
  airbnb: {
    src: "/icons/highlights/airbnb.png",
    width: 110,
    height: 108,
  },
} as const;

function HighlightIcon({
  src,
  width,
  height,
  className,
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex h-[44px] w-[44px] shrink-0 items-center justify-center", className)}>
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className="h-8 w-auto max-h-8"
      />
    </span>
  );
}

export function OwnerOperatedIcon({ className }: { className?: string }) {
  return <HighlightIcon {...ICONS.owner} className={className} />;
}

export function LanguagesIcon({ className }: { className?: string }) {
  return <HighlightIcon {...ICONS.languages} className={className} />;
}

export function AirbnbIcon({ className }: { className?: string }) {
  return <HighlightIcon {...ICONS.airbnb} className={className} />;
}
