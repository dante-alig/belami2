import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import visuel from "../../images/visuel.png";
import Constants from "expo-constants";

export default function IaScreen() {
  return (
    <>
      <StatusBar translucent={true} style="light" />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Belami</Text>
        </View>
        <Image source={visuel} style={styles.image} />
        <View style={styles.buttonBox}>
          <Pressable style={styles.button2}>
            <Text style={styles.titlePres}>Assistant IA</Text>
            <Text style={styles.txtPres}>
              Recevez le message parfait à lui envoyer pour augmenter vos
              chances d’obtenir un rendez-vous avec elle.{" "}
            </Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.txtCenter}>Commencer</Text>
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
    fontSize: 24,
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
  },
  txtPres: {
    color: "white",
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
  },
  image: {
    height: 451,
    width: "100%",
  },
});
