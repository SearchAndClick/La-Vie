// Import libraries 
import React from 'react'; 
import {Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Inisialisasi Stack Navigator
const Stack = createStackNavigator();

// TODO: Buat main app 
const App = () => ( 
    <NavigationContainer>
        <Stack></Stack>
    </NavigationContainer>
); 

// Render component to screen 
export default MainApp; 