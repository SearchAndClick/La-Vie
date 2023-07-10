import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const GoalName = () => {
    function settingNamaGoal(){

    }

    return (
    <View style = {styles.container}>
        <View style = {styles.containerText}>
        <Text style= {styles.textStyle}>GoalName</Text>
        </View>
        <TouchableOpacity style = {styles.icon} onPress={settingNamaGoal}>
        <Ionicons name='pencil-outline' color={"black"} size={45}/>
        </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        margin: 15,
        justifyContent: 'center',
        borderBottomWidth: 3,
        paddingBottom: 10,
        borderColor: '#CAF0F8',
        shadowColor: 'black',
        width: '90%',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    }, 
    containerText: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    textStyle: {
        fontFamily: "montserrat-bold",
        color: 'white',
        fontSize: 25,
    }, 
    icon : {
        alignSelf: 'flex-end',
    }
})

export default GoalName