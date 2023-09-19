import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../app/assets/config/colors';

function ListingDetailsScreen() {
  const navigation = useNavigation();

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View>
      <TouchableOpacity style={styles.next} onPress={() => navigateTo('Items')}>
        <AntDesign name="rightcircleo" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.back} onPress={() => navigateTo('Home')}>
        <AntDesign name="leftcircleo" size={24} color="black" />
      </TouchableOpacity>
      <Image style={styles.image} source={require('../app/assets/img/bicycle.jpg')} resizeMode='cover' />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Vintage bicycle</Text>
        <Text style={styles.price}>£ 100</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
    flex:1,
  },
  image: {
    marginTop:80,
    width: '100%',
    height: 300,
    borderRadius:20,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  next: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  back: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default ListingDetailsScreen;
