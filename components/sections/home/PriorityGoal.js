import { View, Text, Pressable, StyleSheet } from "react-native";

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
            <Text style={styles.progressText}>{percentage}%</Text>
            <View style={styles.progressBar}></View>
          </Pressable>
        </View>
      </View>
  )
}

export default PriorityGoal;

const styles = StyleSheet.create({
  priorityContainer: {
    width: "85%",
    marginTop: 45,
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
    paddingVertical: 22,
    paddingHorizontal: 30,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
  },
  goalText: {
    fontFamily: "montserrat-bold",
    fontSize: 23,
  },
  goalDeadline: {
    marginTop: 5,
    color: "#03045E",
    fontFamily: "montserrat-bold",
    fontSize: 17,
  },
  progressText: {
    marginTop: 15,
    marginBottom: 3,
    fontFamily: "montserrat-regular",
    fontSize: 15,
    color: "#34A853",
  },
  progressBar: {
    borderWidth: 2,
    width: 280,
    height: 16,
    borderColor: "#023E8A",
    borderRadius: 30,
    marginBottom: 2,
  },
});
