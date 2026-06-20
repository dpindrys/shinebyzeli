import { BackgroundMotion, GridPattern } from "@/components/ambient/BackgroundMotion";
import { SoftGradient, GradientOrb } from "@/components/ambient/SoftGradient";
import { Sparkles } from "@/components/ambient/Sparkles";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export type SiteLayoutProps = {
  children: ReactNode;
  ambient?: boolean;
  sparkles?: boolean;
  grid?: boolean;
  className?: string;
};

export function SiteLayout({
  children,
  ambient = true,
  sparkles = true,
  grid = false,
  className,
}: SiteLayoutProps) {
  return (
    <div className={cn("relative min-h-screen bg-background", className)}>
      {ambient && (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
          <SoftGradient variant="ambient" />
          <SoftGradient variant="mesh" />
          <BackgroundMotion intensity="subtle" />
          <GradientOrb
            color="accent"
            size="xl"
            className="-right-32 -top-32 opacity-60"
          />
          <GradientOrb
            color="neutral"
            size="lg"
            className="-bottom-24 -left-24 opacity-50"
          />
          {grid && <GridPattern />}
          {sparkles && <Sparkles intensity="subtle" />}
        </div>
      )}

      <div className="relative z-10 flex min-h-screen flex-col">{children}</div>
    </div>
  );
}

export function SiteMain({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("flex flex-1 flex-col", className)}>{children}</main>
  );
}

export function SiteHeader({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-neutral-200/60 bg-white/80 backdrop-blur-md",
        className,
      )}
    >
      {children}
    </header>
  );
}

export function SiteFooter({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <footer
      className={cn(
        "border-t border-neutral-200/60 bg-white/60 backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </footer>
  );
}
