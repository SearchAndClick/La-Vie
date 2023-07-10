import { View, Text, TextInput } from 'react-native';
import React from 'react';

function InputGoal ({
  namaInput,
  isInvalid, 
  onUpdateValue,
  })
  {
  return (
    <View>
      <Text>{namaInput}</Text>
      <TextInput>

      </TextInput>
    </View>
  )
}


export default InputGoal