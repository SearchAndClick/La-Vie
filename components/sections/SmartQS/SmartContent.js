import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import ButtonYesNo from './ButtonYesNo';
import ChooseDate from './ChooseDate';
import CatAndNotes from './CatandNotes';
import SmartForm from './SmartForm';
import Steps from './Steps';
import { LinearGradient } from 'expo-linear-gradient';

function SmartContent(saveData){
  const [inputInvalid, setInputInvalid] = useState({
      namaGoal : false, 
      goalDesc : false, 
      steps : false, 
      reminder : false, 
      yesNoOpt : false,
  });

  function submitHandler(input) {
    let { namaGoal, goalDesc, steps, reminder, yesNoOpt } = input;

    // gatau ini apaan ngikutin yang auth form 
    namaGoal = namaGoal.trim()
    goalDesc = goalDesc.trim()

    // maksud logicnya kalau dia ada yang false jadinya gagal ngisi
    if (
      namaGoal || goalDesc || steps || reminder || yesNoOpt 
    ){
      Alert.alert('Invalid input', 'Pastikan semua terisi');
      // set state2 di atas biar jadi invalid 
      
      return;
    }
    saveData({ email, goalDesc, steps, reminder, yesNoOpt});
    }  

  return (
    <View>
      <SmartForm/>
      <Steps/>
      <ChooseDate/>
      <CatAndNotes/>
      <ButtonYesNo/>
      <LinearGradient start= {[0,0]} end= {[0,1]} colors={['#0077B6','#023E8A']} style= {styles.gradien} >
        <TouchableOpacity >
          <Text style = {styles.saveText}>Save</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
      fontFamily: "montserrat-bold",
      fontSize: 25,
      color: "white",
      alignSelf: 'center',
      marginTop: 30,
    },
    gradien: {
      height: 45,
      marginHorizontal: 20,
      marginTop: 15, 
      borderRadius: 20,
      borderBottomWidth: 3,
      borderColor: '#03045E',
      alignItems: 'center', 
      paddingTop: 10
    },
    saveText: {
      fontFamily: "montserrat-bold",
      fontSize: 15,
      color: "white",
      height: 35,
    },
})

export default SmartContent