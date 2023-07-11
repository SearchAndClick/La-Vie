import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Deadline = ({ date }) => {
  function settingDeadline() {}

  return (
    <View style={styles.container}>
      <Text style={styles.textDescription}>Deadline</Text>
      <View style={styles.containerDate}>
        <Text style={styles.textDate}>{date}</Text>
        <TouchableOpacity style={styles.icon} onPress={settingDeadline}>
          <Ionicons name="calendar-outline" color={"black"} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 10,
    alignSelf: "center",
  },
  containerDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 50,
  },
  textDescription: {
    fontFamily: "montserrat-bold",
    fontSize: 15,
    color: "white",
    marginBottom: 5,
  },
  textDate: {
    fontFamily: "montserrat-bold",
    color: "black",
    fontSize: 13,
  },
});

export default Deadline;
