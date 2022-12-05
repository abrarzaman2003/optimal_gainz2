import React from "react";
import { GestureDetector } from "react-native-gesture-handler";
import { Keyboard, StyleSheet, Pressable, View, Text, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';


function WorkoutInformation( {navigation} )
{
  return(
    <GestureRecognizer style={{
      backgroundColor: "dodgerblue",
      flex: 1,
      alignItems: "center"}}
      onSwipeLeft={() => navigation.navigate("Home")}
      onPress={() => navigation.navigate("Home")}
      >
      <View style={{backgroundColor: "dodgerblue", flex: 0.5, alignItems: "center", justifyContent: "center"}}>
        <Text style={{fontSize: 48,}}> Workout Title </Text>
      </View>
      <View style={{
        backgroundColor: "tomato",
        flex: 1.5,
        borderRadius: 15,
        width: "90%",}}>
        <Text style={{fontSize: 22, padding: "5%",}} adjustsFontSizeToFit={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
        est laborum.</Text>
      </View>
      <View style={{backgroundColor: "dodgerblue", flex: 0.3}}></View>
    </GestureRecognizer>
  );
}

export default WorkoutInformation;