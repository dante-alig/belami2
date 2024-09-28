import { View, Text, StyleSheet, Modal, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useContext } from "react";
import ButtonCta from "../../../components/buttonCta";
import ButtonModal from "../../../components/buttonModal";
import ButtonInfos from "../../../components/buttonInfos";
import ProfilHistory from "../../../components/profilHistory";
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";
import colors from "../../../assets/style/colors";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { GlobalContext } from "../../../context/globalContext";
import { getPermissionAndGetPicture } from "../../../services/imagePickerService";

export default function HistoryScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false); // État pour la deuxième modal
  const {
    selectedPicture,
    setSelectedPicture,
    setChatLog,
    gptMode,
    setLoading,
    setLoadingPhoto,
    sessionNumber,
    setSessionNumber,
  } = useContext(GlobalContext);

  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  });

  const openModal = () => {
    setModalVisible(true);
  };

  const openSecondModal = async () => {
    setSessionNumber((prevSessionNumber) => prevSessionNumber + 1);
    console.log(sessionNumber);
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === "granted") {
      setModalVisible(false);
      setSecondModalVisible(true);
    } else {
      getPermissionAndGetPicture(
        setSelectedPicture,
        setChatLog,
        setLoadingPhoto
      );
    }
  };

  const launchTchat = () => {
    router.push("tchat");
    setSecondModalVisible(false);
  };

  const screenHeight = Dimensions.get("window").height;

  return (
    <>
      <StatusBar translucent={true} style="light" />
      <View style={styles.container}>
        <View style={styles.historyProfilBox}>
          <ProfilHistory name="barbara" time="il y a 2 heures " />
          <ProfilHistory name="barbara" time="il y a 2 heures " />
        </View>

        <View style={styles.buttonBox}>
          <ButtonInfos
            title="assistant ia"
            infos="Recevez le message parfait à lui envoyer pour augmenter vos chances d’obtenir un rendez-vous avec elle."
          />
          <ButtonCta func={openModal} CtaTitle="Lancer une discussion" />
        </View>
      </View>

      {/* Première Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { height: screenHeight / 2 }]}>
            <Text style={styles.textAction}>Que voulez-vous faire ?</Text>
            <ButtonModal
              func={openSecondModal} // Ouvre la deuxième modal
              CtaTitle="Briser la glace"
            />
            <ButtonModal
              func={() => setModalVisible(false)}
              CtaTitle="Flirter"
            />
            <ButtonModal
              func={() => setModalVisible(false)}
              CtaTitle="Relancer une conversation"
            />
            <ButtonModal
              func={() => setModalVisible(false)}
              CtaTitle="Faire analyser par nos experts"
            />
          </View>
        </View>
      </Modal>

      {/* Deuxième Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={secondModalVisible}
        onRequestClose={() => setSecondModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { height: screenHeight / 2 }]}>
            <Text style={styles.textAction}>
              Choisissez une image à analyser
            </Text>
            <ButtonModal func={launchTchat} CtaTitle="photo" />
            <ButtonModal
              func={() => setSecondModalVisible(false)}
              CtaTitle="caméra"
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.darkness,
    height: "100%",
    width: "100%",
  },
  historyProfilBox: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonBox: {
    width: "100%",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end", // Aligner la modal en bas de l'écran
  },
  modalContent: {
    width: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textAction: {
    fontSize: 18,
    fontFamily: "Inter_700Bold",
    color: "white",
    marginBottom: 25,
  },
});
