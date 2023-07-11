import { View, Text, StyleSheet } from 'react-native'; 
import {useState} from 'react'; 

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
            <Text style={styles.textQuestion}>What are the steps necessary to reach it?</Text>
            <View style={styles.inputBox}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textQuestion: {
        fontFamily: "montserrat-bold",
        fontSize: 15,
        color: "white",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
    },
    inputBox : {
        borderRadius:20, 
        height:100,
        color:'black',
        backgroundColor:'white',
        padding:10,
        marginTop: 10,
        marginEnd: 10,
        marginLeft: 20, 
        marginRight: 20,
    }
})
export default Steps