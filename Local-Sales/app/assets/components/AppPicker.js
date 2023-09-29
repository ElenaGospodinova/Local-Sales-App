import React from 'react';
import { View, TextInput, StyleSheet, Text} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Screen from './Screen';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from '../components/AppText';


export default function AppPicker({icon, placeholder, ...otherProps}) {
  

  return (
    
    <Screen style={styles.picker}>
      <View style={styles.info}>
        <Text style={styles.text}>Please enter both names and email.</Text> 
      </View>
    
      <View style={styles.container}>
        <MaterialCommunityIcons name="tag" size={24} color={colors.green} style={styles.icon} />
        <AppText>{placeholder}</AppText>
      </View>

      <View style={styles.container}>
      <Entypo name="email" size={24} color={colors.green} style={styles.icon}/>
          <TextInput  style={defaultStyles.textLogIn}
          onChangeText={(text) => setEmail(text)}
            keyboardType='email-address'
            maxLength={45}
            // placeholder="Email" 
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
    height:55,
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
  },
  picker:{
      backgroundColor:colors.medium,
      width:'100%',
  },
  text:{
    color:colors.green,
    marginLeft:25,
  },
 


  
})