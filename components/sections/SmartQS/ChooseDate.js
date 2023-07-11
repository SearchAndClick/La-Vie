import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

function ChooseDate (){
  const [date, SetDate] = useState('');
  
  return (
    <View>
      <Text style = {styles.textQuestion}>When is the deadline target for the goal?</Text>
        <TouchableOpacity style = {styles.inputDateBox}>
        <Text>{date}</Text> 
          <Ionicons name="calendar-outline" size={15} color="black" />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textQuestion: {
    fontFamily: "montserrat-bold",
    fontSize: 15,
    color: "white",
    marginHorizontal: 20,
    marginTop: 10,
  },
  inputDateBox : {
    borderRadius: 20, 
    height: 35,
    color: 'black',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
})

export default ChooseDate