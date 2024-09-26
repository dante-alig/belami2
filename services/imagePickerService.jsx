import * as ImagePicker from "expo-image-picker";

export const getPermissionAndGetPicture = async (
  setSelectedPicture,
  setChatLog
) => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status === "granted") {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (result.canceled === true) {
      alert("Pas de photo sélectionnée");
    } else {
      setSelectedPicture(result.assets[0].uri);
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { url: result.assets[0].uri, type: "photo" },
      ]);
    }
  } else {
    alert("Permission refusée");
  }
};
