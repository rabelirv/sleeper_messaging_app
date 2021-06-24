import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback, useEffect }  from 'react';
import { StyleSheet, Text, ScrollView, TextInput, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default function ChatContainer() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState()
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const getGif = ()=>{
    fetch(`http://api.giphy.com/v1/gifs/trending?api_key=Awq5410QQl0416nJogqlsinldM2s9PCA`)
    .then(res => res.json())
    .then(res =>console.log(res))
  }



  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      renderActions={()=><Button title="GIF" onPress={getGif}/>}
      user={{
        _id: 1,
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    position: 'absolute',
    bottom: '10%',
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    }
});
