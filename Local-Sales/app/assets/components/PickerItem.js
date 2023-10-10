import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'


export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    text:{
      padding:20,
      fontSize:18,
      
    }

})