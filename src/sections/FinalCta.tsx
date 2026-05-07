import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { useRef } from "react";

import { Particles, Reveal } from "@/components/animations";
import { CallCta } from "@/components/qualify";
import { MEDIA } from "@/constants/media";

export const FinalCta = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <section ref={ref} id="cta" className="relative overflow-hidden bg-ink text-ivory">
      <motion.img
        style={{ y, scale }}
        src={MEDIA.jerusalemDusk}
        alt="Jerusalem's Old City skyline at dusk with the golden Dome of the Rock"
        loading="lazy"
        width={1920}
        height={1280}
        className="absolute inset-0 h-[130%] w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(220 60% 7% / 0.7) 0%, hsl(220 60% 7% / 0.55) 50%, hsl(220 60% 7% / 0.95) 100%)",
        }}
      />
      <Particles count={50} />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-center px-6 py-32 lg:px-12">
        <Reveal>
          <span className="eyebrow text-gold-bright">Final Call</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-5xl font-serif text-[clamp(2.2rem,5vw,5.5rem)] font-light leading-[1.02] text-balance">
            World-Class Treatment In Israel.
            <br />
            <span className="italic shimmer-text">The Smile You Always Wanted.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <h3 className="mt-12 max-w-3xl font-serif text-[clamp(1.5rem,2.4vw,2.4rem)] font-light leading-[1.2] text-ivory text-balance">
            Spots Are Limited. We Take a Small Number of International Patients Each Month.
          </h3>
        </Reveal>

        <div className="mt-10 max-w-2xl space-y-5 font-sans text-[16px] leading-[1.85] text-ivory/80">
          <Reveal delay={0.25}>
            <p>
              This is not a volume business. Every patient who comes through this program receives
              a fully managed treatment experience — a dedicated coordinator, a personalized
              itinerary, and unhurried time with their specialist at Lumeor. That means we can only
              accept a limited number of patients each month.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p>
              If you have been thinking about this, now is the time to have the conversation. There
              is no obligation and no payment required to get your quote.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CallCta className="btn-gold pulse-glow">
              <Phone className="mr-2 h-4 w-4" /> Call Now to Check Availability
            </CallCta>
            <CallCta className="btn-ghost-gold">Call Now — Get My Free Quote</CallCta>
          </div>
          <p className="mt-6 font-serif text-lg italic text-gold-bright">
            Call us now — a real person answers.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
