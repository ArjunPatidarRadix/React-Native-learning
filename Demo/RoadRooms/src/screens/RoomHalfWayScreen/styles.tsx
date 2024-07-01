import { Platform, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "../../theme/colors";
import { screenHeight, screenWidth } from "../../theme/sizes";

export const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  imageBg: {
    // flex: 1,
    width: "100%",
    height: "100%",
    alignSelf: "center",
    alignItems: "center",
  },
  videoCon: {
    width: Platform.OS === "web" ? moderateScale(505) : moderateScale(200),
    height: moderateScale(230),
    marginTop: Platform.OS === "web" ? 0 : moderateScale(5),
  },
  video: {
    backgroundColor: colors.white,
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
});
