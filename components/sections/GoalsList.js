import { StyleSheet, FlatList, Text, View } from "react-native";
import React from "react";
import { GOALS } from "../../data/dummy_data";
import GoalItem from "./GoalItem";

export default function GoalsList({ color }) {
  function renderGoalItem(itemData) {
    const item = itemData.item;
    const goalItemProps = {
      title: item.title,
      deadline: item.deadline,
      category: item.category,
      color: item.color,
      id: item.id,
    };

    return (
      <GoalItem {...goalItemProps} />
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
  
});
