import { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import ButtonCta from "../../../components/buttonCta";
import colors from "../../../assets/style/colors";
import * as ImagePicker from "expo-image-picker";

const Tchat = () => {
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const link = () => {};

  //   ------ACCES AUX PHOTOS -------

  const getPermissionAndGetPicture = async () => {
    //Demander le droit d'accéder à la galerie
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === "granted") {
      //Ouvrir la galerie photo
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
      });

      if (result.canceled === true) {
        alert("Pas de photo sélectionnée");
      } else {
        setSelectedPicture(result.assets[0].uri);
      }
    } else {
      alert("Permission refusée");
    }
  };

  useEffect(() => {
    getPermissionAndGetPicture();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.tchatContainer}>
        {selectedPicture && (
          <Image
            source={{ uri: selectedPicture }}
            style={{ height: 200, width: 200 }}
          />
        )}
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
