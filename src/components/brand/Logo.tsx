import { SparkleIcon } from "@/components/ambient/Sparkles";
import { cn } from "@/lib/cn";

export type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeStyles = {
  sm: {
    shine: "text-4xl sm:text-5xl",
    byline: "text-sm sm:text-base",
    sparkle: "h-4 w-4 sm:h-5 sm:w-5",
    sparkleOffset: "-right-5 -top-1 sm:-right-6 sm:top-0",
    line: "w-8 sm:w-10",
  },
  md: {
    shine: "text-5xl sm:text-6xl md:text-7xl",
    byline: "text-base sm:text-lg",
    sparkle: "h-5 w-5 sm:h-6 sm:w-6",
    sparkleOffset: "-right-6 -top-1 sm:-right-8 sm:top-0",
    line: "w-10 sm:w-12",
  },
  lg: {
    shine: "text-6xl sm:text-7xl md:text-8xl",
    byline: "text-lg sm:text-xl",
    sparkle: "h-6 w-6 sm:h-7 sm:w-7",
    sparkleOffset: "-right-7 top-0 sm:-right-10 sm:top-1",
    line: "w-12 sm:w-14",
  },
};

export function Logo({ className, size = "md" }: LogoProps) {
  const styles = sizeStyles[size];

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative inline-block">
        <h1
          className={cn(
            "font-serif font-semibold tracking-tight text-accent-800",
            styles.shine,
          )}
        >
          Shine
        </h1>
        <div
          className={cn(
            "absolute flex items-center gap-0.5",
            styles.sparkleOffset,
          )}
          aria-hidden
        >
          <SparkleIcon className={cn(styles.sparkle, "text-amber-400")} />
          <SparkleIcon
            className={cn(styles.sparkle, "mt-2 text-yellow-400 opacity-90")}
          />
          <SparkleIcon
            className={cn(styles.sparkle, "text-amber-500 opacity-95")}
          />
        </div>
      </div>

      <div className="mt-1 flex items-center gap-3">
        <span
          aria-hidden
          className={cn("h-px bg-accent-300", styles.line)}
        />
        <span
          className={cn(
            "font-sans font-medium tracking-wide text-accent-700",
            styles.byline,
          )}
        >
          by Zeli
        </span>
        <span
          aria-hidden
          className={cn("h-px bg-accent-300", styles.line)}
        />
      </div>
    </div>
  );
}
