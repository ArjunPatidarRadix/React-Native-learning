import React from "react";

import { ImageBackground, StyleSheet, StatusBar, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Animated from "react-native-reanimated";

import Screen from "./../Screens/Screen";

import CustomDrawer from "./CustomDrawer";

import { stackScreens } from "../services";

const { interpolateNode, Extrapolate } = Animated;

const Drawer = createDrawerNavigator();

let screenStyle = null;

const AnimateStackOnDrawerToggle = () => {
  return (
    <View
      style={styles.backgroundImage}
      // source={require("./../../assets/splash.png")}
      // resizeMode="cover"
    >
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <View style={styles.transparentView}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerType="back"
            overlayColor="transparent"
            sceneContainerStyle={styles.sceneContainerStyle}
            drawerStyle={styles.drawerStyle}
            drawerContent={(props) => {
              const scale = interpolateNode(props.progress, {
                inputRange: [0, 1],
                outputRange: [1, 0.75],
                extrapolate: Extrapolate.CLAMP,
              });

              const rotate = interpolateNode(props.progress, {
                inputRange: [0, 1],
                outputRange: ["0deg", "-10deg"],
                extrapolate: Extrapolate.CLAMP,
              });

              const borderRadius = interpolateNode(props.progress, {
                inputRange: [0, 1],
                outputRange: [1, 30],
                extrapolate: Extrapolate.CLAMP,
              });

              screenStyle = {
                transform: [
                  {
                    // scaleY: scale,
                    scale: scale,
                    rotateZ: rotate,
                  },
                ],
                borderRadius,
              };

              return <CustomDrawer {...props} />;
            }}
          >
            {stackScreens.map((screen) => {
              return (
                <Drawer.Screen key={screen.id} name={screen.name}>
                  {(props) => (
                    <Screen
                      item={screen}
                      {...props}
                      style={{ ...screenStyle }}
                    />
                  )}
                </Drawer.Screen>
              );
            })}
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor: "#F1F3F6",
  },

  transparentView: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.75)",
  },

  drawerStyle: {
    backgroundColor: "transparent",
    width: "55%",
  },

  sceneContainerStyle: {
    backgroundColor: "transparent",
  },
});

export default AnimateStackOnDrawerToggle;
