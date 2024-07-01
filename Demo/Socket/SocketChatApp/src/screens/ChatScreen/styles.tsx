import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  inputStyle: {
    height: 48,
    borderWidth: 1,
    marginVertical: 14,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: colors.secondaryAppColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 10,
    flex: 0.21,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    textDecorationStyle: 'solid',
  },
});
