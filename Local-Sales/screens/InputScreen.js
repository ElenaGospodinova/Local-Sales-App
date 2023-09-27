
import React, { useState } from 'react'
import { TextInput, Text } from 'react-native'

import colors from '../app/assets/config/colors'
import Screen from '../app/assets/components/Screen'

export default function InputScreen() {
const [firstName, setFirstName] = useState(' ');

  return (
    <Screen>
        <Text>{firstName}</Text>
      <TextInput 
        onChangeText={(text) => setFirstName(text)}
        style={{
            margin: 23,
            borderBottomColor:colors.color,
            borderBottomWidth: 1,
        }}
        placeholder="First Name" 
       
        />
    </Screen>
  )
}