import { useMemo } from "react";

interface ParticlesProps {
  count?: number;
  className?: string;
}

/**
 * Decorative floating dots used as a layered background. Render inside a
 * relatively positioned parent — the wrapper is `position: absolute; inset: 0`.
 */
export const Particles = ({ count = 28, className = "" }: ParticlesProps) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: 2 + Math.random() * 5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
      })),
    [count],
  );
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
