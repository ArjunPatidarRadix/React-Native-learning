import React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import { store } from "./src/Redux";
import Navigation from "./src/navigators";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
