import type { Metadata } from "next";
import { Locale } from "@/i18n/config";
import Link from "next/link";
import { events } from "@/data/events";
import { Badge } from "@/app/components/ui/Badge";
import { Card } from "@/app/components/ui/Card";

type Props = {
  params: Promise<{ locale: Locale }>;
};

type DateParts = {
  day: string;
  weekday: string;
  time: string;
  monthShort: string;
  dateLine: string;
};

function getDateParts(dateObj: Date, locale: Locale): DateParts {
  const isDe = locale === "de";
  const day = dateObj.getDate().toString().padStart(2, "0");

  const monthShort = dateObj.toLocaleDateString(isDe ? "de-DE" : "en-GB", {
    month: "short",
  });
  const weekday = dateObj.toLocaleDateString(isDe ? "de-DE" : "en-GB", {
    weekday: "long",
  });
  const time = dateObj.toLocaleTimeString(isDe ? "de-DE" : "en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const dateLine = isDe
    ? `${weekday}, ${dateObj.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })} um ${time} Uhr`
    : `${weekday}, ${dateObj.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })} at ${time}`;

  return { day, weekday, time, monthShort, dateLine };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isDe = locale === "de";

  return {
    title: isDe
      ? "Termine & Veranstaltungen | Faschingsverein Example e.V."
      : "Events | Carnival Club Example",
    description: isDe
      ? "Alle Termine und Veranstaltungen des Faschingsverein Example e.V. in Musterstadt."
      : "All events of Carnival Club Example in Musterstadt.",
  };
}

export default async function TerminePage({ params }: Props) {
  const { locale } = await params;
  const isDe = locale === "de";

  const sortedEvents = [...events].sort((a, b) =>
    a.startDate.localeCompare(b.startDate),
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3">
        {isDe ? "Termine & Veranstaltungen" : "Events"}
      </h1>
      <p>
        {isDe
          ? "Hier findest du unsere aktuellen Faschingsveranstaltungen."
          : "Here you can find our current carnival events."}
      </p>

      <ul className="space-y-4">
        {sortedEvents.map((event) => {
          const title = isDe ? event.titleDe : event.titleEn;
          const date = new Date(event.startDate).toLocaleString(
            locale === "de" ? "de-DE" : "en-GB",
            { dateStyle: "full", timeStyle: "short" },
          );

          const dateObj = new Date(event.startDate);
          const { dateLine, day, monthShort, time, weekday } = getDateParts(
            dateObj,
            locale,
          );

          return (
            <li key={event.slug}>
              <Card className="relative flex gap-4 items-stretch overflow-hidden transition-transform hover:-translate-y-0.5 hover:shadow-lg">
                {/* Datum-Pill links */}
                <div className="flex flex-col items-center justify-center rounded-2xl bg-white border border-brand-red/20 shadow-sm px-3 py-2 min-w-[64px]">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-red">
                    {monthShort}
                  </span>
                  <span className="text-xl font-bold leading-none text-brand-text">
                    {day}
                  </span>
                </div>

                {/* Event-Content */}
                <div className="flex-1 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="text-base sm:text-lg font-semibold text-brand-text">
                      {title}
                    </h2>
                    <Badge>{isDe ? "Fasching" : "Carnival"}</Badge>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-muted">
                    {dateLine}
                  </p>
                  <p className="text-xs sm:text-sm text-brand-muted">
                    {event.locationName}, {event.addressLocality}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/${locale}/termine/${event.slug}`}
                      className="text-xs sm:text-sm font-semibold text-brand-red underline underline-offset-2"
                    >
                      {isDe ? "Mehr Infos" : "More information"}
                    </Link>
                  </div>
                </div>
              </Card>
              {/*<Card className="relative overflow-hidden transition-transform hover:-translate-y-0.5 hover:shadow-lg">
                <div className="absolute inset-x-0 top-0 h-1 bg-brand-green/60" />
              <h2 className="text-lg sm:text-xl font-semibold mb-1">{title}</h2>
              <p className="text-sm mb-1">{date}</p>
              <p className="text-sm mb-2">
                {event.locationName}, {event.addressLocality}
              </p>
              <Link
                href={`/${locale}/termine/${event.slug}`}
                className="text-sm underline underline-offset-2"
              >
                {isDe ? "Mehr Infos" : "More information"}
              </Link>*/}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
