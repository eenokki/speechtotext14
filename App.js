import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [dialog, setDialog] = useState("");

  const speak = () => {
    Speech.speak(dialog, { language: 'en' });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setDialog}
        value={dialog}
      />
      <Button
        title="Press to hear text"
        onPress={speak}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    padding: 10,
    marginBottom: 25
  }
});
