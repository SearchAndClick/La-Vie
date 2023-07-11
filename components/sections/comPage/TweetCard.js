import { View, Text } from 'react-native'
import React from 'react'

function TweetCard ({ goalName, userImage, userName, category, startDate, endDate,}) {
  return (
    <View style= {styles.container}>
      <Text>goalName</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: 'center',
  }, 

})

export default TweetCard