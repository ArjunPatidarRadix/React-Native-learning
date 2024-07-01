import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {GlobalContext, IGroup, IMessages} from '../context';
import {colors} from '../theme/colors';

interface IProps {
  messageItem: IMessages;
  currentUser: String;
}

const MessageComponent: React.FC<IProps> = ({
  messageItem,
  currentUser,
}: IProps) => {
  const currentUserStatus = messageItem.currentUser !== currentUser;
  return (
    <View
      style={[
        styles.mainContainer,
        currentUserStatus ? {} : {alignItems: 'flex-end'},
      ]}>
      <View style={styles.messageItemWrapper}>
        <View
          style={[
            styles.messageInnerItemWrapper,
            {
              ...(!currentUserStatus && {
                backgroundColor: colors.secondaryAppColor,
              }),
            },
          ]}>
          <Text
            style={[
              styles.messageText,
              {
                ...(!currentUserStatus && {
                  color: colors.white,
                }),
              },
            ]}>
            {messageItem.text}
          </Text>
        </View>
        <Text style={styles.timeText}>{messageItem.time}</Text>
      </View>
    </View>
  );
};

export default MessageComponent;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 15,
  },
  messageItemWrapper: {
    maxWidth: '50%',
    marginBottom: 15,
  },
  messageInnerItemWrapper: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
  },
  messageText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '500',
  },
  timeText: {
    marginTop: 5,
    color: colors.black,
  },
});
