import React from 'react';
import { StyleSheet, Pressable, View, Text, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Landing( {navigation} ) {
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
      <View 
      style={{
        backgroundColor: "gold",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={{
          fontSize: 28,
          fontFamily: "Futura",
        }}>Login</Text>
          </Pressable>
        </View>
      <View 
      style={{
        backgroundColor: "tomato",
        justifyContent: "center",
        alignItems: "center",
        flex: 0.7,
      }}>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={{
          fontSize: 28,
          fontFamily: "Futura",
        }}>Register</Text>
          </Pressable>
        </View>
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
        <Button
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
        <Button
        title="Register"
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

function Home() {
  return (
    <SafeAreaView style={styles.home}>
      <ScrollView style={styles.grid}>
        {/* Here is scrollable body */}
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
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
      fontSize: 84,
  },

  grid: {
    flex: 2,
    width: "90%",
    backgroundColor: "gray",
  },
});

export default App;