import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/animations";
import { TRANSFORMATIONS } from "@/constants/transformations";
import { useResponsivePerPage } from "@/hooks/useResponsivePerPage";

const PER_PAGE_BREAKPOINTS = [
  { minWidth: 1024, perPage: 4 },
  { minWidth: 768, perPage: 3 },
  { minWidth: 560, perPage: 2 },
];

const NAV_BUTTON_CLASSES =
  "flex h-12 w-12 items-center justify-center border border-ink/25 text-ink transition-all duration-500 hover:border-gold hover:bg-ink hover:text-gold-bright disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ink/25 disabled:hover:bg-transparent disabled:hover:text-ink";

export const BeforeAfter = () => {
  const perPage = useResponsivePerPage(PER_PAGE_BREAKPOINTS, 1);
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(TRANSFORMATIONS.length / perPage));

  // Clamp current page when perPage changes
  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  const next = () => setPage((p) => Math.min(p + 1, totalPages - 1));
  const prev = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <section id="results" className="relative overflow-hidden bg-ivory py-28 lg:py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(50% 50% at 80% 20%, hsl(var(--gold) / 0.15), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow">Real Results</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-[clamp(2rem,3.8vw,4rem)] font-light leading-[1.05] text-ink text-balance">
                Real Patient <span className="italic gold-text">Transformations.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 max-w-2xl font-sans text-[16px] leading-[1.85] text-ink/70">
                See the difference world-class implantology can make.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.22}>
            <div className="flex items-center gap-3">
              <span className="font-sans text-[12px] uppercase tracking-[0.28em] text-ink/55">
                {String(page + 1).padStart(2, "0")} <span className="text-ink/30">/</span>{" "}
                {String(totalPages).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={prev}
                disabled={page === 0}
                aria-label="Previous transformations"
                className={NAV_BUTTON_CLASSES}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                disabled={page >= totalPages - 1}
                aria-label="Next transformations"
                className={NAV_BUTTON_CLASSES}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="overflow-hidden">
            <motion.ul
              animate={{ x: `-${page * 100}%` }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex"
            >
              {TRANSFORMATIONS.map((t) => (
                <li
                  key={t.src}
                  style={{ flex: `0 0 ${100 / perPage}%` }}
                  className="group px-2.5 md:px-3"
                >
                  <div className="relative overflow-hidden border border-ink/10 bg-stone/30 transition-all duration-700 hover:border-gold/40 hover:-translate-y-1">
                    <div className="relative aspect-[10/17] overflow-hidden">
                      <img
                        src={t.src}
                        alt={t.alt}
                        loading="lazy"
                        width={920}
                        height={1564}
                        className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-[1.03]"
                      />
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2">
                        <div className="absolute left-3 top-3 border border-ink/30 bg-ivory/85 px-2.5 py-1 backdrop-blur">
                          <span className="font-sans text-[9px] uppercase tracking-[0.28em] text-ink/75">
                            Before
                          </span>
                        </div>
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2">
                        <div className="absolute bottom-3 left-3 border border-gold/60 bg-ink/70 px-2.5 py-1 backdrop-blur">
                          <span className="font-sans text-[9px] uppercase tracking-[0.28em] text-gold-bright">
                            After
                          </span>
                        </div>
                      </div>
                      <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
                    </div>
                    <div className="flex items-center justify-between gap-3 px-5 py-4">
                      <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-ink/55">
                        Patient · Lumeor Israel
                      </span>
                      <div className="h-px w-8 bg-gold transition-all duration-700 group-hover:w-14" />
                    </div>
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPage(idx)}
                aria-label={`Go to transformations page ${idx + 1}`}
                className={`h-px transition-all duration-700 ${
                  idx === page ? "w-16 bg-gold" : "w-8 bg-ink/25 hover:bg-ink/50"
                }`}
              />
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-14 max-w-2xl text-center font-sans text-[13px] uppercase tracking-[0.28em] text-ink/45">
            Treatment outcomes vary patient to patient. All photos shared with patient consent.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
