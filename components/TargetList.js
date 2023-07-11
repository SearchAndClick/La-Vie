import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CheckBox } from "react-native-elements";

export default function TargetList({ title }) {
  const [checked, setChecked] = useState(false);

  return (
    <View style={{backgroundColor: '#FAFAFA'}}>
      <CheckBox
        style={styles.goalText}
        title={title}
        checked={checked}
        onPress={() => setChecked(!checked)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalText: {
    fontFamily: 'montserrat-light',
    color: 'white',
  }
});
