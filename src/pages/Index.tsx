import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Phone, Plus, Minus, Quote } from "lucide-react";

import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Particles } from "@/components/Particles";
import { CountUp } from "@/components/CountUp";

/* Media assets are served from /public/media (numbered 1–14 per asset list) */
const MEDIA = {
  heroVideo: "/media/1.mp4",
  coupleKotel: "/media/2.png",
  vipCar: "/media/3.png",
  clinicInterior: "/media/4.png",
  womanDental: "/media/5.png",
  jewishQuarterVideo: "/media/6.mp4",
  manKotel: "/media/7.png",
  deadSea: "/media/8.png",
  shabbatTable: "/media/9.png",
  dentist: "/media/10.png",
  arrivalVideo: "/media/11.mp4",
  testimonialVideo: "/media/12.mp4",
  coupleIsrael: "/media/13.png",
  jerusalemDusk: "/media/14.png",
};

/* ──────────────────────── HERO ──────────────────────── */
const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.35, 0.85]);

  return (
    <section ref={ref} id="top" className="relative flex h-[100svh] min-h-[760px] w-full flex-col overflow-hidden bg-ink">
      <motion.div style={{ y, scale }} className="absolute inset-0">
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
        style={{ background: `linear-gradient(180deg, hsl(220 60% 7% / ${0.55}) 0%, hsl(220 60% 7% / 0.25) 35%, hsl(220 60% 7% / ${overlay.get() + 0.1}) 100%)` }}
        className="absolute inset-0"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
      <Particles count={36} />

      {/* flex-1 spacer fills remaining height, pushing content firmly to the bottom */}
      <div className="flex-1" />
      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-6 pb-20 pt-24 lg:px-12 lg:pb-28">
        <h1 className="mt-6 max-w-5xl font-serif text-[clamp(2.5rem,6.4vw,6.25rem)] font-light leading-[0.98] tracking-tight text-ivory text-balance">
          {["You've Been Meaning to Go to Israel", "Your Whole Life."].map((line, i) => (
            <Reveal key={i} as="span" delay={0.5 + i * 0.18} y={50} className="block">
              {line}
            </Reveal>
          ))}
          <Reveal as="span" delay={0.95} y={50} className="block italic shimmer-text">
            Now You Have a Reason That Saves You $15,000.
          </Reveal>
        </h1>

        <Reveal delay={1.3}>
          <p className="mt-8 max-w-2xl font-sans text-[15px] leading-relaxed text-ivory/75 lg:text-base">
            A private, fully-managed VIP trip to the Holy Land — with world-class dental implants at Lumeor, Israel's premier dental clinic.
            Same Nobel Biocare and Straumann implants your dentist in New York uses. Up to 60% less.
          </p>
          <p className="mt-4 max-w-2xl font-sans text-[15px] leading-relaxed text-ivory/65">
            Everything included. Hotel. Private car. Guided tours. Your dedicated coordinator on WhatsApp from the moment you land.
          </p>
        </Reveal>

        <Reveal delay={1.55}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="tel:+18888240099" className="btn-gold pulse-glow">
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </a>
            <a href="tel:+18888240099" className="btn-ghost-gold">
              Call Now — Get My Free Quote
            </a>
          </div>
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

/* ──────────────────────── HOOK ──────────────────────── */
const Hook = () => {
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
            <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-ivory/90">The Western Wall — Jerusalem</span>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <Reveal><span className="eyebrow">Section 02 — The Hook</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,3.6vw,3.75rem)] font-light leading-[1.05] text-ink text-balance">
              If You've Been Putting Off Dental Implants Because of the Cost — <span className="italic gold-text">Read This.</span>
            </h2>
          </Reveal>
          <div className="mt-10 space-y-6 font-sans text-[16px] leading-[1.85] text-ink/80 max-w-xl">
            <Reveal delay={0.15}><p>A single dental implant in the United States costs between $4,500 and $6,000. A full arch restoration — All-on-4 or All-on-6 — runs $25,000 to $35,000 or more. Most insurance plans cover almost none of it.</p></Reveal>
            <Reveal delay={0.2}><p>At Lumeor, Israel's top-tier implant clinic, the same procedure — using the same Nobel Biocare and Straumann implant brands, the same Zirconia and Emax materials, the same digital scanning technology — costs up to 60% less.</p></Reveal>
            <Reveal delay={0.25}><p>That is not a compromise. That is the same quality, in a country where the cost of running a world-class clinic is simply lower than Manhattan or Beverly Hills.</p></Reveal>
            <Reveal delay={0.3}><p className="font-serif text-2xl italic text-ink">And we have built a complete VIP experience around it — so your trip to Israel is not just a dental appointment. It is the journey you have been meaning to take for decades.</p></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────── INCLUDED ──────────────────────── */
const includedRows = [
  { what: "Private airport transfers", details: "VIP car service from Ben Gurion Airport to your hotel and back — both ways" },
  { what: "4 or 5 star hotel accommodation", details: "Curated hotels in Tel Aviv or Jerusalem, based on your preference" },
  { what: "All dental treatments at Lumeor", details: "Full treatment plan, all procedures, Nobel Biocare or Straumann implants, all materials" },
  { what: "Dedicated English-speaking coordinator", details: "One person handles everything — reachable by phone and WhatsApp throughout your stay" },
  { what: "Guided tours and experiences", details: "Jerusalem Old City, the Western Wall, Masada, the Dead Sea, Yad Vashem, and more" },
  { what: "Post-treatment remote follow-up", details: "Check-ins with your Lumeor dentist after you return home" },
];

const Included = () => (
  <section id="included" className="relative overflow-hidden bg-navy-deep py-28 text-ivory lg:py-40">
    <Particles count={20} className="opacity-60" />
    <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <Reveal><span className="eyebrow">Section 03 — What's Included</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,3.6vw,3.75rem)] font-light leading-[1.05] text-balance">
              This Is Not a Referral Service. <br />
              <span className="italic shimmer-text">This Is a Complete, Managed Experience.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 max-w-xl font-sans text-[16px] leading-[1.85] text-ivory/75">
              From your first consultation call to the moment you board your flight home, every detail is handled. You do not need to figure out logistics, navigate a foreign healthcare system, or wonder if you are in good hands. You are.
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="overflow-hidden">
            <img src={MEDIA.vipCar} alt="Black VIP car at Ben Gurion Airport" loading="lazy" width={1920} height={1280} className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
          </div>
          <div className="overflow-hidden mt-12">
            <img src={MEDIA.clinicInterior} alt="Lumeor clinic interior — premium suite" loading="lazy" width={1080} height={1080} className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-28">
        <div className="hidden border-b border-gold/30 pb-4 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-8">
          <span className="eyebrow text-gold">What Is Included</span>
          <span className="eyebrow text-gold">Details</span>
        </div>
        <ul>
          {includedRows.map((row, i) => (
            <Reveal key={row.what} delay={i * 0.05} as="li" className="group grid border-b border-ivory/10 py-6 transition-colors hover:bg-ivory/[0.03] lg:grid-cols-[1fr_2fr] lg:gap-8 lg:py-8">
              <div className="flex items-start gap-4">
                <span className="mt-2 h-px w-6 bg-gold transition-all duration-700 group-hover:w-12" />
                <h3 className="font-serif text-2xl font-light text-ivory lg:text-[28px]">{row.what}</h3>
              </div>
              <p className="mt-3 font-sans text-[15px] leading-[1.75] text-ivory/70 lg:mt-2">{row.details}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

/* ──────────────────────── SAVINGS ──────────────────────── */
const savingsRows = [
  { tx: "Single Dental Implant (Nobel Biocare)", us: 5500, lu: 1800, save: 3700 },
  { tx: "All-on-4 Full Arch Restoration", us: 28000, lu: 9500, save: 18500 },
  { tx: "All-on-6 Full Arch Restoration", us: 34000, lu: 12000, save: 22000 },
  { tx: "Zirconia Crown", us: 2000, lu: 650, save: 1350 },
  { tx: "Emax Porcelain Crown", us: 1800, lu: 550, save: 1250 },
  { tx: "Full Mouth Restoration", us: 45000, lu: 16000, save: 29000, plus: true },
];

const Savings = () => (
  <section id="savings" className="relative bg-ivory py-28 lg:py-40">
    <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
      <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden">
          <img src={MEDIA.womanDental} alt="Confident American woman in her late 60s smiling in a premium dental chair" loading="lazy" width={1920} height={1280} className="h-[480px] w-full object-cover lg:h-[640px]" />
        </div>
        <div>
          <Reveal><span className="eyebrow">Section 04 — The Savings</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,3.6vw,3.75rem)] font-light leading-[1.05] text-ink text-balance">
              What You Would Pay in the US vs. <span className="italic gold-text">What You Pay at Lumeor</span>
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Table */}
      <div className="mt-16 overflow-x-auto lg:mt-24">
        <div className="min-w-[760px]">
          <div className="grid grid-cols-[2fr_1fr_1fr_1.2fr] border-b border-ink/15 pb-4">
            <span className="eyebrow text-ink/70">Treatment</span>
            <span className="eyebrow text-right text-ink/70">US Price</span>
            <span className="eyebrow text-right text-ink/70">Lumeor Price</span>
            <span className="eyebrow text-right text-gold">You Save</span>
          </div>
          {savingsRows.map((r, i) => (
            <Reveal key={r.tx} delay={i * 0.07} className="group grid grid-cols-[2fr_1fr_1fr_1.2fr] items-center border-b border-ink/10 py-6 transition-colors hover:bg-stone/30">
              <span className="font-serif text-lg text-ink lg:text-xl">{r.tx}</span>
              <span className="text-right font-sans text-base text-ink/60 line-through">${r.us.toLocaleString()}{r.plus && "+"}</span>
              <span className="text-right font-sans text-base font-medium text-ink">${r.lu.toLocaleString()}</span>
              <span className="text-right font-serif text-2xl font-medium gold-text lg:text-[28px]">
                <CountUp value={r.save} prefix="$" suffix={r.plus ? "+" : ""} />
              </span>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-16 max-w-3xl text-center font-sans text-[16px] leading-[1.85] text-ink/75">
          Most patients save more on their dental work alone than the entire cost of their trip — flights, hotel, private car, tours, and all.
        </p>
      </Reveal>
      <Reveal delay={0.25}>
        <p className="mx-auto mt-6 max-w-3xl text-center font-serif text-[clamp(1.6rem,2.4vw,2.4rem)] font-light italic text-ink text-balance">
          Your dental savings pay for your vacation. <span className="gold-text">And then some.</span>
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <div className="mt-10 flex justify-center">
          <a href="tel:+18888240099" className="btn-gold pulse-glow">Call Now — Get My Personal Quote</a>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ──────────────────────── ISRAEL EXPERIENCE ──────────────────────── */
const Israel = () => {
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
          <Reveal><span className="eyebrow text-gold-bright">Section 05 — The Israel Experience</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-4xl font-serif text-[clamp(2.2rem,5vw,5rem)] font-light leading-[1.02] text-balance">
              This Is Not Just a Dental Trip.<br />
              <span className="italic shimmer-text">This Is a Homecoming.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-[1480px] px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div className="space-y-7 font-sans text-[16px] leading-[1.85] text-ivory/80">
            <Reveal><p>For Jewish families across America, Israel is not just a destination. It is a connection to something deeper — to history, to identity, to the roots of your people stretching back thousands of years.</p></Reveal>
            <Reveal delay={0.1}><p>Our patients tell us the same thing every time. They came for the dental work and left with something they did not expect. A morning at the Kotel with time to pray without rushing. Shabbat dinner in Jerusalem. Standing on Masada at sunrise. Floating in the Dead Sea. Walking through Yad Vashem and feeling the weight of memory and the miracle of survival.</p></Reveal>
            <Reveal delay={0.15}><p>We have built this package so that your dental appointments are efficient and take up the minimum time — and the rest of your days in Israel are yours to experience the country the way it deserves to be experienced. Slowly. Meaningfully. With someone taking care of every detail.</p></Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Reveal delay={0.1} className="aspect-[4/5] overflow-hidden">
              <img src={MEDIA.manKotel} alt="A Jewish man in his 70s standing alone at the Western Wall" loading="lazy" width={1920} height={1280} className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-110" />
            </Reveal>
            <Reveal delay={0.18} className="aspect-square overflow-hidden mt-10">
              <img src={MEDIA.deadSea} alt="The Dead Sea at sunrise" loading="lazy" width={1080} height={1080} className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-110" />
            </Reveal>
            <Reveal delay={0.24} className="col-span-2 aspect-[16/9] overflow-hidden">
              <img src={MEDIA.shabbatTable} alt="Shabbat dinner table set in a Jerusalem home" loading="lazy" width={1080} height={1080} className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-110" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────── ABOUT LUMEOR ──────────────────────── */
const About = () => (
  <section className="relative bg-ivory py-28 lg:py-40">
    <div className="mx-auto grid max-w-[1480px] gap-16 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-24 lg:px-12">
      <div className="relative">
        <div className="overflow-hidden">
          <img src={MEDIA.dentist} alt="Senior Israeli dentist in a white coat" loading="lazy" width={1920} height={1280} className="h-[640px] w-full object-cover" />
        </div>
        <div className="absolute -bottom-6 -right-6 hidden border border-gold/40 bg-ivory p-6 lg:block">
          <p className="font-serif text-5xl font-light text-ink">Lumeor</p>
          <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.3em] text-ink/60">Tel Aviv · Israel</p>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <Reveal><span className="eyebrow">Section 06 — About Lumeor</span></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-serif text-[clamp(2rem,3.6vw,3.75rem)] font-light leading-[1.05] text-ink text-balance">
            Why Lumeor. <span className="italic gold-text">Why Israel.</span>
          </h2>
        </Reveal>
        <div className="mt-10 space-y-6 font-sans text-[16px] leading-[1.85] text-ink/80 max-w-xl">
          <Reveal delay={0.15}><p>Israel has one of the highest ratios of dentists per capita in the world. Israeli dental training is internationally accredited, and many of Lumeor's specialists completed advanced fellowships in the United States and Europe. The implant brands, materials, and technology at Lumeor are identical to what you would find at a top practice in New York or Los Angeles.</p></Reveal>
          <Reveal delay={0.2}>
            <p className="font-serif text-2xl italic text-ink">Nobel Biocare. Straumann. Zirconia. Emax. Digital scanning. Same-day temporaries. A fully equipped in-house lab.</p>
          </Reveal>
          <Reveal delay={0.25}><p>The difference is not quality. The difference is that running a world-class clinic in Tel Aviv costs a fraction of what it costs in Manhattan — and we pass every shekel of that savings directly to you.</p></Reveal>
          <Reveal delay={0.3}><p>Lumeor treats international patients exclusively. Every member of our team speaks fluent English. Your coordinator is available from the moment you land to the moment you board your flight home.</p></Reveal>
        </div>
      </div>
    </div>
  </section>
);

/* ──────────────────────── HOW IT WORKS ──────────────────────── */
const steps = [
  { n: "01", t: "Free Consultation Call", d: "Tell us what dental work you need. We review your case, explain your options, and give you a complete price breakdown. No obligation, no pressure." },
  { n: "02", t: "We Build Your Package", d: "We match your treatment plan with a full travel itinerary. Hotel, transfers, tours, and appointments are coordinated around your schedule and your pace." },
  { n: "03", t: "You Fly to Israel", d: "Your driver meets you at Ben Gurion Airport. Your hotel is confirmed. Your coordinator is on WhatsApp. Everything is ready before you land." },
  { n: "04", t: "You Come Home with a New Smile", d: "Your treatments are completed by board-certified implant specialists at Lumeor. You leave with full documentation, a written guarantee, and a remote follow-up plan." },
];

const HowItWorks = () => (
  <section className="relative overflow-hidden bg-navy-deep py-28 text-ivory lg:py-40">
    <Particles count={18} className="opacity-50" />
    <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
      <div className="text-center">
        <Reveal><span className="eyebrow">Section 07 — How It Works</span></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-[clamp(2.2rem,4.4vw,4.5rem)] font-light leading-[1.05] text-balance">
            Four Steps. <span className="italic shimmer-text">Zero Stress.</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:mt-28 lg:grid-cols-4">
        {steps.map((s, i) => (
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
            The moment you walk through the arrivals gate, <span className="italic gold-text">your VIP journey begins.</span>
          </p>
          <p className="mt-6 max-w-xl font-sans text-[15px] leading-[1.85] text-ivory/70">
            Your driver is waiting. Your hotel is confirmed. Your coordinator is on WhatsApp. Every detail handled before your feet touch Israeli soil.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ──────────────────────── TESTIMONIALS ──────────────────────── */
const testimonials = [
  { q: "I needed four implants and two crowns. My periodontist in Boca Raton quoted me $26,000. I paid $7,200 at Lumeor — and spent the rest of the week in Jerusalem. I davened at the Kotel every morning. I came home with the best smile of my life and money left over.", a: "Marilyn S., Boca Raton, FL" },
  { q: "My husband and I were both nervous about doing this abroad. But from the second our driver picked us up at Ben Gurion, we never had to think about a single thing. The coordinator handled everything. The dentist was extraordinary. We are already planning to go back.", a: "Barbara and Howard K., Scottsdale, AZ" },
  { q: "I had been putting off my implants for three years because of the cost. A friend told me about this program. I went, I saw Masada at sunrise, I floated in the Dead Sea, I had Shabbat dinner in the Old City — and I came home with implants that would have cost me $19,000 more in Chicago.", a: "Richard M., Chicago, IL" },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 8500);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="testimonials" className="relative overflow-hidden bg-ivory py-28 lg:py-40">
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(60% 60% at 80% 30%, hsl(var(--gold) / 0.18), transparent 60%)" }} />
      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Reveal className="aspect-[9/16] overflow-hidden border border-gold/30">
                <video
                  src={MEDIA.testimonialVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="A woman in her late 60s smiling warmly at the camera, showing perfect natural-looking teeth"
                  className="h-full w-full object-cover"
                />
              </Reveal>
              <Reveal delay={0.12} className="aspect-[4/5] overflow-hidden mt-12">
                <img
                  src={MEDIA.coupleIsrael}
                  alt="An American Jewish couple in their late 60s smiling in Israel"
                  loading="lazy"
                  width={1080}
                  height={1350}
                  className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-105"
                />
              </Reveal>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <Reveal><span className="eyebrow">Section 08 — Testimonials</span></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-[clamp(2rem,3.4vw,3.5rem)] font-light leading-[1.05] text-ink text-balance">
                What Our American <span className="italic gold-text">Patients Say</span>
              </h2>
            </Reveal>

            <div className="relative mt-12 min-h-[380px] lg:min-h-[340px]">
              <Quote className="absolute -left-2 -top-4 h-16 w-16 text-gold/25" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -40, filter: "blur(8px)" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-8"
                >
                  <p className="font-serif text-[clamp(1.25rem,1.7vw,1.75rem)] font-light italic leading-[1.5] text-ink text-pretty">
                    "{testimonials[i].q}"
                  </p>
                  <p className="mt-8 font-sans text-[12px] uppercase tracking-[0.3em] text-ink/60">— {testimonials[i].a}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`h-px transition-all duration-700 ${i === idx ? "w-16 bg-gold" : "w-8 bg-ink/25 hover:bg-ink/50"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────── FAQ ──────────────────────── */
const faqs = [
  { q: "Is it safe to travel to Israel right now?", a: "We monitor conditions continuously and work only when it is safe to bring patients. Our coordinator will give you an honest, current assessment on your consultation call — the same answer we would give a family member." },
  { q: "How many trips do I need?", a: "Most treatment plans are completed in one trip of 7 to 14 days. Complex full-mouth restorations may require a short follow-up visit. We will tell you exactly how many days you need before you commit to anything." },
  { q: "What if something goes wrong after I return home?", a: "All Lumeor treatments come with a written guarantee. Your treating dentist is available for remote consultations. For anything requiring in-person attention, we coordinate with a dentist in your city." },
  { q: "Can I use my HSA or FSA funds?", a: "Yes. Dental implants and medically necessary procedures qualify for HSA and FSA reimbursement even when performed abroad. Lumeor provides full itemized invoices in English with procedure codes." },
  { q: "Do I need to speak Hebrew?", a: "Not at all. Every member of our team — dentist, coordinator, driver — speaks fluent English." },
  { q: "What if I have a complex medical history?", a: "We review every patient's medical history before confirming a treatment plan. Lumeor's specialists are experienced with medically complex patients and will advise you honestly if any additional precautions are needed." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-stone/40 py-28 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="text-center">
          <Reveal><span className="eyebrow">Section 09 — FAQ</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-[clamp(2rem,3.6vw,3.75rem)] font-light leading-[1.05] text-ink text-balance">
              Questions We Hear <span className="italic gold-text">Every Time</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 lg:mt-24">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="border-b border-ink/15">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:text-gold"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-xl font-light text-ink lg:text-[26px]">{f.q}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-ink/30 transition-all duration-500" style={{ borderColor: isOpen ? "hsl(var(--gold))" : undefined }}>
                      {isOpen ? <Minus className="h-4 w-4 text-gold" /> : <Plus className="h-4 w-4 text-ink" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 pr-12 font-sans text-[16px] leading-[1.85] text-ink/75">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────── FINAL CTA ──────────────────────── */
const FinalCTA = () => {
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
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(220 60% 7% / 0.7) 0%, hsl(220 60% 7% / 0.55) 50%, hsl(220 60% 7% / 0.95) 100%)" }} />
      <Particles count={50} />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-center px-6 py-32 lg:px-12">
        <Reveal><span className="eyebrow text-gold-bright">Section 10 — Final Call</span></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-5xl font-serif text-[clamp(2.2rem,5vw,5.5rem)] font-light leading-[1.02] text-balance">
            The Trip You Always Meant to Take.<br />
            <span className="italic shimmer-text">The Smile You Always Wanted.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <h3 className="mt-12 max-w-3xl font-serif text-[clamp(1.5rem,2.4vw,2.4rem)] font-light leading-[1.2] text-ivory text-balance">
            Spots Are Limited. We Take a Small Number of International Patients Each Month.
          </h3>
        </Reveal>

        <div className="mt-10 max-w-2xl space-y-5 font-sans text-[16px] leading-[1.85] text-ivory/80">
          <Reveal delay={0.25}><p>This is not a volume business. Every patient who comes through this program receives the full VIP experience — a dedicated coordinator, a personalized itinerary, and unhurried time with their specialist at Lumeor. That means we can only accept a limited number of patients each month.</p></Reveal>
          <Reveal delay={0.3}><p>If you have been thinking about this, now is the time to have the conversation. There is no obligation and no payment required to get your quote.</p></Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="tel:+18888240099" className="btn-gold pulse-glow">
              <Phone className="mr-2 h-4 w-4" /> Call Now to Check Availability
            </a>
            <a href="tel:+18888240099" className="btn-ghost-gold">Call Now — Get My Free Quote</a>
          </div>
          <p className="mt-6 font-serif text-lg italic text-gold-bright">Call us now — a real person answers.</p>
        </Reveal>
      </div>
    </section>
  );
};

/* ──────────────────────── FOOTER ──────────────────────── */
const Footer = () => (
  <footer className="bg-navy-deep py-20 text-ivory">
    <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-serif text-5xl font-light tracking-wide gold-text">Lumeor</p>
          <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.32em] text-ivory/60">Tel Aviv, Israel</p>
          <p className="mt-8 max-w-md font-sans text-[14px] leading-[1.8] text-ivory/65">
            Israel's premier dental clinic for international patients — combining world-class implantology with a complete VIP Holy Land experience.
          </p>
        </div>
        <div className="space-y-3">
          <p className="eyebrow">Contact</p>
          <p className="font-sans text-[15px] text-ivory/85">WhatsApp: <a className="hover:text-gold" href="https://wa.me/18888240099">Open chat</a></p>
          <p className="font-sans text-[15px] text-ivory/85">Phone: +1 888 824 0099</p>
          <p className="font-sans text-[15px] text-ivory/85">Email: <a className="hover:text-gold" href="mailto:info@lumeor.com">info@lumeor.com</a></p>
        </div>
        <div className="space-y-3">
          <p className="eyebrow">Credentials</p>
          <p className="font-sans text-[14px] text-ivory/65">Licensed by the Israeli Ministry of Health</p>
          <p className="font-sans text-[14px] text-ivory/65">English-Speaking Staff</p>
          <p className="font-sans text-[14px] text-ivory/65">Treating International Patients Since 2015</p>
          <p className="font-sans text-[14px] text-ivory/65">Nobel Biocare Certified · Straumann Partner</p>
          <p className="font-sans text-[14px] text-ivory/65">Digital Implantology Center</p>
        </div>
      </div>

      <div className="gold-line my-12" />

      <p className="text-center font-sans text-[11px] uppercase tracking-[0.3em] text-ivory/40">
        © {new Date().getFullYear()} Lumeor · Tel Aviv, Israel · All rights reserved
      </p>
    </div>
  </footer>
);

/* ──────────────────────── PAGE ──────────────────────── */
const Index = () => {
  return (
    <div className="relative bg-ivory">
      <SmoothScroll />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Hook />
        <Included />
        <Savings />
        <Israel />
        <About />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
