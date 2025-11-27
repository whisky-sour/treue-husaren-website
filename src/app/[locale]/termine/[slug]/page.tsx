// src/app/[locale]/termine/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { events } from "@/data/events";
import type { Locale } from "@/i18n/config";

type Params = { locale: Locale; slug: string };
type Props = { params: Promise<Params> };

function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}

export function generateStaticParams() {
  const locales: Locale[] = ["de", "en"];
  return events.flatMap((event) =>
    locales.map((locale) => ({
      locale,
      slug: event.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};

  const isDe = locale === "de";
  const title = isDe ? event.titleDe : event.titleEn;
  const description = isDe ? event.descriptionDe : event.descriptionEn;

  return {
    title: `${title} | Treue Husaren Fürth e.V.`,
    description,
  };
}

// JSON-LD für dieses Event
function EventJsonLd({
  event,
  locale,
}: {
  event: (typeof events)[number];
  locale: Locale;
}) {
  const isDe = locale === "de";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: isDe ? event.titleDe : event.titleEn,
    description: isDe ? event.descriptionDe : event.descriptionEn,
    startDate: event.startDate,
    endDate: event.endDate ?? event.startDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    inLanguage: isDe ? "de" : "en",
    location: {
      "@type": "Place",
      name: event.locationName,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.streetAddress,
        postalCode: event.postalCode,
        addressLocality: event.addressLocality,
        addressCountry: "DE",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Treue Husaren Fürth e.V.",
      url: "https://deine-domain.de", // später anpassen
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function EventDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const isDe = locale === "de";
  const title = isDe ? event!.titleDe : event!.titleEn;
  const description = isDe ? event!.descriptionDe : event!.descriptionEn;

  const date = new Date(event!.startDate).toLocaleString(
    locale === "de" ? "de-DE" : "en-GB",
    { dateStyle: "full", timeStyle: "short" },
  );

  return (
    <>
      <EventJsonLd event={event!} locale={locale} />

      <article className="space-y-6">
        {/* Titel + Meta */}
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-700">
            {isDe ? "Veranstaltung" : "Event"}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-700">
            {date} · {event!.locationName}, {event!.addressLocality}
          </p>
        </header>

        {/* Beschreibung + Location in Cards */}
        <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
          <section className="rounded-2xl border bg-white/80 p-4 sm:p-5 shadow-sm space-y-3">
            <h2 className="text-base sm:text-lg font-semibold">
              {isDe ? "Über die Veranstaltung" : "About this event"}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              {description}
            </p>
          </section>

          <aside className="space-y-3">
            <div className="rounded-2xl border bg-white/80 p-4 sm:p-5 shadow-sm">
              <h3 className="text-sm sm:text-base font-semibold mb-1">
                {isDe ? "Ort" : "Location"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700">
                {event!.locationName}
                <br />
                {event!.streetAddress}
                <br />
                {event!.postalCode} {event!.addressLocality}
              </p>
            </div>
          </aside>
        </div>

        {/* CTA z.B. Tickets / Kontakt */}
        <section className="rounded-2xl border bg-gradient-to-r from-purple-600/90 via-fuchsia-500/90 to-pink-500/90 px-4 py-5 sm:px-6 sm:py-6 text-white shadow-md">
          <h2 className="text-base sm:text-lg font-semibold mb-2">
            {isDe ? "Fragen zur Veranstaltung?" : "Questions about this event?"}
          </h2>
          <p className="text-xs sm:text-sm mb-3 max-w-xl">
            {isDe
              ? "Bei Fragen zu Tickets, Einlass oder Reservierungen melde dich gerne bei uns."
              : "If you have any questions about tickets, admission or reservations, feel free to contact us."}
          </p>
          <a
            href={`/${locale}/kontakt`}
            className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-xs sm:text-sm font-semibold text-fuchsia-700 shadow hover:bg-white transition"
          >
            {isDe ? "Kontakt aufnehmen" : "Contact us"}
          </a>
        </section>
      </article>
    </>
  );
}
