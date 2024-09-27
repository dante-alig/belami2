import { StyleSheet, View, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ButtonCta from "../../../components/buttonCta";
import colors from "../../../assets/style/colors";
import { GlobalContext } from "../../../context/globalContext";
import { getPermissionAndGetPicture } from "../../../services/imagePickerService";
import { askGpt } from "../../../services/gptService";
import DiscussionThreads from "../../../components/discussionThreads";

const Tchat = () => {
  const [loading, setLoading] = useState(false);
  const {
    selectedPicture,
    setSelectedPicture,
    chatLog,
    setChatLog,
    gptMode,
    setGptMode,
    gptResponse,
    setGptResponse,
  } = useContext(GlobalContext);

  useEffect(() => {
    getPermissionAndGetPicture(setSelectedPicture, setChatLog);
  }, []);

  const link = () => {
    console.log("image >>>>>>", chatLog);
    askGpt(selectedPicture, gptMode, setChatLog, setLoading);
    console.log("reponse de gpt >>>>>>", gptResponse);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tchatContainer}>
        <DiscussionThreads />
      </View>
      <View style={styles.buttonBox}>
        <ButtonCta func={link} CtaTitle="ajouter une image" />
      </View>
    </View>
  );
};

export default Tchat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkness,
    height: "100%",
    width: "100%",
  },
  tchatContainer: {
    height: "80%",
    width: "100%",
  },
  buttonBox: {
    height: "20%",
    width: "100%",
    justifyContent: "flex-end",
  },
});
