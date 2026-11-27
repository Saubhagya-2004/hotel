import Image from "next/image";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { SandText } from "@/components/common/ScrollReveal";
import { RESORT_IMAGES } from "@/constants";

/**
 * Editorial opening hero for the About page with slow sand text loading reveal.
 */
export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1c2e2a] text-[#faf8f4]">
      <Image
        src={RESORT_IMAGES.romanticDining}
        alt="Oceanfront sunset terrace at Ocean Haven Resort in Key West"
        fill
        preload
        sizes="100vw"
        className="-z-10 object-cover opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1c2e2a]/80 via-[#1c2e2a]/75 to-[#1c2e2a]" />

      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <p
            style={{ animationDelay: "60ms" }}
            className="sand-block-active text-[11px] font-semibold uppercase tracking-[0.26em] text-[#e2c9a6]"
          >
            Our Heritage &amp; People
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            <SandText
              as="span"
              text="Crafted by the Ocean,"
              baseDelayMs={140}
              wordStepMs={115}
              immediate
              className="block"
            />
            <SandText
              as="span"
              text="Guided by Warmth"
              baseDelayMs={520}
              wordStepMs={115}
              immediate
              className="mt-1 block font-normal italic text-[#e2c9a6]"
            />
          </h1>
          <p
            style={{ animationDelay: "800ms" }}
            className="sand-block-active mt-5 text-base leading-relaxed text-[#faf8f4]/80"
          >
            Since 1998, Ocean Haven Resort &amp; Spa has been a tranquil coastal retreat on the southernmost tip of Florida—celebrating unhurried island living, sustainable design, and heartfelt service.
          </p>
          <div
            style={{ animationDelay: "950ms" }}
            className="sand-block-active mt-8 flex flex-wrap gap-4"
          >
            <Button href="/services" variant="secondary" size="md">
              Explore Our Offerings
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="md"
              className="border-white/35 text-[#faf8f4] hover:border-[#e2c9a6] hover:bg-white/10"
            >
              Plan Your Visit
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
