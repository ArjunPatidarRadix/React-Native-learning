import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Color';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.green,
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  moneyMeImg: {
    width: 200,
    height: 150
  }
});
export default styles;
