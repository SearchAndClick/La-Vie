import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const ButtonYesNo = (onPress) => {
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
      Apakah anda ingin goal ini dilihat banyak orang ?
      </Text>
      <View style = {styles.switchContainer}>
        <TouchableHighlight style = { isEnabled? styles.switchYesChosen : styles.switchYes} onPress={milihYa}>
          <Text style = {styles.textStyle}>Ya</Text>
        </TouchableHighlight>
        <TouchableHighlight style = { isEnabled? styles.switchNo: styles.switchNoChosen} onPress={milihTidak}>
          <Text style = {styles.textStyle}>Tidak</Text>
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
    margin: 10,
  },
  switchYes: {
    borderBottomLeftRadius: 20, 
    borderTopLeftRadius:20,
    width: "50%",
    backgroundColor: 'white',
  },
  switchYesChosen: {
    borderBottomLeftRadius: 20, 
    borderTopLeftRadius:20,
    width: "50%",
    backgroundColor: 'green',
  },
  switchNo:{
    borderBottomRightRadius: 20, 
    borderTopRightRadius: 20,
    width: "50%",
    backgroundColor: 'white',
  },
  switchNoChosen: {
    borderBottomRightRadius: 20, 
    borderTopRightRadius: 20,
    width: "50%",
    backgroundColor: 'red',
  },
})