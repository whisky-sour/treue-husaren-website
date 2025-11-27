// src/app/[locale]/page.tsx
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Locale } from "@/i18n/config";
import { events } from "@/data/events"; // wenn noch nicht vorhanden, vorerst auskommentieren

type Params = { locale: Locale };
type Props = { params: Promise<Params> };

export const metadata: Metadata = {
  title: "Treue Husaren Fürth e.V. | Fasching in Fürth",
  description:
    "Offizielle Website der Treuen Husaren Fürth e.V. – Prunksitzungen, Kinderfasching, Umzüge und mehr.",
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("Home");
  const isDe = locale === "de";

  // Nimm z. B. die nächsten 2 Events aus deiner Datenquelle
  const upcomingEvents = events.slice(0, 2);

  return (
    <div className="space-y-10">
      {/* Hero-Bereich */}
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-700">
          {isDe ? "Faschingsverein" : "Carnival club"}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          {t("title")}
        </h1>
        <p className="text-base sm:text-lg text-fuchsia-700 font-medium">
          {t("subtitle")}
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-slate-400 max-w-2xl">
          {t("text")}
        </p>
      </section>

      {/* Nächste Veranstaltungen */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          {t("nextEventsTitle")}
        </h2>

        {upcomingEvents.length === 0 ? (
          <p className="text-sm text-slate-600">
            {isDe
              ? "Aktuell sind keine Termine eingetragen."
              : "Currently there are no events listed."}
          </p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {upcomingEvents.map((event) => {
              const title = isDe ? event.titleDe : event.titleEn;
              const date = new Date(event.startDate).toLocaleString(
                locale === "de" ? "de-DE" : "en-GB",
                { dateStyle: "full", timeStyle: "short" },
              );

              return (
                <li
                  key={event.slug}
                  className="rounded-xl border bg-white/80 p-4 sm:p-5 shadow-sm"
                >
                  <h3 className="text-base sm:text-lg font-semibold mb-1">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 mb-1">
                    {date}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 mb-3">
                    {event.locationName}, {event.addressLocality}
                  </p>
                  <a
                    href={`/${locale}/termine/${event.slug}`}
                    className="inline-flex text-xs sm:text-sm font-semibold text-fuchsia-700 underline underline-offset-2"
                  >
                    {isDe ? "Mehr Infos" : "More information"}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* Call-to-Action Mitglied werden */}
      <section className="rounded-2xl border bg-gradient-to-r from-purple-600/90 via-fuchsia-500/90 to-pink-500/90 px-4 py-6 sm:px-6 sm:py-7 text-white shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          {t("ctaTitle")}
        </h2>
        <p className="text-sm sm:text-base mb-4 max-w-2xl">{t("ctaText")}</p>
        <a
          href={`/${locale}/kontakt`}
          className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-fuchsia-700 shadow hover:bg-white transition"
        >
          {t("ctaButton")}
        </a>
      </section>
    </div>
  );
}
