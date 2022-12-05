import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Register from './src/components/Register';
import WorkoutsView from './src/components/WorkoutsView';
//npm i -S react-native-swipe-gesturesimport Home from "./Home";
import FitnessHome from './src/components/FitnessHome';
import CreateCustomWorkout from './src/components/AddWorkout';

const Stack = createNativeStackNavigator();

function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {/* <Stack.Screen name="Splash" component={Splash} /> */}
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="FitnessHome" component={FitnessHome} />
                <Stack.Screen name="WorkoutsView" component={WorkoutsView} />
                <Stack.Screen name="CreateCustomWorkout" component={CreateCustomWorkout} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default App;