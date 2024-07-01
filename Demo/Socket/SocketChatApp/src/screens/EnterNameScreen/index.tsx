import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {GlobalContext} from '../../context';
import {CHAT_USER_LIST_SCREEN} from '../../utils/constant/ScreenConstants';

interface IProps {
  navigation: any;
  route: any;
}

const EnterNameScreen = ({navigation, route}: IProps) => {
  const {
    showLoginView,
    setShowLoginView,
    currentUserName,
    setCurrentUsername,
    currentUser,
    setCurrentUser,
    allUsers,
    setAllUsers,
  } = useContext(GlobalContext);

  const handleRegisterAndLogin = isLogin => {
    if (currentUserName.trim()) {
      const userIndex = allUsers.findIndex(
        userItem => userItem === currentUserName,
      );
      if (isLogin) {
        if (userIndex === -1) {
          Alert.alert('User is not registered');
        } else {
          setCurrentUser(currentUserName);
        }
      } else {
        if (userIndex === -1) {
          allUsers.push(currentUserName);
          setAllUsers(allUsers);
          setCurrentUser(currentUserName);
        } else {
          Alert.alert('Already registered');
        }
      }
      console.log('All users :: ', allUsers);
      // setCurrentUsername('');
    } else {
      Alert.alert('User name filed is empty');
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigation.navigate(CHAT_USER_LIST_SCREEN);
    }
  }, [currentUser]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.secContainer}>
        <Text style={styles.titleText}>
          Enter your name and continue to chat
        </Text>
        <TextInput
          value={currentUserName}
          onChangeText={setCurrentUsername}
          style={styles.inputStyle}
          placeholder="Enter your name"
        />
        <TouchableOpacity
          onPress={() => handleRegisterAndLogin(true)}
          activeOpacity={0.5}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleRegisterAndLogin(false)}
          activeOpacity={0.5}
          style={[
            styles.button,
            {
              marginTop: 20,
            },
          ]}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EnterNameScreen;
