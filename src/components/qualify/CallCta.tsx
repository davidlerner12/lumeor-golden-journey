import { ButtonHTMLAttributes, ReactNode } from "react";

import { useQualifyGate } from "./context";

export interface CallCtaProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Optional override for the phone number passed to the gate. */
  tel?: string;
  children: ReactNode;
}

/**
 * Drop-in `<button>` replacement for any "Call now / Book a call" CTA. Opens
 * the qualification gate instead of dialing directly. The actual `tel:`
 * handoff happens after the user passes the quiz.
 */
export const CallCta = ({
  tel,
  children,
  onClick,
  type = "button",
  ...rest
}: CallCtaProps) => {
  const { open } = useQualifyGate();
  return (
    <button
      type={type}
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented) open(tel);
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
