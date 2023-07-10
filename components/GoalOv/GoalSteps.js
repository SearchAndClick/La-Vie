import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const GoalSteps = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.textDescription}>Today's Target</Text>
      <View style = {styles.box}>
        <View style = {styles.addView}>
            <Ionicons name="add-circle-outline" color={'white'} size= {30} style = {styles.iconAdd}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
    }, 
    textDescription: {
        fontFamily: "montserrat-bold",
        fontSize: 15,
        color: "white",
        marginBottom: 5,
    }, 
    box: {
        borderRadius: 20,
        backgroundColor: 'white',
        height: '40%', 
    },
    addView: {
        borderBottomLeftRadius: 20, 
        borderBottomRightRadius: 20,
        backgroundColor: '#48CAE4',
        position: 'absolute', 
        bottom: 0,
        width: '100%', 
        height: '25%',
    },
    stepsView: {
        borderBottomLeftRadius: 20, 
        borderBottomRightRadius: 20,
        backgroundColor: '#0077B6',
    },
    iconAdd: {
        alignSelf: 'center',
    }
})
export default GoalSteps