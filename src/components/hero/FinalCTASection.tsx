"use client";

import {
  AirbnbIcon,
  LanguagesIcon,
  OwnerOperatedIcon,
} from "@/components/hero/HeroHighlightIcons";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { FormEvent, ReactNode } from "react";

const inputClassName =
  "w-full rounded-xl border border-neutral-200/80 bg-white px-4 py-3 text-body-md text-neutral-800 placeholder:text-neutral-400 transition-colors focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/20";

const labelClassName = "mb-1.5 block text-body-sm font-medium text-neutral-700";

type TrustItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

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

const TRUST_ITEMS: TrustItem[] = [
  {
    icon: <OwnerOperatedIcon />,
    title: "Owner Operated",
    description: "Every clean is personally overseen by Zeli.",
  },
  {
    icon: <LanguagesIcon />,
    title: "English & Portuguese",
    description: "Clear communication for local homeowners and hosts.",
  },
  {
    icon: <AirbnbIcon />,
    title: "Airbnb Specialists",
    description: "Turnovers, deep cleans, and guest-ready presentation.",
  },
  {
    icon: <ShieldCheckIcon className="h-5 w-5" />,
    title: "Guest-Ready Guarantee",
    description: "If something isn't right, we'll make it right.",
  },
  {
    icon: <UsersIcon className="h-5 w-5" />,
    title: "Limited Client Roster",
    description:
      "We intentionally serve a small number of properties to maintain quality.",
  },
];

function EstimateForm({ id, className }: { id?: string; className?: string }) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form id={id} onSubmit={handleSubmit} className={cn("space-y-5", className)}>
      <div>
        <label htmlFor="cta-name" className={labelClassName}>
          Full Name
        </label>
        <input
          id="cta-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="cta-email" className={labelClassName}>
          Email Address
        </label>
        <input
          id="cta-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="cta-phone" className={labelClassName}>
          Phone Number
        </label>
        <input
          id="cta-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(555) 555-5555"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="cta-property-type" className={labelClassName}>
          Property Type
        </label>
        <select
          id="cta-property-type"
          name="propertyType"
          required
          defaultValue=""
          className={cn(inputClassName, "appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%2378716c%27 stroke-width=%272%27%3E%3Cpath d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10")}
        >
          <option value="" disabled>
            Select property type
          </option>
          <option value="airbnb">Airbnb</option>
          <option value="home">Home</option>
          <option value="condo">Condo</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cta-bedrooms" className={labelClassName}>
            Bedrooms
          </label>
          <input
            id="cta-bedrooms"
            name="bedrooms"
            type="number"
            min={0}
            required
            placeholder="2"
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="cta-bathrooms" className={labelClassName}>
            Bathrooms
          </label>
          <input
            id="cta-bathrooms"
            name="bathrooms"
            type="number"
            min={0}
            step={0.5}
            required
            placeholder="1"
            className={inputClassName}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cta-message" className={labelClassName}>
          Message <span className="font-normal text-neutral-400">(optional)</span>
        </label>
        <textarea
          id="cta-message"
          name="message"
          rows={4}
          placeholder="Tell us about your property, schedule, or any special requests..."
          className={cn(inputClassName, "resize-none")}
        />
      </div>

      <div className="pt-1">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Get My Free Estimate
        </Button>
        <p className="mt-3 text-body-sm text-neutral-500">
          No obligation. Response within 24 hours.
        </p>
      </div>
    </form>
  );
}

function TrustList() {
  return (
    <ul className="space-y-5">
      {TRUST_ITEMS.map((item) => (
        <li key={item.title} className="flex gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 [&_img]:max-h-6 [&_img]:w-auto [&_span]:h-auto [&_span]:w-auto">
            {item.icon}
          </div>
          <div className="min-w-0 pt-0.5">
            <h4 className="text-body-sm font-semibold text-accent-800">
              {item.title}
            </h4>
            <p className="mt-0.5 text-body-sm leading-relaxed text-neutral-500">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Testimonial() {
  return (
    <blockquote className="mt-10 rounded-2xl border border-neutral-200/60 bg-neutral-50/60 px-5 py-6">
      <div
        className="text-lg tracking-widest text-amber-500"
        aria-label="5 out of 5 stars"
      >
        ★★★★★
      </div>
      <p className="mt-3 text-body-md leading-relaxed text-neutral-600">
        &ldquo;Best cleaner we&apos;ve ever hired. Our guests consistently mention
        how spotless everything feels.&rdquo;
      </p>
      <footer className="mt-4 text-body-sm font-medium text-accent-800">
        — Airbnb Host, Boston
      </footer>
    </blockquote>
  );
}

export type FinalCTASectionProps = {
  className?: string;
};

export function FinalCTASection({ className }: FinalCTASectionProps) {
  return (
    <section
      id="quote"
      className={cn("bg-[#F8F6F2] px-5 pb-20 sm:px-8 sm:pb-24 lg:pb-32", className)}
    >
      <Container>
        <FadeIn direction="up">
          <div className="overflow-hidden rounded-2xl border border-neutral-200/60 bg-white shadow-[0_4px_20px_-4px_rgb(28_25_23_/_0.1),0_2px_8px_-2px_rgb(28_25_23_/_0.06)]">
            <div className="grid lg:grid-cols-2">
              <div className="border-b border-neutral-200/60 p-6 sm:p-8 lg:border-r lg:border-b-0 lg:p-10 xl:p-12">
                <h2 className="font-sans text-3xl font-semibold tracking-tight text-accent-800 sm:text-4xl">
                  Let&apos;s see if we&apos;re a good fit.
                </h2>
                <p className="mt-4 max-w-md text-body-lg leading-relaxed text-neutral-600">
                  Share a few details about your home or Airbnb and we&apos;ll
                  be in touch.
                </p>

                <div className="mt-8 lg:mt-10">
                  <EstimateForm id="estimate-form" />
                </div>
              </div>

              <div className="bg-neutral-50/30 p-6 sm:p-8 lg:p-10 xl:p-12">
                <h3 className="font-sans text-xl font-semibold tracking-tight text-accent-800 sm:text-2xl">
                  Why hosts choose Shine by Zeli
                </h3>

                <div className="mt-8">
                  <TrustList />
                </div>

                <Testimonial />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
