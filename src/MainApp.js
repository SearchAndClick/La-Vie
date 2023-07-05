// Import libraries 
import React from 'react'; 
import {Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Inisialisasi Stack Navigator
const Stack = createNativeStackNavigator();

// TODO: Buat main app 
const App = () => ( 
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name = ""
                
            ></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
); 

// Render component to screen 
export default MainApp; 