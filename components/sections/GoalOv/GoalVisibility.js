import { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import React from "react";

export default function GoalVisibility() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerNotes}>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.text}>Public</Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#0077B6" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 15,
    alignSelf: "center",
  },
  containerNotes: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 50,
  },
  textDescription: {
    fontFamily: "montserrat-bold",
    fontSize: 15,
    color: "white",
    marginBottom: 5,
  },
  text: {
    fontFamily: "montserrat-bold",
    color: "black",
    fontSize: 13,
  },
});
