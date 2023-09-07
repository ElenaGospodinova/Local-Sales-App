import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'
import colors from '../config/colors';

function Heading({children, style}) {
    return (
        <Text style={[styles.textHeading, style]}> {children}</Text>
    );
}



const styles = StyleSheet.create({
    textHeading:{
        zIndex: 12,
        fontSize: 28,
        fontFamily:Platform.OS === "android" ? "Roboto" : "Avenir",
        position: 'absolute',   
        top: 120, 
        left: 60,
        color:colors.textHeaderColor, 
    }
})
export default Heading;