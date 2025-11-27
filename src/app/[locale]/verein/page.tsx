import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Über uns | Faschingsverein Example e.V. Musterstadt",
  description:
    "Lerne den Faschingsverein Example e.V. aus Musterstadt kennen: Geschichte, Vorstand, Garden und Gruppen.",
};

export default async function VereinPage() {
  const t = await getTranslations("Verein");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-3">{t("headline")}</h1>
      <p>
        Der Faschingsverein Example e.V. wurde 1975 in Musterstadt gegründet und
        begeistert seitdem Besucherinnen und Besucher mit stimmungsvollen
        Sitzungen, Umzügen und Veranstaltungen.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Unsere Gruppen</h2>
        <ul className="list-disc ml-6">
          <li>Prinzengarde</li>
          <li>Jugend- und Kindergarde</li>
          <li>Elferrat</li>
          <li>Technik- und Orga-Team</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Vorstand</h2>
        <p>Hier kannst du später die Vorstandsmitglieder vorstellen.</p>
      </section>
    </div>
  );
}
