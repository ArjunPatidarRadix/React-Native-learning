import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// import { FontAwesome } from '@expo/vector-icons';

interface TextFieldProps {
  placeholder: string;
  isSecure?: boolean;
  onTextChange: Function;
}

export const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  isSecure = false,
  onTextChange,
}) => {
  const [isPassword, setIsPassword] = useState(false);

  useEffect(() => {
    setIsPassword(isSecure);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        autoCapitalize="none"
        secureTextEntry={isPassword}
        onChangeText={text => onTextChange(text)}
        style={styles.textField}
      />
      {isSecure && (
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => setIsPassword(!isPassword)}>
          {/* <Image
            style={{ width: 60, height: 30 }}
            source={
              isPassword
                ? require('../images/show.png')
                : require('../images/hide.png')
            }
          /> */}

          {/* <FontAwesome name= {isPassword ? "eye" : "eye-slash"} size={24} color="black" /> */}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp('7%'),
    borderRadius: 30,
    backgroundColor: '#CBCBCB',
    justifyContent: 'center',
    width: wp('70%'),
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    paddingLeft: 20,
    paddingRight: 10,
  },
  textField: {
    flex: 1,
    height: 50,
    fontSize: hp('2%'),
    color: '#000',
  },
});
