import React, { useCallback, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { auth, db } from '../../firebase/config';
import { signOut } from 'firebase/auth';
import { collection, addDoc, getDocs, query, orderBy, onSnapshot } from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const signOutNow = () => {
      signOut(auth).then(() => {
          // Sign-out successful.
          navigation.replace('LoginScreen');
      }).catch((error) => {
          // An error happened.
      });
  }
  useLayoutEffect(() => {
      navigation.setOptions({
          headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                  <Avatar
                      rounded
                      source={{
                          uri: auth?.currentUser?.photoURL,
                      }}
                  />
              </View>
          ),
          headerRight: () => (
              <TouchableOpacity style={{
                  marginRight: 10
              }}
                  onPress={signOutNow}
              >
                  <Text>logout</Text>
              </TouchableOpacity>
          )
      })

      const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
          snapshot.docs.map(doc => ({
              _id: doc.data()._id,
              createdAt: doc.data().createdAt.toDate(),
              text: doc.data().text,
              user: doc.data().user,
          }))
      ));

      return () => {
        unsubscribe();
      };

  }, [navigation]);

  const onSend = useCallback((messages = []) => {
      const { _id, createdAt, text, user,} = messages[0]

      addDoc(collection(db, 'chats'), { _id, createdAt,  text, user });
  }, []);
  
  return (
    <View>
      <Text>ChatScreen</Text>
      <GiftedChat 
      messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: auth?.currentUser?.displayName,
                avatar: auth?.currentUser?.photoURL
            }} />
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})