import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import colors from "../assets/style/colors";

const ProfilHistory = ({ name, time }) => {
  const { height, width } = useWindowDimensions();
  const boxSize = (width - 20) / 2; // Calcul de boxSize dans le composant fonctionnel

  return (
    <View style={[styles.container, { width: boxSize }]}>
      <View style={styles.photoProfil}></View>
      <View style={styles.infosProfilBox}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.line}></View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

export default ProfilHistory;

const styles = StyleSheet.create({
  container: {
    height: 254,
    borderRadius: 20,
    backgroundColor: colors.ultimateGrey,
    alignItems: "center",
    margin: 5,
  },
  photoProfil: {
    width: "90%",
    height: 122,
    backgroundColor: colors.lightSmooth,
    borderRadius: 20,
    marginTop: 15,
  },

  infosProfilBox: {
    width: "90%",
  },

  name: {
    paddingTop: 10,
    paddingBottom: 10,
    color: colors.lightSmooth,
    textTransform: "uppercase",
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: colors.darkSmooth,
  },
  time: {
    color: colors.lightSmooth,
    fontSize: 11,
    paddingTop: 10,
  },
});
