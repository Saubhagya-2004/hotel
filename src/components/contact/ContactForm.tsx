"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { RevealCard, SandText } from "@/components/common/ScrollReveal";
import { RESORT_HOURS, SITE_CONFIG } from "@/constants";
import { formatPrice } from "@/lib/utils";

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  suiteType: string;
  message: string;
}

const INITIAL_STATE: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  guests: "2 Adults",
  suiteType: "Poolside Suite",
  message: "",
};

/**
 * Interactive reservation inquiry and concierge contact form with resort details sidebar.
 */
export default function ContactForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<ContactFormState>(() => {
    const checkIn = searchParams.get("checkIn") ?? "2026-11-28";
    const checkOut = searchParams.get("checkOut") ?? "2026-12-01";
    const guests = searchParams.get("guests") ?? INITIAL_STATE.guests;
    const rooms = searchParams.get("rooms");
    const explicitSuite = searchParams.get("suite");
    const suiteType =
      explicitSuite ??
      (rooms === "1 Villa"
        ? "Oceanfront Villa"
        : rooms === "1 Room"
          ? "Ocean View Room"
          : INITIAL_STATE.suiteType);

    return {
      ...INITIAL_STATE,
      checkIn,
      checkOut,
      guests,
      suiteType,
    };
  });
  const [submitted, setSubmitted] = useState(false);

  const nights = (() => {
    if (!form.checkIn || !form.checkOut) return 0;
    const start = new Date(`${form.checkIn}T00:00:00`).getTime();
    const end = new Date(`${form.checkOut}T00:00:00`).getTime();
    const diff = Math.round((end - start) / 86_400_000);
    return diff > 0 ? diff : 0;
  })();

  const nightlyRate = form.suiteType.includes("Villa")
    ? 66999
    : form.suiteType.includes("Poolside")
      ? 35999
      : 18999;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-[#faf8f4] py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <RevealCard index={0} stepMs={220} className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7a6b54]">
              Direct Assistance
            </p>
            <SandText
              as="h2"
              text="Key West Concierge Desk"
              baseDelayMs={120}
              wordStepMs={95}
              className="mt-2 font-serif text-3xl font-semibold text-[#1b2724]"
            />
            <p className="mt-3 text-sm leading-relaxed text-[#5a6562]">
              Whether you are planning an anniversary retreat, family villa gathering, or bespoke wellness itinerary, our on-island specialists respond within two hours.
            </p>

            <div className="mt-8 space-y-5 rounded-sm border border-[#e6dfd3] bg-white p-6 shadow-sm">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9c7e54]">
                  Address
                </p>
                <p className="mt-1 text-sm font-medium text-[#1b2724]">
                  {SITE_CONFIG.address}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9c7e54]">
                  Reservations Line
                </p>
                <p className="mt-1 text-sm font-medium text-[#1b2724]">
                  {SITE_CONFIG.phone}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9c7e54]">
                  Email
                </p>
                <p className="mt-1 text-sm font-medium text-[#1b2724]">
                  {SITE_CONFIG.email}
                </p>
              </div>

              <div className="border-t border-[#e6dfd3] pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9c7e54]">
                  Operating Hours
                </p>
                <ul className="mt-2.5 space-y-2 text-xs text-[#5a6562]">
                  {RESORT_HOURS.map((item) => (
                    <li key={item.label} className="flex justify-between">
                      <span>{item.label}</span>
                      <span className="font-semibold text-[#1b2724]">
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealCard>

          <RevealCard index={1} stepMs={240} direction="right" className="lg:col-span-7">
            <div className="rounded-xl border border-[#e6dfd3] bg-white p-6 shadow-sm sm:p-10">
              {submitted ? (
                <div className="py-10 text-center" role="status">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1c2e2a] text-xl text-[#e2c9a6]">
                    ✓
                  </span>
                  <h3 className="mt-5 font-serif text-3xl font-semibold text-[#1b2724]">
                    Inquiry Received
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#5a6562]">
                    Thank you, {form.name || "valued guest"}. Our Key West concierge team has received your {form.suiteType} request and will reach out to{" "}
                    <span className="font-medium text-[#1b2724]">{form.email}</span> shortly.
                  </p>
                  <div className="mt-7">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setForm(INITIAL_STATE);
                        setSubmitted(false);
                      }}
                    >
                      Send Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[#1b2724]">
                      Reservation &amp; Inquiry Form
                    </h3>
                    <p className="mt-1 text-xs text-[#5a6562]">
                      Share your preferred dates and suite selection for a tailored quote.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1b2724]">
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="mt-1.5 w-full rounded-sm border border-[#e6dfd3] bg-[#faf8f4] px-3.5 py-2.5 text-sm text-[#1b2724] focus:border-[#1c2e2a] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1b2724]">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="mt-1.5 w-full rounded-sm border border-[#e6dfd3] bg-[#faf8f4] px-3.5 py-2.5 text-sm text-[#1b2724] focus:border-[#1c2e2a] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1b2724]">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(305) 555-0199"
                        className="mt-1.5 w-full rounded-sm border border-[#e6dfd3] bg-[#faf8f4] px-3.5 py-2.5 text-sm text-[#1b2724] focus:border-[#1c2e2a] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-suite" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1b2724]">
                        Preferred Suite
                      </label>
                      <select
                        id="contact-suite"
                        value={form.suiteType}
                        onChange={(e) => setForm({ ...form, suiteType: e.target.value })}
                        className="mt-1.5 w-full rounded-sm border border-[#e6dfd3] bg-[#faf8f4] px-3.5 py-2.5 text-sm text-[#1b2724] focus:border-[#1c2e2a] focus:outline-none"
                      >
                        <option value="Ocean View Room">Ocean View Room ({formatPrice(18999)}/night)</option>
                        <option value="Poolside Suite">Poolside Suite ({formatPrice(35999)}/night)</option>
                        <option value="Oceanfront Villa">Oceanfront Villa ({formatPrice(66999)}/night)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label htmlFor="contact-checkin" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1b2724]">
                        Check In
                      </label>
                      <input
                        id="contact-checkin"
                        type="date"
                        value={form.checkIn}
                        onChange={(e) => {
                          const nextCheckIn = e.target.value;
                          setForm((prev) => ({
                            ...prev,
                            checkIn: nextCheckIn,
                            checkOut:
                              prev.checkOut && nextCheckIn >= prev.checkOut
                                ? ""
                                : prev.checkOut,
                          }));
                        }}
                        className="mt-1.5 w-full rounded-sm border border-[#e6dfd3] bg-[#faf8f4] px-3.5 py-2.5 text-sm text-[#1b2724] focus:border-[#1c2e2a] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-checkout" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1b2724]">
                        Check Out
                      </label>
                      <input
                        id="contact-checkout"
                        type="date"
                        min={form.checkIn || undefined}
                        value={form.checkOut}
                        onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                        className="mt-1.5 w-full rounded-sm border border-[#e6dfd3] bg-[#faf8f4] px-3.5 py-2.5 text-sm text-[#1b2724] focus:border-[#1c2e2a] focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col justify-end">
                      <label htmlFor="contact-guests" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1b2724]">
                        Guests
                      </label>
                      <select
                        id="contact-guests"
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="mt-1.5 w-full rounded-sm border border-[#e6dfd3] bg-[#faf8f4] px-3.5 py-2.5 text-sm text-[#1b2724] focus:border-[#1c2e2a] focus:outline-none"
                      >
                        <option value="1 Adult, 0 Children">1 Adult</option>
                        <option value="2 Adults, 0 Children">2 Adults</option>
                        <option value="2 Adults">2 Adults</option>
                        <option value="2 Adults, 2 Children">2 Adults, 2 Children</option>
                        <option value="4 Adults, 0 Children">4 Adults</option>
                        <option value="6 Guests">6 Guests</option>
                      </select>
                    </div>
                  </div>

                  {nights > 0 && (
                    <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[#e6dfd3] bg-[#f3efe7] px-4 py-3 text-xs text-[#1b2724]">
                      <span>
                        Stay Summary: <strong>{nights} {nights === 1 ? "Night" : "Nights"}</strong> · {form.suiteType}
                      </span>
                      <span className="font-serif text-base font-bold text-[#1c2e2a]">
                        Estimated Total: {formatPrice(nightlyRate * nights)}
                      </span>
                    </div>
                  )}

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1b2724]">
                      Special Requests
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Airport transfers, sunset sail reservations, spa appointments, or celebration notes..."
                      className="mt-1.5 w-full rounded-sm border border-[#e6dfd3] bg-[#faf8f4] px-3.5 py-2.5 text-sm text-[#1b2724] focus:border-[#1c2e2a] focus:outline-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Request Reservation
                  </Button>
                </form>
              )}
            </div>
          </RevealCard>
        </div>
      </Container>
    </section>
  );
}
