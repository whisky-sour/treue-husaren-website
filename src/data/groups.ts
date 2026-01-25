import { Group, TrainerName } from "@/domain/group.types";

export const groups: Group[] = [
  {
    slug: "purzel",
    titleDe: "Purzel",
    titleEn: "Purzel",
    descriptionDe:
      "Unsere Purzel-Gruppe begeistert die Kleinsten mit spielerischem Tanz und Bewegung...",
    descriptionEn:
      "Our Purzel group delights the little ones with playful dance and movement...",
    age: "2-6",
    trainings: [
      {
        dayDe: "Mittwoch",
        dayEn: "Wednesday",
        time: "16:00–17:00",
        location: "Fürth",
      },
    ],
    trainers: [
      {
        name: TrainerName.TAMARA,
      },
      {
        name: TrainerName.JULIANE,
      },
    ],
    coverImage: "/images/gruppen/purzel/purzel-tanz.jpg",
    gallery: [
      "/images/gruppen/purzel/purzel-gruppe.jpg",
      "/images/gruppen/purzel/purzel-tanz2.jpg",
    ],
  },
  {
    slug: "jugend",
    titleDe: "Jugend Garde und Showtanz",
    titleEn: "Youth Guard and Show Dance",
    descriptionDe:
      "Unsere Jugendgruppe kombiniert traditionelle Gardetänze mit modernen Showelementen...",
    descriptionEn:
      "Our youth group combines traditional guard dances with modern show elements...",
    age: "7-14",
    trainings: [
      {
        dayDe: "Mittwoch",
        dayEn: "Wednesday",
        time: "17:00–18:00",
        location: "Fürth",
      },
    ],
    trainers: [
      {
        name: TrainerName.TAMARA,
      },
      {
        name: TrainerName.JULIANE,
      },
    ],
    coverImage: "/images/gruppen/jugend/jugendgarde-tanz.jpg",
    gallery: [
      "/images/gruppen/jugend/jugendgarde-tanz.jpg",
      "/images/gruppen/jugend/jugendshow-tanz.jpg",
      "/images/gruppen/jugend/jugendshow-tanz2.jpg",
    ],
  },
  {
    slug: "senioren",
    titleDe: "Senioren Showtanz",
    titleEn: "Adult Show Dance",
    descriptionDe:
      "Unsere Erwachsenengruppe vertanzt mitreißende Showtänze mit actiongeladener Musik und gestaltet alles in Zusammenarbeit mit der ganzen Gruppe...",
    descriptionEn:
      "Our adult group performs captivating show dances with energetic music, creating everything in collaboration with the entire group...",
    age: "16+",
    trainings: [
      {
        dayDe: "Dienstag",
        dayEn: "Tuesday",
        time: "19:30–20:30",
        location: "Zirndorf",
      },
    ],
    trainers: [
      {
        name: "Gesamte Gruppe",
      },
      {
        name: TrainerName.MINO,
      },
    ],
    coverImage: "/images/gruppen/senioren/seniorengarde.jpg",
    gallery: ["/images/gruppen/senioren/seniorengarde.jpg"],
  },
  {
    slug: "duo",
    titleDe: "Showduo Tamara & Juliane",
    titleEn: "Show Duo Tamara & Juliane",
    descriptionDe:
      "Unser Showduo begeistert mit synchronen Tänzen und beeindruckender Bühnenpräsenz und verzaubern durch ihre Hingabe und Freude...",
    descriptionEn:
      "Our show duo captivates with synchronized dances and impressive stage presence and enchants through their dedication and joy...",
    age: "",
    trainings: [
      {
        dayDe: "Kein fester Termin",
        dayEn: "No fixed date",
        time: "",
        location: "Zirndorf",
      },
    ],
    trainers: [
      {
        name: TrainerName.EVA,
      },
      {
        name: TrainerName.MINO,
      },
    ],
    coverImage: "/images/gruppen/duo/duo-tanz.jpg",
    gallery: ["/images/gruppen/duo/duo-tanz.jpg"],
  },
  {
    slug: "maenner",
    titleDe: "Männerballett",
    titleEn: "Men group",
    descriptionDe:
      "Unser Männerballett bringt mit humorvollen und unterhaltsamen Tänzen jede Veranstaltung zum Lachen...",
    descriptionEn:
      "Our men group brings humor and entertainment to every event with their funny dances...",
    age: "16+",
    trainings: [
      {
        dayDe: "TBD",
        dayEn: "TBD",
        time: "TBD",
        location: "Zirndorf",
      },
    ],
    trainers: [
      {
        name: TrainerName.EVA,
      },
    ],
    coverImage: "/images/gruppen/maenner/seniorengarde.jpg",
    gallery: ["/images/gruppen/senioren/seniorengarde.jpg"],
  },
  {
    slug: "tanzmariechen-isabella",
    titleDe: "Tanzmariechen Isabella",
    titleEn: "Dance Mariechen Isabella",
    descriptionDe:
      "Unser jüngstes Tanzmariechen begeistert mit ihrem Spaß am Tanzen und ihrer Ausstrahlung...",
    descriptionEn:
      "Our youngest dance Mariechen captivates with her joy of dancing and charisma...",
    age: "5",
    trainings: [
      {
        dayDe: "Dienstag",
        dayEn: "Tuesday",
        time: "16:00–17:00",
        location: "Zirndorf",
      },
    ],
    trainers: [
      {
        name: TrainerName.EVA,
      },
    ],
    coverImage: "/images/gruppen/tanzmariechen/kindermariechen-isabella2.jpg",
    gallery: [
      "/images/gruppen/tanzmariechen/kindermariechen-isabella.jpg",
      "/images/gruppen/tanzmariechen/kindermariechen-isabella2.jpg",
      "/images/gruppen/tanzmariechen/kindermariechen-isabella-tanz.jpg",
    ],
  },
  {
    slug: "tanzmariechen-bella",
    titleDe: "Tanzmariechen Isabella",
    titleEn: "Dance Mariechen Isabella",
    descriptionDe:
      "Unser Jugend-Tanzmariechen ist erst seit kurzem dabei, zeigt aber schon ihre große Begeisterung fürs Tanzen und was sie in so kurzer Zeit schon leisten kann...",
    descriptionEn:
      "Our youth dance Mariechen has only been with us for a short time, but already shows her great enthusiasm for dancing and what she can achieve in such a short time...",
    age: "",
    trainings: [
      {
        dayDe: "Mittwoch",
        dayEn: "Wednesday",
        time: "18:00–19:00",
        location: "Fürth",
      },
    ],
    trainers: [
      {
        name: TrainerName.EVA,
      },
      {
        name: TrainerName.TAMARA,
      },
      {
        name: TrainerName.JULIANE,
      },
    ],
    coverImage: "/images/gruppen/tanzmariechen/jugendmariechen-isabella.jpg",
    gallery: [
      "/images/gruppen/tanzmariechen/jugendmariechen-isabella.jpg",
      "/images/gruppen/tanzmariechen/jugendmariechen-isabella2.jpg",
    ],
  },
  {
    slug: "tanzmariechen-juliane",
    titleDe: "Tanzmariechen Juliane",
    titleEn: "Dance Mariechen Juliane",
    descriptionDe:
      "Unser ältestes klassisches Tanzmariechen zeigt schon seit vielen Jahren mit viel Eleganz und Präzision ihre tänzerischen Fähigkeiten und begeistert mit ihrer Freude am Tanzen...",
    descriptionEn:
      "Our oldest classical dance Mariechen has been showcasing her dance skills with elegance and precision for many years, captivating with her joy of dancing...",
    age: "17",
    trainings: [
      {
        dayDe: "Dienstag",
        dayEn: "Tuesday",
        time: "18:00–19:30",
        location: "Zirndorf",
      },
    ],
    trainers: [
      {
        name: TrainerName.EVA,
      },
    ],
    coverImage: "/images/gruppen/tanzmariechen/tanzmariechen-juliane.jpg",
    gallery: ["/images/gruppen/tanzmariechen/tanzmariechen-juliane.jpg"],
  },
  {
    slug: "tanzmariechen-tamara",
    titleDe: "Show Tanzmariechen Tamara",
    titleEn: "Show Dance Mariechen Tamara",
    descriptionDe:
      "Unser Show-Tanzmariechen zeigt mitreißende Tänze voller Energie und Ausstrahlung und begeistert das Publikum mit ihrer Bühnenpräsenz. In ihrer letzten Season 2025/26 zeigt sie nochmal was sie drauf hat und beendet die Tänze als Show-Tanzmariechen mit einem Knall...",
    descriptionEn:
      "Our oldest classical dance Mariechen has been showcasing her dance skills with elegance and precision for many years, captivating with her joy of dancing. In her final season 2025/26, she will show what she can do one last time and finish the dances as a show dance Mariechen with a bang...",
    age: "",
    trainings: [
      {
        dayDe: "Kein fester Termin",
        dayEn: "No fixed date",
        time: "",
        location: "Zirndorf",
      },
    ],
    trainers: [
      {
        name: TrainerName.EVA,
      },
      {
        name: TrainerName.MINO,
      },
    ],
    coverImage: "/images/gruppen/tanzmariechen/showmariechen-tamara.jpg",
    gallery: ["/images/gruppen/tanzmariechen/showmariechen-tamara.jpg"],
  },
  // ...weitere Gruppen
];
