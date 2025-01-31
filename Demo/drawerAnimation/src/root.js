import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import * as Font from "expo-font";

// import { AppNavigator } from "Navigation";
import ThemeManager from "./Themes";
import { Fonts } from "./Constants";

import AnimateStackOnDrawerToggle from "./AnimateStackOnDrawerToggle/AnimateStackOnDrawerToggle.js";

const App = ({ params }) => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  /* Loading custom fonts in async */
  const _loadAssetsAsync = async () => {
    await Font.loadAsync(Fonts.customFonts);
    setAssetsLoaded(true);
  };

  useEffect(() => {
    _loadAssetsAsync();
  });

  return assetsLoaded ? (
    <ThemeManager>
      <AnimateStackOnDrawerToggle />
    </ThemeManager>
  ) : (
    <ActivityIndicator size="small"></ActivityIndicator>
  );
};

export default App;
