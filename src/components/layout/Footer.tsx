import { CONTACT } from "@/constants/contact";

const CREDENTIALS = [
  "Licensed by the Israeli Ministry of Health",
  "English-Speaking Staff",
  "Digital Implantology Center",
] as const;

export const Footer = () => (
  <footer className="bg-navy-deep py-20 text-ivory">
    <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-serif text-5xl font-light tracking-wide gold-text">Lumeor</p>
          <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.32em] text-ivory/60">
            Tel Aviv, Israel
          </p>
          <p className="mt-8 max-w-md font-sans text-[14px] leading-[1.8] text-ivory/65">
            Israel's premier dental clinic for international patients — combining world-class
            implantology with a Premium International Dental Experience.
          </p>
        </div>

        <div className="space-y-3">
          <p className="eyebrow">Contact</p>          
          <p className="font-sans text-[15px] text-ivory/85">Phone: {CONTACT.phoneDisplay}</p>
        </div>

        <div className="space-y-3">
          <p className="eyebrow">Credentials</p>
          {CREDENTIALS.map((label) => (
            <p key={label} className="font-sans text-[14px] text-ivory/65">
              {label}
            </p>
          ))}
        </div>
      </div>

      <div className="gold-line my-12" />

      <p className="text-center font-sans text-[11px] uppercase tracking-[0.3em] text-ivory/40">
        © {new Date().getFullYear()} Lumeor · Tel Aviv, Israel · All rights reserved
      </p>
    </div>
  </footer>
);
