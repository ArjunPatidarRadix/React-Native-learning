import {
  View,
  SafeAreaView,
  Image,
  Animated
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Images } from '../../../assets/images';

interface Props {
  navigation?: any;
}

const Splash: React.FC<Props> = ({ navigation }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    _goToIntroScreen()
  }, []);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  }, []);

  function _goToIntroScreen() {
    setTimeout(() => {
      navigation.navigate("Intro")
    }, 1000);
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}
        >
          <Image source={Images.MoneyMe} style={[styles.moneyMeImg]} resizeMode={"contain"} />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
