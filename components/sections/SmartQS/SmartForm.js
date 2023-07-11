import { View, Text } from 'react-native'
import React, { useState } from 'react'
import InputGoal from './InputGoal';

function SmartForm (inputInvalid) {
    const [enteredNamaGoal, setEnteredNamaGoal] = useState(''); 
    const [enteredGoalDesc, setEnteredGoalDesc] = useState('');

    const {
        namaGoal : namaInvalid, 
        goalDesc : descInvalid, 
        steps : stepsInvalid, 
        reminder : reminderInvalid, 
        yesNoOpt : optionInvalid,
    } = inputInvalid;

    function submitHandler() {
        onSubmit({
            namaGoal: enteredNamaGoal,
            goalDesc: enteredGoalDesc,
            // Nyimpen valuenya di state. Mungkin nanti pake redux aja 
        });
      } 

    // fungsi unutk nge handle 
    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
            case 'namaGoal':
            setEnteredNamaGoal(enteredValue);
            break;
            case 'goalDesc':
            setEnteredGoalDesc(enteredValue);
            break;
    }}   
    
    return (
        <View style = {{marginTop: 10}}>
            <InputGoal
                namaInput={'What is your goal?'}
                isInvalid={namaInvalid}
                onUpdateValue={updateInputValueHandler(this,'namaGoal')}
                saranPesan={'Goal name'}
            />
            <InputGoal
                namaInput={'Describe your goal specifically!'}
                isInvalid = {descInvalid}
                onUpdateValue={updateInputValueHandler.bind(this, 'goalDesc')}
                saranPesan={'Describe it in a very specific way'}
            />
        </View>
    )
}

export default SmartForm