import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const GoalName = () => {
  function settingNamaGoal() {}

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>GoalName</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 10,
    elevation: 10,
  },
  textStyle: {
    fontFamily: "montserrat-bold",
    color: "black",
    fontSize: 25,
  },
});

export default GoalName;
