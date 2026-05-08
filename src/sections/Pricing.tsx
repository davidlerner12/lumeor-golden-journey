import { CountUp, Reveal } from "@/components/animations";
import { CallCta } from "@/components/qualify";
import { MEDIA } from "@/constants/media";

export const Pricing = () => (
  <section id="savings" className="relative bg-ivory py-28 lg:py-40">
    <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
      <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden">
          <img
            src={MEDIA.womanDental}
            alt="Confident American woman in her late 60s smiling in a premium dental chair"
            loading="lazy"
            width={1920}
            height={1280}
            className="h-[480px] w-full object-cover lg:h-[640px]"
          />
        </div>
        <div>
          <Reveal>
            <span className="eyebrow">The Savings</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,3.6vw,3.75rem)] font-light leading-[1.05] text-ink text-balance">
              How Much You Save By Doing Your Treatment{" "}
              <span className="italic gold-text">In Israel.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-xl font-sans text-[16px] leading-[1.85] text-ink/75">
              The same premium implant materials used in top American clinics — at a fraction of
              the cost.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Single-treatment featured pricing card */}
      <div className="mt-16 lg:mt-24">
        <div className="relative overflow-hidden border border-gold/30 bg-stone/30">
          <div className="grid gap-px bg-ink/10 lg:grid-cols-4">
            <Reveal className="bg-ivory p-8 lg:p-10">
              <p className="eyebrow text-ink/55">Treatment</p>
              <p className="mt-4 font-serif text-2xl font-light leading-tight text-ink lg:text-[28px]">
                Full Arch Dental Implants
              </p>
            </Reveal>
            <Reveal delay={0.06} className="bg-ivory p-8 lg:p-10">
              <p className="eyebrow text-ink/55">Average USA Price</p>
              <p className="mt-4 font-serif text-3xl font-light text-ink/55 line-through lg:text-4xl">
                $38,000
              </p>
            </Reveal>
            <Reveal delay={0.12} className="bg-ivory p-8 lg:p-10">
              <p className="eyebrow text-ink/55">Lumeor Israel Price</p>
              <p className="mt-4 font-serif text-3xl font-light text-ink lg:text-4xl">₪72,000</p>
              <p className="mt-1 font-sans text-[13px] text-ink/60">~$25,000</p>
            </Reveal>
            <Reveal delay={0.18} className="bg-ink p-8 text-ivory lg:p-10">
              <p className="eyebrow text-gold-bright">Estimated Savings</p>
              <p className="mt-4 font-serif text-3xl font-medium gold-text lg:text-[40px]">
                <CountUp value={13000} prefix="Over $" />
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-16 max-w-3xl text-center font-sans text-[16px] leading-[1.85] text-ink/75">
        Most patients still save over $13,000 compared to completing the same treatment in the United States 
        — while receiving a fully managed experience that includes hotel accommodation, private transportation, 
        and dedicated patient coordination throughout their stay
        </p>
      </Reveal>
      <Reveal delay={0.25}>
        <p className="mx-auto mt-6 max-w-3xl text-center font-serif text-[clamp(1.5rem,2.2vw,2.2rem)] font-light italic text-ink text-balance">
          You are not paying extra to visit Israel.{" "}
          <span className="gold-text">
            You are saving money while finally taking the trip you've been meaning to take.
          </span>
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <div className="mt-10 flex justify-center">
          <CallCta className="btn-gold pulse-glow">Call Now — Get My Personal Quote</CallCta>
        </div>
      </Reveal>
    </div>
  </section>
);
