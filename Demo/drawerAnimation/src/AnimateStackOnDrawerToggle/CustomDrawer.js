import React from "react";

import { Text, ImageBackground, StyleSheet } from "react-native";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Animated from "react-native-reanimated";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { SafeAreaView } from "react-native-safe-area-context";

const { interpolateNode, Extrapolate } = Animated;

export default (props) => {
  const { state, progress, navigation } = props;
  const { index, routes } = state;

  const opacity = interpolateNode(progress, {
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.1, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: opacity,
        },
      ]}
    >
      <SafeAreaView style={styles.imageContainer} edges={["top"]}>
        <ImageBackground
          source={require("./../../assets/splash.png")}
          style={styles.drawerImage}
          imageStyle={styles.imageStyle}
          resizeMode="cover"
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.7)"]}
            style={styles.imageGradient}
          />
        </ImageBackground>
      </SafeAreaView>

      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContentContainerStyle}
      >
        {routes.map((route, position) => {
          const isFocused = index === position;

          return (
            <DrawerItem
              key={route.key}
              label={({ focused }) => {
                return (
                  <Text
                    style={focused ? styles.activeText : styles.inactiveText}
                  >
                    {route.name}
                  </Text>
                );
              }}
              style={
                isFocused ? styles.activeContainer : styles.inActiveContainer
              }
              onPress={() => navigation.navigate(`${route.name}`)}
              focused={isFocused}
              activeBackgroundColor="transparent"
            />
          );
        })}
      </DrawerContentScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  drawerContentContainerStyle: {
    paddingTop: 0,
  },

  imageContainer: {
    alignItems: "center",
    borderRadius: wp(16),
    marginVertical: wp(8),
  },

  drawerImage: {
    width: wp(32),
    height: wp(32),
  },

  imageStyle: {
    borderRadius: wp(16),
  },

  imageGradient: {
    flex: 1,
    borderRadius: wp(16),
  },

  activeContainer: {
    borderLeftWidth: wp(1.06),
    borderLeftColor: "#00b8d4",
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: wp(0.8),
    marginTop: 0,
  },

  activeText: {
    fontWeight: "bold",
    color: "#00b8d4",
    backgroundColor: "transparent",
  },

  inActiveContainer: {
    borderLeftWidth: wp(1.06),
    borderLeftColor: "transparent",
    backgroundColor: "transparent",
    borderRadius: wp(0.8),
    marginTop: 0,
  },

  inactiveText: {
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.8)",
    backgroundColor: "transparent",
  },
});
