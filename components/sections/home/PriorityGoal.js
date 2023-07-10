import { View, Text, Pressable, StyleSheet } from "react-native";
import ProgressBar from "../ProgressBar";

function PriorityGoal({ goal, date, percentage }) {
  return (
    <View style={styles.priorityContainer}>
      <Text style={styles.focusFont}>Let's Focus on</Text>
      <View style={styles.container}>
        <Pressable
          style={styles.goalContainer}
          android_ripple={{ color: "#ccc" }}
        >
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.goalText}
          >
            {goal}
          </Text>
          <Text style={styles.goalDeadline}>In {date}</Text>
          <ProgressBar
            percentage={percentage}
            justify="center"
            color="#023E8A"
          />
        </Pressable>
      </View>
    </View>
  );
}

export default PriorityGoal;

const styles = StyleSheet.create({
  priorityContainer: {
    width: "85%",
    marginTop: 35,
    alignItems: "center",
  },
  focusFont: {
    fontFamily: "montserrat-bold",
    fontSize: 22,
    color: "white",
    marginBottom: 10,
  },
  container: {
    overflow: "hidden",
    width: "100%",
    borderRadius: 20,
  },
  goalContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
  },
  goalTextContainer: {
    justifyContent: 'center',
  },  
  goalText: {
    fontFamily: "montserrat-bold",
    fontSize: 23,
    alignSelf: 'center',
  },
  goalDeadline: {
    marginTop: 5,
    color: "#03045E",
    fontFamily: "montserrat-bold",
    fontSize: 17,
    alignSelf: "center",
  },
});
