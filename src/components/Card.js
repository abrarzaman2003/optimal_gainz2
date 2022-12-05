import React from "react";
import { View,ImageBackground, Image, Text,StyleSheet } from "react-native";

const Card = ({cardImage,cardText, cardColor}) => {

    return(
        <View style={[styles.banner, {backgroundColor: cardColor}]} >
            <Text style={{fontSize: 24, color: '#0D0D0D', fontWeight:'bold'}}>{cardText}</Text>
            <Image source={cardImage}  style={styles.cardImage} resizeMode="contain" />

        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        marginTop: 20,
        padding: 15,
        resizeMode: 'contain',
        borderRadius: 20,
        overflow: 'hidden',
        flexDirection: 'row',
        width: '100%',
        height: '25%',
    },
    cardImage: {
        marginVertical:-110,
        marginHorizontal: -50,
        right: 0,
        bottom: 0,
        height: 400,
        width: 250},
    container: {
        flex: 1,
    }
    
})


export default Card;