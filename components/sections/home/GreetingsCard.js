import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet} from "react-native";

function GreetingsCard({ greetings, name, date }) {
  return (
    <View style={styles.greetingCard}>
      <View>
        <Text style={styles.greetingText}>{greetings},</Text>
        <Text style={styles.greetingText}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.pictureCard}>
        <Ionicons name="person" size={45} color="black" />
      </View>
    </View>
  );
}

export default GreetingsCard;

const styles = StyleSheet.create({
  greetingCard: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 80,
  },
  greetingText: {
    color: "white",
    fontFamily: "montserrat-bold",
    fontSize: 20,
    marginBottom: 2,
  },
  date: {
    fontFamily: "montserrat-regular",
    color: "white",
    marginTop: 5,
    fontSize: 17,
  },
  pictureCard: {
    padding: 10,
    height: 74,
    width: 74,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
  },
});
