import { useEffect } from "react";

/**
 * Calls `handler` when the user presses the Escape key while `enabled` is true.
 */
export const useEscapeKey = (handler: () => void, enabled: boolean = true) => {
  useEffect(() => {
    if (!enabled) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handler();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handler, enabled]);
};
