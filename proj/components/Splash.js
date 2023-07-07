import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'; 

function Splash() {
  return (
    <View styles={styles.container}>
      <Image
        source = {require(
          '../assets/images/Logo.png'
        )}
      />
      <Text styles = {styles.title}>
        Lavie
      </Text>
    </View>
  );
};

// Styling variable 
const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#FFF',
        alignItems:'center',
        justifyContent: 'center',
    },
    title :{
      flex:1, 
      alignItems: 'center',
    },
});

export default Splash 