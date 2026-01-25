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
  calendarSlugs?: string[]; // e.g., ["jugend", "senioren"]
};
