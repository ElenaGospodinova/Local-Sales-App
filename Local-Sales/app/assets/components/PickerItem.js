import React from 'react'
import { TouchableOpacity, Text } from 'react-native'


export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text>{label}</Text>
    </TouchableOpacity>
  )
}