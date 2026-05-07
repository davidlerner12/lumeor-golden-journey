import { createContext, useContext } from "react";

export interface QualifyGateContextValue {
  /**
   * Opens the qualification modal. Optionally override the phone number used
   * by the qualified-state Call button (defaults to the global CONTACT.phone).
   */
  open: (tel?: string) => void;
}

export const QualifyGateContext = createContext<QualifyGateContextValue>({
  open: () => undefined,
});

/** Hook to read the gate API from anywhere inside `<QualifyGateProvider>`. */
export const useQualifyGate = () => useContext(QualifyGateContext);
