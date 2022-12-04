import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View, StyleSheet,Text, Pressable} from "react-native";
import Background from "./Background";
import Btn from "./Btn";
const Home = () => {
    const navigation = useNavigation();
    return (
        <Background>
            {/* Hero Text */}
            <View style={{ marginVertical: 20, alignItems:'center'}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 32, textAlign: 'center'}}>Start Your Training</Text>
            <Text style={{marginTop: 15, color: 'white', fontSize: 24, textAlign: 'center'}}>In One App</Text>
            </View>

            {/* Create an Acc */}
             <View style={{ alignItems: 'center'}}>
                <Pressable onPress={() => navigation.navigate("Register")}>
                    <Btn brdRadius={40}  brdWidth={'1'} brdColor={'#53595D'} btnHeight={40} btnWidth={250} txtSize={14} textColor='#F0F0F1' btnLabel="Create Account" />
                </Pressable>
            {/* <Text style={{color: 'white',color:'#B0B6BB', fontSize: 14, textAlign: 'center'}}>Already have an account?</Text>
            <Text style={{color: 'white', color: "#F0F0F1", letterSpacing: '2',fontWeight: '700', fontSize: 18, textAlign: 'center'}}>Create Account</Text>
             */}
            </View>

            {/* Sign In */}
            <View style={{ marginVertical: 20, alignItems:'center'}}>
            <Text style={{margintop: 10, textAlign: 'center', color: '#B0B6BB', fontSize: '14', }}>Already have an account?</Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
                <Btn textColor='#F0F0F1' btnLabel="Sign In" />
            </Pressable>
            {/* <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>Sign In</Text> */}

            </View>
        </Background>
    )
}
const styles = StyleSheet.create({})
export default Home;