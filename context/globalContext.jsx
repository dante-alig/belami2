import { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [chatLog, setChatLog] = useState("");
  const [gptMode, setGptMode] = useState({
    mode: "autoderision",
    visuel: "😅",
  });
  const [gptResponse, setGptResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingPhoto, setLoadingPhoto] = useState(false);
  const [sessionNumber, setSessionNumber] = useState(0);
  const [isChatSaved, setIsChatSaved] = useState(false);

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
        loadingPhoto,
        setLoadingPhoto,
        sessionNumber,
        setSessionNumber,
        isChatSaved,
        setIsChatSaved,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
