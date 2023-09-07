import React from 'react';
import { Image, View, StyleSheet, Button, Alert, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import AppText from '../app/assets/components/AppText';
import colors from '../app/assets/config/colors';

function ViewImageScreen(props) {

    const navigation = useNavigation();

    const navigateToWelcomeScreens = () => {
        navigation.navigate('Home'); 
    };

    return (
        <View style={styles.container} >
        
        <TouchableOpacity  style={styles.closeIcon}  onPress={() => {navigateToWelcomeScreens('Home');console.log('button pressed'); }}>
            <AppText style={styles.btnText}><AntDesign name="leftcircleo" size={24} color='white' /></AppText>
        </TouchableOpacity>

        <View style={styles.openIcon}><AppText style={styles.btnText}><AntDesign name="rightcircleo" size={24} color='white' /></AppText></View>
        
        <View style={styles.imageContainer}>
            <Image source={require('../app/assets/gardenChairs.jpg')}
            style={styles.image}
            resizeMode='contain'
            />
            <Button 
               title="Add"
               onPress={() =>
               Alert.prompt('Add to troley', 'Your Items', text => console.log(text))}
               />
        </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.backgroundColor,
        flex: 1,
        
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // shadowColor:'grey',
        // shadowOffset:{width:-10, height:10},
    },
    image:{
        width:'70%',
        height:'70%',
       
        
    },
    closeIcon:{
        width:80,
        height:50,
        backgroundColor: colors.primary,
        position:'absolute',
        top:50,
        left:30,
        borderRadius:12,
        borderColor:colors.primary,
        borderWidth: 2,
    },
    openIcon:{
        width:80,
        height:50,
        backgroundColor:colors.secondary,
        position:'absolute',
        top:50,
        right:30,
        borderRadius:12,
        borderColor:colors.secondary,
        borderWidth: 2,
    },
    btnText:{
        left:22,
        top:12,
        
        
       
    }
    
})
export default ViewImageScreen;