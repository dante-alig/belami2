import { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [test, setTest] = useState(0);

  return (
    <GlobalContext.Provider value={{ test, setTest }}>
      {children}
    </GlobalContext.Provider>
  );
};
