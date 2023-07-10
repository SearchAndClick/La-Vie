import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

function ButtonBackSave(onSave){
  // Todo
  function back(){

  }
  // Todo 
  function save(){

  }
  return (
    <View style = {styles.containerBackSave}>
        <View style = {styles.buttonView}>
        <TouchableOpacity style = {styles.eachButton}>
          <Text style = {styles.textStyle}>Back</Text>
        </TouchableOpacity>
        </View>
      {/* Entah kenapa gabisa pake gradien
      <LinearGradient start= {[0,0]} end= {[1,1]} colors={['#ADE8F4', '#4B87B7', '#155196','#023E8A']} style = {styles.buttonView}>*/}
        <View style = {styles.buttonView}>
        <TouchableOpacity style = {styles.eachButton}>
          <Text style = {styles.textStyle}>Save</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerBackSave :{
    flexDirection: 'row',
    margin: 20,
  },
  buttonView:{
    width: "50%",
    alignItems: 'center',
  }, 
  eachButton: {
    borderRadius: 20,
    backgroundColor: '#48CAE4',
    height: 35,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    fontFamily: "montserrat-bold",
    fontSize: 15,
    color: "white",
    margin: 10,
  },
})
export default ButtonBackSave