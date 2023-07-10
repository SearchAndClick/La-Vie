import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import OptionTile from "../OptionTile";
import CommunityPageScreen from "../../screens/CommunityPageScreen";

function OptionsCard() {
  const navigation = useNavigation();

  function changeScreenHandler(screen) {
    navigation.navigate(screen);
  }

  return (
    <LinearGradient style={styles.gradient} colors={["#D9D9D9", "#5882C1"]}>
      <Text style={styles.optionsText}>Options</Text>
      <View style={styles.container}>
        <View style={styles.row}>
          <OptionTile
            onPress={changeScreenHandler}
            option="Goal Planner"
            logo="flag-outline"
            screen="GoalPlanner"
          />
          <OptionTile
            onPress={changeScreenHandler}
            option="New Goal"
            logo="flash-outline"
            screen="NewGoal"
          />
        </View>
        <View style={styles.row}>
          <OptionTile
            onPress={changeScreenHandler}
            option="Community Page"
            logo="people-outline"
            screen="CommunityPage"
          />
          <OptionTile
            onPress={changeScreenHandler}
            option="Settings"
            logo="settings-outline"
            screen="Settings"
          />
        </View>
      </View>
    </LinearGradient>
  );
}

export default OptionsCard;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 40,
    padding: 40,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  row: {
    flexDirection: "row",
  },
  optionsText: {
    fontFamily: "montserrat-bold",
    fontSize: 23,
  },
});
