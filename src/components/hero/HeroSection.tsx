"use client";

import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import { SiteLayout, SiteMain } from "@/components/layout/SiteLayout";
import { FadeIn } from "@/components/motion";
import { BeforeAfterSlider } from "@/components/hero/BeforeAfterSlider";
import { CleaningServicesSection } from "@/components/hero/CleaningServicesSection";
import { HeroHighlights } from "@/components/hero/HeroHighlights";
import { TrustBar } from "@/components/hero/TrustBar";
import { ButtonLink } from "@/components/ui/Button";
import { Text } from "@/components/ui/Typography";
import Image from "next/image";

export function HeroSection() {
  return (
    <SiteLayout ambient={false}>
      <SiteMain>
        {/* Logo */}
        <section className="px-5 pt-10 pb-0 sm:px-8 sm:pt-12">
          <Container>
            <Logo size="lg" />
          </Container>
        </section>

        {/* Hero */}
        <section className="px-5 pt-10 pb-[20px] sm:px-8">
          <Container>
            <div className="grid gap-y-10 lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-y-8">
              <div className="flex w-[421px] flex-col text-left">
                <FadeIn direction="up">
                  <h2 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-accent-800 sm:text-4xl md:text-5xl">
                    The gold standard behind great stays.
                  </h2>
                </FadeIn>

                <FadeIn direction="up" delay={0.1}>
                  <Text.Lg className="mt-5 max-w-md text-neutral-600">
                    Owner-operated service for Boston-area hosts. Detailed,
                    dependable, and guest-ready every time.
                  </Text.Lg>
                </FadeIn>

                <FadeIn direction="up" delay={0.2} className="mt-8">
                  <ButtonLink
                    href="#services"
                    variant="primary"
                    size="lg"
                    className="border-2 border-accent-800 font-bold text-white hover:text-white active:text-white"
                  >
                    Why hosts choose us
                    <span aria-hidden className="ml-1 text-white">
                      →
                    </span>
                  </ButtonLink>
                </FadeIn>

                <FadeIn direction="up" delay={0.25} className="my-8">
                  <HeroHighlights />
                </FadeIn>
              </div>

              <FadeIn direction="up" delay={0.15}>
                <Image
                  src="/sequence/zeli11.png"
                  alt="Clean home by Zeli"
                  width={1536}
                  height={1024}
                  priority
                  className="block h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </FadeIn>

              <FadeIn direction="up" delay={0.3} className="col-span-full">
                <TrustBar fullWidth />
              </FadeIn>

              <FadeIn direction="up" delay={0.35} className="col-span-full mt-6">
                <div className="mb-8 text-center">
                  <h3 className="font-sans text-2xl font-semibold tracking-tight text-accent-800 sm:text-3xl">
                    Before and aft<em className="italic">ahhh</em>.
                  </h3>
                  <Text.Md className="mt-2 text-neutral-600">
                    A five-star Boston-area stay start with a spotless welcome.
                  </Text.Md>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 sm:items-stretch">
                  <BeforeAfterSlider
                    beforeSrc="/photos/bed1.png"
                    afterSrc="/photos/bed2.png"
                    beforeAlt="Bedroom before cleaning"
                    afterAlt="Bedroom after cleaning"
                    initialPosition={15}
                  />
                  <BeforeAfterSlider
                    beforeSrc="/photos/kitchen1.png"
                    afterSrc="/photos/kitchen2.png"
                    beforeAlt="Kitchen before cleaning"
                    afterAlt="Kitchen after cleaning"
                    initialPosition={15}
                  />
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        <CleaningServicesSection />
      </SiteMain>
    </SiteLayout>
  );
}
