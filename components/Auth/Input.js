// Input.js sebagai template untuk AuthForm
import { View, Text, TextInput, StyleSheet } from 'react-native';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  placeholder,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        // autoCapitalize={false}
        // autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 15,
  },
  label: {
    // color: 'white',
    marginBottom: 4,
    fontFamily: 'montserrat-light',
  },
  labelInvalid: {
    color: '#F37C13',
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderWidth: 2,
    // backgroundColor: Colors.primary100,
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    // backgroundColor: Colors.error100,
  },
});
