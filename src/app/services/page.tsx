import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { RevealCard, SandText } from "@/components/common/ScrollReveal";
import SectionHeading from "@/components/common/SectionHeading";
import { ACCOMMODATIONS, EXPERIENCES, RESORT_IMAGES } from "@/constants";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services & Experiences",
  description:
    "Explore oceanfront accommodations, botanical spa rituals, sunset dining, and water adventures at Ocean Haven Resort & Spa.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#1c2e2a] text-[#faf8f4]">
        <Image
          src={RESORT_IMAGES.spaWellness}
          alt="Oceanfront spa and luxury resort suites at Ocean Haven"
          fill
          preload
          sizes="100vw"
          className="-z-10 object-cover opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1c2e2a]/85 to-[#1c2e2a]" />
        <Container className="py-16 sm:py-24">
          <div className="max-w-2xl">
            <p
              style={{ animationDelay: "60ms" }}
              className="sand-block-active text-[11px] font-semibold uppercase tracking-[0.26em] text-[#e2c9a6]"
            >
              Accommodations &amp; Amenities
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              <SandText
                as="span"
                text="Curated Stays &"
                baseDelayMs={140}
                wordStepMs={115}
                immediate
                className="block"
              />
              <SandText
                as="span"
                text="Island Experiences"
                baseDelayMs={440}
                wordStepMs={115}
                immediate
                className="mt-1 block font-normal italic text-[#e2c9a6]"
              />
            </h1>
            <p
              style={{ animationDelay: "740ms" }}
              className="sand-block-active mt-4 text-base leading-relaxed text-[#faf8f4]/80"
            >
              Every detail at Ocean Haven—from private oceanfront villas to sunset culinary tastings—is designed for effortless restoration.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#faf8f4] py-20">
        <Container>
          <SectionHeading
            eyebrow="Suites & Villas"
            title="Signature Accommodations"
            subtitle="Choose from sunlit ocean-view rooms, poolside sanctuaries, or full private residences."
          />

          <div className="mt-12 space-y-10">
            {ACCOMMODATIONS.map((room, index) => (
              <RevealCard
                key={room.id}
                index={index}
                stepMs={220}
                direction={index % 2 === 1 ? "right" : "up"}
              >
                <article className="grid items-center gap-8 overflow-hidden rounded-xl border border-[#e6dfd3] bg-white p-6 shadow-sm lg:grid-cols-12 lg:p-8">
                  <div
                    className={
                      index % 2 === 1
                        ? "relative aspect-[16/10] overflow-hidden rounded-lg lg:order-2 lg:col-span-6"
                        : "relative aspect-[16/10] overflow-hidden rounded-lg lg:col-span-6"
                    }
                  >
                    <Image
                      src={room.image}
                      alt={room.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="lg:col-span-6 lg:px-4">
                    {room.badge && (
                      <span className="inline-block rounded-full bg-[#f3efe7] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7a6b54]">
                        {room.badge}
                      </span>
                    )}
                    <h2 className="mt-3 font-serif text-3xl font-semibold text-[#1b2724]">
                      {room.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#5a6562] sm:text-base">
                      {room.description}
                    </p>
                    <ul className="mt-5 space-y-2 border-t border-[#e6dfd3] pt-4 text-sm text-[#384440]">
                      {room.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5">
                          <span className="text-[#9c7e54]" aria-hidden="true">
                            ✦
                          </span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#e6dfd3] pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5a6562]">
                        From{" "}
                        <span className="font-serif text-2xl font-bold text-[#1b2724]">
                          {formatPrice(room.pricePerNight)}
                        </span>{" "}
                        / Night
                      </p>
                      <Button href="/contact" variant="primary" size="md">
                        Reserve Suite
                      </Button>
                    </div>
                  </div>
                </article>
              </RevealCard>
            ))}
          </div>
        </Container>
      </section>

      <section id="dining" className="bg-[#f3efe7]/70 py-20">
        <Container>
          <SectionHeading
            eyebrow="Resort Concierge"
            title="Wellness, Dining & Excursions"
            subtitle="Complimentary and private guided experiences tailored to your stay."
          />

          <div id="wellness" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERIENCES.map((item, idx) => (
              <RevealCard key={item.id} index={idx} stepMs={200} className="flex">
                <article className="flex w-full flex-col overflow-hidden rounded-xl border border-[#e6dfd3] bg-white shadow-sm">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-[#1b2724]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#5a6562]">
                      {item.description}
                    </p>
                  </div>
                </article>
              </RevealCard>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
