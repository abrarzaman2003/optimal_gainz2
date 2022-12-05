import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'; 


const SearchBar = () => {
    return (

        <View style={{margin:20}}>
            <TextInput style={{fontSize:15, padding: 10,
            borderRadius: 10,
            color: '#000', borderWidth: 1,
        }} placeholder="Search"/>
        </View>

    )

}

const styles = StyleSheet.create({
    search: {
        borderWidth: 1,
        padding: 10,
    }
})
export default SearchBar;