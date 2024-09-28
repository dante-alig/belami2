import * as ImagePicker from "expo-image-picker";
import axios from "axios"; // Assurez-vous que axios est importé

export const getPermissionAndGetPicture = async (
  setSelectedPicture,
  setChatLog,
  setLoadingPhoto
) => {
  // Demande de permission à la bibliothèque multimédia
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (status === "granted") {
    // Lancement de la sélection d'image
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (result.canceled) {
      alert("Pas de photo sélectionnée");
    } else {
      const selectedImageUri = result.assets[0].uri;
      setSelectedPicture(selectedImageUri);

      // Ajouter l'image sélectionnée à l'historique du chat (temporairement)
      const tempId = Date.now(); // Utilisation d'un ID temporaire pour repérer cette image
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { url: selectedImageUri, type: "photo", loading: true, id: tempId },
      ]);

      // Création des données du formulaire
      const formData = new FormData();
      const image = {
        uri: selectedImageUri,
        type: "image/jpeg",
        name: "photo.jpg",
      };
      formData.append("image", image);

      // Début du chargement
      setLoadingPhoto(true);

      // Requête vers le serveur
      try {
        const response = await axios.post(
          `http://192.168.1.24:3000/base64`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Mise à jour de l'historique de chat avec la vraie URL après la réponse du serveur
        setChatLog((prevChatLog) =>
          prevChatLog.map((item) =>
            item.id === tempId
              ? { ...item, url: response.data.url, loading: false } // Remplacer l'URL locale par l'URL du serveur
              : item
          )
        );
      } catch (error) {
        console.error("Erreur lors de l'envoi de l'image :", error);
        alert("Erreur lors de l'envoi de l'image");
      } finally {
        // Fin du chargement
        setLoadingPhoto(false);
      }
    }
  } else {
    alert("Permission refusée");
  }
};
