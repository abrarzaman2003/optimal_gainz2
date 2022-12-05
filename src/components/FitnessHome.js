import React from "react";
import { View, ImageBackground,Image, Text, StyleSheet, Pressable } from "react-native";
import Btn from "./Btn";
import Field from "./Field";
import { useNavigation } from "@react-navigation/native";



function FitnessHome({route}) {
    const navigation = useNavigation();
    console.log("route params: ", route.params)

    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
          }]}>
            <Image source={require('../../assets/workequip.png')}
              style={{ alignSelf:'center' ,alignItems:'center'
              }}/>

            <View style={{marginVertical: 245,width: 350,borderRadius:30,paddingTop:10, alignSelf:'center' ,alignItems:'center', position: 'absolute'}}>
                <Text style={{fontSize: 32, color: '#0D0D0D', fontWeight:'bold'}}>Sdasdsdda</Text>
                <Text style={{color: '#B3B6B7', fontSize: 14, fontWeight:'bold', marginBottom: 10}}>Login to your account</Text>
                <Field placeholder="Email address" keyboardType={"email-address"}  onChangeText= {newText => setEmail(newText)}/>
                <Field placeholder="Password" secureTextEntry={true} onChangeText= {newText => setPassword(newText)}/>
                <Pressable onPress={() => logOn()}>
                  
                  <Btn brdRadius={40}  brdWidth={'1'} brdColor={'#53595D'} btnWidth={150} txtSize={14} textColor='#0D0D0D' btnLabel="Login" />
                </Pressable>
                <Text style={{textAlign: 'center', color: '#B0B6BB', fontSize: '14'}}>Don't have an account?</Text>
                {/* <TouchableOpacity>
                    <Text style={{fontSize:14, fontWeight:'bold', color: '#0D0D0D'}}>SignIn</Text>
                </TouchableOpacity> */}
            </View>

        </View>
    )
}


export default FitnessHome