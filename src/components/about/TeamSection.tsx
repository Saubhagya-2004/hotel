import Image from "next/image";
import Container from "@/components/common/Container";
import { RevealCard } from "@/components/common/ScrollReveal";
import SectionHeading from "@/components/common/SectionHeading";
import { TEAM_MEMBERS } from "@/constants";

/**
 * Leadership and hospitality specialists revealed one by one on scroll.
 */
export default function TeamSection() {
  return (
    <section className="bg-[#f3efe7]/70 py-20">
      <Container>
        <SectionHeading
          eyebrow="Meet The Hosts"
          title="The People Behind Every Stay"
          subtitle="Dedicated island hosts, culinary artisans, and wellness practitioners committed to making every arrival feel effortless."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member, index) => (
            <RevealCard key={member.id} index={index} stepMs={200} className="flex">
              <article className="flex w-full flex-col items-center rounded-xl border border-[#e6dfd3] bg-white p-7 text-center shadow-sm">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-[#c9a77a]/60 shadow-sm">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-[#1b2724]">
                  {member.name}
                </h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9c7e54]">
                  {member.role}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#5a6562]">
                  {member.bio}
                </p>
              </article>
            </RevealCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
