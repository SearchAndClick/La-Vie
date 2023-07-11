import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import React, {useState} from "react";
import { Ionicons } from "@expo/vector-icons";
import FilterBox from "./FilterBox";

function SearchFilter() {
  const [filterClicked, setFilterClicked] = useState(false);
  function silang(){

  }
  
  function filterButton(){
    setFilterClicked((prevState) => !prevState)
  }

  return (
    <View>
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
    {filterClicked && 
      <FilterBox/>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%"
  },
  filterContainer: {
    height: 153,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10, 
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 20,
  },
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
