import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import CardsBuilder from '../app/assets/components/CardsBuilder';

function Items() {
  const navigation = useNavigation();

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
    console.log(`Navigating to ${screenName}`);
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