import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { GlobalContext } from "../context/globalContext";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import React, { useContext, useEffect } from "react";
import colors from "../assets/style/colors";
import emojis from "../utils/emojis";
import loadingAnim from "../assets/loading.gif";

const DiscussionThreads = () => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });
  const { chatLog, loading, loadingPhoto } = useContext(GlobalContext);
  useEffect(() => {}, [loading]);

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
                <Text style={styles.emoji}>{item.visuel}</Text>
              </View>
              <View style={styles.messageContainer}>
                <Text style={styles.messageSet}>{item.message}</Text>
              </View>
            </View>
          )
        }
      />
      {loading && (
        <View style={styles.containerAI}>
          <View style={styles.tons}>
            <Text style={styles.emoji}>🤖</Text>
          </View>
          <View style={styles.loadingContainer}>
            <Image style={styles.animate} source={loadingAnim} />
          </View>
        </View>
      )}
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
    backgroundColor: colors.darkSmooth,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 0,
    marginLeft: 5,
    width: "70%",
  },
  loadingContainer: {
    backgroundColor: colors.darkSmooth,
    width: "20%",
    padding: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 0,
    alignItems: "center",
  },
  loadingPhotoContainer: {
    height: 157,
    width: 220,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 20,
    alignSelf: "flex-end",
    margin: 20,
    backgroundColor: colors.darkSmooth,
  },
  tons: {
    backgroundColor: colors.lightSmooth,
    borderRadius: 100,
    padding: 3,
    width: 30,
    height: 30,
    alignSelf: "flex-end",
    marginRight: 3,
  },
  containerAI: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
  },

  emoji: {
    fontSize: 20,
  },
  animate: {
    width: 30,
    height: 30,
  },
});
