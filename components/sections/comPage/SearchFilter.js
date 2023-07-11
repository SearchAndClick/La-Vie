import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

function SearchFilter() {
  function silang(){

  }
  
  function filterButton(){

  }

  return (
    <View style= {styles.container}>
      <View style= {styles.searchBar}>
        <Ionicons name="search-outline" size={24} color="black" />
        <View style = {styles.searchCross}>
          <TextInput style= {styles.textInput} placeholder="Search"></TextInput>
          <TouchableOpacity onPress={silang}>
            <Ionicons name="close-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        </View>
      <TouchableOpacity style= {styles.filter} onPress={filterButton}>
        <Ionicons name="funnel-outline" size={24} color="white" />
        <Text style = {styles.filterText}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%', 
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  searchBar: {
    height: 36, 
    width: "70%", 
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
  }, 
  filter: {
    marginLeft: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between', 
    flex: 1,
    alignItems: 'center'
  },
  filterText: {
    fontFamily: "montserrat-light",
    fontSize: 16,
    color: "white"
  },
  searchText: {
    fontFamily: "montserrat-light",
    fontSize: 16,
    color: "black",
  },
  textInput: {
    marginLeft: 10,
  }, 
  searchCross: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center', 
    flex: 1
  },
})

export default SearchFilter;
