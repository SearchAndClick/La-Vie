import { View, Text, StyleSheet} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import SearchFilter from "../components/sections/comPage/SearchFilter";
import TweetList from "../components/sections/comPage/TweetList";

function CommunityPageScreen (){
  return (
    <LinearGradient style={styles.background} colors={["#03045E", "#023E8A"]}>
      <Text style = {styles.headerText}>Community Page</Text>
      <SearchFilter/>
      <View style= {{width: '100%'}}>
      <TweetList/>
      </View>
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
