/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import "react-native-gesture-handler";

import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootStackNavigator } from "./src/navigation/RootStackNavigator";

const App = () => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootStackNavigator />
      </GestureHandlerRootView>
    </>
  );
};

export default App;
