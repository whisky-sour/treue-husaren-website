export type Event = {
  slug: string;
  titleDe: string;
  titleEn: string;
  descriptionDe: string;
  descriptionEn: string;
  startDate: string; // ISO 8601
  endDate?: string;
  locationName: string;
  streetAddress: string;
  postalCode: string;
  addressLocality: string;
};

export const events: Event[] = [
  {
    slug: "prunksitzung-2026",
    titleDe: "Große Prunksitzung 2026",
    titleEn: "Grand Gala Session 2026",
    descriptionDe:
      "Unsere große Prunksitzung mit Tanzgarden, Büttenreden und Musik in Musterstadt.",
    descriptionEn:
      "Our grand gala session with dance groups, speeches and live music in Musterstadt.",
    startDate: "2026-01-31T19:11:00+01:00",
    endDate: "2026-01-31T23:59:00+01:00",
    locationName: "Stadthalle Musterstadt",
    streetAddress: "Hallenweg 1",
    postalCode: "12345",
    addressLocality: "Musterstadt",
  },
  {
    slug: "kinderfasching-2026",
    titleDe: "Kinderfasching 2026",
    titleEn: "Kids Carnival 2026",
    descriptionDe:
      "Bunter Kinderfasching mit Spielen, Musik und Kostümprämierung.",
    descriptionEn:
      "Colourful kids carnival with games, music and a costume contest.",
    startDate: "2026-02-16T14:11:00+01:00",
    endDate: "2026-02-16T17:00:00+01:00",
    locationName: "Vereinsheim Musterstadt",
    streetAddress: "Vereinsstraße 11",
    postalCode: "12345",
    addressLocality: "Musterstadt",
  },
];
