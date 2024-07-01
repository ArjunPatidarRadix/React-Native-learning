import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  headerContainer: {
    flexDirection: 'row',
    height: 52,
    borderBottomWidth: 0.5,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.placeholderTextColor,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.black,
    fontSize: 18,
  },
  logout: {
    color: colors.secondaryAppColor,
    fontSize: 18,
  },
  secContainer: {
    padding: 24,
    flex: 1,
  },
  bottomContainer: {
    backgroundColor: colors.secondaryAppColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    textDecorationStyle: 'solid',
  },
});
