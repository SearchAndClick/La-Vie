import { View, Text, StyleSheet} from 'react-native'
import React, {useState} from 'react'

const ProgressBar = () => {
    const [progressWidth, setProgressWidth] = useState();

    return (
    <View style= {styles.container}>
        <View style= {styles.containerText}>
        <Text style = {styles.textDescription}>ProgressBar</Text>
        <Text style = {styles.textProgress}>63%</Text>
        </View>
        <View style = {styles.progressView}>
            <View style = {styles.progressLength}>
            </View>
        </View>
        <Text style={styles.progressText}>63%</Text>
            <View style={styles.progressBar}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '90%',
    }, 
    textDescription: {
        fontFamily: "montserrat-bold",
        fontSize: 15,
        color: "white",
    }, 
    textProgress: {
        color: 'green', 
        fontFamily: "montserrat-regular",
    }, 
    containerText: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginBottom: "2%",
    }, 
    progressView: {
        width: '100%', 
        height: '20%',
        borderRadius: 30,
        borderWidth: 2, 
        borderColor: 'white',
        justifyContent: 'center', 
    },
    progressLength: {
        width: 210,
        backgroundColor: 'green',
        margin:3,
        height: "90%",
        borderRadius: 30,
    },
    progressBar: {
      borderWidth: 2,
      width: 280,
      height: 16,
      borderColor: "#023E8A",
      borderRadius: 30,
      marginBottom: 2,
    },
})

export default ProgressBar