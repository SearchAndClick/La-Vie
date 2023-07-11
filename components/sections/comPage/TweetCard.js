import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function TweetCard ({ goalName, userImage, userName, category, startDate, deadline, color, id}) {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false); 

  function disukai(){
    setLiked((prevState) => !prevState)
  }

  function toGoalDetail(){
    {/** Sementara gini dulu */}
    navigation.navigate("Each Goal Community", {title: goalName});
  }

  return (
    <TouchableOpacity style= {styles.container} onPress= {toGoalDetail}>
      <View style = {styles.headerContainer}>
        <View style= {styles.titleView}>
          <Text style = {styles.titleText}>{goalName}</Text>
        </View>
        <View style= {styles.userProfileTemp}>
          <Image />
        </View>
      </View>
      <Text style = {styles.usernameText}>By Username</Text>
      <Text style = {styles.dateText}>25 February 2023 - {deadline}</Text>
      <View style = {styles.footerView}>
        <View style = {styles.likesBox}>
          <Text style = {styles.likesText}>45 Likes</Text>
        </View>
        <View style = {styles.categoryBox}>
          <Text style = {styles.categoryText}>Programming</Text>
        </View>
        <Pressable onPress={disukai} style= {{position: 'absolute', bottom: 0, right: 0}}>
          <Ionicons name="heart" size={40} color={liked? "red": "#D9D9D9"} />
        </Pressable>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginBottom: 10,
    height: 170,
    backgroundColor: 'white',
    borderRadius: 10, 
    alignSelf: 'center',
    padding: 20,
  }, 
  titleView: {
    width: '80%', 
  },
  headerContainer: {
    flexDirection: 'row',
    height: "40%",
    justifyContent: 'space-between',
    alignItems: 'center'
  }, 
  titleText: {
    fontFamily: "montserrat-bold",
    fontSize: 20,
    color: "black"
  }, 
  usernameText: {
    fontFamily: "montserrat-regular",
    fontSize: 15,
    color: "black", 
    marginVertical: 5,
  },
  dateText: {
    fontFamily: "montserrat-regular",
    fontSize: 14,
    color: "black"
  }, 
  categoryText: {
    fontFamily: "montserrat-light",
    fontSize: 10,
    color: "black"
  }, 
  likesText: {
    fontFamily: "montserrat-regular",
    fontSize: 13,
    color: "black"
  }, 
  likesBox: {
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    height: 20,
    width: 80, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginRight: 10,
  }, 
  categoryBox: {
    borderRadius: 15,
    backgroundColor: '#5198EB',
    height: 20,
    width: 88,
    alignItems: 'center', 
    justifyContent: 'center'
  }, 
  footerView: {
    flexDirection: 'row',
    marginTop: 10, 
    marginBottom: 20,
  }, 
  userProfileTemp: {
    borderRadius: 30,
    width: 55, 
    height: 55, 
    backgroundColor: '#D9D9D9',
  }
})

export default TweetCard