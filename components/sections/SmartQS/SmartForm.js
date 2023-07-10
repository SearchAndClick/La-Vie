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
        <View>
            <InputGoal
                namaInput={'Apa goal anda ?'}
                isInvalid={namaInvalid}
                onUpdateValue={updateInputValueHandler(this,'namaGoal')}
                saranPesan={'Nama Goal'}
            />
            <InputGoal
                namaInput={'Jelaskan secara spesifik goal anda!'}
                isInvalid = {descInvalid}
                onUpdateValue={updateInputValueHandler.bind(this, 'goalDesc')}
                saranPesan={'Jelaskan dengan sangat spesifik'}
            />
        </View>
    )
}

export default SmartForm