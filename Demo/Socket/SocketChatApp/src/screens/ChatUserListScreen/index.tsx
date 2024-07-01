import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {styles} from './styles';
import {GlobalContext, IGroup} from '../../context';
import CustomModel from '../../component/CustomModel';
import ChatListComponent from '../../component/ChatListComponent';
import {socket} from '../../utils/constant/AppConstants';
import {ENTER_NAME_SCREEN} from '../../utils/constant/ScreenConstants';

interface IProps {
  navigation: any;
  route: any;
}

const ChatUserListScreen = ({navigation, route}: IProps) => {
  const {
    allUsers,
    currentUser,
    allChatRooms,
    modalVisible,
    setModalVisible,
    setAllChatRooms,
    setCurrentUser,
  } = useContext(GlobalContext);

  useEffect(() => {
    socket.emit('getAllGroups');
    socket.on('groupList', (groups: IGroup[]) => {
      console.log('groups : ', groups);
      setAllChatRooms(groups);
    });
  }, [socket]);

  useEffect(() => {
    if (!currentUser) {
      navigation.navigate(ENTER_NAME_SCREEN);
    }
  }, [currentUser]);

  const handleLogout = () => {
    setCurrentUser('');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{`Welcome ${currentUser}`}</Text>
        <Text onPress={handleLogout} style={styles.logout}>
          Logout
        </Text>
      </View>
      <View style={styles.secContainer}>
        <FlatList
          data={allChatRooms || []}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <ChatListComponent
                key={item.id}
                groupItem={item}
                navigation={navigation}
              />
            );
          }}
        />
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.bottomContainer}>
          <Text style={styles.buttonText}>Create new group</Text>
        </TouchableOpacity>
      </View>
      <CustomModel />
    </SafeAreaView>
  );
};

export default ChatUserListScreen;
