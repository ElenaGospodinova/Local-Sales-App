import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CardsBuilder from '../app/assets/components/CardsBuilder';

function Items() {
  const navigation = useNavigation();

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.next} onPress={() => navigateTo('Listing')}>
        <AntDesign name="rightcircleo" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.back} onPress={() => navigateTo('Home')}>
        <AntDesign name="leftcircleo" size={24} color="black" />
      </TouchableOpacity>
      
      <CardsBuilder 
        title="Handmade Turkish rugs" 
        subTitle="£54.00 each" 
        image={require('../app/assets/img/rugs.jpg')} 
      />
      <CardsBuilder 
        title="Vintage bicycle" 
        subTitle="£24.00 each" 
        image={require('../app/assets/img/bicycle.jpg')} 
      />
      <CardsBuilder 
        title="Stylish bedside lamp" 
        subTitle="£20.00 each" 
        image={require('../app/assets/img/bedLamp.jpg')} 
      />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    marginTop:70,
  },
  next: {
    position: 'absolute',
    top: -33,
    right: 20,
  },
  back: {
    position: 'absolute',
    top: -33,
    left: 20,
  },
});

export default Items;
