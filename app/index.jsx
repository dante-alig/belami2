import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router"; 

export default function AuthScreen() {
  // Suppression de React.useLayoutEffect car inutile si vous utilisez expo-router
  return (
    <Pressable
      onPress={() => {
        router.push("/ia"); // Utilisation correcte de router.push
      }}
      style={styles.container}
    >
      <Text style={styles.title}>ENTRER</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
