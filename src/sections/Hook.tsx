import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Reveal } from "@/components/animations";
import { MEDIA } from "@/constants/media";

export const Hook = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section className="relative bg-ivory py-28 lg:py-40">
      <div className="mx-auto grid max-w-[1480px] gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
        <div ref={ref} className="relative h-[480px] overflow-hidden lg:h-[720px]">
          <motion.img
            style={{ y }}
            src={MEDIA.coupleKotel}
            alt="A Jewish couple in their late 60s standing together at the Western Wall"
            loading="lazy"
            width={1920}
            height={1280}
            className="absolute inset-0 h-[120%] w-full object-cover"
          />
          <div className="absolute inset-x-6 bottom-6 flex items-center gap-3">
            <div className="h-px w-12 bg-gold" />
            <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-ivory/90">
              The Western Wall — Jerusalem
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="eyebrow"></span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,3.6vw,3.75rem)] font-light leading-[1.05] text-ink text-balance">
              If You've Been Putting Off Dental Implants Because of the Cost —{" "}
              <span className="italic gold-text">Read This.</span>
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6 font-sans text-[16px] leading-[1.85] text-ink/80 max-w-xl">
            <Reveal delay={0.15}>
              <p>
                A single dental implant in the United States costs between $4,500 and $6,000. A
                full arch restoration — All-on-4 or All-on-6 — runs $25,000 to $35,000 or more.
                Most insurance plans cover almost none of it.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                At Lumeor, Israel's top-tier implant clinic, the same procedure — using FDA
                approved titanium implants, full German zirconia, and the same digital scanning
                technology used in leading American practices — costs up to 60% less.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p>
                That is not a compromise. That is the same quality, in a country where the cost of
                running a world-class clinic is simply lower than Manhattan or Beverly Hills.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-serif text-2xl italic text-ink">
                And we have built a complete program around it — so your trip to Israel is not just
                a dental appointment. It is a professionally managed treatment experience.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
