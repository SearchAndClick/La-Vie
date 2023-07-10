import { View, Text } from 'react-native'; 
import React from 'react'; 

function Steps () {
    // data2 langkah-langkahnya nanti, dibikin kosong dulu 
    const [steps, setSteps] = useState(
        []);
    
    // bikin state yesNoOpt jadi false dulu nanti kalau step nya ada 1 dipanggil deh 
    // let yesNoOpt = false;

    function addStep (newStep){
        setData([...steps, newStep]);
        // initialize yesNoOpt biar jadi true 
    }

    return (
        <View>
        <Text>Steps</Text>
        </View>
    )
}

export default Steps