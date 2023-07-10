import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

function HeaderGoal() {
  const [isEnabled, setIsEnabled] = useState(false);

  function pilihPublik() {
    setIsEnabled(true);
  }
  function pilihPrivate() {
    setIsEnabled(false);
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.containerPubPriv}>
        <TouchableHighlight
          style={isEnabled ? styles.dipilih : styles.tidakDipilih}
          onPress={pilihPublik}
        >
          <Text style={styles.textStyle}>Publik</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={isEnabled ? styles.tidakDipilih : styles.dipilih}
          onPress={pilihPrivate}
        >
          <Text style={styles.textStyle}>Private</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 31,
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "montserrat-bold",
    color: "#010256",
    fontSize: 14,
  },
  textDelete: {
    fontFamily: "montserrat-light",
    color: "#010256",
    fontSize: 14,
  },
  backButton: {
    backgroundColor: "#D9D9D9",
    width: 81,
    height: 31,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  dipilih: {
    backgroundColor: "#CAF0F8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#010256",
    width: 77,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  tidakDipilih: {
    backgroundColor: "transparent",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerPubPriv: {
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    marginRight: 10,
    marginLeft: 10,
    width: 173,
    height: 31,
  },
  deleteButton: {
    backgroundColor: "red",
    borderRadius: 10,
    width: 81,
    height: 31,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});

export default HeaderGoal;
