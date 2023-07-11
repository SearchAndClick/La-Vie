import { StyleSheet, Text, View, Button, Platform } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar } from "react-native-calendars";

export default function GoalPlannerScreen() {
  return (
    <LinearGradient style={{ flex: 1 }} colors={["#03045E", "#023E8A"]}>
      <View>
        <Text style={styles.header}>Goal Planner</Text>
        <Calendar style={styles.calender} />
      </View>
      <View style={styles.container}>
        <Text style={{ fontFamily: "montserrat-bold", fontSize: 19 }}>
          List of Goals
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 20,
    paddingVertical: 30,
    paddingHorizontal: 40,
    height: "100%",
    width: "100%",
    borderWidth: 2,
    borderRadius: 20,
  },
  header: {
    alignSelf: "center",
    fontFamily: "montserrat-bold",
    fontSize: 25,
    color: "white",
    marginTop: 60,
  },
  calender: {
    alignSelf: "center",
    borderRadius: 10,
    padding: 2,
    marginTop: 20,
    width: "90%",
  },
});
