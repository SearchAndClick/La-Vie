import { StyleSheet, FlatList, Text, View } from "react-native";
import React from "react";
import { GOALS } from "../../data/dummy_data";

export default function GoalsList({ color }) {
  function renderGoalItem(itemData) {
    const item = itemData.item;
    const goalItemProps = {
      title: item.title,
    };

    return (
      <View style={styles.goalContainer}>
        <View style={[styles.circleBorder, { borderColor: color }]}>
          <View style={[styles.circle, { backgroundColor: color }]}></View>
        </View>
        <View style={styles.textContainer}>
          <Text style={{ fontFamily: "roboto-regular", fontSize: 17 }}>
            Judul
          </Text>
          <Text style={{ fontFamily: "montserrat-bold", fontSize: 14, color: '#03045E' }}>
            Deadline
          </Text>
          <View style={styles.category}>
            <Text style={{ fontFamily: "montserrat-bold", fontSize: 13 }}>
              Kategori
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <FlatList
      data={GOALS}
      keyExtractor={(item) => item.id}
      renderItem={renderGoalItem}
    />
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
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
    width: "85%",
    height: "100%",
    marginHorizontal: 20,
    padding: 2,
  },
  category: {
    alignItems: 'center',
    width: 100,
    borderRadius: 20,
    padding: 1,
    backgroundColor: "red",
  },
});
