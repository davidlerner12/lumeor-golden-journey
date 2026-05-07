export interface QuizOption {
  label: string;
  disqualifies?: boolean;
}

export interface QuizQuestion {
  q: string;
  options: QuizOption[];
}

export type QualifyStatus = "asking" | "qualified" | "disqualified";
