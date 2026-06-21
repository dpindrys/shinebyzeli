"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion";
import { MeetZeliCard } from "@/components/hero/MeetZeliCard";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type ServiceItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

const SERVICES: ServiceItem[] = [
  {
    icon: <ChecklistIcon className="h-6 w-6" />,
    title: "No guesswork before check-in.",
    description:
      "Keep track of completed tasks in real time with a shared checklist.",
  },
];

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

export type CleaningServicesSectionProps = {
  className?: string;
};

export function CleaningServicesSection({
  className,
}: CleaningServicesSectionProps) {
  return (
    <section
      id="services"
      className={cn("px-5 pt-16 pb-20 sm:px-8", className)}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-10">
          <div className="lg:pt-8">
            <FadeIn direction="up">
              <h2 className="font-sans text-3xl font-semibold tracking-tight text-accent-800 sm:text-4xl">
                What we offer
              </h2>
            </FadeIn>

            <ul className="mt-10 space-y-8">
              {SERVICES.map((service, index) => (
                <li key={service.title}>
                  <FadeIn direction="up" delay={0.05 * index}>
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-body-lg font-semibold text-accent-800">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-body-md leading-relaxed text-neutral-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <MeetZeliCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
