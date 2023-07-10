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
      <TodaysTar />
      <GoalSteps />
      <Notes />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  progressContainer: {
    borderWidth: 2,
    width: '90%',
  },
  progressText: {
    position: "absolute",
    fontFamily: 'montserrat-bold',
    fontSize: 17,
    color: 'white',
  },
});

export default ContentPage;
