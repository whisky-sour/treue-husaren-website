import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Locale } from "@/i18n/config";
import { events } from "@/data/events";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";

type Params = { locale: Locale };
type Props = { params: Promise<Params> };

export const metadata: Metadata = {
  title: "Treue Husaren Fürth e.V. | Fasching in Fürth",
  description:
    "Offizielle Website der Treuen Husaren Fürth e.V. – Prunksitzungen, Kinderfasching, Umzüge und mehr.",
};

function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Treue Husaren Fürth e.V.",
    url: "https://www.treue-husaren-fuerth.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Musterstraße 1",
      addressLocality: "90762 Fürth",
      addressCountry: "DE",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("Home");
  const tNav = await getTranslations("Nav");
  const isDe = locale === "de";

  const upcomingEvents = events
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    )
    .slice(0, 2);

  return (
    <>
      <!-- TODO: Remove comment when data is correct <OrganizationJsonLd /> -->
      <div className="space-y-10">
        {/* Hero */}
        <section className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
            {t("heroLabel")}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-text">
            {t("heroTitle")}
          </h1>
          <p className="text-base sm:text-lg text-brand-red font-medium">
            {t("heroSubtitle")}
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-brand-muted max-w-2xl">
            {t("heroText")}
          </p>
        </section>

        {/* Nächste Events */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-brand-text">
            {t("nextEventsTitle")}
          </h2>

          {upcomingEvents.length === 0 ? (
            <p className="text-sm text-brand-muted">{t("noUpcomingEvents")}</p>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2">
              {upcomingEvents.map((event) => {
                const title = isDe ? event.titleDe : event.titleEn;
                const date = new Date(event.startDate).toLocaleString(
                  locale === "de" ? "de-DE" : "en-GB",
                  { dateStyle: "full", timeStyle: "short" },
                );

                return (
                  <li key={event.slug}>
                    <Card>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-base sm:text-lg font-semibold text-brand-text">
                          {title}
                        </h3>
                        <Badge>{t("upcomingBadge")}</Badge>
                      </div>
                      <p className="text-xs sm:text-sm text-brand-muted mb-1">
                        {date}
                      </p>
                      <p className="text-xs sm:text-sm text-brand-muted mb-3">
                        {event.locationName}, {event.addressLocality}
                      </p>
                      <a
                        href={`/${locale}/termine/${event.slug}`}
                        className="text-xs sm:text-sm font-semibold text-brand-red underline underline-offset-2 hover:text-brand-green"
                      >
                        {t("moreInfo")}
                      </a>
                    </Card>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        {/* CTA Mitglied werden */}
        <section
          className="rounded-2xl border border-gray-200 bg-gradient-to-r from-brand-red via-red-700 to-brand-red
 px-4 py-6 sm:px-6 sm:py-7 text-white shadow-md"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            {t("ctaTitle")}
          </h2>
          <p className="text-sm sm:text-base mb-4 max-w-2xl">{t("ctaText")}</p>
          <Button href={`/${locale}/kontakt`} variant="outline">
            {t("ctaButton")}
          </Button>
        </section>
      </div>
    </>
  );
}
