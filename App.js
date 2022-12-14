import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, Pressable, View, Text, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {getWorkoutInfo, loginUser, makeUser } from './Firebase/functions';
import { createWorkout, editWorkout } from './Firebase/fireStoreController';
import { getAuth } from '@firebase/auth';
import { makeWorkout } from './Firebase/functions';
import auth from './Firebase/firebaseAuth';



function Landing( {navigation} ) 
{
  return (
    <View 
      style={{
        backgroundColor: "#575757",
        flex: 1,
    }}>
      <View style={{
        marginTop: "50%",
        marginHorizontal: "18%",
        backgroundColor: "#c02d0c",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
      }}>
        <Text style={{fontSize: 40}}>
          Optimal Gainz
        </Text>
      </View>
      <View 
      style={{
        backgroundColor: "#575757",
        flex: 7,
      }} />
      <Pressable onPress={() => navigation.navigate("Login")}
      style={{
        backgroundColor: "gold",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}>
        <Text style={{
          fontSize: 28,
          fontFamily: "Futura",
        }}>Login</Text>
        </Pressable>
      <Pressable onPress={() => navigation.navigate("Register")}
      style={{
        backgroundColor: "#cd070c",
        justifyContent: "center",
        alignItems: "center",
        flex: 0.7,
      }}>
        <Text style={{
          fontSize: 28,
          fontFamily: "Futura",
        }}>Register</Text>
        </Pressable>
      <View 
      style={{
        backgroundColor: "#575757",
        flex: 1.5,
      }} />
    </View>
  );
}

function Login( {navigation} ) {
  const [email,setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);
  const logOn = async () => {
    console.log(email)
    console.log(passWord)
    const a = await loginUser(email,passWord);
    console.log(a);
    
    if (typeof a === 'object'){
      setUser(a);
      setLoggedIn(true);
    }
    

  }
  useEffect(()=>{
    if (loggedIn){
      navigation.navigate('Home', {... user})
    }
  },[loggedIn]);
  
  return (
    <View 
      style={{
        flex: 1,
        backgroundColor: "#575757",
    }}>
      <View style={{
        backgroundColor: "#575757",
        flex: 1,
      }}/>
      <View style={{
        backgroundColor: "#c02d0c",
        marginHorizontal: "8%",
        borderRadius: 10,
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        padding: 100,
      }}>
        <View style={{marginVertical: "10%",}}>
          <Text style={{
            fontFamily: "Arial",
            fontSize: 48,
            textAlign: "center",
            borderRadius: 10,
          }}>Login</Text>
        </View>
        {/* Space */}
        <View style={{
          padding: 20,
        }}/>
        <TextInput style={{
          height: 40,
          borderColor: "gray",
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 15, 
        }}
        placeholder="Email"
        onChangeText= {newText => setEmail(newText)}
        />
        {/* Space */}
        <View style={{
          padding: 5,
        }}/>
        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 15,
        }}
        onChangeText= {newText => setPassword(newText)}
        placeholder="Password"
        secureTextEntry={true}
        />
        <View style={{
          padding: 5,
        }}/>
        <Button //TODO: if login fails, message should pop up
        title="Login"
        onPress={() =>
          logOn()
        }
        />
        </View>
      <View style={{
        backgroundColor: "#575757",
        flex: 1,
      }}/>
    </View>
  );
}

function Register( {navigation} ) {
  const [email,setEmail] = useState("");
  const [userName,setUserName] = useState("");
  const [retype, setRetype] = useState("");
  const [password, setPassword] = useState("");

  const onClick = () =>{
    createUser();
    navigation.navigate("Login")
  }

  const createUser = async () =>{
    console.log(password);
    const x = await makeUser(userName,email,password,retype,18,150,6,0);
    console.log(x);
    return x;
  }

  return (
    <View 
      style={{
        flex: 1,
        backgroundColor: "#575757",
    }}>
      <View style={{
        backgroundColor: "#575757",
        flex: 1,
      }}/>
      <View style={{
        backgroundColor: "#c02d0c",
        flex: 2,
        marginHorizontal: "5%",
        borderRadius: 10,
        alignContent: "center",
        justifyContent: "center",
        padding: 100,
      }}>
        <View>
          <Text style={{
            fontFamily: "Arial",
            fontSize: 40,
            textAlign: "center",
          }}>Register</Text>
        </View>
        {/* Space */}
        <View style={{
          padding: 20,
        }}/>
        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 15,
        }}
        onChangeText= {newText => setEmail(newText)}
        placeholder="First Name"
        />
        {/* Space */}
        <View style={{
          padding: 5,
        }}/>
        <TextInput style={{
          height: 40,
          borderColor: "gray",
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 15, 
        }}
        onChangeText= {newText => setUserName(newText)}
        placeholder="Last Name"
        />
        {/* Space */}
        <View style={{
          padding: 5,
        }}/>
        <TextInput style={{
          height: 40,
          borderColor: "gray",
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 15, 
        }}
        onChangeText= {newText => setUserName(newText)}
        placeholder="Username"
        />
        {/* Space */}
        <View style={{
          padding: 5,
        }}/>
        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 15,
        }}
        onChangeText= {newText => setEmail(newText)}
        placeholder="Email Address"
        />
        <View style={{
          padding: 5,
        }}/>
        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 15,
        }}
        onChangeText= {newText => setPassword(newText)}
        placeholder="Password"
        secureTextEntry={true}
        />
        <View style={{
          padding: 5,
        }}/>
        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 15,
        }}
        onChangeText= {newText => setRetype(newText)}
        placeholder="Re-type Password"
        secureTextEntry={true}
        />
        <View style={{
          padding: 5,
        }}/>
        <Button      //TODO: clicking button should verify input and create user account
        title="Submit" //...currently already takes user to login page
        onPress={() =>
          onClick()
        }
        />
        </View>
      <View style={{
        backgroundColor: "#575757",
        flex: 1,
      }}/>
    </View>
  );
}

function Home( {route, navigation} ) {
  //TODO: clicking on a gridItem should bring up reps/sets/weight ui (ref Figma)
  //TODO: long pressing a gridItem should take to a unique info page

  

  console.log("route params: ",route.params);
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
          <Greeting time="morning" name={route.params.userName}/>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout", {id: "0uLUSzQgA4kMpC54Dd9a", userId:route.params.id})}>
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
          <Pressable onPress={() => navigation.navigate("Create Custom Workout")}
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

function WorkoutInformation( {route, navigation} )
{
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

function Center( {navigation} )
{
  return (
    <View 
      style={{
        backgroundColor: "purple",
        flex: 1,
    }}>
      <View 
      style={{
        backgroundColor: "dodgerblue",
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}>
      <View 
      style={{
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        flex: 0.3,
        width: "50%",
      }}>
        <View style={{
          backgroundColor: "gold",
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={{
          fontSize: 28,
          fontFamily: "Futura",
            }}>Login</Text>
          </Pressable>
        </View>
        <View style={{
          backgroundColor: "tomato",
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={{
          fontSize: 28,
          fontFamily: "Futura",
            }}>Register</Text>
          </Pressable>
        </View>
        </View>
      </View>
    </View>
  );
}

const Greeting = (props) => {
  return (
    <View>
      <Text style={{fontSize: 48,}}>Good {props.time}{props.name}!</Text>
    </View>
  );
}

const WorkoutName = (props) => {
  return (
    <View>
      <Text style={{fontSize: 48,}}>{props.name}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Center" component={Center} /> */}
        <Stack.Screen name="Welcome" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Workout" component={WorkoutInformation} />
        <Stack.Screen name="Create Custom Workout" component={CreateCustomWorkout} />
      </Stack.Navigator>
      {/*<Text style={{
        fontSize: 36,
      }}>
        Hidden Navbar
      </Text> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  home: {
      backgroundColor: "#c02d0c",
      flex: 2,
      alignItems: "center",
  },

  text: {
      fontFamily: "Futura",
      fontSize: 68,
      alignItems: "center",
      justifyContent: "center",
  },

  grid: {
    flex: 2,
    width: "90%",
    backgroundColor: "#575757",
    borderRadius: 10,
    marginVertical: "5%",
    paddingHorizontal: "5%",
  },

  griditem: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "white",
    borderColor: "#c02d0c",
    borderWidth: 5,
  },

  row: {
    flexDirection: "row",
  }
});

export default App;