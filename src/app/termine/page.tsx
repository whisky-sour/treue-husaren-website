import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termine & Veranstaltungen | Faschingsverein Example e.V.",
  description:
    "Alle Termine und Veranstaltungen des Faschingsverein Example e.V. in Musterstadt – Prunksitzungen, Kinderfasching, Umzüge.",
};

type Event = {
  title: string;
  date: string;
  location: string;
  slug: string;
};

const events: Event[] = [
  {
    title: "Große Prunksitzung 2026",
    date: "15. Februar 2026, 19:31 Uhr",
    location: "Stadthalle Musterstadt",
    slug: "prunksitzung-2026",
  },
  {
    title: "Kinderfasching 2026",
    date: "16. Februar 2026, 14:11 Uhr",
    location: "Vereinsheim Musterstadt",
    slug: "kinderfasching-2026",
  },
];

export default function TerminePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-3">Termine & Veranstaltungen</h1>
      <p>Hier findest du unsere aktuellen Faschingsveranstaltungen.</p>

      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event.slug} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-sm">{event.date}</p>
            <p className="text-sm mb-2">{event.location}</p>
            {/* Optional: eigene Detailseite pro Event */}
            {/* <a href={`/termine/${event.slug}`} className="text-blue-600 underline">
              Mehr Infos
            </a> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
