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
        if (!e.defaultPrevented) {
          // Fire Meta Pixel event for clicking the Call CTA
          if (typeof window !== "undefined") {
            if ((window as any).fbq) {
              (window as any).fbq("track", "Contact");
            }

            // Send webhook for Conversions API (CAPI) via Zapier
            const urlParams = new URLSearchParams(window.location.search);
            fetch("https://hooks.zapier.com/hooks/catch/27092509/4yk399y/", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                event_name: "Contact",
                event_time: Math.floor(Date.now() / 1000),
                event_source_url: window.location.href,
                user_agent: navigator.userAgent,
                fbclid: urlParams.get("fbclid") || "",
              }),
            }).catch(console.error);
          }
          open(tel);
        }
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
