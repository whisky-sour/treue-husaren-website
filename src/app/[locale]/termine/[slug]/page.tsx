import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { events } from "@/data/events";
import type { Locale } from "@/i18n/config";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { getTranslations } from "next-intl/server";

type Params = { locale: string; slug: string };
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
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
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

// JSON-LD
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
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  const isDe = locale === "de";
  const t = await getTranslations("EventDetail");

  const event = getEventBySlug(slug);
  if (!event) {
    notFound();
  }

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
        {/* Header */}
        <header className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
            {t("eventLabel")}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted">
            {date} · {event!.locationName}, {event!.addressLocality}
          </p>
        </header>

        {/* Inhalt in zwei Spalten ab lg */}
        <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
          <Card className="space-y-3">
            <h2 className="text-base sm:text-lg font-semibold">
              {t("aboutEvent")}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-brand-muted">
              {description}
            </p>
          </Card>

          <div className="space-y-3">
            <Card>
              <h3 className="text-sm sm:text-base font-semibold mb-1">
                {t("location")}
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted">
                {event!.locationName}
                <br />
                {event!.streetAddress}
                <br />
                {event!.postalCode} {event!.addressLocality}
              </p>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <section className="rounded-2xl border border-gray-200 bg-gradient-to-r from-brand-red via-red-700 to-brand-red px-4 py-5 sm:px-6 sm:py-6 text-white shadow-md">
          <h2 className="text-base sm:text-lg font-semibold mb-2">
            {t("questionsTitle")}
          </h2>
          <p className="text-xs sm:text-sm mb-3 max-w-xl">
            {t("questionsText")}
          </p>
          <Button href={`/${locale}/kontakt`} variant="outline">
            {t("contactButton")}
          </Button>
        </section>
      </article>
    </>
  );
}
