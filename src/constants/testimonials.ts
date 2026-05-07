import type { Testimonial } from "@/types/content";

export const TESTIMONIALS: Testimonial[] = [
  {
    q: "I needed four implants and two crowns. My periodontist in Boca Raton quoted me $26,000. I paid $7,200 at Lumeor. The entire process was professionally managed from start to finish — the coordination, the clinic experience, the transportation. I came home with the best smile of my life and money left over.",
    a: "Marilyn S., Boca Raton, FL",
  },
  {
    q: "My husband and I were both nervous about doing this abroad. But from the second our driver picked us up at Ben Gurion, we never had to think about a single thing. The coordinator handled everything. The dentist was extraordinary. We are already planning to go back.",
    a: "Barbara and Howard K., Scottsdale, AZ",
  },
  {
    q: "I had been putting off my implants for three years because of the cost. A friend told me about this program. From start to finish, every detail was handled. The clinic was exceptional, the staff spoke perfect English, and I came home with implants that would have cost me $19,000 more in Chicago.",
    a: "Richard M., Chicago, IL",
  },
];

/** How long each testimonial stays before auto-rotating (ms). */
export const TESTIMONIAL_ROTATION_MS = 8500;
