import { useEffect, useState } from "react";

export interface PerPageBreakpoint {
  /** Minimum viewport width in pixels (inclusive). */
  minWidth: number;
  /** Number of items to display when this breakpoint applies. */
  perPage: number;
}

/**
 * Returns how many items should be shown per page given the current viewport
 * width. Breakpoints are evaluated in descending `minWidth` order, so callers
 * can pass them in any order.
 *
 * The largest breakpoint that still satisfies `window.innerWidth >= minWidth`
 * wins; if none match, `fallback` is used.
 */
export const useResponsivePerPage = (
  breakpoints: PerPageBreakpoint[],
  fallback: number = 1,
): number => {
  const sorted = [...breakpoints].sort((a, b) => b.minWidth - a.minWidth);

  const compute = () => {
    if (typeof window === "undefined") return fallback;
    const w = window.innerWidth;
    const match = sorted.find((bp) => w >= bp.minWidth);
    return match ? match.perPage : fallback;
  };

  const [perPage, setPerPage] = useState<number>(compute);

  useEffect(() => {
    const update = () => setPerPage(compute());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(sorted), fallback]);

  return perPage;
};
