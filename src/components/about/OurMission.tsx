import Container from "@/components/common/Container";
import { RevealCard } from "@/components/common/ScrollReveal";
import SectionHeading from "@/components/common/SectionHeading";
import { MISSION_VALUES } from "@/constants";

/**
 * Resort philosophy cards animated one by one on scroll.
 */
export default function OurMission() {
  return (
    <section className="bg-[#1c2e2a] py-20 text-[#faf8f4]">
      <Container>
        <SectionHeading
          eyebrow="Our Philosophy"
          title="Purposeful Hospitality by the Sea"
          subtitle="We measure every stay by the quiet clarity it restores—to our guests, our team, and the living reef beside our shore."
          light
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {MISSION_VALUES.map((value, index) => (
            <RevealCard key={value.id} index={index} stepMs={220} className="flex">
              <article className="w-full rounded-xl border border-white/15 bg-[#14221f]/80 p-8">
                <span className="font-serif text-3xl font-semibold text-[#e2c9a6]">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-[#faf8f4]">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#faf8f4]/75">
                  {value.description}
                </p>
              </article>
            </RevealCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
