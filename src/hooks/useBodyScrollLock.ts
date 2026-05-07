import { useEffect } from "react";

/**
 * Locks `document.body` scroll while `isLocked` is true and restores the
 * previous overflow value on cleanup. Safe in SSR (no-op when document is
 * unavailable) and tolerant of multiple consumers.
 */
export const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked || typeof document === "undefined") return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isLocked]);
};
