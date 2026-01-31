export enum GroupType {
  DANCING = "DANCING",
  TEAM = "TEAM",
}

type BaseGroup = {
  slug: string;

  // i18n Texte (einfach & robust)
  titleDe: string;
  titleEn: string;
  descriptionDe: string;
  descriptionEn: string;

  // Inhalte
  joinable: boolean;

  // Bilder
  coverImage: string; // /images/gruppen/garde/cover.jpg
  gallery: string[]; // array of /images/gruppen/garde/1.jpg...
};

export type DancingGroup = BaseGroup & {
  type: GroupType.DANCING;
  age: string;
  training: {
    dayDe: string;
    dayEn: string;
    time: string; // "17:30–19:00"
    location: string;
  };
  trainers: Array<Trainer>;
};

export type TeamGroup = BaseGroup & {
  type: GroupType.TEAM;
  members: Member[];
  tasksDe: string[];
  tasksEn: string[];
};

export type Group = DancingGroup | TeamGroup;

export type Trainer = Member;

export type Member = {
  name: string;
  image?: string;
};

export type VorstandMember = Member & {
  roleKey: string; // key from VorstandRoleKey enum
  descKey: string; // key for description i18n
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
