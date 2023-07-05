// import libraries 
import React from 'react'; 
import {Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import splash from './components/splash'; 
import dashboard from './components/dashboard';
import signin from './components/signin';
import smartqs from './components/smartqs';
import egoal from './components/egoal';

// inisialisasi stack navigator
const Stack = createNativeStackNavigator();

// konfigurasi transisi fade 
const transisifade = {
    animation: 'timing',
    config: {
      duration: 500, 
    },
    screenInterpolator: ({ current }) => {
      return {
        cardStyle: {
          opacity: current.progress,
        },
      };
    },
  };

// TODO: Buat main app 
const App = () => ( 
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name = "splash"
                component = {splash}
                options = {{
                    open: transisifade,
                    close: transisifade,
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name = "login"
                component = {login}
                options = {{
                    open: transisifade,
                    close: transisifade,
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name = "signin"
                component = {signin}
                options = {{
                    open: transisifade,
                    close: transisifade,
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name = "home"
                component = {home}
                options = {{
                    open: transisifade,
                    close: transisifade,
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name = "dashboard"
                component = {dashboard}
                options = {{
                    open: transisifade,
                    close: transisifade,
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name = "smartqs"
                component = {smartqs}
                options = {{
                    open: transisifade,
                    close: transisifade,
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name = "egoal"
                component = {egoal}
                options = {{
                    open: transisifade,
                    close: transisifade,
                    headerShown: false,
                }} 
            />
        </Stack.Navigator>
    </NavigationContainer>
); 

// render component to screen 
export default App; 