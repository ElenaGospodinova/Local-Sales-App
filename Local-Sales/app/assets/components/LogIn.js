import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import Screen from './Screen';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppButton from './AppButton';
import AppFormField from './AppFormField';


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password:Yup.string().required().min(4).matches().label('Password')
});

export default function InputText({ icon, ...otherProps }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogIn = () => {
       if (!email || !password) {
       
        Alert.alert('Welcome to Local Sales App');
        navigation.navigate('Account');
      } else {
         Alert.alert('Error in email or/and password');
      
       }
    };

  return (
    <Screen>
      <View style={styles.info}>
        <Image source={require('../img/Logo.png')} style={styles.logo}/>
        <Text style={styles.text}>Please enter both names and email.</Text>
      </View>
      <Formik 
          initialValues={{ email:'', password:''}}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
          >
            { ({ handleChange, handleSubmit, errors, name }) => (
              <>
              <View style={styles.container}>
                <FontAwesome name='envelope' size={24} color={colors.green} style={styles.icon} />
                
                <AppFormField
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={styles.textInput}
                  name='email'
                  icon='lock'
                  maxLength={45}
                  placeholder="Email"
                  textContentType='emailAddress'
                  clearButtonMode='always'
                  {...otherProps}
                />
              </View>
        
              <Text style={styles.errors}>{errors.email}</Text>
              <View style={styles.container}>
                <FontAwesome name="lock" size={24} color={colors.green} style={styles.icon} />

                <AppFormField
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={defaultStyles.textLogIn}
                  keyboardType='email-address'
                  maxLength={45}
                  placeholder="Password"
                  name='password'
                  secureTextEntry={true}
                  clearButtonMode='always'
                  {...otherProps}
                />
              </View>
              
              <Text style={styles.errors}>{errors.password}</Text>
              <AppButton  style={styles.btn}
                  title="LogIn" 
                  onPress={() => {
                      handleSubmit();
                      handleLogIn();
                    }}
                  />

              </>
            )}
      </Formik> 
      
    </Screen>
  );
}

const styles = StyleSheet.create({
  btn: {
    top: 22,
    width:'80%',
    marginLeft:42,
  },
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
  errors:{
    color:'red',
    marginLeft:42,
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
 
});