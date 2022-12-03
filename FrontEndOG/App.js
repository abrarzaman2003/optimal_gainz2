import React from 'react';
import { Keyboard, StyleSheet, Pressable, View, Text, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
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
        placeholder="Password"
        />
        <View style={{
          padding: 5,
        }}/>
        <Button //TODO: clicking login should verify user input and allow login
        title="Login"
        onPress={() =>
          navigation.navigate('Home')
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
        placeholder="Re-type Password"
        />
        <View style={{
          padding: 5,
        }}/>
        <Button      //TODO: clicking button should verify input and create user account
        title="Submit" //...currently already takes user to login page
        onPress={() =>
          navigation.navigate("Login")
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

function Home( {navigation} ) {
  //TODO: clicking on a gridItem should bring up reps/sets/weight ui (ref Figma)
  //TODO: long pressing a gridItem should take to a unique info page
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
          <Greeting time="morning" name="Abrar"/>
        </View>
        <View style={{
          flexDirection: "row",
        }}>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout")}>
            <Text style={styles.text}>
              Item1
            </Text>
          </Pressable>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout")}>
            <Text style={styles.text}>
              Item2
            </Text>
          </Pressable>
        </View>
        <View style={{
          flexDirection: "row",
        }}>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout")}>
            <Text style={styles.text}>
              Item3
            </Text>
          </Pressable>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout")}>
            <Text style={styles.text}>
              Item4
            </Text>
          </Pressable>
        </View>
        <View style={{
          flexDirection: "row",
        }}>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout")}>
            <Text style={styles.text}>
              Item5
            </Text>
          </Pressable>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout")}>
            <Text style={styles.text}>
              Item6
            </Text>
          </Pressable>
        </View>
        <View style={{
          flexDirection: "row",
        }}>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout")}>
            <Text style={styles.text}>
              Item7
            </Text>
          </Pressable>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout")}>
            <Text style={styles.text}>
              Item8
            </Text>
          </Pressable>
        </View>
        <View style={{
          flexDirection: "row",
        }}>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout")}>
            <Text style={styles.text}>
              Item9
            </Text>
          </Pressable>
          <Pressable style={styles.griditem} onLongPress={() => navigation.navigate("Workout")}>
            <Text style={styles.text}>
              Item10
            </Text>
          </Pressable>
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