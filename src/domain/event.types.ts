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
  images?: string[]; // e.g., ["/images/events/event1-pic1.jpg"]
  calendarSlugs?: string[]; // e.g., ["jugend", "senioren"]
};
