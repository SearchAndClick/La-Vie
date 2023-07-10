import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

function ChooseDate (){
  const [date, SetDate] = useState('');
  
  return (
    <View>
      <Text style = {styles.textQuestion}>Kapan goal ini ditargetkan untuk selesai ?</Text>
      <View style = {styles.inputDateBox}>
        <Text> {date} </Text> 
        <TouchableOpacity style= {styles.pilihCalender}>
          <Ionicons name="calendar-outline" size={15} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textQuestion: {
    fontFamily: "montserrat-bold",
    fontSize: 15,
    color: "white",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  inputDateBox : {
    borderRadius: 20, 
    height: 35,
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    marginEnd: 10,
    marginLeft: 20, 
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  pilihCalender: {
    alignSelf: 'flex-end',
  }
})

export default ChooseDate