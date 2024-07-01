import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {io} from 'socket.io-client';
import {MainStackParamList} from '../navigation/MainStack';
import {ChatBubble} from '../components/ChatBubble';

const socket = io('http://192.168.0.102:3000');

type ChatScreenProps = NativeStackScreenProps<MainStackParamList, 'ChatScreen'>;

export interface messagesType {
  id: string;
  message: string;
}

export const ChatScreen = ({route}: ChatScreenProps) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<messagesType[]>([]);
  const username = route.params.username;
  useEffect(() => {
    socket.on('message', msg => {
      setMessages([...messages, msg]);
    });
  }, [messages]);

  const sendMessage = () => {
    // Sending a message
    if (message.trim() !== '' && username !== '') {
      socket.emit('message', {id: username, message: message});
      setMessage('');
    }
  };
  const listEmptyComponent = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Welcome to Chat</Text>
        <Text></Text>
      </View>
    );
  };
  return (
    <View
      // keyboardVerticalOffset={Platform.OS === 'ios' ? 94 : 0}
      style={{flex: 1, justifyContent: 'center', padding: 10, margin: 10}}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <ChatBubble
            key={index}
            id={item.id}
            message={item.message}
            self={item.id === username ? true : false}
          />
        )}
        ListEmptyComponent={listEmptyComponent}
        automaticallyAdjustKeyboardInsets={true}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <TextInput
          style={{
            flex: 1,
            borderColor: 'gray',
            borderWidth: 1,
            marginRight: 10,
            padding: 10,
            borderRadius: 10,
          }}
          onChangeText={text => setMessage(text)}
          value={message}
        />
        <Button onPress={sendMessage} title="Send" />
      </View>
    </View>
  );
};
