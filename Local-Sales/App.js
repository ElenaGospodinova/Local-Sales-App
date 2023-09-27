import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ViewImageScreen from './screens/ViewImageScreen'; 
import WelcomeScreens from './screens/WelcomeScreens';
import Items from './screens/Items';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import MessagesScreen from './screens/MessagesScreen';
import AccountScreen from './screens/AccountScreen';
import InputScreen from './screens/InputScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={WelcomeScreens} />
          <Stack.Screen name="Sales Offers" component={ViewImageScreen} />
          <Stack.Screen name="Items" component={Items} />
          <Stack.Screen name="Listing" component={ListingDetailsScreen} />
          <Stack.Screen name="Messages" component={MessagesScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name="Input" component={InputScreen} />
        </Stack.Navigator>
      </NavigationContainer>
   </GestureHandlerRootView>
  );
}

export default App;
