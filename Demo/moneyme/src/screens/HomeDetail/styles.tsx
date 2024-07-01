import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Colors } from '../../constants/Color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.green,
  },
  musicImage: {
    width: "100%",
    height: 350
  },
  mainBottomVw: {
    minHeight: '100%',
    backgroundColor: Colors.green,
    width: "100%",
    borderTopRightRadius: 50,
    zIndex: 100,
    bottom: 40,
    paddingBottom: 40,
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
  },
  backBtn: {
    width: '10%',
    marginTop: Platform.OS === 'ios' ? 20 : 40,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtVw: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 60,
    paddingLeft: 18
  },
  artstTxt: {
    color: Colors.white,
    fontSize: hp('3%'),
    fontWeight: 'bold'
  },
  collectionTxt: {
    color: Colors.white,
    marginBottom: 5,
    fontSize: hp('1.5%'),
  },
  mainTabVw: {
    margin: 10,
    flexDirection: 'row',
    padding: 10,
    marginTop: 20,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1
  },
  tabVw: {
    width: "50%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabTitleTxt: {
    color: Colors.black,
    fontWeight: '700',
    marginTop: 5,
    fontSize: hp('2%')
  },
  tabDetailTxt: {
    color: Colors.black,
    fontSize: hp('1.7%')
  },
  albumTxt: {
    color: Colors.black,
    fontWeight: '700',
    marginTop: 5,
    fontSize: hp('2%'),
    marginLeft: 15
  },
  artImg: {
    height: Dimensions.get("screen").width / 3,
    width: Dimensions.get("screen").width / 3,
    borderRadius: 10
  },
  mainCardView: {
    flexDirection: 'row',
    backgroundColor: Colors.black,
    overflow: 'hidden',
    borderRadius: 10,
    margin: 10,
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
  },
  cardTxtVw: {
    padding: 15,
    width: "64%"
  },
  cardTitleTxt: {
    color: Colors.white,
    fontSize: hp('2%'),
    fontWeight: 'bold'
  },
  yrTxt: {
    color: Colors.white,
    marginTop: 5,
    fontSize: hp('1.5%'),
  }
});

export default styles;
