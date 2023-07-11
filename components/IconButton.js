import { StyleSheet, Pressable, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ color, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, { backgroundColor: color}]}>
        <Text style={styles.iconText}>Delete</Text>
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  container: {
    padding: 7,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center'
  },
  iconText: {
    paddingHorizontal: 5,
    fontFamily: 'montserrat-regular',
    color: 'white',
  }
});
