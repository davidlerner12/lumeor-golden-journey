import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { useRef } from "react";

import { Particles, Reveal } from "@/components/animations";
import { CallCta } from "@/components/qualify";
import { MEDIA } from "@/constants/media";

const HERO_LINES = ["You've Been Meaning to Go to Israel", "Your Whole Life."] as const;

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.35, 0.85]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col bg-ink"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 overflow-hidden">
        <video
          src={MEDIA.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Aerial drone shot gliding over Jerusalem's Old City at golden hour"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
      </motion.div>
      <motion.div
        style={{
          background: `linear-gradient(180deg, hsl(220 60% 7% / ${0.55}) 0%, hsl(220 60% 7% / 0.25) 35%, hsl(220 60% 7% / ${
            overlay.get() + 0.1
          }) 100%)`,
        }}
        className="absolute inset-0"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
      <Particles count={36} />

      {/* flex-1 spacer fills remaining height, pushing content firmly to the bottom */}
      <div className="flex-1" />
      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-6 pb-20 pt-24 lg:px-12 lg:pb-28">
        <h1 className="mt-6 max-w-5xl font-serif text-[clamp(2.5rem,6.4vw,6.25rem)] font-light leading-[0.98] tracking-tight text-ivory text-balance">
          {HERO_LINES.map((line, i) => (
            <Reveal key={line} as="span" delay={0.5 + i * 0.18} y={50} className="block">
              {line}
            </Reveal>
          ))}
          <Reveal as="span" delay={0.95} y={50} className="block italic shimmer-text">
            Now You Have a Reason That Saves You $13,000.
          </Reveal>
        </h1>

        <Reveal delay={1.3}>
          <p className="mt-8 max-w-2xl font-sans text-[15px] leading-relaxed text-ivory/75 lg:text-base">
            A private, fully-managed dental treatment program at Lumeor, Israel's premier dental
            clinic. FDA Approved Titanium Implants And Full German Zirconia. The Same Premium
            Materials Used By Top Clinics In The United States. Up to 60% less.
          </p>
          <p className="mt-4 max-w-2xl font-sans text-[15px] leading-relaxed text-ivory/65">
            Everything included. Hotel accommodation in Modiin. Private transportation from Ben
            Gurion Airport to the clinic and hotel throughout your stay. Dedicated English-speaking
            coordinator available throughout your treatment journey.
          </p>
        </Reveal>

        <Reveal delay={1.55}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CallCta className="btn-gold pulse-glow">
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </CallCta>
            <CallCta className="btn-ghost-gold">Call Now — Get My Free Quote</CallCta>
          </div>
        </Reveal>

        <Reveal delay={1.7}>
          <p className="mt-8 max-w-2xl font-serif text-[clamp(1rem,1.4vw,1.25rem)] italic leading-relaxed text-gold-bright/90">
            Most patients save more on their dental treatment than the total cost of their entire
            trip to Israel.
          </p>
        </Reveal>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown className="h-5 w-5 animate-bounce text-gold/70" />
      </motion.div>
    </section>
  );
};
