import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Platform,  Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import Screen from './Screen';
import colors from '../config/colors';
import defaultStyles from '../config/styles';


export default function InputText({icon, ...otherProps}) {
  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    
    <Screen>
      <View style={styles.info}>
        <Text style={styles.text}>Please enter both first and last names.</Text> 
      </View>
    
      <View style={styles.container}>
      <Ionicons name="person" size={24} color={colors.green} style={styles.icon}/>
        
          <TextInput style={styles.textInput}
          onChangeText={(text) => setFullName(text)}
            keyboardType='email-address'
            maxLength={15}
            placeholder="Full Name" 
            clearButtonMode='always'
            {...otherProps}
           
          />
      </View>

      <View style={styles.container}>
      <Entypo name="email" size={24} color={colors.green} style={styles.icon}/>
          <TextInput  style={defaultStyles.textLogIn}
          onChangeText={(text) => setLastName(text)}
            keyboardType='email-address'
            maxLength={15}
            placeholder="Email" 
            clearButtonMode='always'
            {...otherProps}
          />
      </View>
     
      </Screen>
    
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.lightGray,
    borderRadius: 25,
    flexDirection:'row',
    width:'100%',
    padding:15,
    marginVertical:5,
    marginTop:42,
  },
  info:{
    marginTop:22,
    justifyContent:'center',
    alignItems:'center',
  },
  icon:{
    marginRight:10,
  }
  ,
  text:{
    color:colors.green,
    marginLeft:25,
  },
 


  
})