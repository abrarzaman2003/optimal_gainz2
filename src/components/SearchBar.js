import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'; 


const SearchBar = () => {

    <View>
       <Feather name="search" size={24} color="black" />
        <TextInput style={{fontSize:15}} placeholder="Search"/>
    </View>


}

const styles = StyleSheet.create({
    search: {
        borderWidth: 1,
        padding: 10,
    }
})
export default SearchBar;