import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import TargetList from "../../TargetList";

export default function GoalContainer({ header, color, selected }) {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  function addGoalHandler() {
    navigation.navigate();
  }

  return (
    <View style={{ width: "90%", marginTop: 10 }}>
      <Text style={styles.targetText}>{header}</Text>
      <View style={styles.goalContainer}>
        <ScrollView>
          {selected.map((selected) => (
            <TargetList title={selected}/>
          ))}
        </ScrollView>
      </View>
      <View style={[styles.addGoalContainer, { backgroundColor: color }]}>
        <Pressable android_ripple={{ color: "#ccc" }} onPress={addGoalHandler}>
          <Ionicons
            style={{ alignSelf: "center" }}
            name="add-circle-outline"
            size={45}
            color="white"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  targetText: {
    fontFamily: "montserrat-bold",
    fontSize: 16,
    color: "white",
  },
  goalContainer: {
    paddingHorizontal: 10,
    marginTop: 5,
    width: "100%",
    height: 120,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#FAFAFA",
    overflow: "hidden",
  },
  addGoalContainer: {
    justifyContent: "center",
    height: 50,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    overflow: "hidden",
  },
});
