import { Reveal } from "@/components/animations";
import { MEDIA } from "@/constants/media";

interface TimelineStat {
  value: string;
  label: string;
}

const STATS: TimelineStat[] = [
  { value: "24h", label: "Temporary Teeth" },
  { value: "~4mo", label: "Healing Period" },
  { value: "~1wk", label: "Typical Stay" },
];

export const SmileIn24Hours = () => (
  <section className="relative overflow-hidden bg-ivory py-28 lg:py-40">
    <div
      className="pointer-events-none absolute inset-0 opacity-50"
      style={{
        background: "radial-gradient(60% 50% at 20% 30%, hsl(var(--gold) / 0.12), transparent 60%)",
      }}
    />
    <div className="relative mx-auto grid max-w-[1480px] gap-16 px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-24 lg:px-12">
      <div className="order-2 lg:order-1">
        <Reveal>
          <span className="eyebrow">The Timeline</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-serif text-[clamp(2rem,3.6vw,3.75rem)] font-light leading-[1.05] text-ink text-balance">
            Your New Smile <span className="italic gold-text">In 24 Hours.</span>
          </h2>
        </Reveal>
        <div className="mt-10 space-y-6 font-sans text-[16px] leading-[1.85] text-ink/80 max-w-xl">
          <Reveal delay={0.15}>
            <p>
              For full arch cases, patients receive fixed temporary teeth within 24 hours after
              surgery. After healing, patients return approximately 4 months later for their
              permanent zirconia restoration.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-serif text-2xl italic text-ink">
              Typical stay: approximately one week.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.28}>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/15 pt-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-4xl font-light gold-text lg:text-5xl">{s.value}</p>
                <p className="mt-2 font-sans text-[12px] uppercase tracking-[0.22em] text-ink/55">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="order-1 lg:order-2">
        <div className="relative overflow-hidden">
          <img
            src={MEDIA.clinicInterior}
            alt="Lumeor's premium implantology suite — equipped for same-day full arch restorations"
            loading="lazy"
            width={1920}
            height={1280}
            className="h-[480px] w-full object-cover transition-transform duration-[1600ms] hover:scale-105 lg:h-[640px]"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/15" />
          <div className="absolute inset-x-6 bottom-6 flex items-center gap-3">
            <div className="h-px w-12 bg-gold" />
            <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-ivory/90">
              Lumeor Implantology Suite
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
