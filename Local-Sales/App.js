import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewImageScreen from './screens/ViewImageScreen'; 
import WelcomeScreens from './screens/welcomeScreens'; 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome To Local Sales" >
        <Stack.Screen name="Home" component={WelcomeScreens} />
        <Stack.Screen name="ViewImage" component={ViewImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
