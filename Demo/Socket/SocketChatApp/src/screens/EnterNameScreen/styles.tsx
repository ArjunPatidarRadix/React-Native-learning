import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
  },
  secContainer: {
    flex: 1,
  },
  inputStyle: {
    height: 48,
    borderWidth: 1,
    marginTop: 14,
    marginBottom: 35,
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
  },
  titleText: {
    fontSize: 25,
    color: colors.black,
    marginTop: 50,
  },
  button: {
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
