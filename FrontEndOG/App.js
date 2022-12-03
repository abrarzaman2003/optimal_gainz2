import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Home from './Home';
//npm i -S react-native-swipe-gesturesimport Home from "./Home";

const Stack = createNativeStackNavigator();

function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default App;