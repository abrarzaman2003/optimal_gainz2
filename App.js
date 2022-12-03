import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { testing } from './Firebase/firebase.js';
import { logIn, register } from './Firebase/firebaseAuth.js';
import {createObject, createWorkout} from './Firebase/fireStoreController';
import { getWorkoutInfo, loginUser, makeUser } from './Firebase/functions.js';

export default function App() {
  const onPressLearnMore = async () =>{
    const a = await getWorkoutInfo("EzQJ4aIV6o4poWrk7IV4");
  }
  return (
    <View style={styles.container}>
      <Text> Open up App.js to start working! </Text>
      <StatusBar style="auto" />
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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
});
