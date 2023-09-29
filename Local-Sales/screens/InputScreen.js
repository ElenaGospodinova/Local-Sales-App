import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Screen from '../app/assets/components/Screen';
import InputText from '../app/assets/components/InputText';
import AppButton from '../app/assets/components/AppButton';

export default function InputScreen() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogIn = () => {
    if (!fullName || !email) {
      Alert.alert('Welcome to Local Sales App');
      navigation.navigate('Account');
    } else {
      console.log('Navigating to Items screen');
    
    }
  };

  return (
    <Screen>
      <InputText onChangeText={(text) => setFullName(text)}  />
      <View style={styles.btn}>
        <AppButton onPress={handleLogIn} title="LogIn" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  btn: {
    top: 162,
    right: '30%',
  },
});
