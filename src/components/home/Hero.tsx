"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { DayPicker } from "react-day-picker";
import { BedDouble, Calendar, ChevronDown, Users, X } from "lucide-react";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { SandText } from "@/components/common/ScrollReveal";
import { ACCOMMODATIONS, RESORT_IMAGES, SITE_CONFIG } from "@/constants";
import { cn, formatPrice } from "@/lib/utils";

function toIsoDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatReadableDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function addDays(date: Date, days: number): Date {
  const next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  next.setDate(next.getDate() + days);
  return next;
}

function diffNights(start: Date, end: Date): number {
  const a = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
  const b = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime();
  return Math.max(1, Math.round((b - a) / 86_400_000));
}

const DEFAULT_CHECK_IN = new Date(2026, 10, 28); // Nov 28, 2026
const DEFAULT_CHECK_OUT = new Date(2026, 11, 1); // Dec 1, 2026

const calendarClassNames = {
  months: "relative",
  month: "space-y-3",
  month_caption: "flex items-center justify-center h-9 relative",
  caption_label: "font-serif text-base font-semibold text-[#1b2724]",
  nav: "flex items-center justify-between",
  button_previous:
    "absolute left-0 top-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e6dfd3] bg-[#faf8f4] text-[#1c2e2a] hover:bg-[#e2c9a6]/40 cursor-pointer",
  button_next:
    "absolute right-0 top-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e6dfd3] bg-[#faf8f4] text-[#1c2e2a] hover:bg-[#e2c9a6]/40 cursor-pointer",
  month_grid: "w-full border-collapse",
  weekdays: "grid grid-cols-7 text-center",
  weekday: "py-1 text-[10px] font-semibold uppercase tracking-wider text-[#7a6b54]",
  week: "grid grid-cols-7 mt-1",
  day: "h-9 w-9 mx-auto text-center text-sm p-0",
  day_button:
    "h-9 w-9 rounded-full font-medium text-[#1b2724] transition-colors hover:bg-[#e2c9a6]/50 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed",
  selected:
    "[&>button]:bg-[#1c2e2a] [&>button]:text-[#faf8f4] [&>button]:hover:bg-[#F26B4F]",
  today: "[&>button]:ring-1 [&>button]:ring-[#c9a77a]",
  outside: "opacity-35",
  disabled: "opacity-25 pointer-events-none",
};

/**
 * Full-bleed oceanfront hero with interactive Check-In/Check-Out calendar pickers and live availability results.
 */
export default function Hero() {
  const router = useRouter();
  const barRef = useRef<HTMLDivElement | null>(null);

  const [checkIn, setCheckIn] = useState<Date>(DEFAULT_CHECK_IN);
  const [checkOut, setCheckOut] = useState<Date>(DEFAULT_CHECK_OUT);
  const [guests, setGuests] = useState("2 Adults, 0 Children");
  const [rooms, setRooms] = useState("1 Room");
  const [openPicker, setOpenPicker] = useState<"checkIn" | "checkOut" | null>(null);
  const [showResults, setShowResults] = useState(false);

  const nights = diffNights(checkIn, checkOut);

  useEffect(() => {
    function handleOutside(event: MouseEvent) {
      if (barRef.current && !barRef.current.contains(event.target as Node)) {
        setOpenPicker(null);
      }
    }
    function handleEsc(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPicker(null);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  function handleSelectCheckIn(date: Date | undefined) {
    if (!date) return;
    setCheckIn(date);
    if (date >= checkOut) {
      setCheckOut(addDays(date, 3));
    }
    setOpenPicker("checkOut");
  }

  function handleSelectCheckOut(date: Date | undefined) {
    if (!date) return;
    if (date <= checkIn) {
      setCheckOut(addDays(checkIn, 1));
    } else {
      setCheckOut(date);
    }
    setOpenPicker(null);
  }

  function handleAvailabilityCheck(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpenPicker(null);
    setShowResults(true);
  }

  function handleReserveSuite(suiteTitle: string) {
    const params = new URLSearchParams({
      checkIn: toIsoDate(checkIn),
      checkOut: toIsoDate(checkOut),
      guests,
      rooms,
      suite: suiteTitle,
    });
    router.push(`/contact?${params.toString()}`);
  }

  return (
    <section className="relative isolate bg-[#1c2e2a]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={RESORT_IMAGES.heroSunset}
          alt="Golden sunset over the Ocean Haven infinity pool and resort palms in Key West"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f4]/95 via-[#faf8f4]/72 to-transparent sm:via-[#faf8f4]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c2e2a]/40 via-transparent to-transparent" />
      </div>

      <Container className="pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-xl">
          <p
            style={{ animationDelay: "60ms" }}
            className="sand-block-active text-[11px] font-semibold uppercase tracking-[0.26em] text-[#6d5b43]"
          >
            {SITE_CONFIG.tagline}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#1b2724] sm:text-5xl lg:text-6xl">
            <SandText
              as="span"
              text="Your Oceanfront"
              baseDelayMs={140}
              wordStepMs={120}
              immediate
              className="block"
            />
            <SandText
              as="span"
              text="Paradise Awaits"
              baseDelayMs={380}
              wordStepMs={120}
              immediate
              className="block"
            />
            <SandText
              as="span"
              text="in Key West"
              baseDelayMs={620}
              wordStepMs={110}
              immediate
              className="mt-1 block font-normal italic text-[#3f524c]"
            />
          </h1>
          <p
            style={{ animationDelay: "780ms" }}
            className="sand-block-active mt-5 max-w-md text-sm leading-relaxed text-[#384440] sm:text-base"
          >
            {SITE_CONFIG.description}
          </p>
          <div
            style={{ animationDelay: "920ms" }}
            className="sand-block-active mt-8 flex flex-wrap items-center gap-4"
          >
            <Button href="/services" variant="primary" size="lg">
              Explore The Resort
            </Button>
            <Button href="/pricing" variant="cream" size="lg">
              View Suites &amp; Rates
            </Button>
          </div>
        </div>

        <div ref={barRef} className="relative mt-14">
          <form
            onSubmit={handleAvailabilityCheck}
            className="rounded-xl border border-white/15 bg-[#1c2e2a]/95 p-4 text-[#faf8f4] shadow-2xl backdrop-blur-md sm:p-5"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:items-end">
              {/* CHECK IN */}
              <div className="relative">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e2c9a6]">
                  Check In
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setOpenPicker((prev) =>
                      prev === "checkIn" ? null : "checkIn"
                    )
                  }
                  className={cn(
                    "mt-1.5 flex w-full items-center justify-between gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors cursor-pointer",
                    openPicker === "checkIn"
                      ? "border-[#e2c9a6] bg-[#14221f] text-[#faf8f4]"
                      : "border-white/20 bg-[#14221f] text-[#faf8f4] hover:border-[#e2c9a6]/60"
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <Calendar className="h-4 w-4 text-[#e2c9a6]" />
                    <span>{formatReadableDate(checkIn)}</span>
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#faf8f4]/60" />
                </button>

                {openPicker === "checkIn" && (
                  <div className="absolute left-0 bottom-full z-40 mb-3 w-[300px] rounded-2xl border border-[#e6dfd3] bg-[#faf8f4] p-4 text-[#1b2724] shadow-2xl sm:bottom-auto sm:top-full sm:mt-3 sm:mb-0">
                    <DayPicker
                      mode="single"
                      selected={checkIn}
                      defaultMonth={checkIn}
                      disabled={{ before: new Date(2026, 10, 26) }}
                      onSelect={handleSelectCheckIn}
                      classNames={calendarClassNames}
                    />
                  </div>
                )}
              </div>

              {/* CHECK OUT */}
              <div className="relative">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e2c9a6]">
                  Check Out ({nights} {nights === 1 ? "Night" : "Nights"})
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setOpenPicker((prev) =>
                      prev === "checkOut" ? null : "checkOut"
                    )
                  }
                  className={cn(
                    "mt-1.5 flex w-full items-center justify-between gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors cursor-pointer",
                    openPicker === "checkOut"
                      ? "border-[#e2c9a6] bg-[#14221f] text-[#faf8f4]"
                      : "border-white/20 bg-[#14221f] text-[#faf8f4] hover:border-[#e2c9a6]/60"
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    <Calendar className="h-4 w-4 text-[#e2c9a6]" />
                    <span>{formatReadableDate(checkOut)}</span>
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#faf8f4]/60" />
                </button>

                {openPicker === "checkOut" && (
                  <div className="absolute left-0 bottom-full z-40 mb-3 w-[300px] rounded-2xl border border-[#e6dfd3] bg-[#faf8f4] p-4 text-[#1b2724] shadow-2xl sm:bottom-auto sm:top-full sm:mt-3 sm:mb-0">
                    <DayPicker
                      mode="single"
                      selected={checkOut}
                      defaultMonth={checkOut}
                      disabled={{ before: addDays(checkIn, 1) }}
                      onSelect={handleSelectCheckOut}
                      classNames={calendarClassNames}
                    />
                  </div>
                )}
              </div>

              {/* GUESTS */}
              <div>
                <label
                  htmlFor="hero-guests"
                  className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e2c9a6]"
                >
                  Guests
                </label>
                <div className="relative mt-1.5">
                  <Users className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#e2c9a6]" />
                  <select
                    id="hero-guests"
                    value={guests}
                    onChange={(event) => setGuests(event.target.value)}
                    className="w-full appearance-none rounded-lg border border-white/20 bg-[#14221f] py-2.5 pr-9 pl-9 text-sm text-[#faf8f4] focus:border-[#e2c9a6] focus:outline-none"
                  >
                    <option value="1 Adult, 0 Children">1 Adult, 0 Children</option>
                    <option value="2 Adults, 0 Children">2 Adults, 0 Children</option>
                    <option value="2 Adults, 2 Children">2 Adults, 2 Children</option>
                    <option value="4 Adults, 0 Children">4 Adults, 0 Children</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-[#faf8f4]/60" />
                </div>
              </div>

              {/* ROOMS */}
              <div>
                <label
                  htmlFor="hero-rooms"
                  className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e2c9a6]"
                >
                  Rooms
                </label>
                <div className="relative mt-1.5">
                  <BedDouble className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#e2c9a6]" />
                  <select
                    id="hero-rooms"
                    value={rooms}
                    onChange={(event) => setRooms(event.target.value)}
                    className="w-full appearance-none rounded-lg border border-white/20 bg-[#14221f] py-2.5 pr-9 pl-9 text-sm text-[#faf8f4] focus:border-[#e2c9a6] focus:outline-none"
                  >
                    <option value="1 Room">1 Room</option>
                    <option value="2 Rooms">2 Rooms</option>
                    <option value="1 Suite">1 Poolside Suite</option>
                    <option value="1 Villa">1 Oceanfront Villa</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-[#faf8f4]/60" />
                </div>
              </div>

              <Button type="submit" variant="secondary" size="lg" className="w-full">
                Check Availability
              </Button>
            </div>
          </form>

          {showResults && (
            <div className="mt-4 rounded-xl border border-[#e6dfd3] bg-[#faf8f4]/98 p-5 text-[#1b2724] shadow-2xl backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e6dfd3] pb-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a6b54]">
                    Available For Your Selected Dates
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-[#1b2724]">
                    {formatReadableDate(checkIn)} &rarr; {formatReadableDate(checkOut)} ·{" "}
                    <span className="font-semibold">
                      {nights} {nights === 1 ? "Night" : "Nights"}
                    </span>{" "}
                    · {guests} · {rooms}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowResults(false)}
                  aria-label="Close availability results"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e6dfd3] text-[#5a6562] hover:bg-[#f3efe7] hover:text-[#1b2724] cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {ACCOMMODATIONS.map((room) => (
                  <div
                    key={room.id}
                    className="flex flex-col justify-between rounded-lg border border-[#e6dfd3] bg-white p-4 shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-serif text-lg font-semibold text-[#1b2724]">
                          {room.title}
                        </h3>
                        <span className="rounded-full bg-[#f3efe7] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#7a6b54]">
                          Available
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-[#5a6562]">{room.description}</p>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#e6dfd3] pt-3">
                      <div>
                        <p className="text-[11px] text-[#5a6562]">
                          {formatPrice(room.pricePerNight)} × {nights}{" "}
                          {nights === 1 ? "night" : "nights"}
                        </p>
                        <p className="font-serif text-xl font-bold text-[#1c2e2a]">
                          {formatPrice(room.pricePerNight * nights)} total
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="primary"
                        size="sm"
                        onClick={() => handleReserveSuite(room.title)}
                      >
                        Reserve
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
