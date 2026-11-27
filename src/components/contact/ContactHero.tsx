import Image from "next/image";
import Container from "@/components/common/Container";
import { SandText } from "@/components/common/ScrollReveal";
import { RESORT_IMAGES, SITE_CONFIG } from "@/constants";

/**
 * Header banner for the Contact & Reservations page with slow sand text reveal.
 */
export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1c2e2a] text-[#faf8f4]">
      <Image
        src={RESORT_IMAGES.heroSunset}
        alt="Ocean Haven Resort waterfront arrival courtyard"
        fill
        preload
        sizes="100vw"
        className="-z-10 object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1c2e2a]/85 to-[#1c2e2a]" />

      <Container className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <p
            style={{ animationDelay: "60ms" }}
            className="sand-block-active text-[11px] font-semibold uppercase tracking-[0.26em] text-[#e2c9a6]"
          >
            Concierge &amp; Reservations
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            <SandText
              as="span"
              text="Plan Your Stay at"
              baseDelayMs={140}
              wordStepMs={115}
              immediate
              className="block"
            />
            <SandText
              as="span"
              text={SITE_CONFIG.name}
              baseDelayMs={480}
              wordStepMs={120}
              immediate
              className="mt-1 block font-normal italic text-[#e2c9a6]"
            />
          </h1>
          <p
            style={{ animationDelay: "740ms" }}
            className="sand-block-active mt-4 text-base leading-relaxed text-[#faf8f4]/80"
          >
            Reach out to reserve suites, arrange private Key West airport transfers, or customize spa and sunset dining experiences with our 24/7 concierge team.
          </p>
        </div>
      </Container>
    </section>
  );
}
