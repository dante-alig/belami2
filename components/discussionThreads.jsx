import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { GlobalContext } from "../context/globalContext";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import React, { useContext, useEffect } from "react";
import colors from "../assets/style/colors";
import emojis from "../utils/emojis";

const DiscussionThreads = () => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });
  const { chatLog } = useContext(GlobalContext);

  return (
    <View>
      <FlatList
        data={chatLog}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          item.type === "photo" ? (
            <Image style={styles.imageSet} source={{ uri: item.url }} />
          ) : (
            <View style={styles.containerAI}>
              <View style={styles.tons}>
                <Text style={styles.emoji}>{emojis[item.ton]}</Text>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.messageSet}>{item.message}</Text>
              </View>
            </View>
          )
        }
      />
    </View>
  );
};

export default DiscussionThreads;

const styles = StyleSheet.create({
  imageSet: {
    height: 157,
    width: 220,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 20,
    alignSelf: "flex-end",
    margin: 20,
  },
  messageSet: {
    alignSelf: "flex-start",
    padding: 16,
    fontFamily: "Inter_400Regular",
    lineHeight: 19,
  },
  messageContainer: {
    backgroundColor: colors.lightSmooth,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 0,
    margin: 7,
    marginLeft: 5,
    width: "70%",
  },
  tons: {
    backgroundColor: colors.lightSmooth,
    borderRadius: 100,
    padding: 3,
    width: 30,
    height: 30,
    alignSelf: "flex-end",
    margin: 7,
  },
  containerAI: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
  },

  emoji: {
    fontSize: 20,
  },
});
