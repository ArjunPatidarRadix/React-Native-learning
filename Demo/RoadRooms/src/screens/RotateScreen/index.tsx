import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { styles } from "./styles";
import { english } from "../../utils/strings";
import Icon from "../../components/Icons/Icon";
import { iconSizes } from "../../theme/sizes";
import { colors } from "../../theme/colors";
import {
  AVATAR_SCREEN,
  PLAY_VIDEO_SCREEN,
  ROOM_HALFWAY_SCREEN,
} from "../../utils/constant/ScreenConstants";

interface IProps {
  navigation: any;
  route: any;
}

const RotateScreen: React.FC<IProps> = ({ navigation, route }: IProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      navigation.navigate(ROOM_HALFWAY_SCREEN);
    }, 2000);
  }, []);

  const rotate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "160deg"],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.rotateText}>{english.rotate.rotateText}</Text>
      <Animated.View style={[{ transform: [{ rotate: rotate }] }]}>
        <Icon
          name="rotate-right"
          type="font-awesome"
          size={iconSizes.rotateIcon}
          color={colors.white}
        />
      </Animated.View>
    </View>
  );
};

export default RotateScreen;
