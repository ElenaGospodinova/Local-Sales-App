import React from 'react';
import {Text, StyleSheet} from 'react-native';

function AppText({children}){
    return
        <Text style={styles.text}>{children}</Text>;
}
const styles = StyleSheet.create({
    text:{
        FontSize: 18,
        fontFamily:"Roboto",
        zIndex:12,
    }
})

export default AppText;