import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './components/Splash';
import Signin from './components/Signin';

export default function App() {
  return (
    <View >
      <Signin/>
    </View>
  );
}

/*
    <NavigationContainer>
        <Stack.Navigator initialRouteName = "splash">
            <Stack.Screen
                name = "splash"
                component = {Splash}
                options = {{
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name = "login"
                component = {Login}
                options = {{
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name = "signin"
                component = {Signin}
                options = {{
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name = "home"
                component = {Home}
                options = {{
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name = "dashboard"
                component = {Dashboard}
                options = {{
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name = "smartqs"
                component = {Smartqs}
                options = {{
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name = "egoal"
                component = {Egoal}
                options = {{
                    open: transisifade,
                    close: transisifade,
                    headerShown: false,
                }} 
            />
        </Stack.Navigator>
    </NavigationContainer>*/
    
const styles = StyleSheet.create({
  container: {
    backgroundColor: "03045E",
  },
});
