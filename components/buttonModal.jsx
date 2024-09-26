import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";
import { Text, StyleSheet, Pressable } from "react-native";
import colors from "../assets/style/colors";
const ButtonModal = ({ func, CtaTitle }) => {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  });
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        func();
      }}
    >
      <Text style={styles.txtCenter}>{CtaTitle}</Text>
    </Pressable>
  );
};

export default ButtonModal;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.ultimateGrey,
    height: 50,
    marginBottom: 10,
    borderRadius: 30,
    justifyContent: "center",
    width: "80%",
  },
  txtCenter: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Inter_700Bold",
    color: colors.lightSmooth,
  },
});
