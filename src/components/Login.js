import React,{useEffect,useState} from "react";
import { loginUser } from "../../Firebase/functions";
import { View, ImageBackground,Image, Text, StyleSheet, Pressable } from "react-native";
import Btn from "./Btn";
import Field from "./Field";
import { useNavigation } from "@react-navigation/native";
import logo from '../../assets/workequip.png'

const Login = () => {
  const navigation = useNavigation();
  const [email,setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);
  const logOn = async () => {
    console.log(email)
    console.log(passWord)
    const a = await loginUser(email,passWord);
    console.log(a);
    
    if (typeof a === 'object'){
      setUser(a);
      setLoggedIn(true);
    }
    
    console.log('clg setUser: ', user)
    console.log('setLoggedIn: ', loggedIn)

  }
  useEffect(()=>{
    if (loggedIn == true){
      navigation.navigate('FitnessHome', {...user})
    }
  },[loggedIn]);



    return (
<View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
          }]}>
            <Image source={logo}
              style={{ alignSelf:'center' ,alignItems:'center', height: 250,
              width: 250
              }}/>

            <View style={{marginVertical: 245,width: 350,borderRadius:30,paddingTop:10, alignSelf:'center' ,alignItems:'center', position: 'absolute'}}>
                <Text style={{fontSize: 32, color: '#0D0D0D', fontWeight:'bold'}}>Sign In</Text>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 20
    },
  });


export default Login;