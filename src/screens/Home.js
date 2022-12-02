import React from "react";
import COLORS from "../consts/colors";
import {View, StyleSheet, ImageBackground, StatusBar} from 'react-native';
// const stack = createStackNavigator();
const Home = ({navigation}) => {
    return (

        <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:Colors.primary}} >
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#465bd8" />
            <Image source={require('../assets/images/home-running.jpg')} style={{width:50,height:50}}  />    
            <Text style={{fontFamily:'OpenSans-Bold',fontSize:30,color:Colors.white}} >Nuntium</Text>
        </View>
        
        // <View style={{flex: 1}}>
        //     <StatusBar translucent backgroundColor="rgba(0,0,0,0" />
        //     <ImageBackground
        //     style={{flex: 1}}
        //     source={require('../assets/images/home-running.jpg')}>
        //     <View style={style.details}>
        //         <Text style={{color: COLORS.red, fontSize: 35, fontWeight: 'bold'}}>DISCOVER</Text>
        //     </View>
        // </ImageBackground>
        // </View>
    )
}

const style = StyleSheet.create({
    details: {
        height: '50%',
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: 40,
    },


})


export default Home;
