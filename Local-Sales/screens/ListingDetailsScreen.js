import React from 'react';
import { View, Image, StyleSheet, AppText } from 'react-native';




 function ListingDetailsScreen() {

    

  return (
    <View>
        <Image style={style.image} source={require('../app/assets/img/bicycle.jpg')} resizeMode='cover' />
        <AppText>Vintage bicycle</AppText>
        <AppText>£ 100</AppText>
    </View>
  )
}

const style= StyleSheet.create({
    image:{

        width: '100%',
        height: 300,
    }
})

export default ListingDetailsScreen;