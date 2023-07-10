import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const CommunityPageScreen = () => {
  return (
    <LinearGradient style={styles.background} colors={["#03045E", "#023E8A"]}>
      <View>
        <Text>CommunityPageScreen</Text>
      </View>
    </LinearGradient>
  );
};

export default CommunityPageScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
