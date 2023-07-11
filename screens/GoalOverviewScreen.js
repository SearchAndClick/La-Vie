import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Deadline from "../components/sections/GoalOv/Deadline";
import GoalName from "../components/sections/GoalOv/GoalName";
import ProgressBar from "../components/sections/ProgressBar";
import GoalContainer from "../components/sections/GoalOv/GoalContainer";
import IconButton from "../components/IconButton";
import { GOALS } from "../data/dummy_data";

function GoalOverviewScreen({ route, navigation }) {
  const goalId = route.params.goalId;

  const selectedGoal = GOALS.find((goal) => goalId === goal.id);

  function deleteButtonPressHandler() {
    console.log("deleted goal");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            color="#EA4335"
            onPress={deleteButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, deleteButtonPressHandler]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <GoalName name={selectedGoal.title} />
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>Progress Bar</Text>
          <ProgressBar
            percentage={selectedGoal.progress}
            justify="flex-end"
            color="white"
          />
        </View>
        <Deadline date={selectedGoal.deadline} />
        <GoalContainer
          header="Today's Target"
          color="#48CAE4"
          selected={selectedGoal.todaysTarget}
        />
        <GoalContainer
          header="Goal Steps"
          color="#0077B6"
          selected={selectedGoal.goalSteps}
        />
      </View>
    </ScrollView>
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
