"use client";

import Image from "next/image";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { SandText, useScrollVisible } from "@/components/common/ScrollReveal";
import SectionHeading from "@/components/common/SectionHeading";
import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "@/components/lightswind/3d-scroll-trigger";
import { RESORT_IMAGES, TESTIMONIALS } from "@/constants";
import { cn } from "@/lib/utils";

/**
 * Guest reviews displayed in a single continuous 3D scroll-reactive row with public avatar portraits,
 * followed by the Ocean Haven sunset getaway CTA banner.
 */
export default function Testimonials() {
  const { ref: ctaRef, visible: ctaVisible } = useScrollVisible(0.15);
  return (
    <section className="bg-[#f3efe7]/75 pt-20">
      <Container>
        <SectionHeading
          eyebrow="What Our Guests Say"
          title="Memories That Last a Lifetime"
        />
      </Container>

      <div className="mt-12 pb-20">
        <ThreeDScrollTriggerContainer>
          <ThreeDScrollTriggerRow baseVelocity={2.4} direction={1} tiltEffect>
            {TESTIMONIALS.map((item) => (
              <article
                key={item.id}
                className="mx-3 flex w-[320px] shrink-0 flex-col justify-between whitespace-normal rounded-xl border border-[#e6dfd3] bg-white p-6 shadow-sm sm:w-[370px]"
              >
                <div>
                  <span
                    aria-hidden="true"
                    className="font-serif text-4xl leading-none text-[#1c2e2a]/80"
                  >
                    &ldquo;
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-[#384440]">
                    {item.quote}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#e6dfd3] pt-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-[#e6dfd3]">
                      <Image
                        src={item.avatar}
                        alt={item.author}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1b2724]">
                        {item.author}
                      </p>
                      <p className="text-xs text-[#5a6562]">{item.location}</p>
                    </div>
                  </div>

                  <div
                    className="flex gap-0.5 text-[#e5a024]"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <span key={idx} aria-hidden="true" className="text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </ThreeDScrollTriggerRow>
        </ThreeDScrollTriggerContainer>
      </div>

      <div ref={ctaRef} className="relative isolate overflow-hidden bg-[#1c2e2a]">
        <Image
          src={RESORT_IMAGES.ctaSunset}
          alt="Key West resort infinity pool at sunset"
          fill
          sizes="100vw"
          className="-z-10 object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1c2e2a] via-[#1c2e2a]/80 to-[#1c2e2a]/15" />
        <Container className="py-14 sm:py-16">
          <div className="max-w-lg">
            <SandText
              as="h3"
              text="Plan Your Perfect Getaway"
              baseDelayMs={100}
              wordStepMs={105}
              className="font-serif text-3xl font-semibold text-[#faf8f4] sm:text-4xl"
            />
            <p
              style={ctaVisible ? { animationDelay: "460ms" } : undefined}
              className={cn(
                "mt-2.5 text-sm leading-relaxed text-[#faf8f4]/85",
                ctaVisible ? "sand-block-active" : "sand-block-idle"
              )}
            >
              Book directly with us for the best rates,
              <br className="hidden sm:inline" /> exclusive offers &amp; unforgettable memories.
            </p>
            <div
              style={ctaVisible ? { animationDelay: "620ms" } : undefined}
              className={cn(
                "mt-6",
                ctaVisible ? "sand-block-active" : "sand-block-idle"
              )}
            >
              <Button href="/contact" variant="secondary" size="md">
                Book Your Stay
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
