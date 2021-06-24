import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, TextInput } from 'react-native';

export default function ChatWindow() {
  return (
    <ScrollView style={styles.container}>
      <Text>Sup </Text>
      <StatusBar style="auto" />
      <TextInput style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
        }}
        defaultValue="You can type in me"/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
