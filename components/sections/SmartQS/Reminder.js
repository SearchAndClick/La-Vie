import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Reminder = () => {

  return (
    <View>
      <Text style = {styles.textQuestion}>Reminder</Text>
      <View style = {styles.inputBox}>
        
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
  inputBox: {
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
  }
})

export default Reminder