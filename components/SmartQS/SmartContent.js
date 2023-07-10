import { View, Text } from 'react-native';
import React from 'react';
import ButtonBackSave from './ButtonBackSave';
import ButtonYesNo from './ButtonYesNo';
import ChooseDate from './ChooseDate';
import Reminder from './Reminder';
import SmartForm from './SmartForm';

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
      <Text>SMART Questions</Text>
      <SmartForm/>
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
    smartContainer: {},

})

export default SmartContent