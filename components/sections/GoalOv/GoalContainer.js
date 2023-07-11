import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function GoalContainer() {
  return (
    <View style={{ width: "90%", marginTop: 10 }}>
      <Text style={styles.targetText}>Today's Target</Text>
      <View style={styles.goalContainer}>
        
      </View>
      <View style={[styles.addGoalContainer, { backgroundColor: "blue" }]}>
        <Ionicons
          style={{ alignSelf: "center" }}
          name="add-circle-outline"
          size={45}
          color="white"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  targetText: {
    fontFamily: "montserrat-bold",
    fontSize: 16,
    color: "white",
  },
  goalContainer: {
    paddingHorizontal: 20,
    marginTop: 5,
    width: "100%",
    height: 150,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "white",
    overflow: "hidden",
  },
  addGoalContainer: {
    justifyContent: "center",
    height: 60,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
