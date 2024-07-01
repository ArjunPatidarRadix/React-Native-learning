import React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Images from "../constants/Images";
import { Ionicons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  const onBackPress = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.closeIcon}>
        <Ionicons name="close" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteIcon}></TouchableOpacity>
      {/* <Image resizeMode="contain" style={styles.image} source={Images.chair} /> */}
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: "https://picsum.photos/200/300" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 40,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
