import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { router } from "expo-router";
import {
  useFonts,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function HistoryScreen() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_700Bold,
  });
  return (
    <>
      <StatusBar translucent={true} style="light" />
      <View style={styles.container}>
        <View style={styles.historyBox}></View>
        <View style={styles.buttonBox}>
          <Pressable style={styles.button2}>
            <Text style={styles.titlePres}>Assistant IA</Text>
            <Text style={styles.txtPres}>
              Recevez le message parfait à lui envoyer pour augmenter vos
              chances d’obtenir un rendez-vous avec elle.
            </Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => {
              router.push("/history"); // Utilisation correcte de router.push
            }}
          >
            <Text style={styles.txtCenter}>Nouvelle conversation</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
const marginStatus = 30 + Constants.statusBarHeight;
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: marginStatus,
  },
  buttonBox: {
    width: "100%",
  },
  titlePres: {
    color: "white",
    fontSize: 23,
    textTransform: "uppercase",
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 0.3,
  },
  txtPres: {
    color: "white",
    fontFamily: "Inter_500Medium",
    lineHeight: 19,
    fontSize: 12,
  },

  button2: {
    padding: 20,
    width: "100%",
    marginBottom: 10,
    borderRadius: 30,
    backgroundColor: "#101010",
  },
  button: {
    backgroundColor: "#D9CDA0",
    height: 56,
    marginBottom: 10,
    borderRadius: 30,
    justifyContent: "center",
    width: "100%",
  },
  txtCenter: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Inter_700Bold",
  },
  historyBox: {
    width: 420,
    height: 254,
    backgroundColor: "grey",
  },
});
