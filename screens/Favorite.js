import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
// Sementara pakai goalList dulu
import GoalsList from '../components/sections/GoalsList'

function Favorite(){
  return (
    <View style= {styles.container}>
      <LinearGradient colors={['#CAF0F8', '#ffffff']} style= {{borderRadius: 20}}>
        <GoalsList/>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    backgroundColor: 'white', 
    marginVertical: "20%",
    alignSelf: 'center',
    borderRadius: 20,
  }
})

export default Favorite