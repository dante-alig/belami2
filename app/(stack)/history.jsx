import { View, Text, StyleSheet, Modal, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import ButtonCta from "../../components/buttonCta";
import ButtonModal from "../../components/buttonModal";
import ButtonInfos from "../../components/buttonInfos";
import ProfilHistory from "../../components/profilHistory";
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";

export default function HistoryScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  });

  const openModal = () => {
    setModalVisible(true);
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

      {/* Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { height: screenHeight / 2 }]}>
            {/* Contenu de la modal ici */}
            <Text style={styles.textAction}>Que voulez-vous faire ?</Text>
            <ButtonModal
              func={() => setModalVisible(false)}
              CtaTitle="Briser la glaçe"
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
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
  },
  textAction: {
    fontSize: 19,
    fontFamily: "Inter_700Bold",
    color: "white",
    marginBottom: 25,
  },
});
