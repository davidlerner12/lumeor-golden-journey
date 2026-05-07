import type { Transformation } from "@/types/content";

const TOTAL_TRANSFORMATIONS = 18;

export const TRANSFORMATIONS: Transformation[] = Array.from(
  { length: TOTAL_TRANSFORMATIONS },
  (_, i) => ({
    src: `/media/images/${i + 1}.png`,
    alt: `Real Lumeor patient transformation #${i + 1} — before and after dental implant treatment`,
  }),
);
