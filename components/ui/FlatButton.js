// FlatButton untuk ke laman sign in kalo belum regis dan ke laman log in kalau punya akun
import { Pressable, StyleSheet, Text, View } from 'react-native';

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
