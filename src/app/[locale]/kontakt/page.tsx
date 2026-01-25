import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Kontakt | Faschingsverein Treue Husaren Fürth e.V.",
  description:
    "Kontaktiere den Faschingsverein Treue Husaren Fürth e.V.: E-Mail, Anschrift, Vereinsheim.",
};

export default async function KontaktPage() {
  const t = await getTranslations("Contact");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-3">{t("title")}</h1>
      <p>{t("intro")}</p>

      <section>
        <h2 className="text-2xl font-semibold mb-2">{t("addressTitle")}</h2>
        <p>{t("address")}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">{t("emailPhoneTitle")}</h2>
        <p>
          {t("emailLabel")}:{" "}
          <a href="mailto:info@faschingsverein-example.de">
            info@faschingsverein-example.de
          </a>
          <br />
          {t("phoneLabel")}: 01234 / 567890
        </p>
      </section>
    </div>
  );
}
