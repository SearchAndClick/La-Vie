import { View, Text, StyleSheet } from "react-native";
import Deadline from "../components/sections/GoalOv/Deadline";
import GoalName from "../components/sections/GoalOv/GoalName";
import HeaderGoal from "../components/sections/GoalOv/HeaderGoal";
import ProgressBar from "../components/sections/ProgressBar";
import GoalsList from "../components/sections/GoalsList";
import GoalContainer from "../components/sections/GoalOv/GoalContainer";

function GoalOverviewScreen({ route }) {
  const goalId = route.params;
  return (
    <View style={styles.container}>
      <HeaderGoal />
      <GoalName name="Goal Name" />
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Progress Bar</Text>
        <ProgressBar percentage="0" justify="flex-end" color="white" />
      </View>
      <Deadline />
      <GoalContainer />
    </View>
  );
}

export default GoalOverviewScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  progressContainer: {
    width: "90%",
    marginTop: 10,
  },
  progressText: {
    position: "absolute",
    fontFamily: "montserrat-bold",
    fontSize: 16,
    color: "white",
  },
});
