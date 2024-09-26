import { View, StyleSheet } from "react-native";
import ButtonCta from "../../components/buttonCta";
import colors from "../../assets/style/colors";

const Tchat = () => {
  const link = () => {};
  return (
    <View style={styles.container}>
      <ButtonCta
        style={styles.positionButton}
        func={link}
        CtaTitle="Lancer une discution"
      />
    </View>
  );
};

export default Tchat;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.bgColor,
    height: "100%",
    width: "100%",
  },
  positionButton: {
    alignSelf: "flex-end",
  },
});
