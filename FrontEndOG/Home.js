import React from "react";
import {View, StyleSheet,Text} from "react-native";
import Background from "./Background";
const Home = () => {
    return (
        <Background>
            <View style={{ marginVertical: 40}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 32, textAlign: 'center'}}>Start Your Training</Text>
            <Text style={{color: 'white', fontSize: 24, textAlign: 'center'}}>In One App</Text>
            </View>
        </Background>
    )
}
const styles = StyleSheet.create({})
export default Home;
