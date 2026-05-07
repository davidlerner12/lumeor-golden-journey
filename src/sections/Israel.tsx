import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Reveal } from "@/components/animations";
import { MEDIA } from "@/constants/media";

export const Israel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section className="relative overflow-hidden bg-ink text-ivory">
      <div ref={ref} className="relative h-[80vh] min-h-[640px] overflow-hidden">
        <motion.video
          style={{ y: yBg }}
          src={MEDIA.jewishQuarterVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Slow cinematic walk through the narrow stone alleys of Jerusalem's Jewish Quarter"
          width={1920}
          height={1080}
          className="absolute inset-0 h-[130%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/20 to-ink" />
        <div className="absolute inset-0 mx-auto flex max-w-[1480px] flex-col justify-end px-6 pb-20 lg:px-12 lg:pb-28">
          <Reveal>
            <span className="eyebrow text-gold-bright">Treatment In Israel</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-5xl font-serif text-[clamp(2rem,4.6vw,4.75rem)] font-light leading-[1.05] text-balance">
              World-Class Dental Treatment In Israel —<br />
              <span className="italic shimmer-text">Fully Managed From Start To Finish.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-[1480px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div className="space-y-7 font-sans text-[16px] leading-[1.85] text-ivory/80">
            <Reveal>
              <p>
                Lumeor delivers the same standard of implantology you would find at top-tier
                American clinics — performed by specialists trained at leading international
                institutions, using FDA approved titanium implants, full German zirconia, and
                advanced digital scanning technology.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Every detail of your treatment in Israel is professionally managed. Your
                appointments are coordinated around an efficient schedule. Your transportation is
                private. Your hotel is in Modiin. Your English-speaking coordinator is reachable on
                WhatsApp from the moment you land to the moment you fly home.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                This is a premium international dental experience — not a vacation package. The
                focus is your treatment, your results, and your time. The savings, the quality, and
                the care are why our patients fly to Israel for their implants.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Reveal delay={0.1} className="aspect-[4/5] overflow-hidden">
              <img
                src={MEDIA.clinicInterior}
                alt="Lumeor's premium implantology suite"
                loading="lazy"
                width={1920}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-110"
              />
            </Reveal>
            <Reveal delay={0.18} className="aspect-square overflow-hidden mt-10">
              <img
                src={MEDIA.vipCar}
                alt="Private transportation from Ben Gurion Airport"
                loading="lazy"
                width={1080}
                height={1080}
                className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-110"
              />
            </Reveal>
            <Reveal delay={0.24} className="col-span-2 aspect-[16/9] overflow-hidden">
              <img
                src={MEDIA.dentist}
                alt="Senior Lumeor implantologist preparing a patient"
                loading="lazy"
                width={1080}
                height={1080}
                className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-110"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
