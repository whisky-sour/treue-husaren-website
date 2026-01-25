import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n/config";
import { Button } from "@/app/components/ui/Button";
import { Card } from "@/app/components/ui/Card";

type Params = { locale: string };
type Props = { params: Promise<Params> };

export const metadata: Metadata = {
  title: "Über uns | Treue Husaren Fürth e.V.",
  description:
    "Lerne die Treuen Husaren Fürth e.V. kennen: Geschichte, Gruppen, Vorstand und Vereinsleben.",
};

export default async function VereinPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const isDe = locale === "de";

  const t = await getTranslations("Verein");

  return (
    <div className="space-y-10">
      {/* Intro */}
      <section className="relative overflow-hidden rounded-3xl bg-white shadow-md px-4 py-6 sm:px-8 sm:py-10">
        {/* Deko-Konfetti, nur optisch */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-red/10 blur-2xl" />
        <div className="pointer-events-none absolute -left-8 bottom-0 h-20 w-20 rounded-full bg-brand-green/10 blur-2xl" />

        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
          {t("introLabel")}
        </p>
        <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          {t("title")}
        </h1>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-brand-muted max-w-2xl">
          {t("intro")}
        </p>
      </section>

      {/* Gruppen */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          {t("groupsTitle")}
        </h2>
        <p className="text-sm sm:text-base text-brand-muted max-w-2xl">
          {t("groupsDescription")}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="relative overflow-hidden transition-transform hover:-translate-y-0.5 hover:shadow-lg">
            <div className="absolute inset-x-0 top-0 h-1 bg-brand-green/60" />
            <h3 className="text-base sm:text-lg font-semibold mb-1">
              {t("groupGuard")}
            </h3>
            <p className="text-sm text-brand-muted">{t("groupGuardDesc")}</p>
          </Card>

          <Card className="relative overflow-hidden transition-transform hover:-translate-y-0.5 hover:shadow-lg">
            <div className="absolute inset-x-0 top-0 h-1 bg-brand-red/60" />
            <h3 className="text-base sm:text-lg font-semibold mb-1">
              {t("groupYouth")}
            </h3>
            <p className="text-sm text-brand-muted">{t("groupYouthDesc")}</p>
          </Card>

          <Card className="relative overflow-hidden transition-transform hover:-translate-y-0.5 hover:shadow-lg">
            <div className="absolute inset-x-0 top-0 h-1 bg-brand-green/60" />
            <h3 className="text-base sm:text-lg font-semibold mb-1">
              {t("groupElferrat")}
            </h3>
            <p className="text-sm text-brand-muted">{t("groupElferratDesc")}</p>
          </Card>

          <Card className="relative overflow-hidden transition-transform hover:-translate-y-0.5 hover:shadow-lg">
            <div className="absolute inset-x-0 top-0 h-1 bg-brand-red/60" />

            <h3 className="text-base sm:text-lg font-semibold mb-1">
              {t("groupTech")}
            </h3>
            <p className="text-sm text-brand-muted">{t("groupTechDesc")}</p>
          </Card>
        </div>
      </section>

      {/* Vorstand (Platzhalter-Karten) */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">{t("boardTitle")}</h2>
        <p className="text-sm sm:text-base text-brand-muted max-w-2xl">
          {t("boardDescription")}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(8)].map((_, i) => (
            <Card key={i}>
              <div className="text-sm font-semibold mb-1">
                {t(`boardMember${i + 1}Name`)}
              </div>
              <div className="text-xs text-brand-muted mb-2">
                {t(`boardMember${i + 1}Role`)}
              </div>
              <p className="text-xs text-brand-muted">
                {t(`boardMember${i + 1}Desc`)}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Mitglied werden */}
      <section className="rounded-2xl border border-gray-200 bg-gradient-to-r from-brand-red via-red-700 to-brand-red px-4 py-6 sm:px-6 sm:py-7 text-white shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          {t("ctaTitle")}
        </h2>
        <p className="text-sm sm:text-base mb-4 max-w-2xl">{t("ctaText")}</p>
        <Button href={`/${locale}/kontakt`} variant="primary">
          {t("ctaButton")}
        </Button>
      </section>
    </div>
  );
}
