import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Register from './src/components/Register';
//npm i -S react-native-swipe-gesturesimport Home from "./Home";

const Stack = createNativeStackNavigator();

function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default App;