import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import Screen from './Screen';
import colors from '../config/colors';
import defaultStyles from '../config/styles';

export default function InputText({ icon, ...otherProps }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen>
      <View style={styles.info}>
        <Image source={require('../img/Logo.png')} style={styles.logo}/>
        <Text style={styles.text}>Please enter both names and email.</Text>
      </View>

      <View style={styles.container}>
        <FontAwesome name='envelope' size={24} color={colors.green} style={styles.icon} />

        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.textInput}
          onChangeText={(text) => setEmail(text)}
          keyboardType='default'
          icon='lock'
          maxLength={45}
          placeholder="Email"
          clearButtonMode='always'
          {...otherProps}
        />
      </View>

      <View style={styles.container}>
        <FontAwesome name="lock" size={24} color={colors.green} style={styles.icon} />

        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          style={defaultStyles.textLogIn}
          onChangeText={(text) => setPassword(text)}
          keyboardType='email-address'
          maxLength={45}
          placeholder="Password"
          secureTextEntry={true}
          clearButtonMode='always'
          {...otherProps}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    height: 55,
    padding: 15,
    marginVertical: 5,
    marginTop: 42,
  },
  info: {
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  icon: {
    marginRight: 10,
  },
  logo:{
    alignSelf:'center',
    width:80,
    height:80,
    borderRadius:12,
    margin:12,
  },
  text: {
    color: colors.green,
    marginLeft: 25,
  },
  textInput: {
    flex: 1, 
  },
});
