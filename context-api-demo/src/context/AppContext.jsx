import { createContext } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const contextValues = {
    a: "Value A",
    b: "Value B",
    c: "Value C",
    d: "Value D",
    e: "Value E",
    f: "Value F",
  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
}
