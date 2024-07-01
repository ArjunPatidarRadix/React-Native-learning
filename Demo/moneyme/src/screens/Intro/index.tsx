import React from "react";
import { SafeAreaView, View, Image, Text } from "react-native";
import styles from "./styles";
import { Props } from "./IIntro";
import { Images } from "../../../assets/images";
import AppButton from "../../components/Button/AppButton";
import { String } from "../../constants/String";

const IntroScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.musicVw}>
        <Image
          source={Images.Music}
          style={styles.musicImg}
          resizeMode={"stretch"}
        />
      </View>
      <Text style={styles.musicTxt}>{String.ListenMusic}</Text>
      <Text style={styles.musicTxt}>{String.ListenMusicSec}</Text>
      <Text style={styles.listenTxt}>{String.ListenAny}</Text>
      <AppButton
        containerStyle={{ alignSelf: "center" }}
        onPress={() => navigation.navigate("Home")}
        text=""
      />
    </SafeAreaView>
  );
};
export default IntroScreen;
