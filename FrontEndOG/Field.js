import React from "react";

import { TextInput } from "react-native-gesture-handler";


const Field = (props) => {
    return (
        <TextInput {...props} style={{borderRadius: 100, 
        color: 'darkRed', paddingHorizontal: 10, height: 42,width: '78%', marginVertical:10,backgroundColor: '#F7F3E3'}} placeHolderTextColor = 'green'>
        </TextInput>
    )
}

export default Field;