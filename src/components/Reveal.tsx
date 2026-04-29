import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "h1" | "h2" | "h3" | "p" | "span" | "li" | "tr" | "td";
  once?: boolean;
}

export const Reveal = ({ children, delay = 0, y = 32, className, as = "div", once = true }: Props) => {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y, filter: reduce ? "none" : "blur(6px)" },
    show: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 1.0, delay, ease: [0.22, 1, 0.36, 1] as const },
    },
  };
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag className={className} variants={variants} initial="hidden" whileInView="show" viewport={{ once, amount: 0.25 }}>
      {children}
    </MotionTag>
  );
};
