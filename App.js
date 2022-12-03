import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, Pressable, View, Text, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { getWorkoutInfo, loginUser, makeUser } from './Firebase/functions';
//npm i -S react-native-swipe-gestures



function Landing( {navigation} ) 
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
        backgroundColor: "tomato",
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
        backgroundColor: "dodgerblue",
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
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        flex: 1,
      }}/>
      <View style={{
        backgroundColor: "tomato",
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        padding: 100,
      }}>
        <View>
          <Text style={{
            fontFamily: "Arial",
            fontSize: 48,
            textAlign: "center",
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
        placeholder="Full Name"
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
        />
        <View style={{
          padding: 5,
        }}/>
        <Button //TODO: clicking login should verify user input and allow login
        title="Login"
        onPress={() =>
          logOn()
        }
        />
        </View>
      <View style={{
        backgroundColor: "dodgerblue",
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
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        flex: 1,
      }}/>
      <View style={{
        backgroundColor: "tomato",
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        padding: 100,
      }}>
        <View>
          <Text style={{
            fontFamily: "Arial",
            fontSize: 48,
            textAlign: "center",
          }}>Register</Text>
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
        placeholder="E-Mail Address"
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
        backgroundColor: "dodgerblue",
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
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Greeting time="morning" name={route.params.username}/>
        </View>
        <View style={{
          flexDirection: "row",
        }}>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout", {id: "0uLUSzQgA4kMpC54Dd9a"})}>
            <Text style={styles.text}>
              Dumbells Incline Press
            </Text>
          </Pressable>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout", {id: "0uLUSzQgA4kMpC54Dd9a"})}>
            <Text style={styles.text}>
              Bench Press
            </Text>
          </Pressable>
        </View>
        <View style={{
          flexDirection: "row",
        }}>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout", {id: "0uLUSzQgA4kMpC54Dd9a"})}>
            <Text style={styles.text}>
              Dumbell Bench Press
            </Text>
          </Pressable>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout", {id: "0uLUSzQgA4kMpC54Dd9a"})}>
            <Text style={styles.text}>
              Military Press
            </Text>
          </Pressable>
        </View>
        <View style={{
          flexDirection: "row",
        }}>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout", {id: "0uLUSzQgA4kMpC54Dd9a"})}>
            <Text style={styles.text}>
              Overhead Press
            </Text>
          </Pressable>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout", {id: "0uLUSzQgA4kMpC54Dd9a"})}>
            <Text style={styles.text}>
              Romainian Deadlift
            </Text>
          </Pressable>
        </View>
        <View style={{
          flexDirection: "row",
        }}>
        </View>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: "2.5%",
          marginHorizontal: "10%",
        }}>
          <Pressable onPress={() => navigation.navigate("Create Custom Workout")}
          style={{
          backgroundColor: "gold",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          borderRadius: 10,
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
  return(
    <GestureRecognizer style={{
      backgroundColor: "dodgerblue",
      flex: 1,
      alignItems: "center"}}
      onSwipeLeft={() => navigation.navigate("Home")}
      onPress={() => navigation.navigate("Home")}
      >
      <View style={{backgroundColor: "dodgerblue", flex: 0.5, alignItems: "center", justifyContent: "center"}}>
        <Text style={{fontSize: 48,}}> {workoutInfo.workoutName} </Text>
      </View>
      <View style={{
        backgroundColor: "tomato",
        flex: 1.5,
        borderRadius: 15,
        width: "90%",}}>
        <Text style={{fontSize: 22, padding: "5%",}} adjustsFontSizeToFit={true}>
        {workoutInfo.workoutNotes}</Text>
      </View>
      <View style={{backgroundColor: "dodgerblue", flex: 0.3}}></View>
    </GestureRecognizer>
  );
}

function CreateCustomWorkout( {navigation} )
{
  return(
    //TODO: clicking submit should verify text fields and store data in DB
    //TODO: when typing in the big textInput,
    //      you need to be able to tap somewhere to dismiss the keyboard
    <View style={{
      backgroundColor: "dodgerblue",
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      alignContent: "center",
      }}>
        <View style={{
          backgroundColor: "gold",
          flex: 0.3,
          paddingHorizontal: "2.5%",
          width: "50%",
          borderRadius: 20,
        }}>
          <View style={{marginTop: "15%",}}/>
          <TextInput style={{
          borderwidth: 1,
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 5, 
          }}
          placeholder="Title"
          />
          <View style={{padding: 5,}}/>
          <TextInput style={{
            height: "40%",
            borderwidth: 1,
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 5,
          }}
          //this one word allows you to type more than one line
          multiline
          placeholder="Description"
          />
          <Pressable onPress={() => navigation.navigate("Home")}
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
      <Text style={{fontSize: 48,}}>Good {props.time}, {props.name}!</Text>
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
      backgroundColor: "purple",
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
    backgroundColor: "gray",
  },

  griditem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "salmon",
    borderWidth: 5,
  }
});

export default App;