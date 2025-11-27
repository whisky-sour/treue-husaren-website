import type { Metadata } from "next";
import { Locale } from "@/i18n/config";
import Link from "next/link";
import { events } from "@/data/events";

type Props = {
  params: Promise<{ locale: Locale }>;
};

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
        {events.map((event) => {
          const title = isDe ? event.titleDe : event.titleEn;
          const date = new Date(event.startDate).toLocaleString(
            locale === "de" ? "de-DE" : "en-GB",
            { dateStyle: "full", timeStyle: "short" },
          );

          return (
            <li key={event.slug} className="border rounded p-4">
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
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
