import { Reveal } from "@/components/animations";
import { MEDIA } from "@/constants/media";

export const About = () => (
  <section className="relative bg-ivory py-28 lg:py-40">
    <div className="mx-auto grid max-w-[1480px] gap-16 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-24 lg:px-12">
      <div className="relative">
        <div className="overflow-hidden">
          <img
            src={MEDIA.dentist}
            alt="Senior Israeli dentist in a white coat"
            loading="lazy"
            width={1920}
            height={1280}
            className="h-[640px] w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 hidden border border-gold/40 bg-ivory p-6 lg:block">
          <p className="font-serif text-5xl font-light text-ink">Lumeor</p>
          <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.3em] text-ink/60">
            Tel Aviv · Israel
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <Reveal>
          <span className="eyebrow">About Lumeor</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-serif text-[clamp(2rem,3.6vw,3.75rem)] font-light leading-[1.05] text-ink text-balance">
            Why Lumeor. <span className="italic gold-text">Why Israel.</span>
          </h2>
        </Reveal>
        <div className="mt-10 space-y-6 font-sans text-[16px] leading-[1.85] text-ink/80 max-w-xl">
          <Reveal delay={0.15}>
            <p>
              Israel has one of the highest ratios of dentists per capita in the world. Israeli
              dental training is internationally accredited, and many of Lumeor's specialists
              completed advanced fellowships in the United States and Europe. The materials,
              instrumentation, and technology at Lumeor are identical to what you would find at a
              top practice in New York or Los Angeles.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-serif text-2xl italic text-ink">
              FDA approved titanium implants. Full German zirconia. Digital scanning. Same-day
              temporaries. A fully equipped in-house lab.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p>
              The difference is not quality. The difference is that running a world-class clinic in
              Israel costs a fraction of what it costs in Manhattan — and we pass every shekel of
              that savings directly to you.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p>
              Lumeor treats international patients exclusively. Every member of our team speaks
              fluent English. Your coordinator is available from the moment you land to the moment
              you board your flight home.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
