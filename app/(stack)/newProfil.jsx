import { View, StyleSheet, Modal, Button, Text } from "react-native";
import { useState } from "react";
import colors from "../../assets/style/colors";
import ButtonCta from "../../components/buttonCta";

const NewProfil = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalOpen = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ButtonCta func={modalOpen} CtaTitle="Lancer une discution" />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>Voici la moitié de l'écran</Text>
            <Button title="Fermer" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NewProfil;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkness,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modal: {
    height: "50%",
    width: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    color: "white",
    fontSize: 18,
  },
});
