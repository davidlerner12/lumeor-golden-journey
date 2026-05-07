import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/animations";
import { FAQS } from "@/constants/faqs";

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-stone/40 py-28 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="text-center">
          <Reveal>
            <span className="eyebrow">FAQ</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,3.6vw,3.75rem)] font-light leading-[1.05] text-ink text-balance">
              Questions We Hear <span className="italic gold-text">Every Time</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-24">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="border-b border-ink/15">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:text-gold"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-xl font-light text-ink lg:text-[26px]">
                      {f.q}
                    </span>
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center border border-ink/30 transition-all duration-500"
                      style={{ borderColor: isOpen ? "hsl(var(--gold))" : undefined }}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4 text-gold" />
                      ) : (
                        <Plus className="h-4 w-4 text-ink" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 pr-12 font-sans text-[16px] leading-[1.85] text-ink/75">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
