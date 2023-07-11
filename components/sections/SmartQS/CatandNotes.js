import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

function CatAndNotes(){
  return (
    <View>
      <Text style= {styles.textQuestion}>Goal's category</Text>
      <TouchableOpacity style= {styles.inputCatBox}>
      <Ionicons name= "funnel" size={15} color= "black" />
      </TouchableOpacity>
      <Text style= {styles.textQuestion}>Notes</Text>
      <TextInput style= {styles.inputBox} multiline= {true}></TextInput>
    </View>
  )
}

const styles= StyleSheet.create({
  textQuestion: {
    fontFamily: "montserrat-bold",
    fontSize: 15,
    color: "white",
    marginHorizontal:20,
    marginTop: 10,
  },
  inputBox: {
    borderRadius: 20, 
    height: 100,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
  }, 
  inputCatBox: {
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

export default CatAndNotes