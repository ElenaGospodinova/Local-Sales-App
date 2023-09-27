import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../app/assets/config/colors';

import ListItem from '../app/assets/components/ListItem';

function ListingDetailsScreen(props) {
  const navigation = useNavigation();

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.screen}>

      <TouchableOpacity style={styles.next} onPress={() => navigateTo('Messages')}>
        <AntDesign name="rightcircleo" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.back} onPress={() => navigateTo('Home')}>
        <AntDesign name="leftcircleo" size={24} color="black" />
      </TouchableOpacity>

      <Image style={styles.image} source={require('../app/assets/img/bicycle.jpg')} resizeMode='contain' />
      
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Vintage bicycle</Text>
        <Text style={styles.price}>£ 100</Text>

        <ListItem 
          image={require("../app/assets/img/stefan-stefancik.jpg")} 
          title='Stefan Stefancik'
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    backgroundColor:colors.gradient,

  },
  detailsContainer: {
    padding: 20,
    height:'100%',
    backgroundColor:colors.lightGray,

  },
  image: {
    marginTop:80,
    width: '100%',
    height: 300,
    

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    color: colors.green,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,

  },
  next: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex:12,
  },
  back: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default ListingDetailsScreen;
