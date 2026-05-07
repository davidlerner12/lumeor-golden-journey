import { Particles, Reveal } from "@/components/animations";
import { INCLUDED_ROWS } from "@/constants/included";
import { MEDIA } from "@/constants/media";

export const Included = () => (
  <section
    id="included"
    className="relative overflow-hidden bg-navy-deep py-28 text-ivory lg:py-40"
  >
    <Particles count={20} className="opacity-60" />
    <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <span className="eyebrow">What's Included</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,3.6vw,3.75rem)] font-light leading-[1.05] text-balance">
              This Is Not a Referral Service. <br />
              <span className="italic shimmer-text">This Is a Complete, Managed Experience.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-xl font-sans text-[16px] leading-[1.85] text-ivory/75">
              From your first consultation call to the moment you board your flight home, every
              detail is handled. You do not need to figure out logistics, navigate a foreign
              healthcare system, or wonder if you are in good hands. You are.
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="overflow-hidden">
            <img
              src={MEDIA.vipCar}
              alt="Black VIP car at Ben Gurion Airport"
              loading="lazy"
              width={1920}
              height={1280}
              className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
            />
          </div>
          <div className="overflow-hidden mt-12">
            <img
              src={MEDIA.clinicInterior}
              alt="Lumeor clinic interior — premium suite"
              loading="lazy"
              width={1080}
              height={1080}
              className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-28">
        <div className="hidden border-b border-gold/30 pb-4 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-8">
          <span className="eyebrow text-gold">What Is Included</span>
          <span className="eyebrow text-gold">Details</span>
        </div>
        <ul>
          {INCLUDED_ROWS.map((row, i) => (
            <Reveal
              key={row.what}
              delay={i * 0.05}
              as="li"
              className="group grid border-b border-ivory/10 py-6 transition-colors hover:bg-ivory/[0.03] lg:grid-cols-[1fr_2fr] lg:gap-8 lg:py-8"
            >
              <div className="flex items-start gap-4">
                <span className="mt-2 h-px w-6 bg-gold transition-all duration-700 group-hover:w-12" />
                <h3 className="font-serif text-2xl font-light text-ivory lg:text-[28px]">
                  {row.what}
                </h3>
              </div>
              <p className="mt-3 font-sans text-[15px] leading-[1.75] text-ivory/70 lg:mt-2">
                {row.details}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
