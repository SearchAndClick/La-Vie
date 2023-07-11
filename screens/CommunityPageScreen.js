import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import SearchFilter from "../components/sections/comPage/searchFilter";
import 

const CommunityPageScreen = () => {
  return (
    <LinearGradient style={styles.background} colors={["#03045E", "#023E8A"]}>
      <View>
        <Text>CommunityPageScreen</Text>
      </View>
      <ScrollView>

      </ScrollView>
    </LinearGradient>
  );
};

export default CommunityPageScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
