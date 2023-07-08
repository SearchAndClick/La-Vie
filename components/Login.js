import React, { Component } from 'react'
import { Pressable } from 'react-native';
import { Text, View } from 'react-native'

export default class Login extends Component {
  render() {
    return (
      <View styles = {styles.container}> 
        <View styles = {styles.inputcontainer}>
          <Text> WELCOME BACK! </Text>
          <Text> Email </Text>
          <TextInput placeholder='username@gmail.com'/>
          <Text> Username </Text>
          <TextInput placeholder='username'/>
          <Text> Password </Text>
          <TextInput placeholder='Password'/>
          <Button  title='Sign in'/>
          <View styles={styles.continue}>
            <View styles = {styles.garis}></View>
            <Text> or continue with </Text>
            <View styles = {styles.garis} ></View>
          </View>
          <View styles = {styles.container}>
            <Text>Don't have an account yet?</Text>
            <Pressable ><Text>Register</Text></Pressable> 
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
    borderColor: '#000000',
  }
});