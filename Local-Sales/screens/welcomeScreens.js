import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import colors from '../app/assets/config/colors';
import Heading from '../app/assets/components/Heading';
import AppButton from '../app/assets/components/AppButton';
import WelcomeButtonGo from '../app/assets/components/WelcomeButtonGo';


//rsf - shot cut 
function WelcomeScreens(props) {
    const navigation = useNavigation();

    const navigateItems = () => {
        navigation.navigate('Sales Offers'); 
        navigation.navigate('Items');
    };

    
    return (
        <View style={{flex: 1}}>
            
                <View style={styles.containerBackground}>
                <ImageBackground 
                source={require('../app/assets/SalesApp.jpg')}
                style={styles.background}
                resizeMode='cover'
                >
                    <Heading style={styles.tagline}>Explore Your Local Sales</Heading>
                     <AppButton title='LogIn' onPress={() => navigation.navigate('Sales Offers')} />
                     <WelcomeButtonGo title='Today`s Sales' onPress={() => navigation.navigate('Sales Offers')} color='green'/>
                     <WelcomeButtonGo title="All Local Sales" onPress={() => navigation.navigate('Items')} color='primary'/>
                    
                    <Image source={require('../app/assets/Logo.png')} style={styles.logo}/>
                </ImageBackground>
                
            </View>
    </View>
    );
}


//rnss -  shortcut 
const styles = StyleSheet.create({
    background:{
        flex:1,
        height:'80%',
        width:'100%',
        justifyContent:'flex-end',
        flexWrap: 'wrap',
        zIndex: 1,
        position: 'absolute',
    },
    containerBackground:{
        flex:1,
        backgroundColor:colors.color,
       
    },
  
    logo:{
      width: '16%',
      height: '9%',
      padding:12,
      flex: -1,
      alignItems:'center',
      justifyContent:'center',
      zIndex: 3,
      position: 'absolute',
      borderRadius:12,
      top:24,
      left:10,
   
    },
    tagline:{
        fontSize: 28,
        fontWeight:'700',
        justifyContent:'center',
        alignItems:'center',
        left: 34,
        marginTop: 22,
       
    },
})
export default WelcomeScreens;