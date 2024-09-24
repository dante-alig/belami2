import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function ExpertScreen() {
  return (
    <>
      <StatusBar translucent={true} style="light" />
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenue sur Expo Router !</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
