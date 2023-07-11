import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

function FilterBox() {
  /*
  const[popChosen, setPopChosen] = useState(false); 
  const[recChosen, setRecChosen] = useState(false); 
  const[trenChosen, setTrenChosen] = useState(false);
  
  function dipilih(number){
    switch (number) {
      case 1:
        setPopChosen((prevState) => !prevState);
        break; 
      case 2:
        setRecChosen((prevState) => !prevState);
        break; 
      case 3:
        setTrenChosen((prevState) => !prevState);
        break;   
    }
  }*/

  return (
    <View style={styles.filterContainer}>
      <View style= {{flexDirection: 'row'}}>
        <Text style= {styles.descText}>Category</Text>
        <Ionicons name="funnel-outline" size={24} color="black" style= {{marginLeft: 10}}/>
      </View>
      <View style= {styles.categoryBox}></View>
      <Text style= {styles.descText}>Sort By</Text>
      <View style= {{flexDirection: 'row', marginTop: 5, justifyContent: 'center'}}>
        <TouchableHighlight style = {styles.sortBox}>
          <Text style= {styles.smalltext}>Most Popular</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {styles.sortBox} > 
          <Text style= {styles.smalltext}>Most Recent</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {styles.sortBox} > 
          <Text style= {styles.smalltext}>Trending</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    height: 153,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10, 
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 20,
  },
  categoryBox: {
    borderWidth: 2, 
    height: 32,
    borderRadius: 15,
    backgroundColor: '#D9D9D9', 
    marginBottom: 10,
  }, 
  descText: {
    fontFamily: "montserrat-bold",
    fontSize: 16,
    color: "black",
  }, 
  smalltext: {
    fontFamily: "montserrat-light",
    fontSize: 10,
    color: "black",
  }, 
  sortBoxChosen: {
    marginHorizontal: 2,
    backgroundColor: '#CAF0F8',
    width: 96, 
    height: 26,
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  sortBox:{
    backgroundColor : '#D9D9D9',
    marginHorizontal: 2, 
    width: 96, 
    height: 26,
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

export default FilterBox;
