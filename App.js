import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import CommunityPageScreen from "./screens/CommunityPageScreen";
import GoalPlannerScreen from "./screens/GoalPlannerScreen";
import SmartQuestionsScreen from "./screens/SmartQuestionsScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import GoalOverviewScreen from "./screens/GoalOverviewScreen";
import Favorite from "./screens/Favorite";
import EachGoalScreen from "./screens/EachGoalScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator(initialScreen) {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName={initialScreen}
      screenOptions={{
        contentStyle: { backgroundColor: "transparent" },
        headerShown: false,
        tabBarBackground: () => (
          <LinearGradient
            style={styles.background}
            colors={["#D9D9D9", "#CAF0F8"]}
          ></LinearGradient>
        ),
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: '#00B4D8',
        tabBarStyle: { height: 70 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={() => navigation.goBack()}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="GoalPlanner"
        component={GoalPlannerScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flag-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CommunityPage"
        component={CommunityPageScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "transparent" },
        // contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "transparent" },
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="GoalPlanner"
        component={() => TabNavigator("GoalPlanner")}
      />
      <Stack.Screen
        name="CommunityPage"
        component={() => TabNavigator("CommunityPage")}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "transparent" },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="NewGoal"
        component={SmartQuestionsScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: "Smart Questions",
          headerStyle: { backgroundColor: "transparent" },
          headerShadowVisible: false,
          headerTintColor: "white",
          headerTitleStyle: { fontFamily: "montserrat-bold", fontSize: 25 },
        }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Goal Overview"
        component={GoalOverviewScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "transparent" },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: "Favorite",
          headerStyle: { backgroundColor: "transparent" },
          headerTintColor: "white",
          headerTitleStyle: { fontFamily: "montserrat-bold", fontSize: 25 }, 
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Each Goal Community"
        component={EachGoalScreen}
        options={{
          headerShown: true,
          headerTitle: '',
          headerTintColor: "white",
          headerStyle: { backgroundColor: "transparent" },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    "montserrat-extrabold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "syncopate-bold": require("./assets/fonts/Syncopate-Bold.ttf"),
    "syncopate-regular": require("./assets/fonts/Syncopate-Regular.ttf"),
  });

  if (!fontsLoaded) {
    // menahan splash screen sebelum semua font muncul
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <LinearGradient style={styles.background} colors={["#03045E", "#023E8A"]}>
        <AuthenticatedStack />
      </LinearGradient>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
