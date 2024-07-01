import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {styles} from './styles';
import {GlobalContext} from '../../context';
import MessageComponent from '../../component/MessageComponent';
import {socket} from '../../utils/constant/AppConstants';

interface IProps {
  navigation: any;
  route?: {
    params: {
      currentGroupName: string;
      currentGroupId: number;
    };
  };
}

const ChatScreen = ({navigation, route = {params: {}}}: IProps) => {
  const {currentGroupName, currentGroupId} = route?.params;

  const {allChatMessages, setAllChatMessages, currentUser} =
    useContext(GlobalContext);

  const [currentChatMessage, setCurrentChatMessage] = useState('');

  const handleAddNewMessage = () => {
    const hour = new Date().getHours();
    const mins = new Date().getMinutes();
    const timeData = {
      hr: hour < 10 ? `0${hour}` : hour,
      mins: mins < 10 ? `0${mins}` : mins,
    };

    if (currentUser) {
      socket.emit('newChatMessage', {
        currentChatMessage,
        groupIdentifier: currentGroupId,
        currentUser,
        timeData,
      });

      setCurrentChatMessage('');
    }
  };

  useEffect(() => {
    socket.emit('findGroup', currentGroupId);
    socket.on('foundGroup', allChats => {
      console.log('All chats: ', allChats);
      setAllChatMessages(allChats);
    });
  }, [socket]);

  const ref = useRef<FlatList>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList
          automaticallyAdjustKeyboardInsets={true}
          ref={ref}
          onContentSizeChange={() =>
            ref?.current?.scrollToEnd({animated: true})
          }
          data={allChatMessages}
          keyExtractor={item => item.id.toString()}
          style={{marginBottom: 65, marginTop: 10}}
          renderItem={({item}) => {
            return (
              <MessageComponent
                key={item.id}
                messageItem={item}
                currentUser={currentUser}
              />
            );
          }}
        />
        <View style={styles.flexRow}>
          <View style={{flex: 0.75}}>
            <TextInput
              value={currentChatMessage}
              onChangeText={setCurrentChatMessage}
              style={styles.inputStyle}
              placeholder="Enter your message"
            />
          </View>
          <TouchableOpacity
            onPress={() => handleAddNewMessage()}
            activeOpacity={0.5}
            style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
