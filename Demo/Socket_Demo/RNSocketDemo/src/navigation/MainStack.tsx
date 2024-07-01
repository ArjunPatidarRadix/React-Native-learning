import React from 'react';
import {CHAT_SCREEN, USERNAME_SCREEN} from '../utils/ScreenConstants';
import {UsernameScreen} from '../screens/UsernameScreen';
import {ChatScreen} from '../screens/ChatScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export type MainStackParamList = {
  UsernameScreen: undefined;
  ChatScreen: {username: string};
};
export const MainStack = () => {
  const MainStack = createNativeStackNavigator<MainStackParamList>();
  return (
    <MainStack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <MainStack.Screen name={USERNAME_SCREEN} component={UsernameScreen} />
      <MainStack.Screen name={CHAT_SCREEN} component={ChatScreen} />
    </MainStack.Navigator>
  );
};
