import {
  Text,
  TouchableOpacity,
  View,
  Animated as RNAnimated,
} from "react-native";
import React, { useRef, useState } from "react";

import Animated from "react-native-reanimated";

import Icon from "../../components/Icons/Icon";
import { images } from "../../assets/images";
import { styles } from "./styles";
import { iconSizes, sizes } from "../../theme/sizes";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { english } from "../../utils/strings";
import { colors } from "../../theme/colors";
import { ResizeMode, Video } from "expo-av";
import { Audio } from "expo-av";
import { useFocusEffect } from "@react-navigation/native";

const roadVideo = require("./../../assets/video/road.mp4");

const PlayVideoScreen = () => {
  const rotation = useSharedValue(1);
  const savedRotation = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${(rotation.value / Math.PI) * 5}deg` }],
  }));

  const [currentTooltip, setCurrentTooltip] = useState(1);
  const [recordFile, setRecordFile] = useState<string | undefined>();
  const [recording, setRecording] = useState<Audio.Recording>();
  const [isPlaying, setPlaying] = useState(false);

  const [sound, setSound] = React.useState<Audio.Sound>();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync({ uri: recordFile });
    setPlaying(true);
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function pauseSound() {
    setPlaying(false);
    console.log("pauseSound Sound");
    sound?.unloadAsync();
  }

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      startCountDown();
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    stopCountDown();
    if (recording) {
      setRecording(undefined);
      await recording.stopAndUnloadAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
      });
      const uri = recording.getURI();
      setRecordFile(uri);
      console.log("Recording stopped and stored at", uri);
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        stopRecording();
        pauseSound();
      };
    }, [])
  );

  const showTooltip = (tooltipNumber: number) => {
    switch (tooltipNumber) {
      case 1:
        return (
          <View style={[styles.tooltipCommon, styles.tooltipOne]}>
            <Text style={styles.tooltipText}>
              {english.tooltips.tooltipOne}
            </Text>
            <TouchableOpacity
              onPress={() => setCurrentTooltip(currentTooltip + 1)}
            >
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
              onPress={() => setCurrentTooltip(currentTooltip + 1)}
            >
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
              onPress={() => setCurrentTooltip(currentTooltip + 1)}
            >
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
              onPress={() => setCurrentTooltip(currentTooltip + 1)}
            >
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
                mainVideoRef.current.playAsync();
                mirVideoRef.current.playAsync();
                setCurrentTooltip(0);
              }}
            >
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

  const mainVideoRef = React.useRef(null);
  const mirVideoRef = React.useRef(null);
  const timer = useRef<any>();

  const [timeInSeconds, setTimeInSeconds] = useState(0);

  const startCountDown = () => {
    timer && timer?.current && clearInterval(timer.current);
    timer.current = setInterval(() => {
      setTimeInSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopCountDown = () => {
    timer && timer?.current && clearInterval(timer.current);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.videoCon}>
        <Video
          ref={mainVideoRef}
          source={roadVideo}
          resizeMode={ResizeMode.COVER}
          style={styles.video}
          isLooping={true}
          onLoad={() => {
            mainVideoRef.current.pauseAsync();
          }}
        />
      </View>
      <View style={styles.mirrorCon}>
        <View style={styles.handle} />
        <View style={styles.mirror}>
          <Video
            ref={mirVideoRef}
            source={roadVideo}
            resizeMode={ResizeMode.COVER}
            style={[styles.mirVideo, { transform: [{ scaleX: -1 }] }]}
            videoStyle={{ width: "100%", height: "100%" }}
            isLooping={true}
            useNativeControls
            onLoad={() => {
              mirVideoRef.current.pauseAsync();
            }}
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
          onGestureEvent={(event) => {
            // console.log("event:: ", event.nativeEvent);
            rotation.value = savedRotation.value + event.nativeEvent.absoluteX;
          }}
        >
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
            mainVideoRef.current.playAsync();
            mirVideoRef.current.playAsync();
            setCurrentTooltip(0);
          }}
        >
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

      {currentTooltip == 0 && (
        <View style={styles.recordContainer}>
          <View style={styles.flexRow}>
            <Icon
              name={recording ? "microphone-slash" : "microphone"}
              onPress={recording ? stopRecording : startRecording}
              type="font-awesome"
              color={colors.white}
              size={iconSizes.arrorSkip}
            />
            {timeInSeconds !== 0 && (
              <Text style={styles.timeText}>{timeInSeconds}</Text>
            )}
          </View>
          {recordFile && (
            <View style={styles.flexRow}>
              <Icon
                name={isPlaying ? "pausecircle" : "play"}
                onPress={isPlaying ? pauseSound : playSound}
                type="antdesign"
                color={colors.white}
                size={iconSizes.arrorSkip}
              />
              <Icon
                name={"delete"}
                onPress={() => {
                  setTimeInSeconds(0);
                  setRecordFile(undefined);
                }}
                type="material"
                color={colors.white}
                size={iconSizes.arrorSkip}
              />
            </View>
          )}
        </View>
      )}

      {showTooltip(currentTooltip)}
      <RNAnimated.View
        style={[
          styles.instructionCon,
          {
            height: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [50, 150],
              extrapolate: "clamp",
            }),
            width: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [45, 250],
              extrapolate: "clamp",
            }),
            borderTopEndRadius: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [50, 20],
              extrapolate: "clamp",
            }),
            borderBottomEndRadius: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [50, 20],
              extrapolate: "clamp",
            }),
            paddingStart: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [10, 40],
              extrapolate: "clamp",
            }),
          },
        ]}
      >
        <TouchableOpacity
          style={[styles.instructionExpButton]}
          onPress={startAnimation}
        >
          <View style={styles.instructionHeader}>
            <Icon
              name="comment"
              type="font-awesome"
              size={iconSizes.commentIcon}
            />
            <RNAnimated.Text
              style={[
                styles.instructor,
                {
                  fontSize: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 15],
                    extrapolate: "clamp",
                  }),
                },
              ]}
            >
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
                  extrapolate: "clamp",
                }),
              },
            ]}
          >
            {english.playScreen.takeSecondExit}
          </RNAnimated.Text>
        </TouchableOpacity>
      </RNAnimated.View>
    </View>
  );
};

export default PlayVideoScreen;
