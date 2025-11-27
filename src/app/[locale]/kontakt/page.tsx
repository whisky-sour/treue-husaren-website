import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Faschingsverein Example e.V. Musterstadt",
  description:
    "Kontaktiere den Faschingsverein Example e.V. in Musterstadt: E-Mail, Anschrift, Vereinsheim.",
};

export default function KontaktPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-3">Kontakt</h1>
      <p>
        Du möchtest Tickets reservieren, Mitglied werden oder hast eine Frage zu
        unseren Veranstaltungen? Melde dich gerne bei uns.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Anschrift</h2>
        <p>
          Faschingsverein Example e.V.
          <br />
          Musterstraße 11
          <br />
          12345 Musterstadt
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">E-Mail & Telefon</h2>
        <p>
          E-Mail:{" "}
          <a href="mailto:info@faschingsverein-example.de">
            info@faschingsverein-example.de
          </a>
          <br />
          Telefon: 01234 / 567890
        </p>
      </section>
    </div>
  );
}
