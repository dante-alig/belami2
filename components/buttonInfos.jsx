import {
  useFonts,
  Inter_600SemiBold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { Text, StyleSheet, Pressable } from "react-native";
import colors from "../assets/style/colors";
const ButtonInfos = ({ infos, title }) => {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_500Medium,
  });
  return (
    <Pressable style={styles.buttonInfos}>
      <Text style={styles.titleInfos}>{title}</Text>
      <Text style={styles.txtInfos}>{infos}</Text>
    </Pressable>
  );
};

export default ButtonInfos;

const styles = StyleSheet.create({
  buttonInfos: {
    padding: 20,
    width: "100%",
    marginBottom: 10,
    borderRadius: 30,
    backgroundColor: colors.darkness,
  },
  txtInfos: {
    color: "white",
    fontFamily: "Inter_500Medium",
    lineHeight: 19,
    fontSize: 12,
  },
  titleInfos: {
    color: "white",
    fontSize: 23,
    textTransform: "uppercase",
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 0.3,
  },
});
