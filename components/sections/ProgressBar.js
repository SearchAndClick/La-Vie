import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProgressBar = ({ percentage, justify, color }) => {
  const [progressWidth, setProgressWidth] = useState();

  return (
    <View>
      <View style={{alignSelf: justify, marginVertical: 5}}>
        <Text style={[styles.progressText]}>{percentage}%</Text>
      </View>
      <View style={[styles.progressBar, { borderColor: color }]}></View>
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
  progressText: {
    marginBottom: 3,
    fontFamily: "montserrat-regular",
    fontSize: 15,
    color: "#34A853",
  },
  progressBar: {
    borderWidth: 2,
    width: '100%',
    height: 16,
    borderRadius: 30,
    marginBottom: 10,
  },
})