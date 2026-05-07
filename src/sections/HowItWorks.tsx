import { Particles, Reveal } from "@/components/animations";
import { MEDIA } from "@/constants/media";
import { HOW_IT_WORKS_STEPS } from "@/constants/steps";

export const HowItWorks = () => (
  <section className="relative overflow-hidden bg-navy-deep py-28 text-ivory lg:py-40">
    <Particles count={18} className="opacity-50" />
    <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
      <div className="text-center">
        <Reveal>
          <span className="eyebrow">How It Works</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-[clamp(2.2rem,4.4vw,4.5rem)] font-light leading-[1.05] text-balance">
            Four Steps. <span className="italic shimmer-text">Zero Stress.</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:mt-28 lg:grid-cols-4">
        {HOW_IT_WORKS_STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1} className="group relative">
            <div className="relative h-full border border-ivory/10 bg-ivory/[0.02] p-8 transition-all duration-700 hover:border-gold/40 hover:bg-ivory/[0.04] hover:-translate-y-1">
              <div className="font-serif text-6xl font-light gold-text">{s.n}</div>
              <h3 className="mt-6 font-serif text-2xl font-light text-ivory">{s.t}</h3>
              <p className="mt-4 font-sans text-[14px] leading-[1.75] text-ivory/65">{s.d}</p>
              <div className="mt-8 h-px w-12 bg-gold/60 transition-all duration-700 group-hover:w-full" />
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 grid items-center gap-12 lg:mt-32 lg:grid-cols-[auto_1fr] lg:gap-20">
        <Reveal>
          <div className="relative mx-auto aspect-[9/16] w-[260px] overflow-hidden border border-gold/30 lg:mx-0 lg:w-[340px]">
            <video
              src={MEDIA.arrivalVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="A distinguished American man stepping through the arrivals gate at an airport"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ivory/10" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="eyebrow text-gold-bright">The Arrival</span>
          <p className="mt-6 font-serif text-[clamp(1.6rem,2.6vw,2.6rem)] font-light leading-[1.15] text-ivory text-balance">
            The moment you walk through the arrivals gate,{" "}
            <span className="italic gold-text">your treatment experience begins.</span>
          </p>
          <p className="mt-6 max-w-xl font-sans text-[15px] leading-[1.85] text-ivory/70">
            Your driver is waiting. Your hotel in Modiin is confirmed. Your coordinator is on
            WhatsApp. Every detail handled before your feet touch Israeli soil.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
