import { GlobalProvider } from "../context/globalContext";
import { Slot } from "expo-router";

export default RootLayout = () => {
  return (
    <GlobalProvider>
      <Slot />
    </GlobalProvider>
  );
};
