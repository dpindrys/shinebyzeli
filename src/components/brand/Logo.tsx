import { SparkleIcon } from "@/components/ambient/Sparkles";
import { cn } from "@/lib/cn";

export type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeStyles = {
  sm: {
    wordmark: "text-4xl sm:text-5xl",
    by: "mx-1.5 text-[0.34em]",
    tagline: "text-[0.62rem] sm:text-xs",
    line: "w-8 sm:w-10",
    gap: "mt-2 gap-3",
  },
  md: {
    wordmark: "text-5xl sm:text-6xl md:text-7xl",
    by: "mx-2 text-[0.34em]",
    tagline: "text-xs sm:text-sm",
    line: "w-10 sm:w-12",
    gap: "mt-2.5 gap-3",
  },
  lg: {
    wordmark: "text-6xl sm:text-7xl md:text-8xl",
    by: "mx-2.5 text-[0.34em]",
    tagline: "text-sm sm:text-base",
    line: "w-12 sm:w-14",
    gap: "mt-3 gap-4",
  },
} as const;

function FloatingSparkle({
  className,
  color = "text-yellow-400",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <SparkleIcon
      className={cn(
        "pointer-events-none absolute h-[0.3em] w-[0.3em]",
        color,
        className,
      )}
    />
  );
}

function SparkleOverDot({ color = "text-amber-400" }: { color?: string }) {
  return (
    <FloatingSparkle
      className="-top-[0.1em] left-1/2 -translate-x-1/2"
      color={color}
    />
  );
}

export function Logo({ className, size = "md" }: LogoProps) {
  const styles = sizeStyles[size];

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <h1
        className={cn(
          "inline-flex items-baseline font-serif font-semibold tracking-tight text-accent-800",
          styles.wordmark,
        )}
      >
        <span className="relative inline-flex items-baseline">
          <span>Sh</span>
          <span className="relative inline-block w-[0.3em] text-center">
            i
            <SparkleOverDot color="text-amber-400" />
          </span>
          <span>ne</span>
          <FloatingSparkle
            className="-top-[0.45em] right-[0.08em]"
            color="text-amber-500"
          />
        </span>

        <span className={cn("relative font-normal", styles.by)}>
          by
          <FloatingSparkle
            className="-top-[0.95em] left-[0.05em]"
            color="text-yellow-400"
          />
        </span>

        <span className="relative inline-flex items-baseline">
          <span>Z</span>
          <span className="relative inline-block">
            e
            <FloatingSparkle
              className="-top-[0.55em] left-[0.15em]"
              color="text-amber-400"
            />
          </span>
          <span>l</span>
          <span className="relative inline-block w-[0.3em] text-center">
            i
            <SparkleOverDot color="text-yellow-400" />
          </span>
        </span>
      </h1>

      <div className={cn("flex w-full items-center justify-center", styles.gap)}>
        <span
          aria-hidden
          className={cn("h-px bg-accent-300", styles.line)}
        />
        <span
          className={cn(
            "font-sans font-medium tracking-[0.22em] text-accent-700 uppercase",
            styles.tagline,
          )}
        >
          Cleaning Services
        </span>
        <span
          aria-hidden
          className={cn("h-px bg-accent-300", styles.line)}
        />
      </div>
    </div>
  );
}
