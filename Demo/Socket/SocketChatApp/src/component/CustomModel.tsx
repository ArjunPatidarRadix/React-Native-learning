import React, {useContext} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {GlobalContext} from '../context';
import {colors} from '../theme/colors';
import {socket} from '../utils/constant/AppConstants';

const CustomModel = () => {
  const {modalVisible, setModalVisible, setCurrentGroupName, currentGroupName} =
    useContext(GlobalContext);

  const handleCreateGroup = () => {
    socket.emit('createNewGroup', currentGroupName);
    setModalVisible(false);
    setCurrentGroupName('');
    Keyboard.dismiss();
  };

  return (
    // <View style={styles.centeredView}>
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <TextInput
            value={currentGroupName}
            onChangeText={setCurrentGroupName}
            style={styles.inputStyle}
            placeholder="Enter group name"
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              activeOpacity={0.5}
              style={styles.button}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleCreateGroup()}
              activeOpacity={0.5}
              style={styles.button}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  inputStyle: {
    height: 48,
    borderWidth: 1,
    marginTop: 14,
    marginBottom: 35,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  button: {
    backgroundColor: colors.secondaryAppColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 10,
    flex: 1,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    textDecorationStyle: 'solid',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CustomModel;
