import { StyleSheet, Platform } from 'react-native';
import { Colors } from '../../constants/Color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green
  },
  searchVw: {
    flexDirection: 'row',
    height: hp('5%'),
    borderRadius: 30,
    borderColor: Colors.black,
    borderWidth: 1.5,
    backgroundColor: 'transparent',
    width: wp('90%'),
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: Platform.OS === "ios" ? 10 : 40,
    paddingLeft: 20,
    paddingRight: 10,
  },
  srchInput: {
    width: "93%"
  },
  closeBtn: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  topTabVw: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topTabBar: {
    width: "48%",
    backgroundColor: Colors.black,
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topBtnTxt: {
    color: Colors.white,
    fontWeight: '600',
    textAlign: 'center',
    fontSize: hp('1.7%')
  },
  flatVw: {
    flex: 1,
    width: "90%",
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flatCardVw: {
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 2 },
        shadowColor: Colors.black,
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
    backgroundColor: Colors.black,
    overflow: 'hidden',
    width: "45%",
    borderRadius: 20,
    margin: 8
  },
  musicImage: {
    height: 125,
    width: "100%"
  },
  nameTxt: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 5,
    fontSize: hp('2.2%'),
    fontWeight: '600',
    color: Colors.white

  },
  detailTxt: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 15,
    fontSize: hp('1.5%'),
    color: Colors.white
  },
  homeImage: {
    height: 100,
    width: 100
  },
  noDataVw: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  noDataTxt: {
    marginTop: 20,
    fontSize: hp('2%'),
    color: Colors.grey,
    padding: 10,
    textAlign: 'center'
  }
});
export default styles;
