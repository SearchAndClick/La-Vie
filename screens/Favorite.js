import { View, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
// Sementara pakai TweetList hardcode dulu
import TweetList from '../components/sections/comPage/TweetList'

function Favorite(){
  return (
    <View style= {styles.container}>
      <LinearGradient colors={['#CAF0F8', '#ffffff']} style= {{borderRadius: 20}}>
        <TweetList/>
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
    overflow: 'hidden',
  }
})

export default Favorite