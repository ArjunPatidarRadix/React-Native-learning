import { View, Text, ImageBackground, Animated, Platform } from "react-native";
import React, { useEffect, useRef } from "react";
import { styles } from "./styles";
import { images } from "../../assets/images";
import { ResizeMode, Video } from "expo-av";
import { moderateScale } from "react-native-size-matters";
import {
  PLAY_VIDEO_SCREEN,
  ROTATE_SCREEN,
} from "../../utils/constant/ScreenConstants";
const roadVideo = require("./../../assets/video/demo_video.mp4");

interface IProps {
  navigation: any;
  route: any;
}

const RoomHalfWayScreen: React.FC<IProps> = ({ navigation, route }: IProps) => {
  const mainVideoRef = React.useRef(null);

  const width = useRef(new Animated.Value(0)).current;

  const widthFrom =
    Platform.OS === "web" ? moderateScale(505) : moderateScale(500);
  const widthTo =
    Platform.OS === "web" ? moderateScale(605) : moderateScale(645);
  const heightFrom =
    Platform.OS === "web" ? moderateScale(230) : moderateScale(230);
  const HeightTo =
    Platform.OS === "web" ? moderateScale(278) : moderateScale(295);

  const heightWidth = width.interpolate({
    inputRange: [0, 1],
    outputRange: ["100%", "130%"],
  });

  const videoWidth = width.interpolate({
    inputRange: [0, 1],
    outputRange: [widthFrom, widthTo],
  });

  const videoheight = width.interpolate({
    inputRange: [0, 1],
    outputRange: [heightFrom, HeightTo],
  });

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(width, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }).start();
    }, 5000);
    setTimeout(() => {
      navigation.navigate(PLAY_VIDEO_SCREEN);
    }, 8000);
  }, []);

  return (
    <Animated.View
      style={[
        styles.mainContainer,
        {
          width: heightWidth,
          height: heightWidth,
        },
      ]}
    >
      <ImageBackground source={images.fameBg} style={styles.imageBg}>
        <Animated.View
          style={[
            styles.videoCon,
            {
              height: videoheight,
              width: videoWidth,
            },
          ]}
        >
          <Video
            // ref={mainVideoRef}
            source={roadVideo}
            resizeMode={ResizeMode.COVER}
            style={styles.video}
            videoStyle={{ width: "100%", height: "100%" }}
            isLooping={true}
            shouldPlay={true}
            onLoad={() => {
              // mainVideoRef.current.playAsync();
            }}
            onPlaybackStatusUpdate={(playBackStatus) => {
              console.log("playBackStatus :: ", playBackStatus);
              if (playBackStatus?.didJustFinish) {
              }
            }}
          />
        </Animated.View>
      </ImageBackground>
    </Animated.View>
  );
};

export default RoomHalfWayScreen;
