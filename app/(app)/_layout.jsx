import React from "react";
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";
import ExpertUser from "../../icon/User_expert.svg";
import ProfilUser from "../../icon/User_Circle.svg";
import Tchat from "../../icon/Chat_Dots.svg";
import ExpertUserActive from "../../icon/User_expert_active.svg";
import ProfilUserActive from "../../icon/User_Circle_active.svg";
import TchatActive from "../../icon/Chat_Dots_active.svg";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#141414", // Couleur de fond
            height: 75, // Change la hauteur du menu tabs
            borderRadius: 0, // Applique un border-radius
            marginBottom: 0, // Ajoute un espacement en bas pour mieux voir le border-radius
            paddingBottom: 20, // Ajuste l'intérieur de la barre pour les icônes
            paddingTop: 10, // Ajuste l'intérieur de la barre pour les icônes
            borderBlockColor: "black",
          },
          tabBarActiveTintColor: "#B0AFAB", // Couleur des icônes actifs
          tabBarInactiveTintColor: "#2E2E2E", // Couleur des icônes inactifs
          // tabBarLabelStyle: { display: "none" }, // Masque les labels (titres)
        }}
      >
        <Tabs.Screen
          name="expert"
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <ExpertUserActive width={29} height={29} />
              ) : (
                <ExpertUser width={29} height={29} />
              ),
            tabBarLabel: "Expert", // Aucune étiquette (texte)
          }}
        />
        <Tabs.Screen
          name="(stack)"
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <TchatActive width={29} height={29} />
              ) : (
                <Tchat width={29} height={29} />
              ),
            tabBarLabel: "IA", // Aucune étiquette (texte)
          }}
        />
        <Tabs.Screen
          name="profil"
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <ProfilUserActive width={29} height={29} />
              ) : (
                <ProfilUser width={29} height={29} />
              ),
            tabBarLabel: "Profil", // Aucune étiquette (texte)
          }}
        />
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
