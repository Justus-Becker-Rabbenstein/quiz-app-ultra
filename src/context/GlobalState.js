import { createContext } from "react";
import { useState } from "react";

export const GlobalStateContext = createContext();

export const GlobalState = ({ children }) => {
  const [globalStateVar, setGlobalStateVar] = useState("hierÜbergabWert");

  return (
    <GlobalStateContext.Provider value={{ globalStateVar }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
