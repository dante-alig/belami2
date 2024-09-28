import { StyleSheet, View } from "react-native";
import React, { useContext, useEffect } from "react";
import ButtonCta from "../../../components/buttonCta";
import colors from "../../../assets/style/colors";
import { GlobalContext } from "../../../context/globalContext";
import { getPermissionAndGetPicture } from "../../../services/imagePickerService";
import { askGpt } from "../../../services/gptService";
import DiscussionThreads from "../../../components/discussionThreads";
import EmojiBar from "../../../components/emojiBar";
import { saveChat } from "../../../services/saveChat";

const Tchat = () => {
  const {
    selectedPicture,
    setSelectedPicture,
    chatLog,
    setChatLog,
    gptMode,
    setLoading,
    setLoadingPhoto,
    sessionNumber,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (selectedPicture) {
      askGpt(selectedPicture, gptMode, setChatLog, setLoading);
      askGpt(selectedPicture, gptMode, setChatLog, setLoading);
      askGpt(selectedPicture, gptMode, setChatLog, setLoading);
    } else {
      getPermissionAndGetPicture(
        setSelectedPicture,
        setChatLog,
        setLoadingPhoto
      );
    }
  }, [selectedPicture]);

  useEffect(() => {
    if (chatLog) {
      console.log(JSON.stringify(chatLog));
      saveChat(sessionNumber, chatLog);
    }
  }, [chatLog]);

  const link = () => {
    getPermissionAndGetPicture(setSelectedPicture, setChatLog, setLoadingPhoto);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tchatContainer}>
        <DiscussionThreads />
      </View>
      <View style={styles.buttonBox}>
        <EmojiBar />
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
