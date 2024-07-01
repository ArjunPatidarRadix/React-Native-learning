import {Platform} from 'react-native';
import {io} from 'socket.io-client';

export const isShowTooltipOnLogin = false;
export const IS_AUTO_REFRESH_ORDERS = true;
export const BASE_URL =
  Platform.OS === 'android' ? 'http://10.0.2.2:3000/' : 'hrrp://localhost:3000';

export const socket = io.connect('http://10.0.2.2:4000/');
