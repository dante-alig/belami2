// _layout.jsx
import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
      {/* La pile de navigation */}
      <Stack
        screenOptions={{
          // headerShown: false,
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="ia"
          options={{ title: "" }} // Titre personnalisé pour l'écran "home"
        />
        <Stack.Screen
          name="history"
          options={{ title: "Historique" }} // Titre personnalisé pour l'écran "profile"
        />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
