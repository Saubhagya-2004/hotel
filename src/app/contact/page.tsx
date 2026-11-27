import type { Metadata } from "next";
import { Suspense } from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description:
    "Contact our Key West concierge team to reserve an oceanfront suite, schedule spa treatments, or plan custom island experiences.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <Suspense
        fallback={
          <div className="bg-[#faf8f4] py-20 text-center text-sm text-[#5a6562]">
            Loading reservation form...
          </div>
        }
      >
        <ContactForm />
      </Suspense>
    </main>
  );
}
