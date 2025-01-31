import {io} from 'socket.io-client';

const SOCKET_URL = 'ws://localhost:3000';

class WSService {
  initializeSocket = async () => {
    try {
      this.socket = io(SOCKET_URL, {
        transports: ['websocket'],
      });
      // this.socket = io.connect(SOCKET_URL);
      console.log('initializing socket', this.socket);

      this.socket.on('connect', data => {
        console.log('=== socket connected ====');
      });

      this.socket.on('disconnect', data => {
        console.log('=== socket disconnected ====');
      });

      this.socket.on('error', data => {
        console.log('socekt error', data);
      });
    } catch (error) {
      console.log('scoket is not inialized', error);
    }
  };

  emit(event, data = {}) {
    this.socket.emit(event, data);
  }

  on(event, cb) {
    this.socket.on(event, cb);
  }
  removeListener(listener) {
    this.socket.removeListener(listener);
  }
}

const socketServices = new WSService();

export default socketServices;
