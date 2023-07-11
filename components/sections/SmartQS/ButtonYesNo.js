import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import React, { useState } from 'react'

function ButtonYesNo(onPress){
  const [isEnabled, setIsEnabled] = useState(false);
  
  const milihYa = () => {
    setIsEnabled(true);
  };

  const milihTidak = () => {
    setIsEnabled(false);
  };

  return (
    <View>
      <Text style= {styles.textQuestion}>
      Do you want this goal to be visible to many people?
      </Text>
      <View style = {styles.switchContainer}>
        <TouchableHighlight style = { isEnabled? styles.switchYesChosen : styles.switchNo} onPress={milihYa}>
          <Text style = {styles.textStyle}>Yes</Text>
        </TouchableHighlight>
        <TouchableHighlight style = { isEnabled? styles.switchNo: styles.switchNoChosen} onPress={milihTidak}>
          <Text style = {styles.textStyle}>No</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default ButtonYesNo

const styles = StyleSheet.create({
  smartContainer: {},
  textQuestion: {
    fontFamily: "montserrat-bold",
    fontSize: 15,
    color: "white",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  switchContainer: {
    borderRadius: 20, 
    height: 35,
    color: 'black',
    backgroundColor: 'white',
    marginTop: 10,
    marginEnd: 10,
    marginLeft: 20, 
    marginRight: 20,
    flexDirection: 'row',
  },
  textStyle: {
    alignSelf: 'center',
    fontFamily: "montserrat-bold",
    fontSize: 15,
    color: "white",
  },
  switchYesChosen: {
    borderBottomLeftRadius: 20, 
    borderTopLeftRadius:20,
    width: "50%",
    backgroundColor: 'green',
    justifyContent: 'center'
  },
  switchNo:{
    borderRadius: 20,
    width: "50%",
    backgroundColor: 'white',
  },
  switchNoChosen: {
    borderBottomRightRadius: 20, 
    borderTopRightRadius: 20,
    width: "50%",
    backgroundColor: 'red',
    justifyContent: 'center'
  },
})