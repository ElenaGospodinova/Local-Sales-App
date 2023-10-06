import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Button,  Modal, Alert, TouchableOpacity, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from '../components/AppText';
import PickerItem from './PickerItem';


export default function AppPicker({ icon, items, placeholder, ...otherProps }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState(''); // Define the email state here

  return (
    <>
      <TouchableOpacity  onPress={() => setModalVisible(true)}>
        <Screen style={styles.picker}>
          <View style={styles.info}>
            <Text style={styles.text}>Please enter both names and email.</Text>
          </View>

          <View style={styles.container}>
            <MaterialCommunityIcons name="tag" size={24} color={colors.green} style={styles.icon} />
            <AppText style={styles.placeholder}>{placeholder}</AppText>
            <FontAwesomeIcon icon={faChevronDown} size={24} color={colors.green} style={styles.iconC} />
          </View>

          <View style={styles.container}>
            <Entypo name="email" size={24} color={colors.green} style={styles.icon} />
            <TextInput
              style={defaultStyles.textLogIn}
              onChangeText={(text) => setEmail(text)} // Update the email state
              keyboardType='email-address'
              maxLength={45}
              clearButtonMode='always'
              {...otherProps}
              value={email} // Set the value of the input field to the email state
            />
          </View>
        </Screen>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(false); // Update modal state directly without toggling
        }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <Screen >
            <Button title='Close'   onPress={() => setModalVisible(false)} />
            <FlatList 
                data={items}
                keyExtractor={(item) => item.value.toString()} 
                renderItem={({ item }) => (
                    <PickerItem  
                        label={item.label}
                        onPress={() => console.log(item)}
                    />
                )}
            />
          </Screen>
        </View>
      </Modal>
    </>
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
    marginVertical: 4,
    marginTop: -1,
  },
  info: {
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  iconC: {
    marginLeft: 170,
  },
  picker: {
    backgroundColor: colors.medium,
    width: '100%',
  },
  text: {
    color: colors.green,
    marginLeft: 25,
  },
  placeholder: {
    color: colors.medium, // Set a color that's visible on the background
  },
});
