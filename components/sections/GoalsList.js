import { StyleSheet, FlatList, Text, View } from "react-native";
import React from "react";
import { GOALS } from "../../data/dummy_data";

export default function GoalsList() {
  function renderGoalItem(itemData) {
    const item = itemData.item;
    const goalItemProps = {
      title: item.title,
    };

    return ( 
      <View style={styles.goalContainer}>
        
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
    alignItems: 'center',
    width: '100%',
    height: 90,
    borderBottomWidth: 2,
    borderBottomColor: "#D9D9D9",
  }
});
