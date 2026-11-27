import Image from "next/image";
import Container from "@/components/common/Container";
import { RevealCard } from "@/components/common/ScrollReveal";
import SectionHeading from "@/components/common/SectionHeading";
import { RESORT_IMAGES, STORY_MILESTONES } from "@/constants";

/**
 * Narrative history and key milestones animated smoothly one after another.
 */
export default function OurStory() {
  return (
    <section className="bg-[#faf8f4] py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Our Story"
              title="Three Decades of Coastal Serenity"
              subtitle="What began as an intimate 24-suite seaside guesthouse has grown into Key West's premier oceanfront sanctuary—without ever losing its personal soul."
              align="left"
            />

            <div className="mt-10 space-y-6 border-l border-[#c9a77a]/50 pl-6">
              {STORY_MILESTONES.map((milestone, idx) => (
                <RevealCard
                  key={milestone.year}
                  index={idx}
                  stepMs={220}
                  className="relative"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#1c2e2a] ring-4 ring-[#faf8f4]"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9c7e54]">
                    {milestone.year}
                  </p>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-[#1b2724]">
                    {milestone.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5a6562]">
                    {milestone.description}
                  </p>
                </RevealCard>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
            <RevealCard index={0} stepMs={240} direction="right">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-[#e6dfd3] shadow-md">
                <Image
                  src={RESORT_IMAGES.heroSunset}
                  alt="Ocean Haven resort palms and infinity pool"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </RevealCard>
            <RevealCard index={1} stepMs={240} direction="right" className="sm:mt-8">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-[#e6dfd3] shadow-md">
                <Image
                  src={RESORT_IMAGES.spaWellness}
                  alt="Candlelit spa pavilion at Ocean Haven"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </RevealCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
