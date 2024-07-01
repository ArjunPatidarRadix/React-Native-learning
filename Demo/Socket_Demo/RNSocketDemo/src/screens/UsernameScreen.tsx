import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';
import {MainStackParamList} from '../navigation/MainStack';
import {CHAT_SCREEN} from '../utils/ScreenConstants';

type UsernameScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'UsernameScreen'
>;

export const UsernameScreen = ({navigation, route}: UsernameScreenProps) => {
  const [username, setUsername] = useState('');

  const handleOnPress = () => {
    if (username !== '') {
      navigation.push(CHAT_SCREEN, {username: username});
    } else {
      Alert.alert('USERNAME!!!', 'Please enter username to continue');
    }
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
      }}>
      <Text>USERNAME REQUIRED</Text>
      <Text>Enter username to continue chat</Text>
      <TextInput
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 10,
          padding: 10,
          width: 250,
        }}
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder="Username"
      />
      <Button title="GO!" onPress={handleOnPress} />
    </View>
  );
};
