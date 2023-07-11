import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Deadline from "./Deadline";
import GoalName from "./GoalName";
import HeaderGoal from "./HeaderGoal";
import ProgressBar from "../ProgressBar"; 
import GoalSteps from "./GoalSteps";
import Notes from "./Notes";
import TodaysTar from "./TodaysTar";

function ContentPage() {
  return (
    <View style={styles.container}>
      <HeaderGoal />
      <GoalName name="Goal Name" />
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Progress Bar</Text>
        <ProgressBar percentage="0" justify="flex-end" color="white"/>
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
