"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion";
import { MeetZeliCard } from "@/components/hero/MeetZeliCard";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { useState, type ReactNode } from "react";

type ServiceItem = {
  icon: ReactNode;
  title: string;
  description: string;
  details?: ReactNode;
};

const SERVICES: ServiceItem[] = [
  {
    icon: <ChecklistIcon className="h-6 w-6" />,
    title: "No guesswork before check-in.",
    description:
      "Keep track of completed tasks in real time with a checklist.",
    details: (
      <Image
        src="/photos/checklist.png"
        alt="Shared turnover cleaning checklist"
        width={1536}
        height={1024}
        className="block w-full rounded-lg border border-accent-200/60"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    ),
  },
  {
    icon: <PhoneIcon className="h-6 w-6" />,
    title: "Personal communication.",
    description:
      "Work directly with Zeli and her team from booking to check-in.",
  },
  {
    icon: <DollarIcon className="h-6 w-6" />,
    title: "Transparent pricing.",
    description: "Straightforward rates with no surprises.",
  },
  {
    icon: <UsersIcon className="h-6 w-6" />,
    title: "Limited client roster.",
    description:
      "We intentionally work with a select number of hosts to maintain quality and reliability.",
  },
];

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden
    >
      <path d="M12 5v14M5 12h14" />
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

function DollarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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

function ServiceAccordionItem({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const contentId = `service-accordion-${index}`;

  return (
    <FadeIn direction="up" delay={0.05 * index}>
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen((current) => !current);
          }
        }}
        className={cn(
          "cursor-pointer overflow-hidden rounded-xl border bg-accent-50/40 transition-colors hover:bg-accent-100/30",
          open
            ? "border-accent-300/80 bg-accent-50/60"
            : "border-accent-200/60",
        )}
      >
        <div className="px-4 py-4 sm:px-5">
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-100/70 text-accent-600">
              {service.icon}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start gap-3">
                <h3 className="flex-1 text-body-lg font-semibold text-accent-800">
                  {service.title}
                </h3>

                <PlusIcon
                  className={cn(
                    "mt-0.5 h-4 w-4 shrink-0 text-accent-500 transition-transform duration-200",
                    open && "rotate-45",
                  )}
                />
              </div>

              <p className="mt-1 text-body-md leading-relaxed text-neutral-600">
                {service.description}
              </p>
            </div>
          </div>

          <div
            id={contentId}
            className={cn(
              "grid transition-[grid-template-rows] duration-200 ease-out",
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="overflow-hidden">
              {service.details ? (
                <div className="pt-3">{service.details}</div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
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
        <FadeIn direction="up">
          <h2 className="font-sans text-3xl font-semibold tracking-tight text-accent-800 sm:text-4xl md:text-5xl">
            Why hosts choose us
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-10">
          <div className="relative z-0">
            <ul className="space-y-3">
              {SERVICES.map((service, index) => (
                <li key={service.title}>
                  <ServiceAccordionItem service={service} index={index} />
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10">
            <MeetZeliCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
