import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextField } from '../components/TextField'
import { Button } from '../components/Button'

import { useSelector, useDispatch } from 'react-redux'

import { ApplicationState, onLogin } from '../redux'

const LoginScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();

  const { user, error } = useSelector((state: ApplicationState) => state.userReducer);

  const { token } = user;

  console.log('token ::', token)

  useEffect(() => {
    if (token !== undefined) {
      // navigate('Home');
    }
    //do nothing
  }, [user]);
  
  const onTapLogin = () => {
    dispatch(onLogin(email, password));
  };
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <View style={styles.body}>
          <View style={styles.loginView}>
            <TextField placeholder="Email Id" onTextChange={setEmail} />
            <TextField
              placeholder="Password"
              onTextChange={setPassword}
              isSecure={true}
            />
            <Button title="Login" onTap={onTapLogin} />
            {token !== undefined && (
              <Text style={{ marginLeft: 20, marginRight: 20 }}>
                {JSON.stringify(user)}
              </Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.footer}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
  },
  loginView: {
    marginTop: 200,
    marginLeft: 20,
    marginRight: 20,
    height: 400,
  },
  footer: {
    height: 60,
    backgroundColor: 'yellow'
  },
});
export default LoginScreen