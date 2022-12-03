import React from "react";
import {View, StyleSheet,Text} from "react-native";
import Background from "./Background";
import Btn from "./Btn";
const Home = () => {
    return (
        <Background>
            {/* Hero Text */}
            <View style={{ marginVertical: 20, alignItems:'center'}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 32, textAlign: 'center'}}>Start Your Training</Text>
            <Text style={{marginTop: 15, marginBottom:15, color: 'white', fontSize: 24, textAlign: 'center'}}>In One App</Text>
            </View>

            {/* Create an Acc */}
             <View style={{ alignItems: 'center'}}>
                <Btn brdRadius={40}  brdWidth={'1'} brdColor={'#53595D'} btnHeight={40} btnWidth={250} txtSize={14} textColor='#F0F0F1' btnLabel="Create Account" />
            {/* <Text style={{color: 'white',color:'#B0B6BB', fontSize: 14, textAlign: 'center'}}>Already have an account?</Text>
            <Text style={{color: 'white', color: "#F0F0F1", letterSpacing: '2',fontWeight: '700', fontSize: 18, textAlign: 'center'}}>Create Account</Text>
             */}
            </View>

            {/* Sign In */}
            <View style={{ marginVertical: 40, alignItems:'center'}}>
            <Text style={{margintop: 10, textAlign: 'center', color: '#B0B6BB', fontSize: '14', }}>Already have an account?</Text>
            <Btn textColor='#F0F0F1' btnLabel="Sign In" />
            {/* <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>Sign In</Text> */}

            </View>
        </Background>
    )
}
const styles = StyleSheet.create({})
export default Home;
