import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import OptionTile from "../OptionTile";

function OptionsCard() {
  return (
    <LinearGradient style={styles.gradient} colors={["#D9D9D9", "#5882C1"]}>
      <Text style={styles.optionsText}>Options</Text>
      <View style={styles.container}>
        <View style={styles.row}>
          <OptionTile option="Goal Planner" logo="flag-outline" />
          <OptionTile option="New Goal" logo="flash-outline" />
        </View>
        <View style={styles.row}>
          <OptionTile option="Community Page" logo="people-outline" />
          <OptionTile option="Settings" logo="settings-outline" />
        </View>
      </View>
    </LinearGradient>
  );
}

export default OptionsCard;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 2,
    marginTop: 40,
    padding: 40,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  row: {
    flexDirection: "row",
  },
  optionsText: {
    fontFamily: "montserrat-bold",
    fontSize: 23,
  },
});
