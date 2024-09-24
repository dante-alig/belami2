import React from "react";
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#141414", // Couleur de fond
            height: 70, // Change la hauteur du menu tabs
            borderRadius: 30, // Applique un border-radius
            marginBottom: 40, // Ajoute un espacement en bas pour mieux voir le border-radius
            paddingBottom: 10, // Ajuste l'intérieur de la barre pour les icônes
            paddingTop: 10, // Ajuste l'intérieur de la barre pour les icônes
          },
          tabBarActiveTintColor: "#B0AFAB", // Couleur du texte actif
          tabBarInactiveTintColor: "#2E2E2E", // Couleur du texte inactif
        }}
      >
        <Tabs.Screen name="expert" />
        <Tabs.Screen name="(stack)/ia" />
        <Tabs.Screen name="profil" />
        <Tabs.Screen
          name="index"
          options={{
            tabBarButton: () => null, // Cache l'onglet
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
