import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import {english} from '../../utils/strings';
import Icon from '../../components/Icons/Icon';
import {iconSizes} from '../../theme/sizes';
import {colors} from '../../theme/colors';
import {
  AVATAR_SCREEN,
  PLAY_VIDEO_SCREEN,
} from '../../utils/constant/ScreenConstants';

interface IProps {
  navigation: any;
  route: any;
}

const RotateScreen: React.FC<IProps> = ({navigation, route}: IProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(PLAY_VIDEO_SCREEN);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.rotateText}>{english.rotate.rotateText}</Text>
      <Icon
        name="rotate-right"
        type="font-awesome"
        size={iconSizes.rotateIcon}
        color={colors.white}
      />
    </View>
  );
};

export default RotateScreen;
