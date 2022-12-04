import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";


export default function Btn({bgColor,brdRadius, brdWidth, brdColor, btnWidth,btnHeight, txtSize,btnLabel, btnSecondaryLabel, textColor, Press}) {
    return (
        <TouchableOpacity
        onPress={Press}
            style={{backgroundColor: bgColor,
            borderRadius: brdRadius,
            alignItems: 'center',
            width: btnWidth,
            borderWidth:  brdWidth,
            borderColor: brdColor,
            height: btnHeight,
            
            paddingVertical: 5}}>
              {/* <Text style={{ margin: 5,color: '#B0B6BB', fontSize: '14', }}>
                    {btnSecondaryLabel}
                </Text> */}
                <Text style={{textTransform: 'uppercase',padding: 5, color: textColor, fontSize: txtSize,  letterSpacing: '2',fontWeight: '700'}}>

                    {btnLabel}
                </Text>
        </TouchableOpacity>
    )
}