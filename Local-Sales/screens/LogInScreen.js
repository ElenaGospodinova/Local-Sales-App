import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Screen from '../app/assets/components/Screen';
import InputText from '../app/assets/components/LogIn';
import AppButton from '../app/assets/components/AppButton';

export default function InputScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogIn = () => {
  //   if (!email || !password) {
     
  //     Alert.alert('Welcome to Local Sales App');
  //     navigation.navigate('Account');
  //   } else {
  //     console.log('Navigating to Items screen');
    
  //   }
  // };

  return (
    <Screen style={styles.container}>
      <InputText onChangeText={(text) => setEmail(text)}  />
      {/* <View style={styles.btn}>
        <AppButton onPress={handleLogIn} title="LogIn" />
      </View> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  btn: {
    top: 232,
    right: '36%',
    width:'120%',
  },
  
});