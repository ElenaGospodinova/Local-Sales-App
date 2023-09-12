import React from 'react';
import { Text, StyleSheet } from 'react-native'
import colors from '../config/colors';
//import colors from '../config/colors';

function AppText({children}) {
    return (
        <Text style={styles.text}> {children}</Text>
    );
}



const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontWeight:'900',
        //fontFamily:Platform.OS === "android" ? "Roboto" : "Avenir",
        //color:colors.color,
        zIndex:22,
        color:colors.color,
    },
   
})
export default AppText;