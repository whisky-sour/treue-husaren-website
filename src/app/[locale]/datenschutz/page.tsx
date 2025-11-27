import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Faschingsverein Example e.V.",
};

export default function DatenschutzPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-3">Datenschutzerklärung</h1>
      <p>
        Hier kommt eure vollständige Datenschutzerklärung hin (von einem
        seriösen Generator oder Anwalt).
      </p>
      <p>
        Bitte keine Mustertexte kopieren – achtet darauf, dass alle eingesetzten
        Dienste (z. B. Kontaktformular, eingebettete Karten, Social Media Links)
        korrekt beschrieben sind.
      </p>
    </div>
  );
}
