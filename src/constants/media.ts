/**
 * Media assets are served from /public/media (numbered 1–14 per asset list).
 * Use the named keys below instead of raw paths so renames stay in one place.
 */
export const MEDIA = {
  heroVideo: "/media/1.mp4",
  coupleKotel: "/media/2.png",
  vipCar: "/media/3.png",
  clinicInterior: "/media/4.png",
  womanDental: "/media/5.png",
  jewishQuarterVideo: "/media/6.mp4",
  manKotel: "/media/7.png",
  deadSea: "/media/8.png",
  shabbatTable: "/media/9.png",
  dentist: "/media/10.png",
  arrivalVideo: "/media/11.mp4",
  testimonialVideo: "/media/12.mp4",
  coupleIsrael: "/media/13.png",
  jerusalemDusk: "/media/14.png",
} as const;

export type MediaKey = keyof typeof MEDIA;
