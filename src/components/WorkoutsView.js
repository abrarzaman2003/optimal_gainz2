import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, Pressable, View, Text, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';

import auth from '../../Firebase/firebaseAuth';
const WorkoutsView = () => {
    
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.home}>
          <ScrollView style={styles.grid} contentContainerStyle={{justifyContent: "center"}}>
            {/* Here is scrollable body */}
            <View style={{
              flex: 1,
              textAlign: "center",
              marginVertical: "5%",
              marginHorizontal: "15%",
              borderRadius: 10,
              backgroundColor: "white",
            }}>
              <Greeting time="morning" name={auth.currentUser?.email}/>
            </View>
            <View style={styles.row}>
              <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout", {id: auth.currentUser?.uid, userId:route.params.id})}>
                <Text style={styles.text}>
                  Dumbells Incline Press
                </Text>
              </Pressable>
              <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout", {id: "vFFS36h72WL1tIS4F1t6", userId:route.params.id})}>
                <Text style={styles.text}>
                  Bench Press
                </Text>
              </Pressable>
            </View>
            <View style={styles.row}>
              <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout", {id: "UBhyPaoEOQOKDoVXgO3r", userId:route.params.id})}>
                <Text style={styles.text}>
                  Dumbell Bench Press
                </Text>
              </Pressable>
              <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout", {id: "yydSFEXHLPmCzLSmk1R1", userId:route.params.id})}>
                <Text style={styles.text}>
                  Military Press
                </Text>
              </Pressable>
            </View>
            <View style={styles.row}>
              <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout", {id: "w7kDr8dc9iG3vc1l4lYw", userId:route.params.id})}>
                <Text style={styles.text}>
                  Overhead Press
                </Text>
              </Pressable>
              <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout", {id: "Td0HuI9SBqyKH5CBYz0i", userId:route.params.id})}>
                <Text style={styles.text}>
                  Romainian Deadlift
                </Text>
              </Pressable>
            </View>
            <View style={styles.row}>
            </View>
            <View style={{
              marginHorizontal: "10%",
              marginVertical: "20%",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <Pressable onPress={() => navigation.navigate("CreateCustomWorkout")}
              style={{
              backgroundColor: "gold",
              textAlign: "center",
              borderRadius: 10,
              width: "80%",
              }}>
                <View>
                  <Text style={{fontSize: 48,}}>Add workout</Text>
                </View>
              </Pressable>
            </View>
          </ScrollView>
        </SafeAreaView>
      );

}

const Greeting = (props) => {
    return (
      <View>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Good {props.time}{props.name}!</Text>
      </View>
    );
  }
const styles = StyleSheet.create({
    home: {
        backgroundColor: "white",
        flex: 2,
        alignItems: "center",
    },
  
    text: {
        fontFamily: "Futura",
        fontSize: 32,
        alignItems: "center",
        justifyContent: "center",
    },
  
    grid: {
      flex: 2,
      width: "90%",
      backgroundColor: "#white",
      borderRadius: 10,
      marginVertical: "5%",
      paddingHorizontal: "5%",
    },
  
    griditem: {
      flex: 1,
      textAlign: "center",
      backgroundColor: "white",
      borderColor: "#53595D",
      borderWidth: 5,
    },
  
    row: {
      flexDirection: "row",
    }
  });

export default WorkoutsView;