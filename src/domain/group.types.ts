export type Group = {
  slug: string;

  // i18n Texte (einfach & robust)
  titleDe: string;
  titleEn: string;
  descriptionDe: string;
  descriptionEn: string;

  // Inhalte
  age: string;
  joinable: boolean;

  training: {
    dayDe: string;
    dayEn: string;
    time: string; // "17:30–19:00"
    location: string;
  };

  trainers: Array<Trainer>;

  // Bilder
  coverImage: string; // /images/gruppen/garde/cover.jpg
  gallery: string[]; // array of /images/gruppen/garde/1.jpg...
};

export type Trainer = { name: string; image?: string };

export const Trainers: Record<string, Trainer> = {
  EVA: {
    name: "Eva Michalczyk",
    image: "/images/gruppen/trainer/trainer-eva.jpg",
  },
  TAMARA: {
    name: "Tamara Eckstein",
    image: "/images/gruppen/trainer/trainer-tamara.jpg",
  },
  JULIANE: {
    name: "Juliane Müller",
    image: "/images/gruppen/trainer/trainer-juliane.jpg",
  },
  MINO: {
    name: "Mino Michalczyk",
    image: "/images/gruppen/trainer/trainer-mino.jpg",
  },
};
