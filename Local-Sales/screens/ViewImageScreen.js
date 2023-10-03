import React from 'react';
import { Image, View, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import colors from '../app/assets/config/colors';
import AppPicker from '../app/assets/components/AppPicker';


function ViewImageScreen(props, ...otherprops) {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
    console.log(`Navigating to ${screenName}`);
  };

  return (
    
    <View style={styles.container}>
     <TouchableOpacity style={styles.next} onPress={() => navigateTo('Items')}>
        <AntDesign name="rightcircleo" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.back} onPress={() => navigateTo('Home')}>
        <AntDesign name="leftcircleo" size={30} color="black" />
      </TouchableOpacity>
     
      
      <View style={styles.imageContainer}>
        <Image
          source={require('../app/assets/img/gardenChairs.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
        <Button
          title="Add"
          onPress={() =>
            Alert.prompt('Add to trolley', 'Your Items', (text) =>
              console.log(text)
            )
          }
        />
        <View style={{width:'70%'}}>
        <AppPicker placeholder="Category" icon='category' name='chavron-down' />
       
        </View>
      </View>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color,
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '60%',
    height: '50%',
    marginTop:-122,
  },
  back: {
    width: 50,
    height: 30,
    backgroundColor: colors.color,
    position: 'absolute',
    top: 50,
    left: 30,
    // borderRadius: 22,
    // borderColor: colors.primary,
    // borderWidth: 2,
    zIndex: 12,
  },
  next: {
    width: 50,
    height: 30,
    backgroundColor: colors.color,
    position: 'absolute',
    top: 50,
    right: 34,
    // borderRadius: 22,
    // borderColor: colors.secondary,
    // borderWidth: 2,
    zIndex: 12, 
  },
});

export default ViewImageScreen;
