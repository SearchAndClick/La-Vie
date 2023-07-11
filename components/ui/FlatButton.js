// FlatButton untuk ke laman sign in kalo blm regis sama ke laman log in kalo punya akun
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function FlatButton({ children, text, onPress }) {
  return (
    <View style= {styles.viewya}>
      <Text style = {styles.textAwal}>
        {text}
      </Text>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
  viewya: {
    flexDirection: 'row',
    width: "90%",
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 6,
    flex: 1,
  },
  pressed: {
    opacity: 0.7,
  },
  textAwal: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontFamily: 'montserrat-light',
    fontSize: 12,
    color: 'white',
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'montserrat-extrabold',
    color: 'white',
    fontSize: 12,
    // color: Colors.primary100,
  },
});
