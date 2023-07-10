import { View, Text, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

function HeaderGoal () {
  return (
    <View style = {styles.headerContainer}>
        <TouchableOpacity>
            <Ionicons name="chevron-back-outline" color={'black'} size={15}/>
            <Text>
            Back
            </Text>
        </TouchableOpacity>
        <View>
            <TouchableHighlight style = { isEnabled? styles.switchYesChosen : styles.switchYes} onPress={milihYa}>
            <Text style = {styles.textStyle}>Ya</Text>
            </TouchableHighlight>
            <TouchableHighlight style = { isEnabled? styles.switchNo: styles.switchNoChosen} onPress={milihTidak}>
            <Text style = {styles.textStyle}>Tidak</Text>
            </TouchableHighlight>
        </View>
        <TouchableOpacity>
            <Text>
            Delete
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row', 
        height: 35,
        backgroundColor: 'white',
    },
    backButton: {
        backgroundColor: '#010256',
    }
})

export default HeaderGoal