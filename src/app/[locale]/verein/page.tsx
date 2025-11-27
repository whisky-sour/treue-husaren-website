// src/app/[locale]/verein/page.tsx
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Über uns | Treue Husaren Fürth e.V.",
  description:
    "Lerne die Treuen Husaren Fürth e.V. kennen: Geschichte, Gruppen, Vorstand und Vereinsleben.",
};

type Params = { locale: Locale };
type Props = { params: Promise<Params> };

export default async function VereinPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("Verein");

  return (
    <div className="space-y-10">
      {/* Intro-Section */}
      <section className="space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          {t("title")}
        </h1>
        <p className="text-sm sm:text-base leading-relaxed text-slate-400">
          {t("intro")}
        </p>
      </section>

      {/* Gruppen-Section */}
      <section className="space-y-4">
        <header className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">
            {t("groupsTitle")}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {t("groupsDescription")}
          </p>
        </header>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          <div className="rounded-xl border bg-white/80 p-4 sm:p-5 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-1 text-amber-500 ">
              {t("groupGuard")}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {t("groupGuardDesc")}
            </p>
          </div>

          <div className="rounded-xl border bg-white/80 p-4 sm:p-5 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-1">
              {t("groupYouth")}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {t("groupYouthDesc")}
            </p>
          </div>

          <div className="rounded-xl border bg-white/80 p-4 sm:p-5 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-1">
              {t("groupElferrat")}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {t("groupElferratDesc")}
            </p>
          </div>

          <div className="rounded-xl border bg-white/80 p-4 sm:p-5 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold mb-1">
              {t("groupTech")}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {t("groupTechDesc")}
            </p>
          </div>
        </div>
      </section>

      {/* Vorstand-Section (Platzhalter) */}
      <section className="space-y-4">
        <header className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">
            {t("boardTitle")}
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            {t("boardDescription")}
          </p>
        </header>

        {/* Später kannst du hier echte Vorstands-Daten abbilden */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border bg-white/80 p-4 shadow-sm">
            <div className="text-sm font-semibold">Max Mustermann</div>
            <div className="text-xs text-slate-600 mb-2">1. Vorsitzende/r</div>
            <p className="text-xs text-slate-700">
              Verantwortlich für Gesamtkoordination und Vereinsvertretung.
            </p>
          </div>
          <div className="rounded-xl border bg-white/80 p-4 shadow-sm">
            <div className="text-sm font-semibold">Erika Beispiel</div>
            <div className="text-xs text-slate-600 mb-2">2. Vorsitzende/r</div>
            <p className="text-xs text-slate-700">
              Schnittstelle zwischen Garden, Aktiven und Vorstand.
            </p>
          </div>
          <div className="rounded-xl border bg-white/80 p-4 shadow-sm">
            <div className="text-sm font-semibold">Vorname Nachname</div>
            <div className="text-xs text-slate-600 mb-2">Kassier/in</div>
            <p className="text-xs text-slate-700">
              Zuständig für Finanzen, Beiträge und Abrechnung.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
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
