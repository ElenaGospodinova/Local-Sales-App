import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';



import colors from '../config/colors';

function CardsBuilder({title, subTitle, image}){

    return(
        <View style={styles.card}>
            <Image  style={styles.photo} source={image} />
            <Text style={{color:colors.green}}>{title}</Text>
            <Text style={{color:'green'}}>{subTitle}</Text>
        </View> 
    )
}


const styles = StyleSheet.create({
    card:{
        padding:20,
        paddingTop:100,
        borderRadius:15,
        backgroundColor:colors.color,
        marginBottom: 20,
        height:330,
        
    },
    photo:{
        width: '100%',
        height: 200,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:12,
        
    }
})

export default CardsBuilder;
