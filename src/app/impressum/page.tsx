import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Faschingsverein Example e.V.",
};

export default function ImpressumPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-3">Impressum</h1>
      <p>
        Angaben gemäß § 5 TMG (Platzhalter – durch korrekte Angaben ersetzen):
      </p>
      <p>
        Faschingsverein Example e.V.
        <br />
        Musterstraße 11
        <br />
        12345 Musterstadt
      </p>
      <p>
        Vertreten durch den Vorstand:
        <br />
        Vorname Nachname (1. Vorsitzende/r)
      </p>
      <p>
        Vereinsregister: VR 1234
        <br />
        Registergericht: Amtsgericht Musterstadt
      </p>
      <p>
        Kontakt:
        <br />
        Telefon: 01234 / 567890
        <br />
        E-Mail: info@faschingsverein-example.de
      </p>
    </div>
  );
}
