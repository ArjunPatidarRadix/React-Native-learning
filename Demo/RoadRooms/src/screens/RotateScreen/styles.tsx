import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { moderateScale } from "react-native-size-matters";
import { marginSizes, paddingSizes } from "../../theme/sizes";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.redBackground,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: paddingSizes.md,
    width: "100%",
    height: "100%",
  },
  rotateText: {
    color: colors.whiteTextColor,
    fontSize: moderateScale(35),
    marginBottom: marginSizes.sm,
  },
});
