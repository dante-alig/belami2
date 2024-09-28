import axios from "axios";
import { Alert } from "react-native"; // Si Alert est utilisé dans l'erreur

export const askGpt = async (
  selectedPicture,
  gptMode,
  setChatLog,
  setLoading
) => {
  setLoading(true);
  const formData = new FormData();
  const image = {
    uri: selectedPicture,
    type: "image/jpeg",
    name: "photo.jpg",
  };
  formData.append("image", image);

  try {
    const response = await axios.post(
      `http://192.168.1.24:3000/${gptMode.mode}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      {
        message: response.data.message.content,
        type: "texte",
        visuel: gptMode.visuel,
      },
    ]);
  } catch (error) {
    console.error(error);
    Alert.alert(
      "Erreur",
      "Une erreur est survenue lors de l'envoi des données."
    );
  } finally {
    setLoading(false);
  }
};
