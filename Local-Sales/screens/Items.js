import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CardsBuilder from '../app/assets/components/CardsBuilder';

function Items() {
  const navigation = useNavigation();

  const navigateToWelcomeScreens = () => {
      navigation.navigate('Home');
      navigation.navigate('Sales Offers'); 
  };
  return (
    
      <ScrollView contentContainerStyle={styles.container}>
      <CardsBuilder 
        title="Hand made turkish rugs" 
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
  )
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ensures that the ScrollView takes the full height of the screen
    padding: 16, // Add padding for spacing between CardsBuilder components
  },
});




export default Items;