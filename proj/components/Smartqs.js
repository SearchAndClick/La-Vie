import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

export default class Smartqs extends Component {
  render() {
    return (
      <View>
        <Text>SMART Questions</Text>
        <Text>Apa goal anda ?</Text>
        <TextInput placeholder="Tuliskan dengan singkat dan jelas"></TextInput>
        <Text>Jelaskan secara spesifik goal anda!</Text>
        <TextInput placeholder="Tuliskan dengan spesifik"></TextInput>
        <Text>Apa saja langkah-langkah yang perlu dilakukan ?</Text>
        <View>

          
          <View></View>
        </View>
        <Text>Kapan goal ini ditargetkan untuk selesai?</Text>
        <View>

        </View>
        <Text>Reminder</Text>
        <View>

        </View>
        <Text>Apakah anda ingin goal ini dilihat banyak orang ?</Text>
        <View>
          
        </View>
      </View>
    )
  }
}
