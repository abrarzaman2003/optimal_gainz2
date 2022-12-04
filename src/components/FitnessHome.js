import React from "react";
import { useNavigation } from "@react-navigation/native";



function FitnessHome({route}) {
    const navigation = useNavigation();
    console.log("route params: ", route.params)
}


export default FitnessHome