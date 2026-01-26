import { Event, Location } from "@/domain/event.types";

const locations: Record<string, Location> = {
  SCHUETZEN_WEIHERHOF: {
    locationName: "Schützenhaus der Bürgerschützen Weiherhof",
    streetAddress: "Schwanenweg 3",
    postalCode: "90513",
    addressLocality: "Zirndorf",
  },
  BUERGERHALLE_OBERMICHELBACH: {
    locationName: "Bürgerhalle Obermichelbach",
    streetAddress: "Vacher Str. 25",
    postalCode: "90587",
    addressLocality: "Obermichelbach",
  },
  AWO_VEREINSHEIM: {
    locationName: "AWO Vereinsheim Fürth",
    streetAddress: "Feldstraße 7",
    postalCode: "90766",
    addressLocality: "Fürth",
  },
  FLAIR_FUERTH: {
    locationName: "FLAIR Fürth",
    streetAddress: "Schwabacher Straße 5",
    postalCode: "90762",
    addressLocality: "Fürth",
  },
};

export const events: Event[] = [
  {
    slug: "prunksitzung-2026",
    titleDe: "Große Prunksitzung 2026",
    titleEn: "Grand Gala Session 2026",
    descriptionDe:
      "Unsere große Prunksitzung mit Tanzgarden, Büttenreden und Musik in Obermichelbach.",
    descriptionEn:
      "Our grand gala session with dance groups, speeches and live music in Obermichelbach.",
    startDate: "2026-01-24T19:11:00+01:00",
    endDate: "2026-01-24T23:59:00+01:00",
    location: locations.BUERGERHALLE_OBERMICHELBACH,
    images: [
      "/images/events/prunksitzung-2026/prunksitzung-2026-prinzessin.jpg",
      "/images/events/prunksitzung-2026/prunksitzung-2026-purzel.jpg",
      "/images/events/prunksitzung-2026/prunksitzung-2026-showtanz.jpg",
      "/images/events/prunksitzung-2026/prunksitzung-2026-ordensverleihung.jpg",
      "/images/events/prunksitzung-2026/prunksitzung-2026-feen.jpg",
      "/images/events/prunksitzung-2026/prunksitzung-2026-juliane.jpg",
      "/images/events/prunksitzung-2026/prunksitzung-2026-saal.jpg",
      "/images/events/prunksitzung-2026/prunksitzung-2026-tamara.jpg",
      "/images/events/prunksitzung-2026/prunksitzung-2026-technikfee.jpg",
    ],
    calendarSlugs: ["alle"],
  },
  {
    slug: "kinderfasching-2026",
    titleDe: "Kinderfasching 2026",
    titleEn: "Kids Carnival 2026",
    descriptionDe:
      "Bunter Kinderfasching mit Spielen, Musik und Kostümprämierung.",
    descriptionEn:
      "Colourful kids carnival with games, music and a costume contest.",
    startDate: "2026-01-31T14:11:00+01:00",
    endDate: "2026-01-31T17:00:00+01:00",
    location: locations.SCHUETZEN_WEIHERHOF,
  },
  {
    slug: "wolpertinger-2026",
    titleDe: "Wolpertinger Essen 2026",
    titleEn: "Wolpertinger Feast 2026",
    descriptionDe:
      "Traditionelles Wolpertinger Essen mit regionalen Spezialitäten.",
    descriptionEn: "Traditional Wolpertinger feast with regional specialties.",
    startDate: "2026-02-13T19:11:00+01:00",
    endDate: "2026-02-13T22:00:00+01:00",
    location: locations.SCHUETZEN_WEIHERHOF,
  },
  {
    slug: "fischessen-2026",
    titleDe: "Fischessen 2026",
    titleEn: "Fish feast 2026",
    descriptionDe: "Fischessen.",
    descriptionEn:
      "Our grand gala session with dance groups, speeches and live music in Musterstadt.",
    startDate: "2026-02-28T19:11:00+01:00",
    endDate: "2026-02-28T23:59:00+01:00",
    location: locations.SCHUETZEN_WEIHERHOF,
  },
  {
    slug: "weihnachtsfeier-2025",
    titleDe: "Weihnachtsfeier 2025",
    titleEn: "Christmas party 2025",
    descriptionDe:
      "Interne Weihnachtsfeier um gemeinsam die Weihnachszeit zu feiern (Christkind kommt auch).",
    descriptionEn:
      "Our grand gala session with dance groups, speeches and live music in Musterstadt.",
    startDate: "2025-12-14T18:00:00+01:00",
    endDate: "2025-12-14T21:00:00+01:00",
    location: locations.SCHUETZEN_WEIHERHOF,
  },
  {
    slug: "tollitaetentreffen-2026",
    titleDe: "Tollitätentreffen 2026",
    titleEn: "Royalty Meeting 2026",
    descriptionDe:
      "Treffen der Karnevalstollitäten aus der Region mit Programm und Tanz im Einkaufszentrum FLAIR in Fürth.",
    descriptionEn:
      "Meeting of carnival royalties from the region with program and dance at the FLAIR shopping center in Fürth.",
    startDate: "2026-02-07T10:30:00+01:00",
    endDate: "2026-02-07T16:00:00+01:00",
    location: locations.FLAIR_FUERTH,
  },
];
