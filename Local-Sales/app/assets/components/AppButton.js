import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import colors from '../config/colors';



export default function AppButton({title, onPress, style }) {
  return (
    <TouchableOpacity style={[styles.buttonLogin, style]} onPress={onPress}>
      <Text style={styles.titleLogin}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonLogin:{
        backgroundColor:colors.green,
        borderRadius: 25,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        width:'30%',
        marginBottom: 540,
        marginLeft: 261, 
        // bottom:600,
        // marginLeft:248,
        
        
    },
    titleLogin:{
        color:colors.color,
        fontSize:15,
        textTransform:'uppercase',
        fontWeight:'bold',
    },
})