import React from 'react';
import { ImageBackground, StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SalesApp from '../app/assets/SalesApp.jpg';
import Logo from '../app/assets/Logo.png';

//rsf - shot cut 
function WelcomeScreens(props) {
    const navigation = useNavigation();

    const navigateToViewImage = () => {
        
        navigation.navigate('ViewImage'); 
    };

    
    return (
        <ImageBackground 
        source={SalesApp}
        style={styles.background}
        resizeMode='contain'
        >
 
            <TouchableOpacity 
                style={styles.loginButton}
                onPress={navigateToViewImage}
                fadeDuration={1000}
            >
                <Text style={styles.registerButton}>Go to Sales App</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton}><Text>Go to Todays Sales</Text></TouchableOpacity>
            <Image source={Logo} style={styles.logo}/>
        </ImageBackground>
    );
}


//rnss -  shortcut 
const styles = StyleSheet.create({
    background:{
        flex:1,
        height:'100%',
        width:'100%',
        justifyContent:'flex-end',
        flexWrap: 'wrap',
        zIndex: 1,
        position: 'relative',
    },
    loginButton:{
        width:'94%',
        height:'8%',
        top:-45,
        padding:15,
        backgroundColor:'#B799FF',
        
        justifyContent:'center',
        alignItems:'center',
        borderRadius:22,
        
        
    },
    registerButton:{
        width:'94%',
        height:'8%',
        bottom:142,
        backgroundColor:'#ACBCFF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:22,
        position:'absolute',
       
    },
    logo:{
      width: '16%',
      height: '10%',
      flex: -1,
      alignItems:'center',
      justifyContent:'center',
      zIndex: 3,
      position: 'absolute',
      borderRadius:12,
      top:10,
      left:10,
   
    },
})
export default WelcomeScreens;