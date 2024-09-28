import axios from "axios";

// Fonction pour envoyer l'historique
export const saveChat = async (sessionNumber, chatLog) => {
  try {
    const response = await axios.post("http://localhost:3000/history", {
      session: sessionNumber,
      historyLog: JSON.stringify(chatLog),
    });

    if (response.status === 201) {
      console.log("Historique sauvegardé avec succès:", response.data);
    }
  } catch (error) {
    console.error(
      "Erreur lors de la sauvegarde de l'historique:",
      error.message
    );
  }
};
