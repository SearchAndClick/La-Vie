import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

function OptionTile({ option, logo, onPress, screen }) {
  return (
    <LinearGradient style={styles.optionTile} colors={["#0077B6", "#00B4D8"]}>
      <Pressable onPress={() => onPress(screen)} style={styles.press} android_ripple={{ color: "#ccc" }}>
        <View>
          <Ionicons style={styles.icon} name={logo} size={45} color="white" />
          <Text style={styles.optionText}>{option}</Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
}

export default OptionTile;

const styles = StyleSheet.create({
  optionText: {
    fontFamily: "syncopate-bold",
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  optionTile: {
    flex: 1,
    flexDirection: "column",
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 5,
    overflow: "hidden",
  },
  icon: {
    marginHorizontal: 50,
    marginBottom: 20,
  },
  press: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 20,
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
