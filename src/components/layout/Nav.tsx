import { motion, useScroll, useTransform } from "framer-motion";

import logo from "@/assets/lumeor-logo.png";
import { CallCta } from "@/components/qualify";

interface NavLinkItem {
  label: string;
  href?: string;
  isCall?: boolean;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "What's Included", href: "#included" },
  { label: "Treatments", href: "#savings" },
  { label: "Savings", href: "#savings" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Book a Call", isCall: true },
];

const NAV_LINK_CLASSES =
  "font-sans text-[16px] uppercase tracking-[0.22em] text-ivory/75 transition-colors hover:text-gold-bright";

export const Nav = () => {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["hsl(220 60% 7% / 0)", "hsl(220 60% 7% / 0.85)"]);
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(18px)"]);
  const border = useTransform(
    scrollY,
    [0, 80],
    ["hsl(255 100% 100% / 0)", "hsl(40 70% 55% / 0.18)"],
  );

  return (
    <motion.header
      style={{
        background: bg,
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
        borderBottomColor: border,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b transition-colors"
    >
      <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-6 lg:px-12">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Lumeor" className="h-14 w-auto" width={280} height={56} />
        </a>
        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((l) =>
            l.isCall ? (
              <CallCta key={l.label} className={NAV_LINK_CLASSES}>
                {l.label}
              </CallCta>
            ) : (
              <a key={l.label} href={l.href} className={NAV_LINK_CLASSES}>
                {l.label}
              </a>
            ),
          )}
        </nav>
        <CallCta className="btn-gold !px-6 !py-3 text-[16px]">Check Availability</CallCta>
      </div>
    </motion.header>
  );
};
