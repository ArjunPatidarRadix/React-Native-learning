import {
  Text,
  TouchableOpacity,
  View,
  Animated as RNAnimated,
} from 'react-native';
import React, {useRef, useState} from 'react';

import Animated from 'react-native-reanimated';

import Video from 'react-native-video';
import Icon from '../../components/Icons/Icon';
import {images} from '../../assets/images';
import {styles} from './styles';
import {iconSizes, paddingSizes} from '../../theme/sizes';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
import {english} from '../../utils/strings';
import {colors} from '../../theme/colors';

const roadVideo = require('./../../assets/video/road_video.mp4');

const PlayVideoScreen = () => {
  const rotation = useSharedValue(1);
  const savedRotation = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{rotateZ: `${(rotation.value / Math.PI) * 5}deg`}],
  }));

  const [currentTooltip, setCurrentTooltip] = useState(1);
  const [pauseVideo, setPauseVideo] = useState(false);
  const [pauseMirrorVideo, setPauseMirrorVideo] = useState(false);

  const showTooltip = (tooltipNumber: number) => {
    switch (tooltipNumber) {
      case 1:
        return (
          <View style={[styles.tooltipCommon, styles.tooltipOne]}>
            <Text style={styles.tooltipText}>
              {english.tooltips.tooltipOne}
            </Text>
            <TouchableOpacity
              onPress={() => setCurrentTooltip(currentTooltip + 1)}>
              <Text style={styles.nextButton}>{english.playScreen.next}</Text>
            </TouchableOpacity>
          </View>
        );

      case 2:
        return (
          <View style={[styles.tooltipCommon, styles.tooltipTwo]}>
            <Text style={styles.tooltipText}>
              {english.tooltips.tooltipTwo}
            </Text>
            <TouchableOpacity
              onPress={() => setCurrentTooltip(currentTooltip + 1)}>
              <Text style={styles.nextButton}>{english.playScreen.next}</Text>
            </TouchableOpacity>
          </View>
        );

      case 3:
        return (
          <View style={[styles.tooltipCommon, styles.tooltipThree]}>
            <Text style={styles.tooltipText}>
              {english.tooltips.tooltipThree}
            </Text>
            <TouchableOpacity
              onPress={() => setCurrentTooltip(currentTooltip + 1)}>
              <Text style={styles.nextButton}>{english.playScreen.next}</Text>
            </TouchableOpacity>
            <View style={styles.bottomNotch} />
          </View>
        );

      case 4:
        return (
          <View style={[styles.tooltipCommon, styles.tooltipFour]}>
            <Text style={styles.tooltipText}>
              {english.tooltips.tooltipFour}
            </Text>
            <TouchableOpacity
              onPress={() => setCurrentTooltip(currentTooltip + 1)}>
              <Text style={styles.nextButton}>{english.playScreen.next}</Text>
            </TouchableOpacity>
            <View style={styles.bottomNotch} />
          </View>
        );

      case 5:
        return (
          <View style={[styles.tooltipCommon, styles.tooltipFive]}>
            <Text style={styles.tooltipText}>
              {english.tooltips.tooltipFive}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setPauseVideo(false);
                setPauseMirrorVideo(false);
                setCurrentTooltip(0);
              }}>
              <Text style={styles.nextButton}>
                {english.playScreen.startDriving}
              </Text>
            </TouchableOpacity>
            <View style={styles.topNotch} />
          </View>
        );
      default:
        return <></>;
    }
  };

  const animation = useRef(new RNAnimated.Value(0)).current;

  const [expandedInstrucion, setExpandedInstrucion] = useState(false);

  const startAnimation = () => {
    // animation.setValue(expandedInstrucion ? 0 : 1);

    setExpandedInstrucion(!expandedInstrucion);
    RNAnimated.timing(animation, {
      toValue: expandedInstrucion ? 0 : 1,
      useNativeDriver: false,
      duration: 200,
    }).start();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.videoCon}>
        <Video
          source={roadVideo}
          resizeMode="cover"
          overflow="hidden"
          style={styles.video}
          repeat={true}
          onLoad={() => {
            setPauseVideo(true);
          }}
          paused={pauseVideo}
        />
      </View>
      <View style={styles.mirrorCon}>
        <View style={styles.handle} />
        <View style={styles.mirror}>
          <Video
            source={roadVideo}
            resizeMode="cover"
            overflow="hidden"
            style={[styles.video, {transform: [{scaleX: -1}]}]}
            repeat={true}
            mirrorVideo={true}
            onLoad={() => {
              setPauseMirrorVideo(true);
            }}
            paused={pauseMirrorVideo}
          />
        </View>
      </View>
      <View style={styles.buttonCon}>
        <Icon name="caret-back" type="ionicon" size={iconSizes.buttonSize} />
        <Icon
          name="caret-forward-outline"
          type="ionicon"
          size={iconSizes.buttonSize}
        />
      </View>
      <View style={styles.steeringContainer}>
        <PanGestureHandler
          onGestureEvent={event => {
            console.log('event:: ', event.nativeEvent);
            rotation.value = savedRotation.value + event.nativeEvent.absoluteX;
          }}>
          <Animated.Image
            source={images.steering}
            style={[styles.steering, animatedStyle]}
          />
        </PanGestureHandler>
      </View>

      {/* Tooltip */}
      {currentTooltip !== 0 && (
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => {
            setPauseVideo(false);
            setPauseMirrorVideo(false);
            setCurrentTooltip(0);
          }}>
          <>
            <Text style={styles.skipText}>{english.playScreen.skip}</Text>
            <Icon
              name="keyboard-arrow-right"
              type="material"
              color={colors.black}
              size={iconSizes.arrorSkip}
            />
          </>
        </TouchableOpacity>
      )}
      {showTooltip(currentTooltip)}
      <RNAnimated.View
        style={[
          styles.instructionCon,
          {
            height: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [50, 150],
              extrapolate: 'clamp',
            }),
            width: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [45, 250],
              extrapolate: 'clamp',
            }),
            borderTopEndRadius: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [50, 20],
              extrapolate: 'clamp',
            }),
            borderBottomEndRadius: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [50, 20],
              extrapolate: 'clamp',
            }),
            paddingStart: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [10, 40],
              extrapolate: 'clamp',
            }),
          },
        ]}>
        <TouchableOpacity
          style={[styles.instructionExpButton]}
          onPress={startAnimation}>
          <View style={styles.instructionHeader}>
            <Icon name="comment" type="font-awesome" />
            <RNAnimated.Text
              style={[
                styles.instructor,
                {
                  fontSize: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 15],
                    extrapolate: 'clamp',
                  }),
                },
              ]}>
              {english.playScreen.instructor}
            </RNAnimated.Text>
          </View>
          <RNAnimated.Text
            style={[
              styles.instructionText,
              {
                fontSize: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 23],
                  extrapolate: 'clamp',
                }),
              },
            ]}>
            {english.playScreen.takeSecondExit}
          </RNAnimated.Text>
        </TouchableOpacity>
      </RNAnimated.View>
    </View>
  );
};

export default PlayVideoScreen;
