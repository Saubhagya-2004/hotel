import type { Metadata } from "next";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { RevealCard } from "@/components/common/ScrollReveal";
import SectionHeading from "@/components/common/SectionHeading";
import { PRICING_TIERS } from "@/constants";
import { cn, formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Suites & Seasonal Pricing",
  description:
    "Compare nightly rates in INR and inclusive resort privileges across Ocean Haven's rooms, poolside suites, and private oceanfront villas.",
};

export default function PricingPage() {
  return (
    <main>
      <section className="bg-[#1c2e2a] py-16 text-[#faf8f4] sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Seasonal Rates"
            title="Transparent Stays With Coastal Privileges"
            subtitle="Book directly with Ocean Haven Resort & Spa for preferred nightly rates, flexible check-in, and complimentary sunrise breakfast."
            light
          />
        </Container>
      </section>

      <section className="bg-[#faf8f4] py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {PRICING_TIERS.map((tier, idx) => (
              <RevealCard
                key={tier.id}
                index={idx}
                stepMs={240}
                direction="right"
                className="flex"
              >
                <article
                  className={cn(
                    "flex w-full flex-col rounded-2xl border p-8 transition-shadow",
                    tier.featured
                      ? "border-[#1c2e2a] bg-[#1c2e2a] text-[#faf8f4] shadow-xl"
                      : "border-[#e6dfd3] bg-white text-[#1b2724] shadow-sm"
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={cn(
                        "text-[11px] font-semibold uppercase tracking-[0.2em]",
                        tier.featured ? "text-[#e2c9a6]" : "text-[#9c7e54]"
                      )}
                    >
                      {tier.occupancy} · {tier.size}
                    </span>
                    {tier.featured && (
                      <span className="rounded-full bg-[#e2c9a6] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1c2e2a]">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h2 className="mt-4 font-serif text-3xl font-semibold">
                    {tier.name}
                  </h2>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed",
                      tier.featured ? "text-[#faf8f4]/80" : "text-[#5a6562]"
                    )}
                  >
                    {tier.tagline}
                  </p>

                  <div
                    className={cn(
                      "mt-6 border-y py-5",
                      tier.featured ? "border-white/15" : "border-[#e6dfd3]"
                    )}
                  >
                    <p className="text-xs uppercase tracking-[0.16em] opacity-75">
                      Starting From
                    </p>
                    <p className="mt-1 flex items-baseline gap-1.5">
                      <span className="font-serif text-4xl font-bold">
                        {formatPrice(tier.pricePerNight)}
                      </span>
                      <span className="text-xs uppercase tracking-[0.14em] opacity-75">
                        / Night
                      </span>
                    </p>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className={
                            tier.featured ? "text-[#e2c9a6]" : "text-[#9c7e54]"
                          }
                        >
                          ✓
                        </span>
                        <span
                          className={
                            tier.featured ? "text-[#faf8f4]/90" : "text-[#384440]"
                          }
                        >
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      href="/contact"
                      variant={tier.featured ? "secondary" : "cream"}
                      size="lg"
                      className="w-full"
                    >
                      Reserve {tier.name}
                    </Button>
                  </div>
                </article>
              </RevealCard>
            ))}
          </div>

          <RevealCard index={1} stepMs={250} className="mt-14">
            <div className="rounded-2xl border border-[#e6dfd3] bg-[#f3efe7] p-8 text-center">
              <h3 className="font-serif text-2xl font-semibold text-[#1b2724]">
                Planning an Extended Stay or Private Event?
              </h3>
              <p className="mx-auto mt-2 max-w-xl text-sm text-[#5a6562]">
                Contact our Key West concierge for bespoke multi-villa buyouts, wedding blocks, and 7-night seasonal retreat savings.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="outline" size="md">
                  Request Custom Quote
                </Button>
              </div>
            </div>
          </RevealCard>
        </Container>
      </section>
    </main>
  );
}
