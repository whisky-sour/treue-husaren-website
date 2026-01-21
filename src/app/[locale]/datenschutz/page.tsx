import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Faschingsverein Example e.V.",
};

export default async function DatenschutzPage() {
  const t = await getTranslations("Privacy");

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-3">{t("title")}</h1>
      <p>{t("section1")}</p>
      <p>{t("section2")}</p>
    </div>
  );
}
