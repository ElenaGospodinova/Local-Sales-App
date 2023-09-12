import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CardsBuilder from '../app/assets/components/CardsBuilder';

function Items() {
  const navigation = useNavigation();

  const navigateToWelcomeScreens = () => {
      navigation.navigate('WelcomeScreens');
      navigation.navigate('Sales Offers'); 
  };
  return (
    <View>
      <CardsBuilder 
        title="Hand made turkish rugs" 
        subTitle="£54.00 each" 
        image={require('../app/assets/img/rugs.jpg')} 
      />
       <CardsBuilder 
        title="Hand made turkish rugs" 
        subTitle="£54.00 each" 
        image={require('../app/assets/img/bicycle.jpg')} 
      />
      <CardsBuilder 
        title="Hand made turkish rugs" 
        subTitle="£54.00 each" 
        image={require('../app/assets/img/bedLamp.jpg')} 
      />
    </View>
  )
}
export default Items;