import { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [chatLog, setChatLog] = useState("");
  const [gptMode, setGptMode] = useState({ mode: "aleatoire", id: "1" });
  const [gptResponse, setGptResponse] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        selectedPicture,
        setSelectedPicture,
        chatLog,
        setChatLog,
        gptMode,
        setGptMode,
        gptResponse,
        setGptResponse,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
