import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {colors} from '../theme/colors';
import {
  CHAT_SCREEN,
  CHAT_USER_LIST_SCREEN,
  ENTER_NAME_SCREEN,
} from '../utils/constant/ScreenConstants';
import EnterNameScreen from '../screens/EnterNameScreen';
import ChatScreen from '../screens/ChatScreen';
import ChatUserListScreen from '../screens/ChatUserListScreen';

// create root stack navigator for app
const Stack = createNativeStackNavigator();

/**
 * Explanation: Add only Modals/Dialogs here, which need to be render over the screen,
 * and need to have transparent or semi-transparent background with no action bar
 *
 * If you need to add normal screens, add it in AppStackNavigator
 */
export const RootStackNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {backgroundColor: colors.transparent},
            gestureEnabled: true,
          }}
          initialRouteName={ENTER_NAME_SCREEN}>
          <Stack.Screen name={ENTER_NAME_SCREEN} component={EnterNameScreen} />
          <Stack.Screen
            name={CHAT_SCREEN}
            component={ChatScreen}
            // options={{headerShown: true, }}
            options={({route}) => ({
              headerShown: true,
              title: route.params.currentGroupName,
            })}
          />
          <Stack.Screen
            name={CHAT_USER_LIST_SCREEN}
            component={ChatUserListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
