import {Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
// describing sizes for styling components and text
export const fontSizes = {
  xs: moderateScale(4),
  xss: moderateScale(6),
  sm: moderateScale(8),
  m: moderateScale(10),
  ssm: moderateScale(12),
  smm: moderateScale(14),
  md: moderateScale(16),
  mdd: moderateScale(18),
  lg: moderateScale(20),
  xl: moderateScale(24),
  xxl: moderateScale(26),
  xlll: moderateScale(32),
  xll: moderateScale(34),
};

export const paddingSizes = {
  xs: moderateScale(4),
  xss: moderateScale(6),
  sm: moderateScale(8),
  m: moderateScale(10),
  ssm: moderateScale(12),
  smm: moderateScale(14),
  md: moderateScale(16),
  mdd: moderateScale(18),
  lg: moderateScale(20),
  xl: moderateScale(24),
  xxl: moderateScale(26),
  xlll: moderateScale(32),
  xll: moderateScale(34),
};

export const marginSizes = {
  xs: moderateScale(4),
  xss: moderateScale(6),
  sm: moderateScale(8),
  m: moderateScale(10),
  ssm: moderateScale(12),
  smm: moderateScale(14),
  md: moderateScale(16),
  mdd: moderateScale(18),
  lg: moderateScale(20),
  xl: moderateScale(24),
  xxl: moderateScale(26),
  xlll: moderateScale(32),
  xll: moderateScale(34),
};

export const sizes = {
  micro: moderateScale(1),
  xxs: moderateScale(2),
  xs: moderateScale(4),
  xss: moderateScale(6),
  sm: moderateScale(8),
  m: moderateScale(10),
  ssm: moderateScale(12),
  smm: moderateScale(14),
  md: moderateScale(16),
  mdd: moderateScale(18),
  lg: moderateScale(20),
  xl: moderateScale(24),
  xxl: moderateScale(26),
  xlll: moderateScale(32),
  xll: moderateScale(34),
};

// default parameters used in app
export const appParams = {
  padding: paddingSizes.md,
  margin: marginSizes.lg,
  titleFont: fontSizes.lg,
  overlayPadding: paddingSizes.sm,
};

export const iconSizes = {
  default: moderateScale(30),
  buttonIcon: moderateScale(17),
  tiny: moderateScale(20),
  bottomBarIcon: moderateScale(24),
  small: moderateScale(25),
  closeIcon: moderateScale(18),
  rotateIcon: moderateScale(45),
  steeringIcon: moderateScale(150),
  buttonSize: moderateScale(80),
  arrorSkip: moderateScale(25),
  commentIcon: moderateScale(18),
};
