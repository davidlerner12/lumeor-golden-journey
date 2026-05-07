import { AnimatePresence } from "framer-motion";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";

import { CONTACT } from "@/constants/contact";
import { DISQUALIFY_REDIRECT_MS, QUIZ_QUESTIONS } from "@/constants/quiz";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import type { QualifyStatus, QuizOption } from "@/types/quiz";

import { QualifyGateContext, type QualifyGateContextValue } from "./context";
import { QualifyGateModal } from "./QualifyGateModal";

const TOTAL = QUIZ_QUESTIONS.length;

/**
 * Renders the qualification modal and exposes an `open()` API to descendants
 * via context. Wrap your app/page with this once at the top level.
 */
export const QualifyGateProvider = ({ children }: { children: ReactNode }) => {
  const [tel, setTel] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<QualifyStatus>("asking");

  const isOpen = tel !== null;
  const progress = status === "asking" ? step / TOTAL : 1;

  const close = useCallback(() => {
    setTel(null);
  }, []);

  const open = useCallback((nextTel: string = CONTACT.phone) => {
    setStep(0);
    setStatus("asking");
    setTel(nextTel);
  }, []);

  const handleSelect = useCallback(
    (opt: QuizOption) => {
      if (opt.disqualifies) {
        setStatus("disqualified");
        return;
      }
      if (step < TOTAL - 1) {
        setStep((s) => s + 1);
      } else {
        setStatus("qualified");
      }
    },
    [step],
  );

  const reset = useCallback(() => {
    setStep(0);
    setStatus("asking");
  }, []);

  useBodyScrollLock(isOpen);
  useEscapeKey(close, isOpen);

  // After a disqualified result, close the gate and bring the user back to top.
  useEffect(() => {
    if (!isOpen || status !== "disqualified") return;
    const timer = window.setTimeout(() => {
      close();
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, DISQUALIFY_REDIRECT_MS);
    return () => window.clearTimeout(timer);
  }, [isOpen, status, close]);

  const contextValue = useMemo<QualifyGateContextValue>(() => ({ open }), [open]);

  return (
    <QualifyGateContext.Provider value={contextValue}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <QualifyGateModal
            tel={tel ?? CONTACT.phone}
            step={step}
            status={status}
            progress={progress}
            total={TOTAL}
            onSelect={handleSelect}
            onReset={reset}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </QualifyGateContext.Provider>
  );
};
