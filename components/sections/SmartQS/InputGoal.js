import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

function InputGoal ({
  namaInput,
  isInvalid, 
  saranPesan,
  onUpdateValue,
  })
  {
  return (
    <View>
      <Text style = {styles.textQuestion}>{namaInput}</Text>
      <TextInput 
        style= {styles.inputBox}
        placeholder={saranPesan}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    textQuestion: {
      fontFamily: "montserrat-bold",
      fontSize: 15,
      color: "white",
      marginHorizontal: 20,
      marginTop: 10,
    },
    inputBox : {
      borderRadius: 20, 
      height: 35,
      color: 'black',
      backgroundColor: 'white',
      marginTop: 10,
      marginHorizontal: 20,
      paddingLeft: 20,
    }
})

export default InputGoal