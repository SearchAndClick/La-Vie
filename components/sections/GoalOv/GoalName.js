import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const GoalName = ({ name }) => {
  function settingNamaGoal() {}

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle} numberOfLines={3} ellipsizeMode="tail">
        {name}
      </Text>
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
    backgroundColor: "white",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 10,
  },
  textStyle: {
    fontFamily: "montserrat-bold",
    color: "black",
    fontSize: 23,
    textAlign: "center",
  },
});

export default GoalName;
