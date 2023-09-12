import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ViewImageScreen from './screens/ViewImageScreen'; 
import WelcomeScreens from './screens/WelcomeScreens';
import Items from './screens/Items';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
   
        <Stack.Screen name="Home" component={WelcomeScreens} />
        <Stack.Screen name="Sales Offers" component={ViewImageScreen} />
        <Stack.Screen name="Items" component={Items} />
        
      
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;
