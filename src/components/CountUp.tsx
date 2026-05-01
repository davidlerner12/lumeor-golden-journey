import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface Props { value: number; prefix?: string; suffix?: string; duration?: number; className?: string; }

export const CountUp = ({ value, prefix = "", suffix = "", duration = 2, className }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: "some" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: duration,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });

    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{n.toLocaleString()}{suffix}
    </span>
  );
};


