import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Impressum | Faschingsverein Example e.V.",
};

export default async function ImpressumPage() {
  const t = await getTranslations("Impressum");

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-3">{t("title")}</h1>
      <p>{t("section1")}</p>
      <p>{t("section2")}</p>
      <p>{t("section3")}</p>
      <p>{t("section4")}</p>
      <p>{t("section5")}</p>
    </div>
  );
}
