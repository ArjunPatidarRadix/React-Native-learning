import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface chatBubbleType {
  id: string;
  message: string;
  self: boolean;
}

export const ChatBubble = ({id, message, self}: chatBubbleType) => {
  return (
    <>
      <View
        style={[
          styles.container,
          {
            justifyContent: self ? 'flex-end' : 'flex-start',
            alignSelf: self ? 'flex-end' : 'flex-start',
            backgroundColor: self ? '#C4C4C4' : '#AAEDCE',
          },
        ]}>
        <View>
          {!self && <Text style={styles.username}>{id}</Text>}
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderRadius: 10,
    width: '50%',
    padding: 10,
    marginBottom: 3,
  },
  username: {
    fontWeight: '500',
    fontStyle: 'italic',
    fontSize: 12,
  },
  message: {
    fontSize: 16,
  },
});
