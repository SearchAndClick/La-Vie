import React, { Component } from 'react'
import { Button } from 'react-native'
import { TextInput } from 'react-native'
import { Text, View, StyleSheet } from 'react-native'

export default class Signin extends Component {
  render() {
    return (
      <View styles = {styles.container}> 
        <View styles = {styles.inputcontainer}>
          <Text> CREATE ACCOUNT </Text>
          <Text> Email </Text>
          <TextInput placeholder='username@gmail.com'/>
          <Text> Username </Text>
          <TextInput placeholder='username'/>
          <Text> Password </Text>
          <TextInput placeholder='Password'/>
          <Text> Confirm Password </Text>
          <TextInput placeholder='Confirm Password'/>
          <Button  title='Sign up'/>
          <View styles={styles.continue}>
            <View styles = {styles.garis}></View>
            <Text> or continue with </Text>
            <View styles = {styles.garis} ></View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#ffffff',
      alignItems: 'center', 
      flex: 1, 
      justifyContent: 'center'
  },
  continue :{
    flex:1, 
    alignItems: 'center',
  },
  garis: {
    height: 2,
    backgroundColor: '#000000',
  }, 
  inputcontainer: {
    borderWidth: 2,
    width: "50%",
    borderColor: '#000000',
  }
});