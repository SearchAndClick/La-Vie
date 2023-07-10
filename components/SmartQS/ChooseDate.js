import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

function ChooseDate (){
  const [date, SetDate] = useState('');
  
  return (
    <View>
      <Text> {date} </Text> 
      <Pressable>
        <Text>

        </Text>
      </Pressable>
    </View>
  )
}

export default ChooseDate