import { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [chatLog, setChatLog] = useState("");
  const [gptMode, setGptMode] = useState({ mode: "aleatoire", id: "1" });
  const [gptResponse, setGptResponse] = useState("");
  const [loading, setLoading] = useState("");

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
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
