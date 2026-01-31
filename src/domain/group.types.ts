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

export type VorstandMember = {
  name: string;
  roleKey: string; // key from VorstandRoleKey enum
  descKey: string; // key for description i18n
  image?: string;
};

export enum VorstandRoleKey {
  ERSTER_VORSTAND = "ERSTER_VORSTAND",
  ZWEITER_VORSTAND = "ZWEITER_VORSTAND",
  ERSTER_SCHATZMEISTER = "ERSTER_SCHATZMEISTER",
  ZWEITER_SCHATZMEISTER = "ZWEITER_SCHATZMEISTER",
  ERSTER_SCHRIFTFUEHRER = "ERSTER_SCHRIFTFUEHRER",
  ZWEITER_SCHRIFTFUEHRER = "ZWEITER_SCHRIFTFUEHRER",
  ERSTER_VERANSTALTUNGSLEITER = "ERSTER_VERANSTALTUNGSLEITER",
  ZWEITER_VERANSTALTUNGSLEITER = "ZWEITER_VERANSTALTUNGSLEITER",
}
