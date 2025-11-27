export default function HomePage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-3">
          Faschingsverein Example e.V. – Fasching in Musterstadt
        </h1>
        <p className="mb-2">
          Willkommen beim Faschingsverein Example e.V. aus Musterstadt. Wir
          feiern Fasching mit Prunksitzungen, Umzügen, Kinderfasching und
          stimmungsvollen Veranstaltungen für die ganze Familie.
        </p>
        <p>
          Auf unserer Website findest du alle Infos zu Terminen, Tickets,
          Mitgliedschaft und unserem Vereinsleben.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Nächste Veranstaltungen</h2>
        <ul className="list-disc ml-6">
          <li>Prunksitzung – 15. Februar 2026, Stadthalle Musterstadt</li>
          <li>Kinderfasching – 16. Februar 2026, Vereinsheim</li>
          <li>Faschingsumzug – 17. Februar 2026, Innenstadt Musterstadt</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Mach mit im Verein</h2>
        <p>
          Du hast Lust auf Tanz, Musik, Bühnenauftritte oder Organisation hinter
          den Kulissen? Werde Mitglied in unserem Faschingsverein und gestalte
          die fünfte Jahreszeit aktiv mit!
        </p>
      </section>
    </div>
  );
}
