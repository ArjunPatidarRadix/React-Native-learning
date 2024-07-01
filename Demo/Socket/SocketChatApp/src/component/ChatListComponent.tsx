import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {GlobalContext, IGroup} from '../context';
import {colors} from '../theme/colors';
import {CHAT_SCREEN} from '../utils/constant/ScreenConstants';

interface IProps {
  groupItem: IGroup;
  navigation: any;
}

const ChatListComponent: React.FC<IProps> = ({
  groupItem,
  navigation,
}: IProps) => {
  const handleNaigateToChatScreen = () => {
    navigation.navigate(CHAT_SCREEN, {
      currentGroupName: groupItem.currentGroupName,
      currentGroupId: groupItem.id,
    });
  };
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.groupContainer}
      onPress={handleNaigateToChatScreen}>
      <View style={styles.flexRow}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.circle}>
            <Text style={styles.firstText}>
              {groupItem.currentGroupName.charAt(0)}
            </Text>
          </View>
          <View>
            <Text style={styles.groupName}>{groupItem.currentGroupName}</Text>
            <Text>
              {groupItem && groupItem.messages?.length
                ? groupItem.messages[groupItem.messages.length - 1].text
                : 'Tap to start messaging'}
            </Text>
          </View>
        </View>
        <Text>Now</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListComponent;

const styles = StyleSheet.create({
  groupContainer: {
    backgroundColor: colors.white,
    height: 65,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    elevation: 10,
    shadowColor: colors.grayTextColor,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  groupName: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '800',
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: colors.grayTextColor,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 15,
  },
  firstText: {
    color: colors.whiteTextColor,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
