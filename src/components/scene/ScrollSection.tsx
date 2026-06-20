"use client";

import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import type { ReactNode } from "react";

export type ScrollSectionProps = {
  id?: string;
  spacing?: "sm" | "md" | "lg" | "xl";
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  reveal?: "fade" | "stagger" | "none";
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export function ScrollSection({
  id,
  spacing = "lg",
  containerSize = "xl",
  reveal = "fade",
  className,
  containerClassName,
  children,
}: ScrollSectionProps) {
  const content = (
    <Container size={containerSize} className={containerClassName}>
      {children}
    </Container>
  );

  return (
    <Section id={id} spacing={spacing} className={className}>
      {reveal === "none" && content}
      {reveal === "fade" && <ScrollReveal>{content}</ScrollReveal>}
      {reveal === "stagger" && (
        <StaggerReveal>
          <StaggerItem>{content}</StaggerItem>
        </StaggerReveal>
      )}
    </Section>
  );
}

export type ScrollSectionGridProps = ScrollSectionProps & {
  columns?: 1 | 2 | 3;
  gap?: "sm" | "md" | "lg";
};

const columnStyles = {
  1: "grid-cols-1",
  2: "grid-cols-1 lg:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
};

const gapStyles = {
  sm: "gap-6",
  md: "gap-8 lg:gap-10",
  lg: "gap-10 lg:gap-14",
};

export function ScrollSectionGrid({
  columns = 2,
  gap = "md",
  children,
  ...sectionProps
}: ScrollSectionGridProps) {
  return (
    <ScrollSection {...sectionProps}>
      <StaggerReveal
        className={cn("grid", columnStyles[columns], gapStyles[gap])}
      >
        {children}
      </StaggerReveal>
    </ScrollSection>
  );
}

export function ScrollSectionItem({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <StaggerItem className={className}>{children}</StaggerItem>;
}
