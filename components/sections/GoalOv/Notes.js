import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

function Notes({ notes }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerNotes}>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.textNote}>
            {notes === null ? "Notes" : notes}
          </Text>
        </View>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="book" color={"black"} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Notes;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 15,
    alignSelf: "center",
  },
  containerNotes: {
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
  textNote: {
    fontFamily: "montserrat-bold",
    color: "black",
    fontSize: 13,
  },
});
