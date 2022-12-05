import React from "react";
import { View, ImageBackground,Image, Text, StyleSheet, Pressable } from "react-native";
import Btn from "./Btn";
import Field from "./Field";
import { useNavigation } from "@react-navigation/native";
import strong from '../../assets/strong.png';
import situp from '../../assets/situp.png';
import lift from '../../assets/lift.png';
import Card from "./Card";
import SearchBar from "./SearchBar";
function FitnessHome({route}) {
    const navigation = useNavigation();
    console.log("route params: ", route.params)

    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
          }]}>
            <SearchBar />
             {/* <Text style={{fontSize: 24, color: '#0D0D0D', fontWeight:'bold'}}>Hello, Alan</Text> */}
            <Text style={{fontSize: 24, color: '#0D0D0D', fontWeight:'bold'}}>Workouts</Text>
            <Card cardColor={'#F7F3E3'} cardImage={strong} cardText={'Build Muscle'}/>
            <Card cardColor={'#D7F2F4'} cardImage={situp} cardText={'Get Strong'}/>
            <Card cardColor={'#FFDFDF'} cardImage={lift} cardText={'Fat Loss'}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20
    },
  });

export default FitnessHome