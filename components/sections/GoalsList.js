import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GoalsList() {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
      id: item.id,
    }

    return (
      <>
        <MealItem {...mealItemProps}/>
      </>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={displayedMeals} 
        keyExtractor={item => item.id} 
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({})