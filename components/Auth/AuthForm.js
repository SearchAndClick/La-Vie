import { useState } from 'react';
import { StyleSheet, View, Text, Touchable, TouchableOpacity } from 'react-native';

import Button from '../ui/Button';
import Input from './Input';

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputTypSe) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style = {styles.form}>
        <Text style= {styles.headertext}> 
          {isLogin ? 'WELCOME BACK!' : 'CREATE ACCOUNT'}
        </Text>
        <Input
          label="Email Address"
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
          placeholder="username@gmail.com"
        />
        {!isLogin && ( // hanya muncul ketika sign up
          <Input
            label="Confirm Email Address"
            onUpdateValue={updateInputValueHandler.bind(this, 'confirmEmail')}
            value={enteredConfirmEmail}
            keyboardType="email-address"
            isInvalid={emailsDontMatch}
            placeholder="username@gmail.com"
          />
        )}
        <Input
          label="Password"
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
          placeholder="Enter Password"
        />
        {!isLogin && ( // hanya muncul ketika sign up
          <Input
            label="Confirm Password"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              'confirmPassword'
            )}
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
            placeholder="Confirm Password"
          />
        )}
        <Button onPress={submitHandler}>
            {isLogin ? 'Log In' : 'Sign Up'}
        </Button>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  headertext: {
    fontFamily: 'montserrat-extrabold', 
    color: '#fff', 
    fontSize: 24,
  },
  buttonText: {
    color: '#fff', 
    fontFamily: 'montserrat-extrabold', 
    fontSize: 13,
    alignSelf: 'center',
  }
});
