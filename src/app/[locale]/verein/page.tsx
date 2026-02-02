import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n/config";
import { Card } from "@/app/components/ui/Card";
import { groups } from "@/data/groups";
import { vorstand } from "@/data/groups";
import { GroupCard } from "@/app/[locale]/verein/GroupCard";
import CtaJoinSection from "@/app/components/ui/CtaJoinSection";
import { GroupType } from "@/domain/group.types";

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

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-semibold">
              {isDe ? "Tanzgruppen" : "Dance groups"}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {groups
                .filter((group) => group.type === GroupType.DANCING)
                .map((group) => (
                  <GroupCard key={group.slug} group={group} locale={locale} />
                ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-semibold">
              {isDe ? "Teams" : "Teams"}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {groups
                .filter((group) => group.type === GroupType.TEAM)
                .map((group) => (
                  <GroupCard key={group.slug} group={group} locale={locale} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vorstand (Platzhalter-Karten) */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">{t("boardTitle")}</h2>
        <p className="text-sm sm:text-base text-brand-muted max-w-2xl">
          {t("boardDescription")}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.values(vorstand).map((member) => (
            <Card key={member.name}>
              <div className="text-sm font-semibold mb-1">{member.name}</div>
              <div className="text-xs text-brand-muted mb-2">
                {t(member.roleKey)}
              </div>
              <p className="text-xs text-brand-muted">
                {t(member.descKey)}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Mitglied werden */}
      <CtaJoinSection
        ctaTitle={t("ctaTitle")}
        ctaText={t("ctaText")}
        ctaButton={t("ctaButton")}
        href={`/${locale}/kontakt`}
      />
    </div>
  );
}
