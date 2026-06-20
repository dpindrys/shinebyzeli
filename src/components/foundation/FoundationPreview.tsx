"use client";

import { IsometricPlaceholder } from "@/components/ambient";
import { Container, SiteLayout, SiteMain } from "@/components/layout";
import { FadeIn, ScrollReveal } from "@/components/motion";
import {
  IsometricContainer,
  ScrollSection,
  RoomTransformationScene,
  RoomSceneSlot,
} from "@/components/scene";
import { Button, Card, CardGlow, Display, Section, Text } from "@/components/ui";

export function FoundationPreview() {
  return (
    <SiteLayout ambient sparkles grid>
      <SiteMain>
        <ScrollSection spacing="lg" reveal="none">
          <div className="flex flex-col gap-6">
            <Text.Label>Design System</Text.Label>
            <Display.Lg>Visual Foundation</Display.Lg>
          </div>
        </ScrollSection>

        <ScrollSection spacing="md">
          <div className="grid gap-8 lg:grid-cols-2">
            <FadeIn>
              <Card variant="default" padding="lg">
                <CardGlow />
                <Text.Label className="mb-4 block">Typography</Text.Label>
                <div className="space-y-4">
                  <Display.Md>Display Medium</Display.Md>
                  <Text.Lg>Body large text sample</Text.Lg>
                  <Text.Md>Body medium text sample</Text.Md>
                  <Text.Sm>Body small text sample</Text.Sm>
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card variant="accent" padding="lg">
                <Text.Label className="mb-4 block">Color Palette</Text.Label>
                <div className="grid grid-cols-5 gap-2">
                  {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                    (step) => (
                      <div key={step} className="space-y-1">
                        <div
                          className={`h-10 rounded-lg bg-accent-${step} border border-neutral-200/50`}
                          style={{
                            backgroundColor: `var(--accent-${step})`,
                          }}
                        />
                        <Text.Xs className="text-center">{step}</Text.Xs>
                      </div>
                    ),
                  )}
                </div>
              </Card>
            </FadeIn>
          </div>
        </ScrollSection>

        <ScrollSection spacing="md">
          <Text.Label className="mb-6 block">Buttons</Text.Label>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="soft">Soft</Button>
          </div>
        </ScrollSection>

        <ScrollSection spacing="md">
          <Text.Label className="mb-6 block">Cards</Text.Label>
          <div className="grid gap-6 md:grid-cols-3">
            <Card variant="default" padding="md" interactive>
              <Text.Md>Default card</Text.Md>
            </Card>
            <Card variant="elevated" padding="md" interactive>
              <Text.Md>Elevated card</Text.Md>
            </Card>
            <Card variant="glass" padding="md" interactive>
              <Text.Md>Glass card</Text.Md>
            </Card>
          </div>
        </ScrollSection>

        <ScrollSection spacing="md">
          <Text.Label className="mb-6 block">Isometric Placeholders</Text.Label>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <IsometricPlaceholder variant="room" size="md" />
            <IsometricPlaceholder variant="cube" size="md" />
            <IsometricPlaceholder variant="stack" size="md" />
            <IsometricPlaceholder variant="scene" size="lg" />
          </div>
        </ScrollSection>

        <ScrollSection spacing="md">
          <Text.Label className="mb-6 block">Scene Framework</Text.Label>
          <div className="grid gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <IsometricContainer aspectRatio="scene">
                <IsometricPlaceholder variant="room" size="lg" animated={false} />
              </IsometricContainer>
            </ScrollReveal>

            <RoomTransformationScene
              scenes={[
                {
                  id: "before",
                  content: (
                    <RoomSceneSlot>
                      <IsometricPlaceholder
                        variant="room"
                        size="lg"
                        animated={false}
                      />
                    </RoomSceneSlot>
                  ),
                },
                {
                  id: "after",
                  content: (
                    <RoomSceneSlot>
                      <IsometricPlaceholder
                        variant="scene"
                        size="lg"
                        animated={false}
                      />
                    </RoomSceneSlot>
                  ),
                },
              ]}
              activeIndex={0}
            />
          </div>
        </ScrollSection>

        <Section spacing="lg">
          <Container>
            <div className="h-px w-full bg-neutral-200" />
          </Container>
        </Section>
      </SiteMain>
    </SiteLayout>
  );
}
