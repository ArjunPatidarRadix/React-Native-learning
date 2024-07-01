import React, {createContext, useState} from 'react';

export interface IGroup {
  id: number;
  currentGroupName: string;
  messages: IMessages[];
}

export interface IMessages {
  id: string;
  currentUser: string;
  text: string;
  time: string;
}
interface IContextProp {
  showLoginView: boolean;
  setShowLoginView: (value: boolean) => void;
  currentUserName: string;
  setCurrentUsername: (value: string) => void;
  currentUser: string;
  setCurrentUser: (value: string) => void;
  allUsers: string[];
  setAllUsers: (value: string[]) => void;
  allChatRooms: IGroup[];
  setAllChatRooms: (value: IGroup[]) => void;
  setModalVisible: (value: boolean) => void;
  modalVisible: boolean;
  currentGroupName: string;
  setCurrentGroupName: (value: string) => void;
  allChatMessages: IMessages[];
  setAllChatMessages: (value: IMessages[]) => void;
}

export const GlobalContext = createContext<IContextProp>(null);

function GLobalState({children}) {
  const [showLoginView, setShowLoginView] = useState(false);
  const [currentUserName, setCurrentUsername] = useState<string>('');
  const [currentUser, setCurrentUser] = useState<string>('');
  const [allUsers, setAllUsers] = useState<string[]>([]);
  const [allChatRooms, setAllChatRooms] = useState<IGroup[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [currentGroupName, setCurrentGroupName] = useState<string>('');
  const [allChatMessages, setAllChatMessages] = useState<IMessages[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        showLoginView,
        setShowLoginView,
        currentUserName,
        setCurrentUsername,
        currentUser,
        setCurrentUser,
        allUsers,
        setAllUsers,
        allChatRooms,
        setAllChatRooms,
        modalVisible,
        setModalVisible,
        currentGroupName,
        setCurrentGroupName,
        allChatMessages,
        setAllChatMessages,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GLobalState;
