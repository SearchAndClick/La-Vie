import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function GoalItem({ title, deadline, category, color, id }) {
  const navigation = useNavigation();

  function selectGoalHandler() {
    navigation.navigate("Goal Overview", {
      goalId: id,
    });
  }
  return (
    <Pressable android_ripple={{ color: '#ccc'}} onPress={selectGoalHandler}>
      <View style={styles.goalContainer}>
        <View style={[styles.circleBorder, { borderColor: color }]}>
          <View style={[styles.circle, { backgroundColor: color }]}></View>
        </View>
        <View style={styles.textContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ fontFamily: "roboto-regular", fontSize: 17 }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: "montserrat-bold",
              fontSize: 14,
              color: "#03045E",
            }}
          >
            {deadline}
          </Text>
          <View style={[styles.category, { backgroundColor: color }]}>
            <Text style={{ fontFamily: "montserrat-bold", fontSize: 13 }}>
              {category}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    flexDirection: "row",
    alignItems: "center",
    // width: "100%",
    height: 95,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#D9D9D9",
  },
  circleBorder: {
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    borderWidth: 3,
    borderRadius: 20,
    padding: 5,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 20,
  },
  textContainer: {
    justifyContent: "space-between",
    // width: "85%",
    height: "100%",
    marginHorizontal: 20,
    padding: 2,
  },
  category: {
    alignItems: "center",
    width: 100,
    borderRadius: 20,
    padding: 1,
  },
});
