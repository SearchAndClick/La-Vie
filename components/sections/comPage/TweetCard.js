import { View, Text, StyleSheet, image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";

function TweetCard ({ goalName, userImage, userName, category, startDate, endDate,}) {
  const [liked, setLiked] = useState(false); 

  return (
    <View style= {styles.container}>
      <View style = {styles.headerContainer}>
        <View>

        </View>
        <Ionicons name="person" size={24} color="white" />
      </View>
      <></>
      <View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
    height: 170,
    backgroundColor: 'white',
    borderRadius: 10
  }, 
  headerContainer: {

  }, 
  titleText: {

  }, 
  usernameText: {

  },
  dateText: {

  }, 
  categoryText: {

  }, 
  likesText: {

  }, 
  likesBox: {

  }, 
  categoryBox: {
    
  }, 
})

export default TweetCard