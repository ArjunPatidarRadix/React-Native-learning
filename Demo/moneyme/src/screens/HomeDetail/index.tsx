import React, { useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Text,
  Image,
  Animated,
} from "react-native";
import styles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import moment from "moment";
import { Colors } from "../../constants/Color";
import { String } from "../../constants/String";

interface Props {
  route?: any;
}

const HomeDetail: React.FC<Props> = ({ route, navigation }) => {
  const slideUpValue = new Animated.Value(0);
  const { musicDetail } = route.params;

  useEffect(() => {
    _start();
  }, []);

  const _start = () => {
    return Animated.parallel([
      Animated.timing(slideUpValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          opacity: slideUpValue,
          transform: [
            {
              scale: slideUpValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0.85, 1],
              }),
            },
          ],
        }}
      >
        <ImageBackground
          style={styles.musicImage}
          resizeMode={"stretch"}
          source={{
            uri: musicDetail.artworkUrl100,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.backBtn}
          >
            <MaterialIcons
              name="arrow-back-ios"
              size={20}
              color={Colors.white}
            />
          </TouchableOpacity>
          <View style={styles.txtVw}>
            <Text style={styles.collectionTxt}>{String.Artist}</Text>
            <Text style={styles.artstTxt}>{musicDetail.artistName}</Text>
          </View>
        </ImageBackground>
        <View style={styles.mainBottomVw}>
          <View style={styles.mainTabVw}>
            <View style={styles.tabVw}>
              <Text style={styles.tabDetailTxt}>{String.FollowersTxt}</Text>
              <Text style={styles.tabTitleTxt}>{musicDetail.country}</Text>
            </View>
            <View style={styles.tabVw}>
              <Text style={styles.tabDetailTxt}>{String.FollowingTxt}</Text>
              <Text style={styles.tabTitleTxt}>
                ${musicDetail.trackPrice ? musicDetail.trackPrice : "0"}
              </Text>
            </View>
          </View>
          <Text style={styles.albumTxt}>{String.Albums}</Text>
          <View style={styles.mainCardView}>
            <Image
              source={{
                uri: musicDetail.artworkUrl100,
              }}
              style={styles.artImg}
              resizeMode={"cover"}
            />
            <View style={styles.cardTxtVw}>
              <Text style={styles.cardTitleTxt}>
                {musicDetail.collectionName}
              </Text>
              <Text style={styles.yrTxt}>
                {moment(musicDetail.releaseDate).format("YYYY")}
              </Text>
            </View>
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default HomeDetail;
