import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import SearchFilter from "../components/sections/comPage/SearchFilter";
import TweetCard from "../components/sections/comPage/TweetCard";

const CommunityPageScreen = () => {
  return (
    <LinearGradient style={styles.background} colors={["#03045E", "#023E8A"]}>
      <Text style = {styles.headerText}>Community Page</Text>
      <SearchFilter/>
      <ScrollView style ={styles.scrollStyle}>
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
      </ScrollView>
    </LinearGradient>
  );
};

export default CommunityPageScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center', 
  },
  headerText: {
    fontFamily: 'montserrat-bold', 
    fontSize: 25,
    color: 'white', 
    marginVertical: 30,
  }, 
  scrollStyle: {
    width: '100%'
  }
});
