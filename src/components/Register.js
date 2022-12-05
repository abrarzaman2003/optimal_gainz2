import React,{useState} from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, ImageBackground,Image, Text, StyleSheet, Pressable } from "react-native";
import Field from "./Field";
import Btn from "./Btn";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { makeUser } from "../../Firebase/functions";
import logo from '../../assets/workequip.png'
const Register = () => {
    const navigation = useNavigation();
    const [email,setEmail] = useState("");
    const [userName, setUserName] = useState({})
    const [retype, setRetype] = useState("");
    const [password, setPassword] = useState("");
  
    function handleRegister() {
        createUser();
        navigation.navigate("Login")
    }

    async function createUser() {
        console.log(password);
        const x = await makeUser(userName,email,password,retype,18,150,6,0);
        console.log(x);
        return x;
    }
    return (
<View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
          }]}>
            <Image source={logo}
              style={{ alignSelf:'center' ,alignItems:'center',height: 250,
              width: 250
              }}/>

            <View style={{marginVertical: 245,width: 350,borderRadius:30,paddingTop:10, alignSelf:'center' ,alignItems:'center', position: 'absolute'}}>
                <Text style={{fontSize: 32, color: '#0D0D0D', fontWeight:'bold'}}>Sign Up</Text>
                <Text style={{color: '#B3B6B7', fontSize: 14, fontWeight:'bold', marginBottom: 10}}>Create your accoount</Text>
                <Field placeholder="First and Last name" onChangeText= {newText => setUserName(newText)}/>
                <Field placeholder="Email address" keyboardType={"email-address"}  onChangeText= {newText => setEmail(newText)}/>
                <Field placeholder="Password" secureTextEntry={true} onChangeText= {newText => setPassword(newText)}/>
                <Field placeholder="Password" secureTextEntry={true} onChangeText= {newText => setRetype(newText)}/>
                <Pressable onPress={() => handleRegister()}>
                  <Btn brdRadius={40}  brdWidth={'1'} brdColor={'#53595D'} btnWidth={150} txtSize={14} textColor='#0D0D0D' btnLabel="Register" />
                </Pressable>
                <Text style={{textAlign: 'center', color: '#B0B6BB', fontSize: '14'}}>Already have an account?</Text>
                {/* <TouchableOpacity>
                    <Text style={{fontSize:14, fontWeight:'bold', color: '#0D0D0D'}}>SignIn</Text>
                </TouchableOpacity> */}
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 20
    },
  });

export default Register;