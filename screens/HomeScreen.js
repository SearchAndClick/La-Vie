import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import GreetingsCard from "../components/sections/GreetingsCard";
import PriorityGoal from "../components/sections/PriorityGoal";
import OptionsCard from "../components/sections/OptionsCard";

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarVisible: false,
      headerBackVisible: false, // ini dia
    });
  }, [navigation]);

  return (
    <View style={styles.home}>
      <GreetingsCard
        greetings="Good Morning"
        name="John Doe"
        date="2 June 2023"
      />
      <PriorityGoal
        goal="Get A on my Math examination"
        date="24 September 2023"
        percentage="0"
      />

      <OptionsCard />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});
