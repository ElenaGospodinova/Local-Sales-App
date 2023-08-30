import React from 'react';
import { ImageBackground, StyleSheet, View, Image} from 'react-native';
import SalesApp from '../app/assets/SalesApp.jpg';
import Logo from '../app/assets/Logo.png';

//rsf - shot cut 
function WelcomeScreens(props) {
    return (
        <ImageBackground 
        source={SalesApp}
        style={styles.background}
        
        >
 
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
       
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
        width:'100%',
        height:70,
        backgroundColor:'#B799FF',
        
    },
    registerButton:{
        width:'100%',
        height:70,
        backgroundColor:'#ACBCFF',
    },
    logo:{
      width: '20%',
      height: '10%',
      flex: -1,
      alignItems:'center',
      justifyContent:'center',
      zIndex: 3,
      position: 'absolute',
      borderRadius:12,
      top:60,
   
    },
})
export default WelcomeScreens;