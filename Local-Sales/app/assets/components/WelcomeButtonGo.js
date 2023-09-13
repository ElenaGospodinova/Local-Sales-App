import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import colors from '../config/colors'



export default function WelcomeButtonGo({title, onPress, style, color }) {
  return (
    <TouchableOpacity style={[styles.goButton, {backgroundColor:colors[color]}, style]} onPress={onPress}>
      <Text style={styles.titleGo}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    goButton:{
        width:'95%',
        height:'8%',
        top: 55,
        backgroundColor:colors.primary,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:22,
        marginTop:22,
        marginLeft: -370,
        position:'relative',
    },
    titleGo:{
        color:colors.color,
        fontSize:15,
        textTransform:'uppercase',
        fontWeight:'bold',
    },
})