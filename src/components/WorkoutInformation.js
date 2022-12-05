import React,{useEffect, useState} from "react";
import { GestureDetector } from "react-native-gesture-handler";
import { Keyboard, StyleSheet, Pressable, View, Text, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';
import { getWorkoutInfo, editWorkOut } from "../../Firebase/functions";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import { editWorkout } from "../../Firebase/fireStoreController";
function WorkoutInformation( {route,navigation} )
{
  console.log('clg route workoutinfo: ', route)
  const[workoutInfo, setWorkoutInfo] = useState({});
  //const[loaded, setLoaded] = useState(false);

  useEffect(()=>{
    retrieveWorkoutInfo();
  },[setWorkoutInfo]);

  const retrieveWorkoutInfo = async ()=>{
    const w = await getWorkoutInfo(route.params.id);
    setWorkoutInfo(w);
    //setLoaded(true);
  }

  const[repCount, setRepCount] = useState(0);
  const[setCount, setSetCount] = useState(0);
  const[weight, setWeight] = useState(0);

  const testReps = async () =>{
    console.log("hi");
    console.log(route.params.userId,route.params.id,setCount,repCount,weight);
    const a = await editWorkout(route.params.userId,route.params.id,setCount,repCount,weight);
  }


  return(
    <GestureRecognizer style={{
      backgroundColor: "#575757",
      flex: 1,
      alignItems: "center"}}
      onSwipeLeft={() => navigation.navigate("Home")}
      onPress={() => navigation.navigate("Home")}
      >
      <View style={{backgroundColor: "#575757", flex: 0.5, alignItems: "center", justifyContent: "center"}}>
        <Text style={{fontSize: 48,}}> {workoutInfo.workoutName} </Text>
      </View>
      <View style={{
        backgroundColor: "#c02d0c",
        flex: 0.5,
        borderRadius: 15,
        width: "90%",}}>
        <Text style={{fontSize: 22, padding: "5%",}}>
        {workoutInfo.workoutNotes}</Text>
      </View>
      <View style={{
        flexDirection: "row", 
        marginTop: "5%",
        marginHorizontal: "5%",
        alignItems: "center",
        }}>
        <TextInput style={{
            height: 40,
            width: 80,
            borderwidth: 1,
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 10,
          }}
          onChangeText= {newText => setRepCount(newText)}
          placeholder="Reps"
        />
        <View style={{
          padding: 5,
        }}/>
        <TextInput style={{
          height: 40,
          width: 80,
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 10,
        }}
        onChangeText= {newText => setSetCount(newText)}
        placeholder="Sets"
        />
        <View style={{
          padding: 5,
        }}/>
        <TextInput style={{
          height: 40,
          width: 80,
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 10,
        }}
        onChangeText= {newText => setWeight(newText)}
        placeholder="Weight"
        />
        <View style={{
          padding: 5,
        }}/>
        <Pressable onPress={testReps}
            style={{
            backgroundColor: "gold",
            alignItems: "center",
            textAlign: "center",
            flex: 1,
            borderRadius: 10,
            }}>
              <View>
                <Text style={{fontSize: 32,}}>test reps</Text>
              </View>
        </Pressable>
      </View>
      <View style={{backgroundColor: "dodgerblue", flex: 0.3}}></View>
    </GestureRecognizer>
  );
}

export default WorkoutInformation;