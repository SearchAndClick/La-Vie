import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Deadline from "./Deadline";
import GoalName from "./GoalName";
import GoalSteps from "./GoalSteps";
import HeaderGoal from "./HeaderGoal";
import Notes from "./Notes";
import ProgressBar from "../ProgressBar";
import TodaysTar from "./TodaysTar";

function ContentPage() {
  return (
    <View style={styles.container}>
      <HeaderGoal />
      <GoalName />
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Progress Bar</Text>
        <ProgressBar percentage="60" justify="flex-end" color="#023E8A"/>
      </View>
      <Deadline />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  progressContainer: {
    width: '90%',
    marginTop: 10,
  },
  progressText: {
    position: "absolute",
    fontFamily: 'montserrat-bold',
    fontSize: 16,
    color: 'white',
  },
});

export default ContentPage;
