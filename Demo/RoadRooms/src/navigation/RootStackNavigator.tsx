import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../theme/colors";
import {
  AVATAR_SCREEN,
  PLAY_VIDEO_SCREEN,
  ROOM_HALFWAY_SCREEN,
  ROTATE_SCREEN,
} from "../utils/constant/ScreenConstants";
import RotateScreen from "../screens/RotateScreen";
import PlayVideoScreen from "../screens/PlayVideoScreen";
import AvatarScreen from "../screens/AvatarScreen";
import RoomHalfWayScreen from "../screens/RoomHalfWayScreen";

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
            contentStyle: { backgroundColor: colors.transparent },
            gestureEnabled: true,
          }}
          initialRouteName={ROTATE_SCREEN}
        >
          <Stack.Screen name={ROTATE_SCREEN} component={RotateScreen} />
          {/* <Stack.Screen name={AVATAR_SCREEN} component={AvatarScreen} /> */}
          <Stack.Screen
            name={ROOM_HALFWAY_SCREEN}
            component={RoomHalfWayScreen}
            options={{
              orientation: "landscape",
            }}
          />
          <Stack.Screen
            name={PLAY_VIDEO_SCREEN}
            component={PlayVideoScreen}
            options={{
              orientation: "landscape",
              animation: "fade",
              animationDuration: 2000,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
