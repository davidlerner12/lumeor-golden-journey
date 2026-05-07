import { Reveal } from "@/components/animations";

export const WhyIsrael = () => (
  <section className="relative overflow-hidden bg-stone/40 py-24 lg:py-32">
    <div
      className="pointer-events-none absolute inset-0 opacity-40"
      style={{
        background: "radial-gradient(70% 60% at 80% 20%, hsl(var(--gold) / 0.14), transparent 60%)",
      }}
    />
    <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-12">
      <Reveal>
        <span className="eyebrow">Why Israel</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 font-serif text-[clamp(1.9rem,3.4vw,3.5rem)] font-light leading-[1.08] text-ink text-balance">
          Why Patients <span className="italic gold-text">Choose Israel.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.18}>
        <p className="mt-10 font-sans text-[17px] leading-[1.9] text-ink/80">
          For many Jewish families in America, Israel is already a place they plan to visit at some
          point in their lives. Lumeor allows patients to combine that meaningful trip with
          world-class dental treatment — while saving tens of thousands of dollars compared to
          treatment in the United States.
        </p>
      </Reveal>
    </div>
  </section>
);
