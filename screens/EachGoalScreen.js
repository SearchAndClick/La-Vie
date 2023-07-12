import { View, Text, StyleSheet, ScrollView, TextInput} from 'react-native'
import React from 'react'
import ProgressBar from '../components/sections/ProgressBar'

{/** Masih berupa hard code*/}
function EachGoalScreen({title}){
  return (
    <View style= {styles.container}>
      <View style= {styles.titleContainer}>
        <Text style= {styles.titleText}>{title}</Text>
      </View>
      <Text style= {[styles.sectionText, {color:'white'}]}>Progress bar</Text>
      <ProgressBar
        percentage={0}
        justify={'flex-end'}
      />
      <Text style= {[styles.sectionText, {color:'white'}]}>Deadline</Text>
      <View style= {[styles.sectionContainer, {height: '4%'}]}></View>
      <Text style= {[styles.sectionText, {color:'white'}]}>Description</Text>
      <ScrollView style= {[styles.sectionContainer, {height: '15%'}]}></ScrollView>
      <Text style= {[styles.sectionText, {color:'white'}]}>Goal Steps</Text>
      <ScrollView style= {[styles.sectionContainer, {height: '17%'}]}></ScrollView>
      <View style = {[styles.sectionContainer, {height: '25%', padding: 10, marginTop: 10}]}>
        <Text style= {[styles.sectionText, {color:'black'}]}>Comments</Text>
        {/** Nanti disini component comments yang konsepnya pake flatlist juga dari data yang ada*/}
        <TextInput style= {styles.commentBox} placeholder='Add comments...'></TextInput>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  container: {
    width: "90%", 
    alignSelf: 'center', 
    marginTop: 20,
  }, 
  sectionText: {
    fontFamily: 'montserrat-bold',
    fontSize: 15,
    marginBottom: 5
  }, 
  titleText: {
    fontFamily: 'montserrat-bold',
    fontSize: 23,
    color: 'black',
  }, 
  titleContainer: {
    borderRadius: 30, 
    backgroundColor: 'white', 
    height: 61, 
    marginBottom: 20
  }, 
  sectionContainer: {
    borderRadius: 20, 
    backgroundColor: 'white', 
    marginBottom: 5
  }, 
  commentBox: {
    borderRadius: 15, 
    borderWidth: 3, 
    borderColor: '#D9D9D9', 
    position: 'absolute', 
    bottom: 10, 
    left: 10, 
    right: 10, 
    padding: 10, 
  }
})

export default EachGoalScreen