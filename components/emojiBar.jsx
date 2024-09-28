import { View, StyleSheet, Text, ScrollView } from "react-native";
import colors from "../assets/style/colors";
const EmojiBar = () => {
  return (
    <ScrollView horizontal={true} style={styles.barContainer}>
      <View style={styles.emojiBox}>
        <Text style={styles.barText}>😉</Text>
      </View>
      <View style={styles.emojiBox}>
        <Text style={styles.barText}>🤪</Text>
      </View>
      <View style={styles.emojiBox}>
        <Text style={styles.barText}>🎨</Text>
      </View>
      <View style={styles.emojiBox}>
        <Text style={styles.barText}>✨</Text>
      </View>
      <View style={styles.emojiBox}>
        <Text style={styles.barText}>🎮</Text>
      </View>
      <View style={styles.emojiBox}>
        <Text style={styles.barText}>😎</Text>
      </View>
      <View style={styles.emojiBox}>
        <Text style={styles.barText}>📚</Text>
      </View>
      <View style={styles.emojiBox}>
        <Text style={styles.barText}>🏆</Text>
      </View>
      <View style={styles.emojiBox}>
        <Text style={styles.barText}>🔥</Text>
      </View>
      <View style={styles.emojiBox}>
        <Text style={styles.barText}>😉</Text>
      </View>
      <View style={styles.emojiBox}>
        <Text style={styles.barText}>😉</Text>
      </View>
      <View style={styles.emojiBox}>
        <Text style={styles.barText}>😉</Text>
      </View>
    </ScrollView>
  );
};
export default EmojiBar;

const styles = StyleSheet.create({
  barContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  emojiBox: {
    backgroundColor: colors.lightSmooth,
    borderRadius: 100,
    padding: 2,
    margin: 5,
    height: 40,
  },
  barText: {
    fontSize: 20,
    margin: 5,
  },
});
