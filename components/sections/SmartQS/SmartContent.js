import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import ButtonBackSave from './ButtonBackSave';
import ButtonYesNo from './ButtonYesNo';
import ChooseDate from './ChooseDate';
import Reminder from './Reminder';
import SmartForm from './SmartForm';
import Steps from './Steps';

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
      <Reminder/>
      <ButtonYesNo/>
      <ButtonBackSave
        onSave = {submitHandler}
      />
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
    smartContainer: {},

})

export default SmartContent