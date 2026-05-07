import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/animations";
import { MEDIA } from "@/constants/media";
import { TESTIMONIALS, TESTIMONIAL_ROTATION_MS } from "@/constants/testimonials";

export const Testimonials = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setInterval(
      () => setI((p) => (p + 1) % TESTIMONIALS.length),
      TESTIMONIAL_ROTATION_MS,
    );
    return () => window.clearInterval(t);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-ivory py-28 lg:py-40"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 30%, hsl(var(--gold) / 0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Reveal className="aspect-[9/16] overflow-hidden border border-gold/30">
                <video
                  src={MEDIA.testimonialVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="A woman in her late 60s smiling warmly at the camera, showing perfect natural-looking teeth"
                  className="h-full w-full object-cover"
                />
              </Reveal>
              <Reveal delay={0.12} className="aspect-[4/5] overflow-hidden mt-12">
                <img
                  src={MEDIA.coupleIsrael}
                  alt="An American Jewish couple in their late 60s smiling in Israel"
                  loading="lazy"
                  width={1080}
                  height={1350}
                  className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-105"
                />
              </Reveal>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <Reveal>
              <span className="eyebrow">Testimonials</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-[clamp(2rem,3.4vw,3.5rem)] font-light leading-[1.05] text-ink text-balance">
                What Our American <span className="italic gold-text">Patients Say</span>
              </h2>
            </Reveal>

            <div className="relative mt-12 min-h-[380px] lg:min-h-[340px]">
              <Quote className="absolute -left-2 -top-4 h-16 w-16 text-gold/25" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -40, filter: "blur(8px)" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-8"
                >
                  <p className="font-serif text-[clamp(1.25rem,1.7vw,1.75rem)] font-light italic leading-[1.5] text-ink text-pretty">
                    "{TESTIMONIALS[i].q}"
                  </p>
                  <p className="mt-8 font-sans text-[12px] uppercase tracking-[0.3em] text-ink/60">
                    — {TESTIMONIALS[i].a}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`h-px transition-all duration-700 ${
                    i === idx ? "w-16 bg-gold" : "w-8 bg-ink/25 hover:bg-ink/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
