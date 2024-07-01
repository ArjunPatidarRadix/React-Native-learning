import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Images from "../constants/Images";

function WelcomeScreen(props) {
  const onPress = () => {
    props.navigation.navigate("ViewImage");
  };
  return (
    <ImageBackground style={styles.background} source={Images.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Images.logo} />
        <Text>Sell what you don't need</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.loginButton}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={styles.registerButton}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
    alignItems: "center",
    justifyContent: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
