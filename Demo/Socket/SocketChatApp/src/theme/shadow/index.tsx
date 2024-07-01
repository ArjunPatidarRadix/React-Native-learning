import {Platform} from 'react-native';

export const shadows = {
  indicateDepth: (depth: number) =>
    Platform.OS === 'android'
      ? {
          elevation: depth,
          margin: depth,
          shadowRadius: 3,
        }
      : {
          shadowOffset: {width: 0, height: depth},
          shadowColor: 'grey',
          shadowOpacity: 0.5,
          shadowRadius: depth,
          margin: depth,
        },
};
