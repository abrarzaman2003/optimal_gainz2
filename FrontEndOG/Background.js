import React from "react";
import {LinearGradient} from 'expo-linear-gradient';
import { ImageBackground,View, StyleSheet} from "react-native";
import { BlurView } from "expo-blur";
const image = { uri: "https://reactjs.org/logo-og.png" };
const Background = ({children}) => {

    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
          }]}>
            <ImageBackground source={require('./assets/runnerMed.jpg')}
              style={{flex:2
              }}/>
              <LinearGradient 
            //   colors={['red', 'purple', 'black']}
                colors={['#0D0D0D','#212121']}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
        style={{
           
        height: '45%'}}
         >

         <View style={{position: "relative", flex:3}}>
             {children}
         </View>
    </LinearGradient>


        </View>
    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default Background;