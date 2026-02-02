import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Locale } from "@/i18n/config";
import { events } from "@/data/events";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import CtaJoinSection from "@/app/components/ui/CtaJoinSection";
import Image from "next/image";

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
    .filter((e) => new Date(e.startDate).getTime() > new Date().getTime())
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    )
    .slice(0, 2);

  const lastEvent = events
    .filter((e) => new Date(e.startDate).getTime() < new Date().getTime())
    .sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
    )
    .slice(0, 1);

  return (
    <>
      {/* TODO: Remove comment when data is correct <OrganizationJsonLd /> */}
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
                        {event.location.locationName},{" "}
                        {event.location.addressLocality}
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
          {lastEvent.map((e) => {
            const title = isDe ? e.titleDe : e.titleEn;
            const date = new Date(e.startDate).toLocaleString(
              locale === "de" ? "de-DE" : "en-GB",
              { dateStyle: "full", timeStyle: "short" },
            );

            return (
              <div key={e.slug}>
                <h2 className="text-xl sm:text-2xl font-semibold text-brand-text">
                  {t("lastEventTitle")}
                </h2>
                <div>
                  <Card>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base sm:text-lg font-semibold text-brand-text">
                        {title}
                      </h3>
                      <Badge>{t("lastEventBadge")}</Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-muted mb-1">
                      {date}
                    </p>
                    <p className="text-xs sm:text-sm text-brand-muted mb-3">
                      {e.location.locationName}, {e.location.addressLocality}
                    </p>
                    <a
                      href={`/${locale}/termine/${e.slug}`}
                      className="m-2 text-xs sm:text-sm font-semibold text-brand-red underline underline-offset-2 hover:text-brand-green"
                    >
                      {t("moreInfo")}
                    </a>
                    {e.images && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-3">
                        {e.images
                          .slice(0, Math.min(e.images.length, 4))
                          .map((img, idx) => (
                            <Image
                              key={idx}
                              src={img}
                              alt={`${title} image ${idx + 1}`}
                              width={300}
                              height={180}
                              className="rounded"
                            />
                          ))}
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA Mitglied werden */}
        <CtaJoinSection
          ctaTitle={t("ctaTitle")}
          ctaText={t("ctaText")}
          ctaButton={t("ctaButton")}
          href={`/${locale}/kontakt`}
        />
      </div>
    </>
  );
}
