import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Errors({errors, visible}) {
    if(!visible || !errors) return null;

  return (
    <View>
      <Text style={styles.error} >{errors}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    error:{
        color:'red',
    },
})