import React, {useState} from 'react';
import {View, StyleSheet, PanResponder, Animated, Image} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import {images} from '../../assets/images';

const RotatingWheel: React.FC = () => {
  const [angle, setAngle] = useState(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const touchAngle = Math.atan2(
        gestureState.moveY - 150, // Adjust center Y coordinate of the wheel
        gestureState.moveX - 150, // Adjust center X coordinate of the wheel
      );

      const newAngle = touchAngle * (180 / Math.PI);
      setAngle(newAngle);
    },
  });

  const interpolatedRotation = angle + 'deg';

  const animatedStyle = {
    transform: [{rotate: interpolatedRotation}],
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler {...panResponder.panHandlers}>
        <Animated.Image
          style={[styles.wheel, animatedStyle]}
          source={images.steering}
        />
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wheel: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default RotatingWheel;
