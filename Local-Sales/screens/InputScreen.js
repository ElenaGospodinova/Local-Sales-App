import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';



import Screen from '../app/assets/components/Screen';
import InputText from '../app/assets/components/InputText';
import AppButton from '../app/assets/components/AppButton';


export default function InputScreen({icon, ...otherProps}) {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleLogIn = () => {
    if (!firstName || !lastName) {
      Alert.alert('Welcome to Local Sales App');
      return;
    }

    // Navigate to the 'Items' screen here
    navigation.navigate('Items');
  };

  return (
    <Screen>

      <InputText />
      <View style={styles.btn}>
        <AppButton  onPress={handleLogIn} title="LogIn" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  btn: {
    top:122,
    right:'30%',
  },
});
