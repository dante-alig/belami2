import { View, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import visuel from "../../../images/visuel.png";
import ButtonCta from "../../../components/buttonCta";
import ButtonInfos from "../../../components/buttonInfos";
import colors from "../../../assets/style/colors";
import { router } from "expo-router";

export default function IaScreen() {
  const link = () => {
    router.push("history");
  };
  return (
    <>
      <StatusBar translucent={true} style="light" />
      <View style={styles.container}>
        <Image source={visuel} style={styles.image} />
        <View style={styles.buttonBox}>
          <ButtonInfos
            title="assistant ia"
            infos="Recevez le message parfait à lui envoyer pour augmenter vos chances d’obtenir un rendez-vous avec elle. "
          />
          <ButtonCta func={link} CtaTitle="Commencer" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.bgColor,
    height: "100%",
    width: "100%",
  },
  buttonBox: {
    width: "100%",
  },

  image: {
    height: 451,
    width: "95%",
    objectFit: "fill",
  },
});
