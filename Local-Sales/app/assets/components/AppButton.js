import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import colors from '../config/colors'


export default function AppButton({title}) {
  return (
    <View style={styles.buttonLogin}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonLogin:{
        backgroundColor:colors.color,
        borderRadius: 25,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        width:'40%',
        bottom:590,
        marginLeft:192,
        
    },
    titleLogin:{
        color:colors.primary,
        fontSize:18,
        textTransform:'uppercase',
        fontWeight:'bold',
    },
})