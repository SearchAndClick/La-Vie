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
    color: '#fff', 
  },
  label: {
    marginBottom: 4,
    fontFamily: 'montserrat-light',
    color: '#fff', 
    fontSize: 15,
  },
  labelInvalid: {
    color: '#F37C13',
    fontFamily: 'montserrat-light',
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderWidth: 1,
    // backgroundColor: Colors.primary100,
    borderRadius: 8,
    borderColor: '#fff',
    color: '#fff',
    fontSize: 16,
  },
  inputInvalid: {
    // backgroundColor: Colors.error100,
  },
});
