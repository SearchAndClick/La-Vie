import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Deadline from "./Deadline";
import GoalName from "./GoalName";
import GoalSteps from "./GoalSteps";
import HeaderGoal from "./HeaderGoal";
import Notes from "./Notes";
import ProgressBar from "./ProgressBar";
import TodaysTar from "./TodaysTar";

function ContentPage() {
  return (
    <View style={styles.container}>
      {/* <HeaderGoal /> */}
      <GoalName />
      <ProgressBar />
      <Deadline />
      <TodaysTar />
      <GoalSteps />
      <Notes />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default ContentPage;
