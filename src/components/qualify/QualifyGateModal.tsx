import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Phone, X } from "lucide-react";

import { QUIZ_QUESTIONS } from "@/constants/quiz";
import type { QualifyStatus, QuizOption } from "@/types/quiz";

interface QualifyGateModalProps {
  tel: string;
  step: number;
  status: QualifyStatus;
  progress: number;
  total: number;
  onSelect: (option: QuizOption) => void;
  onReset: () => void;
  onClose: () => void;
}

export const QualifyGateModal = ({
  tel,
  step,
  status,
  progress,
  total,
  onSelect,
  onReset,
  onClose,
}: QualifyGateModalProps) => (
  <motion.div
    role="dialog"
    aria-modal="true"
    aria-labelledby="qualify-gate-title"
    className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:px-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.35 }}
  >
    {/* Backdrop */}
    <motion.button
      type="button"
      aria-label="Close qualification quiz"
      onClick={onClose}
      className="absolute inset-0 bg-ink/80 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />

    {/* Card */}
    <motion.div
      className="relative z-10 flex max-h-[min(90vh,840px)] w-full max-w-2xl flex-col overflow-hidden border border-gold/30 bg-ivory shadow-2xl"
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 20 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4 border-b border-ink/10 px-6 py-4 lg:px-8">
        <div className="flex items-center gap-4">
          <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-ink/55">
            See If You Qualify
          </span>
          <span className="hidden font-sans text-[11px] uppercase tracking-[0.28em] text-ink/45 sm:inline">
            {status === "asking" ? (
              <>
                Question <span className="text-ink/80">{step + 1}</span> of {total}
              </>
            ) : (
              "Result"
            )}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="flex h-9 w-9 items-center justify-center border border-ink/20 text-ink/70 transition-all duration-300 hover:border-gold hover:bg-ink hover:text-gold-bright"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="relative h-px w-full bg-ink/10">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gold"
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Body */}
      <div className="relative min-h-[420px] overflow-y-auto px-6 py-8 lg:px-10 lg:py-12">
        <AnimatePresence mode="wait">
          {status === "asking" && (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3
                id="qualify-gate-title"
                className="font-serif text-[clamp(1.35rem,2.2vw,1.85rem)] font-light leading-[1.25] text-ink text-balance"
              >
                {QUIZ_QUESTIONS[step].q}
              </h3>
              <ul className="mt-7 space-y-3">
                {QUIZ_QUESTIONS[step].options.map((opt) => (
                  <li key={opt.label}>
                    <button
                      type="button"
                      onClick={() => onSelect(opt)}
                      className="group flex w-full items-center justify-between gap-4 border border-ink/15 bg-ivory px-5 py-4 text-left transition-all duration-500 hover:-translate-y-0.5 hover:border-gold hover:bg-stone/40"
                    >
                      <span className="font-sans text-[15px] text-ink lg:text-base">{opt.label}</span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-ink/25 transition-all duration-500 group-hover:border-gold group-hover:bg-ink group-hover:text-gold-bright">
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {status === "qualified" && (
            <motion.div
              key="qualified"
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold">
                You're a Match
              </span>
              <h3
                id="qualify-gate-title"
                className="mt-4 font-serif text-[clamp(1.5rem,2.6vw,2.2rem)] font-light leading-[1.2] text-ink text-balance"
              >
                You're a strong fit for our program.
              </h3>
              <p className="mx-auto mt-5 max-w-md font-sans text-[15px] leading-[1.8] text-ink/70">
                Based on your answers, you appear to qualify for treatment at Lumeor. Tap below to call our team for a free, no-obligation consultation and personal quote.
              </p>
              <div className="mt-7 flex flex-col items-center gap-4">
                <a
                  href={`tel:${tel}`}
                  onClick={() => window.setTimeout(onClose, 300)}
                  className="btn-gold pulse-glow"
                >
                  <Phone className="mr-2 h-4 w-4" /> Call {tel}
                </a>
                <button
                  type="button"
                  onClick={onReset}
                  className="font-sans text-[12px] uppercase tracking-[0.28em] text-ink/55 transition-colors hover:text-gold"
                >
                  Retake Quiz
                </button>
              </div>
            </motion.div>
          )}

          {status === "disqualified" && (
            <motion.div
              key="disqualified"
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-ink/55">
                Not the Right Fit Right Now
              </span>
              <h3
                id="qualify-gate-title"
                className="mt-4 font-serif text-[clamp(1.5rem,2.6vw,2.2rem)] font-light leading-[1.2] text-ink text-balance"
              >
                Based on your answers, this program may not be the right fit at this time.
              </h3>
              <p className="mx-auto mt-5 max-w-md font-sans text-[15px] leading-[1.8] text-ink/70">
                Our program is built for self-pay patients with a confirmed budget and a clear plan to travel. If your situation changes, we would be glad to revisit your case.
              </p>
              <p className="mx-auto mt-6 font-sans text-[11px] uppercase tracking-[0.28em] text-ink/40">
                Returning you to the homepage…
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  </motion.div>
);
