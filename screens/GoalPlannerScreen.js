import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function GoalPlannerScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackVisible: false, // ini dia
    });
  }, [navigation]);

  return (
    <LinearGradient style={styles.background} colors={["#03045E", "#023E8A"]}>
      <View>
        <Text>GoalPlannerScreen</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
