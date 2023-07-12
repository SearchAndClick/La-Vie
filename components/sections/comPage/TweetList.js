import { StyleSheet, FlatList, Text, View } from "react-native";
import React from "react";
import { GOALS } from "../../../data/dummy_data";
import TweetCard from "./TweetCard";

export default function TweetList() {
  function renderGoalItem(itemData) {
    const item = itemData.item;
    const goalItemProps = {
      goalName: item.title,
      deadline: item.deadline,
      category: item.category,
      color: item.color,
      id: item.id,
    };

    return (
      <TweetCard {...goalItemProps} />
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
