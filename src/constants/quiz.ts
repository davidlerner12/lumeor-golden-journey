import type { QuizQuestion } from "@/types/quiz";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    q: "Are you able to pay for treatment out of pocket?",
    options: [
      { label: "Yes, paying out of pocket" },
      { label: "Yes, with savings available" },
      { label: "No, need financing", disqualifies: true },
      { label: "Not sure", disqualifies: true },
    ],
  },
  {
    q: "What is your estimated budget for treatment?",
    options: [
      { label: "$15,000+" },
      { label: "$10,000–$15,000" },
      { label: "$5,000–$10,000" },
      { label: "Below $5,000", disqualifies: true },
    ],
  },
  {
    q: "Do you have a recent CT scan or are you willing to get one?",
    options: [
      { label: "Yes, I have one" },
      { label: "Yes, willing to get one" },
      { label: "Not sure", disqualifies: true },
      { label: "No", disqualifies: true },
    ],
  },
  {
    q: "Are you planning a trip to Israel within the next 18 months?",
    options: [
      { label: "Yes" },
      { label: "Possibly" },
      { label: "No", disqualifies: true },
    ],
  },
];

/** Delay before the gate closes and we redirect users to the top of the page. */
export const DISQUALIFY_REDIRECT_MS = 2800;
