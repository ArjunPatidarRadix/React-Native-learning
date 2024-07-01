import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import IntroScreen from "../screens/Intro";
import { RootStackParamList } from "./RootStackParamList";

import Splash from "../screens/Splash";
import HomeDetail from "../screens/HomeDetail";
import { Colors } from "./../constants/Color";

const Stack = createStackNavigator<RootStackParamList>();

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.black,
  },
};

export default function App() {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
