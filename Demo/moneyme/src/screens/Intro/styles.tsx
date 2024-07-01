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
    musicVw: {
        height: "60%",
        alignItems: 'center',
        justifyContent: 'center',
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
    musicImg: {
        height: 325,
        width: 300,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        borderTopLeftRadius: 150,
        borderTopRightRadius: 150
    },
    musicTxt: {
        color: Colors.black,
        marginLeft: 50,
        marginRight: 50,
        fontWeight: '600',
        textAlign: 'center',
        fontSize: hp('3.5%'),
    },
    listenTxt: {
        color: Colors.grey,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
        textAlign: 'center',
        fontSize: hp('1.7%'),
    }
});
export default styles;