import React, {useState} from "react";
import { Keyboard, StyleSheet, Pressable, View, Text, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';
import { createWorkout } from "../../Firebase/fireStoreController";



function CreateCustomWorkout( {navigation} )
{
  
    const [initWorkoutName,setWorkoutName] = useState("");
    const [initWorkoutType,setWorkoutType] = useState("");
    const [initWorkoutDate,setWorkoutDate] = useState("");
    const [initWorkoutTime,setWorkoutTime] = useState("");
    const [initWorkoutDuration,setWorkoutDuration] = useState("");
    const [initWorkoutNotes,setWorkoutNotes] = useState("");
    const [initWorkoutSets,setWorkoutSets] = useState("");
    const [initWorkoutReps,setWorkoutReps] = useState("");
    const [initWorkoutWeights,setWorkoutWeights] = useState("");

  const [workout, setWorkout] = useState({})
  // const [loggedIn, setLoggedIn] = useState(false);
  // console.log('clg id in cw: ', auth.currentUser?.uid);
  // console.log('clg email in cw: ', auth.currentUser?.email);
  const createWrk = async () => {
    console.log(initWorkoutName)
    console.log(initWorkoutType)
    const a = await createWorkout(initWorkoutName,initWorkoutType,initWorkoutDate, initWorkoutTime, initWorkoutDuration, initWorkoutNotes,
      initWorkoutSets, initWorkoutReps, initWorkoutWeights);
    console.log(a);
    
    if (typeof a === 'object'){
      setWorkout(a);
      // setLoggedIn(true);
    }
    

  }
  // useEffect(()=>{
  //   if (loggedIn){
  //     navigation.navigate('Home', {... user})
  //   }
  // },[loggedIn]);


  return(
    //TODO: clicking submit should verify text fields and store data in DB
    //TODO: when typing in the big textInput,
    //      you need to be able to tap somewhere to dismiss the keyboard

    <View style={{
      backgroundColor: "#575757",
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
      }}>
        <View style={{
          backgroundColor: "gold",
          flex: 0.8,
          paddingHorizontal: "2.5%",
          paddingVertical: "1%",
          width: "70%",
          borderRadius: 15,
        }}>
          <View style={{marginTop: "10%",}}/>
          <TextInput style={{
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 5, 
          }}
          placeholder="Workout Name( ex. Squats)"
          onChangeText={newText => setWorkoutName(newText)}
          />
          <View style={{padding: 5,}}/>
          <TextInput style={{
            borderwidth: 1,
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 5,
          }}
          //this one word allows you to type more than one line
          placeholder="Workout Type(Chest, Back, Legs, etc.)"
          onChangeText={newText => setWorkoutType(newText)}
          />
          <View style={{padding: 5,}}/>
          <TextInput style={{
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 5, 
          }}
          placeholder="Workout Date"
          onChangeText={newText => setWorkoutDate(newText)}
          />
          <View style={{padding: 5,}}/>
          <TextInput style={{
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 5, 
          }}
          placeholder="Workout Time"
          onChangeText={newText => setWorkoutTime(newText)}
          />
          <View style={{padding: 5,}}/>
          <TextInput style={{
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 5, 
          }}
          placeholder="Duration"
          onChangeText={newText => setWorkoutDuration(newText)}
          />
          <View style={{padding: 5,}}/>
          <TextInput style={{
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 5,
          flex: 1.1,
          }}
          placeholder="Description of workout"
          multiline
          onChangeText={newText => setWorkoutNotes(newText)}
          />
          <View style={{padding: 5,}}/>
          <TextInput style={{
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 5, 
          }}
          placeholder="Sets"
          onChangeText={newText => setWorkoutSets(newText)}
          />
          <View style={{padding: 5,}}/>
          <TextInput style={{
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 5, 
          }}
          placeholder="Reps"
          onChangeText={newText => setWorkoutReps(newText)}
          />
          <View style={{padding: 5,}}/>
          <TextInput style={{
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 5, 
          }}
          placeholder="Weights (lbs)"
          onChangeText={newText => setWorkoutWeights(newText)}
          />

          <Pressable onPress={() => createWrk()}
            style={{
              marginTop: "5%",
              marginLeft: "65%",
              borderRadius: 10,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "silver",
            }}>
            <Text style={{fontSize: 20,}}>Submit</Text>
          </Pressable>
        </View>
    </View>
  );
}


export default CreateCustomWorkout;