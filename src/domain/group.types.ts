export type Group = {
  slug: string;

  // i18n Texte (einfach & robust)
  titleDe: string;
  titleEn: string;
  descriptionDe: string;
  descriptionEn: string;

  // Inhalte
  age: string;

  trainings: Array<{
    dayDe: string;
    dayEn: string;
    time: string; // "17:30–19:00"
    location: string;
  }>;

  trainers: Array<Trainer>;

  // Bilder
  coverImage: string; // /images/gruppen/garde/cover.jpg
  gallery: string[]; // array of /images/gruppen/garde/1.jpg...
};

export type Trainer = { name: string; image?: string };

export enum TrainerName {
  EVA = "Eva Michalczyk",
  TAMARA = "Tamara Eckstein",
  JULIANE = "Juliane Müller",
  MINO = "Mino Michalczyk",
}
